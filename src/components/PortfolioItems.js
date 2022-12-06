import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

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
      render={props =>
        props.allWordpressWpPortfolio.edges.map(portfolioItem => (
          <div key={portfolioItem.id}>
            <h2>{portfolioItem.node.title}</h2>
            <img
              src={portfolioItem.node.featured_media.source_url}
              alt={"Thumbnail"}
            />
            <div
              dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }}
            ></div>
            <Link to={`/portfolio/${portfolioItem.node.slug}`}>Read More</Link>
          </div>
        ))
      }
    />
  )
}

export default PortfolioItems
