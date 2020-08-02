import React from 'react'

import { Box, Divider, Heading, Text } from '@chakra-ui/core'

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
