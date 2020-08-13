import React from 'react'

import Header from '../../containers/Header/Header'
import Footer from '../../components/Footer/Footer'

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
