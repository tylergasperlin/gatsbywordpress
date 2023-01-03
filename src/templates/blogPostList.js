import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import styles from "../templates/blogPostList.module.css"

const BlogPostList = ({ pageContext }) => {
  return (
    <Layout>
      {pageContext.posts.map(post => (
        <div key={post.node.wordpresss_id}>
          <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
          <small> {post.node.date}</small>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          <div>
            <Link to={`/post/${post.node.slug}`}>Read More</Link>
          </div>
        </div>
      ))}
      <div className={styles.paginationButtons}>
        {Array.from({ length: pageContext.numberOfPages }).map(
          (page, index) => (
            <div
              key={index}
              className={`${styles.pageNumberWraper} ${
                index + 1 === pageContext.currentPage
                  ? styles.pageNumberSelected
                  : styles.pageNumberUnselected
              }`}
            >
              <Link
                className={styles.pageNumber}
                to={index === 0 ? "/blog" : `/blog/${index + 1}`}
              >
                {index + 1}
              </Link>
            </div>
          )
        )}
      </div>
    </Layout>
  )
}

export default BlogPostList
