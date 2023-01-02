import React from "react"
import Layout from "../components/layout"
import styles from "../templates/portfolio.module.css"

/**
 * This template is mapped via gatsby-node
 * @param {*} param0
 * @returns
 */
const Portfolio = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <strong>Website Url: </strong>
      <a href={pageContext.acf.portfolio_url} target='_blank' rel="noopener noreferrer">
        {pageContext.acf.portfolio_url}
      </a>
      <img
        src={pageContext.featured_media.source_url}
        className={styles.featureImage}
        alt="postPicture"
      />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default Portfolio
