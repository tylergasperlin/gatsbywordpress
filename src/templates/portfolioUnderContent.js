import React from "react"
import Layout from "../components/layout"
import PortfolioItems from '../components/PortfolioItems'

/**
 * This template is mapped via gatsby-node
 * @param {*} param0
 * @returns
 */
const PortfolioUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
      <PortfolioItems/>
    </Layout>
  )
}

export default PortfolioUnderContent
