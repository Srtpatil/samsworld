import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./customMarkdown.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from 'react';


export const CustomCode = (props) => {
    const { inline, children, className, node, ...rest } = props
    const [copyOk, setCopyOk] = useState(false);
    const iconColor = copyOk ? "var(--green)" : "var(--lightest-slate)";
    const icon = copyOk ? faCheck : faCopy;
    const match = /language-(\w+)/.exec(className || '')
    const lang = match ? match[1] : "vim";

    const copyCodeToClipboard = () => {
        const code = String(children).replace(/\n$/, '')
        navigator.clipboard.writeText(code);
        setCopyOk(true);
        setTimeout(() => {
            setCopyOk(false);
        }, 500);
    }

    return match ? (
        <>
            <button className="code-copy-button" title="Copy code" onClick={copyCodeToClipboard}>
                <FontAwesomeIcon icon={icon} color={iconColor} />
            </button>
            <SyntaxHighlighter
                {...rest}
                PreTag={"div"}
                language={lang}
                style={coldarkDark}
                wrapLines={true}
                children={String(children).replace(/\n$/, '')}
                codeTagProps={{
                    style: {
                        backgroundColor: "transparent",
                    }
                }}
                customStyle={{
                    background: "var(--light-navy)",
                    fontSize: "var(--fz-sm)",
                    margin: "12px 0px 24px 0px",
                    borderRadius: "6px",
                }}
            /></>
    ) : (
        <code {...rest} className="inline-code">
            {children}
        </code>
    )
}

export const CustomHeader = ({ level, children }) => {
    const Header = `h${level}`

    return <Header className={Header}>{children}</Header>
}