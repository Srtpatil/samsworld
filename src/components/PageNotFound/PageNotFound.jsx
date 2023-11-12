import React from 'react'
import "./PageNotFound.scss"
import Page from '../Layout/Page/Page'
import Content from '../Layout/Content/Content'
import Navbar from '../Navbar/Navbar'

const PageNotFound = () => {
    return (
        <Page>
            <Navbar />
            <Content>
                <div style={{
                    marginTop: "140px",
                    height: "calc(100vh - 210px)",
                    marginBottom: "70px",
                    display: "flex",
                    justifyContent: "center",
                    background: "transparent",
                    alignItems: "center"
                }}>
                    <h1 style={{ color: "var(--green)" }}>Not Found ...</h1>
                </div>
            </Content>
        </Page>
    )
}

export default PageNotFound
