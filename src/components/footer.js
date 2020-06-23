import React from 'react'
import { Link } from 'gatsby'

import {
  Box,
  Flex,
  Heading,
  Divider,
  Text,
  Button,
  List,
  ListItem,
  Link as ChakraLink,
  Image,
} from '@chakra-ui/core'

import Facebook from '../../resources/icons/facebook.svg'
import Instagram from '../../resources/icons/instagram.svg'
import Pinterest from '../../resources/icons/pinterest.svg'
import Whatsapp from '../../resources/icons/whatsapp.svg'

const FooterHeading = ({ children }) => (
  <Heading as='h3' size='sm' fontWeight='semibold' textTransform='uppercase'>
    {children}
  </Heading>
)

const FooterDivider = () => <Divider w={8} my={4} borderColor='gray.50' />

const FooterList = ({ children }) => (
  <ListItem my={2} _hover={{ color: 'purple.500' }}>
    {children}
  </ListItem>
)

const FooterLink = ({ children }) => (
  <ChakraLink
    isExternal
    rel='noopener noreferrer'
    _hover={{ color: 'purple.500' }}
  >
    {children}
  </ChakraLink>
)

const Footer = () => {
  return (
    <>
      <Flex
        as='footer'
        py={20}
        direction={['column', null, null, 'row']}
        justify='center'
        align='center'
        bg='gray.600'
        color='gray.50'
        zIndex='999'
        overflowX='hidden'
      >
        <Flex
          maxWidth={[null, null, null, '1024px']}
          w='100%'
          h='auto'
          mx='auto'
          direction={['column', null, null, 'row']}
          justify={['center', null, null, 'space-between']}
          align='start'
        >
          <Flex w={['100%', null, null, '50%']} justify='start' align='start'>
            <Flex
              mx={['6', null, null, '6']}
              my={['6', null, null, '0']}
              direction='column'
              justify='start'
              align='start'
            >
              <Box>
                <FooterHeading>Navigation</FooterHeading>
                <FooterDivider />
              </Box>
              <List>
                <Link to='/'>
                  <FooterList>Home</FooterList>
                </Link>
                <Link to='/catalog'>
                  <FooterList>Catalog</FooterList>
                </Link>
                <Link to='/about'>
                  <FooterList>About</FooterList>
                </Link>
                <Link to='/gallery'>
                  <FooterList>Gallery</FooterList>
                </Link>
                <Link to='/contact'>
                  <FooterList>Contact</FooterList>
                </Link>
              </List>
            </Flex>
            <Flex
              ml={3}
              my={['6', null, null, '0']}
              direction='column'
              justify='center'
              align='center'
            >
              <Box>
                <FooterHeading>Shop Policies</FooterHeading>
                <FooterDivider />
              </Box>
              <List spacing={3}>
                <Link to='/shipping-policy'>
                  <FooterList>Shipping Policy</FooterList>
                </Link>
                <Link to='/privacyPolicy'>
                  <FooterList>Privacy Policy</FooterList>
                </Link>
                <Link to='/refundPolicy'>
                  <FooterList>Refund Policy</FooterList>
                </Link>
                <Link to='/termsOfService'>
                  <FooterList>Terms of Service</FooterList>
                </Link>
              </List>
            </Flex>
          </Flex>
          <Flex
            w={['100%', null, null, '50%']}
            ml={['6', null, null, null]}
            direction='column'
            justify='start'
            align='start'
          >
            <Box>
              <FooterHeading>About Us</FooterHeading>
              <FooterDivider />
            </Box>
            <Text w='80%' my={2}>
              Genesis Style is a South African Designer label for women, proudly
              manufactured in Cape Town. The label is focused on empowering
              women, using fashion and design to draw people to Jesus Christ and
              allowing women from different backgrounds to experience modesty in
              fashionable style. <br />
              <Link to='/about'>
                <Button
                  mt={1}
                  size='xs'
                  color='white'
                  variant='link'
                  fontWeight='semibold'
                  textTransform='uppercase'
                  _hover={{ color: 'purple.500', textDecoration: 'underline' }}
                  _focus={{ outline: 'none' }}
                >
                  Read more
                </Button>
              </Link>
            </Text>
            <Flex mt={8} justify='center' align='center'>
              <FooterLink href='#'>
                <Image src={Facebook} mr={6} size='16px' />
              </FooterLink>
              <FooterLink href='#'>
                <Image src={Instagram} mr={6} size='16px' />
              </FooterLink>
              <FooterLink href='#'>
                <Image src={Pinterest} mr={6} size='16px' />
              </FooterLink>
              <FooterLink href='#'>
                <Image src={Whatsapp} size='16px' />
              </FooterLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box bg='gray.50' color='gray.900'>
        <Text my='1' fontSize='xs' textAlign='center'>
          Copyright ©{' '}
          <Text as='span' fontWeight='semibold' textTransform='uppercase'>
            Genesis Style
          </Text>{' '}
          {new Date().getFullYear()}. All rights reserved.
        </Text>
        <Text my='1' fontSize='xs' textAlign='center'>
          JAMstack Website by{' '}
          <FooterLink href='https://chaddwebdesign.co.za'>
            <Button
              size='xs'
              color='green.500'
              variant='link'
              fontWeight='semibold'
              textTransform='uppercase'
              _hover={{ color: 'green.300' }}
              _focus={{ outline: 'none' }}
            >
              Chadd Web Design
            </Button>
          </FooterLink>
        </Text>
      </Box>
    </>
  )
}

export default Footer
