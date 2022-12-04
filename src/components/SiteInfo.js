import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from '../components/SiteInfo.module.css'

const SiteInfo = () => {
  return (
    <StaticQuery
      query={graphql`
        {
            allWordpressSiteMetadata {
              edges {
                node {
                  name
                  description
                }
              }
            }
          }
          
        `}
      render={props => (
        <div className={styles.metaDataContainer}>
          <div>{props.allWordpressSiteMetadata.edges[0].node.name}</div>
          <div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
        </div>
      )}
    />
  )
}

export default SiteInfo
