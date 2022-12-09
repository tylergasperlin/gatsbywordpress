import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styles from "../components/portfolioItems.module.css"

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                slug
                content
                title
                excerpt
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div className={styles.portfolioWrapper}>
          {props.allWordpressWpPortfolio.edges.map(portfolioItem => (
            <div key={portfolioItem.id} className={styles.portfolioItem}>
              <h2>{portfolioItem.node.title}</h2>
              <img
                src={portfolioItem.node.featured_media.source_url}
                alt={"Thumbnail"}
                className={styles.portfolioImage}
              />
              <div
                dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
              ></div>
              <Link to={`/portfolio/${portfolioItem.node.slug}`}>
                Read More
              </Link>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default PortfolioItems
