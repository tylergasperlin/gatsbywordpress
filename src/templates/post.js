import React from 'react'

/**
 * This template is mapped via gatsby-node
 * @param {*} param0 
 * @returns 
 */
const Post = ({pageContext}) => {
  return (
    <div>
        <h1>
            {pageContext.title}
        </h1>
    </div>
  )
}

export default Post