import React from 'react'

import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core'
import { Section, Spacer, SectionText } from '../utils/styles'
import Form from '../components/contactForm'
import Phone from '../../resources/icons/phone.svg'
import Whatsapp from '../../resources/icons/whatsapp.svg'

const ContactPage = () => {
  return (
    <Box bg='gray.50'>
      <Section>
        <Flex direction='column' justify='center' align='center'>
          <Heading as='h1' size='lg' fontSize={['lg', null, null, '2xl']}>
            Get in touch!
          </Heading>
          <Spacer />
          <SectionText>
            If you have a general query or need support. Please don't hesitate
            to contact us using the methods below:
          </SectionText>
          <Flex
            mt={8}
            direction={['column', null, null, 'row']}
            justify='center'
            align='start'
          >
            <Flex
              mr={6}
              mb={[3, null, null, null]}
              justify='center'
              align='center'
            >
              <Image src={Phone} alt='phone icon' mr={1} size='16px' />
              <Text>
                <strong>Office:</strong> 0871490566
              </Text>
            </Flex>
            <Flex justify='center' align='center'>
              <Image
                src={Whatsapp}
                alt='whatsapp icon'
                size='16px'
                mr={1}
                bg='green.500'
                rounded='full'
              />
              <Text>
                <strong>Whatsapp:</strong> 0671287183
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section>
      <Form />
    </Box>
  )
}

export default ContactPage
