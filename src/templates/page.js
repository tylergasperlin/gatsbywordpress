import React from "react"
import Layout from "../components/layout"

/**
 * This template is mapped via gatsby-node
 * @param {*} param0
 * @returns
 */
const Page = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </Layout>
  )
}

export default Page
