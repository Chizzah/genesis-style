import React from 'react'
import { graphql } from 'gatsby'
import ProductList from '../components/productList'

import SEO from '../components/seo'

const CataloguePage = ({ data }) => {
  return (
    <>
      <SEO
        title='Genesis Style Product Catalog'
        description='Designer masks, dresses and more. Proudly manufactured in Cape Town.'
      />
      <ProductList data={data} />
    </>
  )
}

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          createdAt(fromNow: true)
          publishedAt
          productType
          vendor
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            originalSrc
            id
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 900
                  srcSetBreakpoints: [480, 640]
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`

export default CataloguePage
