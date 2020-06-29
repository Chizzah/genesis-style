import React, {
  useContext,
  useState,
  useEffect,
} from 'react' /* eslint-disable */
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { store } from 'react-notifications-component'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import SEO from '../../components/seo'
import { Box, Flex, Text, Button, Heading, Divider } from '@chakra-ui/core'
import ProductInfo from '../../components/productInfo'
import VariantSelectors from '../../components/variantSelectors'
import StoreContext from '../../context/store'

const ThumbnailBox = styled(Box)(() => ({
  transition: '0.5s ease all',
  cursor: 'pointer',
}))

const ThumbnailFlex = styled(Flex)(() => ({
  transition: '0.5s ease all',
}))

const productPage = ({ data }) => {
  const product = data.shopifyProduct
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const [currentImage, setCurrentImage] = useState(product.images[0])
  const context = useContext(StoreContext)
  const productVariant =
    context.client.product.helpers.variantForOptions(product, variant) ||
    variant
  const [available, setAvailable] = useState(productVariant.availableForSale)
  const notificationDOMRef = React.createRef()

  useEffect(() => {
    let defaultOptionValues = {}
    product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant])

  const checkAvailability = (productId) => {
    context.client.product.fetch(productId).then((product) => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        (variant) => variant.id === productVariant.shopifyId
      )

      if (result.length > 0) {
        setAvailable(result[0].available)
      }
    })
  }

  const addNotification = () => {
    store.addNotification({
      title: 'Just added to your cart 😊',
      message: `${product.title} / ${productVariant.title}`,
      type: 'success',
      insert: 'top',
      container: 'bottom-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismissable: { click: true },
      dismiss: { duration: 4000 },
    })
  }

  const handleAddToCart = () => {
    context.addVariantToCart(productVariant.shopifyId, quantity)
    addNotification()
  }

  const handleAddToCart_BuyNow = () => {
    context.addVariantToCartAndBuyNow(productVariant.shopifyId, quantity)
  }

  const handleOptionChange = (event) => {
    const { target } = event
    setVariant((prevState) => ({
      ...prevState,
      [target.name]: target.value,
      ...console.log(variant),
    }))
  }

  function increaseQuantity() {
    setQuantity((q) => q + 1)
  }

  function decreaseQuantity() {
    setQuantity((q) => (q <= 1 ? 1 : q - 1))
  }

  return (
    <>
    <SEO 
        title={product.title}
        description={product.descriptionHtml} />
      <ReactNotification ref={notificationDOMRef} />
      <Box>
        <Box>
          <Box>
            <Flex
              className='box'
              flexDirection={['column', null, 'row']}
              pt={3}
              px={4}
            >
              <Box
                width={['100%', null, 0.5 / 5]}
                py={2}
                px={[2, null, 0]}
                order={[2, null, 1]}
                //flexDirection={['row', null, 'column']}
              >
                <Box
                  w={['100%', null, null, '50%']}
                  aria-hidden
                  style={{ overflow: 'auto' }}
                >
                  <ThumbnailFlex flexDirection={['row', null, 'column']}>
                    {product.images.map((x, i) =>
                      currentImage === product.images[i] ? (
                        <ThumbnailBox
                          key={i}
                          style={{
                            marginBottom: '10px',
                            border: '3px solid black',
                          }}
                          width={['400px', null, null, 'auto']}
                          ml={[0, null, 2]}
                          mr={[2, null, 0]}
                          my={1}
                        >
                          <Img
                            fluid={x.localFile.childImageSharp.fluid}
                            alt={product.title}
                            loading='auto'
                            imgStyle={{
                              WebkitFilter: 'blur(1px)',
                              marginBorder: '10px solid black',
                            }}
                          />
                        </ThumbnailBox>
                      ) : (
                        <ThumbnailBox
                          onMouseOver={(e) =>
                            setCurrentImage(product.images[i])
                          }
                          style={{ marginBottom: '10px' }}
                          key={i}
                          width={['400px', null, 'auto']}
                          ml={[0, null, 2]}
                          mr={[2, null, 0]}
                          my={1}
                        >
                          <Img
                            fluid={x.localFile.childImageSharp.fluid}
                            loading='auto'
                            durationFadeIn={500 * i}
                            alt={product.title}
                          />
                        </ThumbnailBox>
                      )
                    )}
                  </ThumbnailFlex>
                </Box>
              </Box>
              <Box
                width={['100%', null, null, '50%']}
                height={['100%', null, null, '100%']}
                style={{ margin: 'auto', marginTop: '0' }}
                ml='auto'
                py={2}
                px={[2, null, 3]}
                order={[1, null, 2]}
                className='img-hover-zoom--zoom-n-rotate img-hover-zoom'
              >
                <Img
                  fluid={currentImage.localFile.childImageSharp.fluid}
                  key={currentImage.localFile.id}
                  alt={product.title}
                  className='imgProduct'
                />
              </Box>
              <Box
                flexDirection='column'
                width={['100%', null, null, '50%']}
                height='100%'
                px={2}
                data-product-info
                order={3}
              >
                <Box m={[3, null, null, 6]} p={[3, null, null, 6]} shadow='lg'>
                  <ProductInfo product={product} />
                  {product.options.map((options) => (
                    <VariantSelectors
                      onChange={handleOptionChange}
                      key={options.id.toString()}
                      options={options}
                    />
                  ))}
                  <Flex direction='column' justify='center' align='start'>
                    <Heading fontSize={['lg', null, null, '2xl']}>
                      Quantity
                    </Heading>
                    <Divider w={12} border='2px' borderColor='gray.600' />
                    <Flex my={2} justify='center' align='center'>
                      <Box>
                        <Button
                          bg='purple.500'
                          color='gray.50'
                          onClick={decreaseQuantity}
                        >
                          -
                        </Button>
                      </Box>
                      <Box>
                        <Button color='gray.900' variant='outline'>{quantity}</Button>
                      </Box>
                      <Box>
                        <Button
                          bg='purple.500'
                          color='gray.50'
                          onClick={increaseQuantity}
                        >
                          +
                        </Button>
                      </Box>
                    </Flex>
                  </Flex>
                  <hr />
                  <Flex
                    mt={6}
                    direction='column'
                    justify='center'
                    align='center'
                  >
                    <Button
                      w='100%'
                      my={1}
                      variant='outline'
                      color='purple.500'
                      borderColor='purple.500'
                      type='submit'
                      disabled={!available}
                      onClick={handleAddToCart}
                      textTransform='uppercase'
                      fontSize='lg'
                    >
                      Add to Cart
                    </Button>
                    {!available && (
                      <Text>
                        This Size is out of Stock! Try selecting a different
                        size.
                      </Text>
                    )}{' '}
                    <Button
                      w='100%'
                      my={1}
                      variant='solid'
                      bg='black'
                      color='gray.50'
                      type='submit'
                      disabled={!available}
                      onClick={handleAddToCart_BuyNow}
                      textTransform='uppercase'
                      fontSize='lg'
                    >
                      Buy Now
                    </Button>
                    {!available && (
                      <Text>
                        This Size is out of Stock! Try selecting a different
                        size.
                      </Text>
                    )}
                  </Flex>
                  <hr />
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box className='hero is-light'>
        <Box className='hero-body'>
          <Box className='container has-text-centered'>
            <Link to='/catalog' className='is-medium button is-dark'>
              {' '}
              ← Back to the Catalog
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
productPage.propTypes = {
  addVariantToCart: PropTypes.func,
}
export default productPage

export const query = graphql`
  query($id: String!) {
    shopifyProduct(handle: { eq: $id }) {
      handle
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 768, maxHeight: 768, srcSetBreakpoints: [640]) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
