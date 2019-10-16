import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Template = ({data, location}) => {
    const { markdownRemark: post } = data;
    const { frontmatter, html } = post;

    return (
        <div>
            <Helmet title={`${frontmatter.title} - My Blog`} />
            <div>
                <h1>{frontmatter.title}</h1>
                <h3>{frontmatter.date}</h3>
                <div dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
      }
    }
  }
`

export default Template;