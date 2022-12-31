import { Link, StaticQuery } from "gatsby"
import React from "react"
import styles from "../components/mainMenu.module.css"
import SiteInfo from "./SiteInfo"
import { graphql } from 'gatsby'

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(filter: { name: { eq: "main" } }) {
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
        <div className={styles.menuContainer}>
          <div className={styles.mainMenuInner}>
            <SiteInfo />
            {/* {console.log(props.allWordpressWpApiMenusMenusItems.edges)} */}
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <Link
                  className={styles.menuItem}
                  to={`/${item.object_slug}`}
                  key={item.title}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    />
  )
}

export default MainMenu
