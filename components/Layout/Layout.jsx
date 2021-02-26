import React from 'react'
import react, { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import BreadCrumbs from './Breadcrumbs'

const Layout = ({ modalHandler, children, footer, footerHandler }) => {

  return (
    <>
      <Header modalHandler={modalHandler} />
      {useRouter().pathname !== "/"
      && (
          <BreadCrumbs />
      )}
      {children}
      <Footer footer={footer} footerHandler={footerHandler} />
    </>
  )
}

export default Layout
