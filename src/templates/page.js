import React from 'react'
import Layout from '../components/layout'
import SiteLogo from '../components/SiteLogo'

export default ({pageContext}) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{__html: pageContext.title}} />
      <SiteLogo />
    <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);
