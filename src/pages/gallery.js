import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box, Flex, PseudoBox, Image } from '@chakra-ui/core'

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImages {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
          }
        }
      }
    }
  `)
  const clImages = data.allCloudinaryMedia.edges

  return (
    <Box bg='purple.50' py={16}>
      <Flex
        maxW='1300px'
        h='auto'
        mx='auto'
        wrap='wrap'
        justify='start'
        align='center'
      >
        {clImages.map((image, index) => (
          <PseudoBox mx={16} my={8} key={`${index}-cl`} _hover={{ opacity: '0.8', cursor: 'pointer' }}>
            <Image
              w='300px'
              h='300px'
              src={image.node.secure_url}
              objectFit='cover'
              rounded='lg'
              bg='purple.100'
            />
          </PseudoBox>
        ))}
      </Flex>
    </Box>
  )
}

export default GalleryPage
