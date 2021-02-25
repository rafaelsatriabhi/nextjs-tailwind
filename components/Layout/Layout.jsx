import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ modalHandler, children, footer, footerHandler }) => {
    return (
        <>
            <Header modalHandler={modalHandler} />
            {children}
            <Footer footer={footer} footerHandler={footerHandler} />
        </>
    )
}

export default Layout
