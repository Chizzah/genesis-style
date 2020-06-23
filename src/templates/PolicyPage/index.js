import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/seo'
import { Box, Flex, Heading, Divider } from '@chakra-ui/core'

const PolicyPage = ({ data }) => {
  const policy = data.shopifyShopPolicy
  return (
    <>
      <SEO title={policy.title} description={policy.body} />
      <Box as='section' maxWidth='640px' minHeight='100vh' mx='auto'>
        <Flex my={12} direction='column' justify='center' align='center'>
          <Heading
            as='h1'
            mb={6}
            size='2xl'
            fontWeight='semibold'
            textTransform='uppercase'
          >
            {policy.title}
          </Heading>
          <Divider w={16} borderColor='gray.900' />
        </Flex>
        <Box mx={3} mb={6} dangerouslySetInnerHTML={{ __html: policy.body }} />
      </Box>
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    shopifyShopPolicy(type: { eq: $id }) {
      id
      type
      title
      body
    }
  }
`

export default PolicyPage
