import React from 'react'

import SEO from '../components/seo'
import { Box, Flex, Heading, Divider, Text } from '@chakra-ui/core'

const AboutPage = () => {
  return (
    <>
      <SEO
        title='About Genesis Style'
        description='The label is focused on empowering women,
          using fashion and design to draw people to Jesus Christ.'
      />
      <Box as='section' maxWidth='640px' minHeight='100vh' mx='auto' py={[8, null, null, 16]}>
        <Flex direction='column' justify='center' align='center'>
          <Heading
            as='h1'
            mb={6}
            size='2xl'
            fontWeight='semibold'
            textTransform='uppercase'
          >
            About Us
          </Heading>
          <Divider w={16} borderColor='gray.900' />
        </Flex>
        <Box py={[4, null, null, 8]}>
        <Text mx={6} mb={3}>
          Genesis Style is a South African Designer label for women, proudly
          manufactured in Cape Town. The label is focused on empowering women,
          using fashion and design to draw people to Jesus Christ and allowing
          women from different backgrounds to experience modesty in fashionable
          style.
        </Text>
        <Text mx={6} mb={3}>
          The way we choose to clothe ourselves acts as a window into our
          character and what we intend for others to see. More than that,
          clothing ourselves modestly glorifies God. No matter what we prefer or
          how the world chooses to label us, choosing modesty sets us apart and
          draws people to more than just our bodies or physical nature. This is
          exactly the message behind the Genesis Style brand. It is possible to
          have a ‘passion for fashion’ and modestly so.
        </Text>
        <Text mx={6} mb={3}>
          The brand is one that empowers women from all walks of life, with all
          kinds of stories to walk in the victory of God, fully clothed in His
          righteousness. This means considering all aspects of our lives from
          our passion to our fashion.
        </Text>
        <Text mx={6} mb={3}>Modesty is a choice, we intentionally make daily.</Text>
        </Box>
      </Box>
    </>
  )
}

export default AboutPage
