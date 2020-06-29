import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box, Flex, Image, Button } from '@chakra-ui/core'

function Slider() {
  const [index, setIndex] = useState(0)
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
  //Minus 1 for array offset from 0
  const length = data.allCloudinaryMedia.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = data.allCloudinaryMedia.edges[index]
  return (
    <Box maxW='1280px' mx='auto' py={[8, null, null, 16]}>
      <Flex direction='column' justify='center' align='center'>
        <Box>
          <Image w='900px' h='600px' objectFit='contain' src={node.secure_url} />
        </Box>
        <Flex w={['50%', null, null, '20%']} h='auto' mt={30} justify='space-between' align='center'>
          <Button w={[20, null, null, 24]} p={3} size={['md', null, null, 'xl']} bg='purple.500' color='gray.50' _hover={{ bg: 'purple.300' }} _focus={{ outline: 'none' }} onClick={() => handlePrevious()}>Previous</Button>
          <Button w={[20, null, null, 24]} p={3} size={['md', null, null, 'xl']} bg='purple.500' color='gray.50' _hover={{ bg: 'purple.300' }} _focus={{ outline: 'none' }} onClick={() => handleNext()}>Next</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Slider
