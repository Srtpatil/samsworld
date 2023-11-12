import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { CustomCode } from '../customMarkdown';
import remarkGfm from 'remark-gfm'
import "./Post.scss"
import Content from '../../Layout/Content/Content';
import Page from '../../Layout/Page/Page';
import Navbar from '../../Navbar/Navbar';
import List from '../../List/List';
import SectionHeader from '../../SectionHeader/SectionHeader';
import Footer from '../../Footer/Footer';
import { useParams } from 'react-router-dom';
import PageNotFound from "../../PageNotFound/PageNotFound"
import PageLoading from '../../PageLoading/PageLoading';
import PostHeader from '../PostHeader/PostHeader';

const Post = ({ summaryData }) => {

    const { slug } = useParams();

    const [post, setPost] = useState();
    const [postNotFound, setPostNotFound] = useState(false);

    const markdownPlugins = [remarkGfm]

    const findPost = (postSlug) => {
        const fileMap = summaryData.fileMap
        for (let key of Object.keys(fileMap)) {
            if (fileMap[key].slug == postSlug) {
                return key
            }
        }

        return null
    }

    const loadPostJSON = async (postPath) => {
        postPath = postPath.replace("public/", "");
        const post = await fetch(`/${postPath}`);
        return await post.json()
    }

    useEffect(() => {
        const postPath = findPost(slug)
        if (!postPath) {
            setPostNotFound(true);
            return;
        }

        loadPostJSON(postPath).then((post) => {
            setPost(post);
        }).catch(_ => {
            setPostNotFound(true)
        })
    }, [])


    if (postNotFound || (post && !post.public)) {
        return <PageNotFound />
    }

    return (
        <Page>
            <PageLoading selfLoading={!post || postNotFound} onlyLoad={true} />
            <Navbar />
            <Content>
                {post ? (<div className="post-container">
                    <PostHeader title={post.title} secondary={post.date} />
                    <Markdown
                        remarkPlugins={markdownPlugins}
                        components={{
                            code: CustomCode,
                            img: ({ src, alt }) => {
                                return (
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "column", marginBottom: "4rem", marginTop: "1rem" }}>
                                        <img src={src} alt={alt} style={{ maxWidth: '100%', marginTop: '1rem', marginBottom: '1rem', borderRadius: "10px" }} />
                                        <p style={{ textAlign: "center", color: "var(--dark-slate)" }}>{alt}</p>
                                    </div>
                                )
                            },
                            h2(props) {
                                return <SectionHeader title={props.children} align={"bottom"} />
                            },
                            li(props) {
                                return <List items={[props.children]} />
                            },
                            blockquote: ({ children }) => (
                                <blockquote className='blockquote'>
                                    {children}
                                </blockquote>
                            ),
                            p(props) {
                                return <p style={{ fontSize: "var(--fz-lg)", margin: "1rem 0px", lineHeight: "1.4" }}>{props.children}</p>
                            },
                            a(props) {
                                return <a href={props.href} className='markdown-link'>{props.children}</a>

                            },
                            table(props) {
                                return <table className='github-table'>{props.children}</table>
                            },
                            th(props) {
                                return <th className='github-th' style={{ ...props.style }}>{props.children}</th>
                            },
                            td(props) {
                                return <td className='github-td' style={{ ...props.style }}>{props.children}</td>
                            },
                            hr: () => <hr style={{ color: 'var(--lightest-navy)' }} />
                        }}
                    >{post.bodyContent}</Markdown>
                    {/* <div style={{ backgroundColor: "var(--lightest-navy)", height: "2px", width: "100%", marginTop: "8rem" }}></div> */}
                </div>) : null}
            </Content>
            <Footer />
        </Page>
    )
}

export default Post
