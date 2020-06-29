import React from 'react'
import { Link } from 'gatsby' /* eslint-disable */
import Img from 'gatsby-image'

import {Box, Text} from '@chakra-ui/core'

const ProductBox = (props) => {
  const product = props.product
  return (
    <Box className='box productBox' key={product.node.title}>
      <Link to={`/product/${product.node.handle}`}>
        <Img
          fluid={product.node.images[0].localFile.childImageSharp.fluid}
          key={product.node.images[0].localFile.id}
          alt={product.node.title}
        />
        <Text mt={3} fontSize={['xs', null, null, 'sm']} fontWeight='semibold'>
          {product.node.title}
        </Text>
        <Text>
          R{product.node.variants[0].price}
        </Text>
      </Link>
    </Box>
  )
}

export default ProductBox
