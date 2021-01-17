import React from "react"
import { graphql } from "gatsby"
const Page = ({ location, data }) => {
  const canonicalUrl = data.site.siteMetadata.siteURL + location.pathname
  return <div>The URL of this page is {canonicalUrl}</div>
}
export default Page
export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`