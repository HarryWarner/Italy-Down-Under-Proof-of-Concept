import React from "react"
// import Layout from "../components/layout"


const test = ({ data }) => {
  const posts = data.allSanityStory.nodes.map(post => (
      <h2>{post.title}</h2>
   
  ))


  return (
    <div>
      <h1>My blog posts:</h1>
      {posts}
    </div>
  )
}

export default test

export const pageQuery = graphql`
  query {
    allSanityStory {
        nodes {
          title
        }
      }
    }
`