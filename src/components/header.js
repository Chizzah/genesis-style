import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'gatsby' /* eslint-disable */
import PropTypes from 'prop-types'

import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/core'
import Logo from '../../resources/genesis-style-32x32.png'
import Menu from '../../resources/icons/menu.svg'
import Search from '../../resources/icons/search.svg'
import User from '../../resources/icons/user.svg'
import Cart from '../../resources/icons/cart.svg'
import StoreContext from '../context/store'

const countQuantity = (lineItems) => {
  let quantity = 0

  lineItems.forEach((item) => {
    quantity = quantity + item.quantity
  })
  return quantity
}

const MenuItems = ({ children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display='block'
    fontSize='xs'
    fontWeight='semibold'
    textTransform='uppercase'
  >
    {children}
  </Text>
)

const Header = (props) => {
  const context = useContext(StoreContext)
  const { checkout } = context
  const [quantity, setQuantity] = useState(
    countQuantity(checkout ? checkout.lineItems : [])
  )
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    setQuantity(countQuantity(checkout ? checkout.lineItems : []))
  }, [checkout])

  const handleToggle = () => setShow(!show)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        w='100%'
        h='auto'
        py={1}
        bg='black'
        color='gray.50'
        textAlign='center'
      >
        <Text fontSize={['xs', null, null, 'sm']}>
          Free delivery for orders over R1,000.
        </Text>
      </Box>
      <Flex
        as='nav'
        maxW='1280px'
        mx='auto'
        align='center'
        justify='space-between'
        wrap='wrap'
        padding='1rem'
        color='gray.900'
        {...props}
      >
        <Flex
          align='center'
          mr={{ md: '5' }}
          width={{ base: '100%', md: 'auto' }}
          justifyContent={{ base: 'space-between', md: 'flex-start' }}
        >
          <Link to='/'>
            <Flex justify='center' align='center'>
              <Image src={Logo} alt='Genesis Style logo' />
              <Heading
                as='h1'
                ml={1}
                size='lg'
                letterSpacing={'-.1rem'}
                textTransform='uppercase'
                fontWeight='semibold'
              >
                Genesis Style
              </Heading>
            </Flex>
          </Link>
          <Image
            src={Menu}
            alt='menu icon'
            size='16px'
            display={{ sm: 'block', md: 'none' }}
            onClick={handleToggle}
          />
        </Flex>

        <Box
          borderColor='#52eb34'
          display={{ base: show ? 'block' : 'none', md: 'flex' }}
          width={{ base: '100%', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
        >
          <Link
            to='/catalog'
            activeStyle={{ color: 'purple' }}
            onClick={handleToggle}
          >
            <MenuItems>Catalog</MenuItems>
          </Link>
          <Link
            to='/about'
            activeStyle={{ color: 'purple' }}
            onClick={handleToggle}
          >
            <MenuItems>About</MenuItems>
          </Link>
          <Link
            to='/gallery'
            activeStyle={{ color: 'purple' }}
            onClick={handleToggle}
          >
            <MenuItems>Gallery</MenuItems>
          </Link>
          <Link
            to='/contact'
            activeStyle={{ color: 'purple' }}
            onClick={handleToggle}
          >
            <MenuItems>Contact</MenuItems>
          </Link>
        </Box>

        <Box
          borderColor='#eb34e2'
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Flex justify='center' align='center'>
            <Image
              src={Search}
              alt='search icon'
              size='16px'
              mr={3}
              style={{ cursor: 'pointer' }}
              onClick={onOpen}
            />
            <Link aria-label='cart' to='/account/login' onClick={handleToggle}>
              <Image src={User} alt='user icon' size='16px' mr={3} />
            </Link>
            <Link aria-label='cart' to='/cart' onClick={handleToggle}>
              {quantity > 0 ? (
                <Image src={Cart} alt='cart icon' size='16px' data-badge='0' />
              ) : (
                <Image
                  src={Cart}
                  alt='cart icon'
                  size='16px'
                  style={{ marginRight: '1rem' }}
                />
              )}
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Divider m='0' p='0' />

      <Modal preserveScrollBarGap isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded='full'>
          <FormControl as='form' action='../search' method='GET' rounded='full'>
            <InputGroup>
              <Input
                variant='flushed'
                size='lg'
                name='value'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search'
                rounded='full'
                p={3}
              />
              <InputRightElement
                children={<Image src={Search} alt='search icon' size='16px' />}
              />
            </InputGroup>
          </FormControl>
        </ModalContent>
      </Modal>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
