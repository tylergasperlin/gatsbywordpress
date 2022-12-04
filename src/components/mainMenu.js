import { Link, StaticQuery } from "gatsby"
import React from "react"

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
      {
        allWordpressWpApiMenusMenusItems(filter: {
          name: {
            eq: "main"
          }
        }) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
      
      `}
      render={props => (
        <div>
            {/* {console.log(props.allWordpressWpApiMenusMenusItems.edges)} */}
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
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
