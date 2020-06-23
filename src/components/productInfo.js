import React from 'react'

import { Heading, Text } from '@chakra-ui/core'

const ProductInfo = ({ product }) => {
  return (
    <>
      <hr />
      <Heading fontSize={['sm', null, null, 'lg']}>{product.title}</Heading>
      <Text mb={3} fontSize={['xs', null, null, 'md']} fontStyle='italic'>
        {product.variants[0].title}
      </Text>
      <Text mb={6} fontSize={['xl', null, null, '2xl']} fontWeight='semibold'>
        R{product.variants[0].price}
      </Text>
    </>
  )
}

export default ProductInfo
