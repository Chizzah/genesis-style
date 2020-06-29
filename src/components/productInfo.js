import React from 'react'

import { Box, Heading, Text } from '@chakra-ui/core'

const ProductInfo = ({ product }) => {
  return (
    <>
      <hr />
      <Heading fontSize={['md', null, null, 'xl']}>{product.title}</Heading>
      <Box
        mt={6}
        key={`body`}
        id='content'
        className='content'
        dangerouslySetInnerHTML={{
          __html: product.descriptionHtml,
        }}
      />
      <Text mb={6} fontSize={['xl', null, null, '2xl']} fontWeight='semibold'>
        R{product.variants[0].price}
      </Text>
    </>
  )
}

export default ProductInfo
