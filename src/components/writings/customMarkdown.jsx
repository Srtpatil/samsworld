import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark, coldarkDark, gruvboxDark, materialDark, vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./customMarkdown.scss"


export const CustomCode = (props) => {
    const { inline, children, className, node, ...rest } = props
    const match = /language-(\w+)/.exec(className || '')
    const lang = match ? match[1] : "vim";

    return match ? (
        <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={lang}
            style={coldarkDark}
            wrapLines={true}
            codeTagProps={{
                style: {
                    backgroundColor: "transparent",
                }
            }}
            customStyle={{
                background: "var(--light-navy)",
                fontSize: "var(--fz-sm)",
                margin: "12px 0px 24px 0px",
                borderRadius: "6px"
            }}
            
        />) : (
        <code {...rest} className="inline-code">
            {children}
        </code>
    )
}

export const CustomHeader = ({level, children}) => {
    const Header = `h${level}`

    return <Header className={Header}>{children}</Header>
}