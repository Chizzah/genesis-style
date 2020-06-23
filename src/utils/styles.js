import React from 'react'

import { Box, Stack, Divider, Heading, Text } from '@chakra-ui/core'

// REUSABLE COMPONENTS

export const Section = ({ children }) => (
  <Box as='section' w='100%' h='auto' pt={16}>
    {children}
  </Box>
)

export const SectionTitle = ({ children }) => (
  <Heading
    fontSize={['lg', null, null, '2xl']}
    fontWeight='semibold'
    textTransform='uppercase'
  >
    {children}
  </Heading>
)

export const SectionText = ({ children }) => (
  <Text fontSize={['xs', null, null, 'md']} mx={[6, null, null, null]}>
    {children}
  </Text>
)

export const Spacer = () => (
  <Divider
    w={[12, null, null, 24]}
    my={4}
    border='2px'
    borderColor='gray.600'
  />
)

export const Tile = ({ children }) => (
  <Stack
    w='64'
    h='64'
    mx={[null, null, null, 12]}
    mb={[12, null, null, null]}
    p={6}
    spacing={6}
    direction='column'
    justify='center'
    align='center'
    shadow='xl'
  >
    {children}
  </Stack>
)

export const Card = ({ children }) => (
  <Box
    w={['280px', null, null, '400px']}
    minH={['280px', null, null, '400px']}
    mx={[null, null, null, 5]}
    my={[12, null, null, null]}
    p={5}
    shadow='lg'
    bg='white'
  >
    {children}
  </Box>
)
