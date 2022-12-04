import { Link, StaticQuery } from "gatsby"
import React from "react"

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems {
            nodes {
              items {
                title
                object_slug
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          {props.allWordpressWpApiMenusMenusItems.nodes[0].items.map(
            item => (
              <Link to={`/${item.object_slug}`} key={item.title}>{item.title}</Link>
            )
          )}
        </div>
      )}
    />
  )
}

export default MainMenu
