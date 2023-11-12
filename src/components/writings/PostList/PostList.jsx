import React, { useState } from 'react'
import "./PostList.scss"
import Page from '../../Layout/Page/Page'
import Content from '../../Layout/Content/Content'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import PostHeader from '../PostHeader/PostHeader'
import { ReactComponent as EmptyContentImage } from "../../../assets/empty_content.svg"
import { Link } from 'react-router-dom'
import PageLoading from '../../PageLoading/PageLoading'

const EmptyContent = ({ message }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px" }}>
            <EmptyContentImage style={{ maxHeight: "350px", maxWidth: "90%" }} />
            <p style={{ color: "var(--slate)", fontSize: "var(--fz-lg)" }}>{message}</p>
        </div>
    )
}

const sortPosts = (summaryData) => {
    console.log(summaryData)
    const formattedData = Object.keys(summaryData.fileMap).map((postKey) => {
        const dateObj = new Date(summaryData.fileMap[postKey].date);
        return { ...summaryData.fileMap[postKey], dateObj }
    })
    formattedData.sort((a, b) => b.dateObj - a.dateObj);
    return formattedData;
}

const PostList = ({ summaryData }) => {

    const [posts, _] = useState(sortPosts(summaryData))

    return (
        <Page>
            <PageLoading defaultTimeout={600} onlyLoad={true} />
            <Navbar />
            <Content>
                <div className="post-list-container">
                    <PostHeader title={"Occasionally I might write something"} secondary={"\" Fear is the mind killer"} />
                    {posts.length == 0 ? <EmptyContent message="The Lazy Person has not written anything" /> : null}
                    {posts.map((post, idx) => {
                        return (<PostItem post={post} key={idx} />)
                    })}
                </div>
            </Content>
            <Footer />
        </Page>
    )
}


const PostItem = ({ post }) => {
    if (!post.public) {
        return null
    }
    return (
        <div className="post-list-item">
            <Link to={`/writings/${post.slug}`} className="post-list-item-link">
                <div style={{ padding: "10px" }}>
                    <h2>
                        {post.title}<span>.</span>
                    </h2>
                    <p>{post.description}</p>
                    <time>{post.date}</time>
                </div>
            </Link>
        </div>
    )
}

export default PostList;