import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'
import { Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/core'
import { SectionTitle, Tile, Card, Spacer } from '../utils/styles'
import Clock from '../../resources/icons/clock.svg'
import Hand from '../../resources/icons/hand-sanitizer.svg'
import Truck from '../../resources/icons/truck.svg'

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO
        title='Genesis Style - South African Designer Label'
        description='Genesis Style is a South African designer label for women, proudly manufactured in Cape Town.'
      />
      <BackgroundImage
        className='BG'
        fluid={data.indexHero.childImageSharp.fluid}
        alt='Genesis Style'
        fadeIn={false}
        critical
      >
        <Stack
          className='BO'
          spacing={12}
          direction='column'
          justify='center'
          align='center'
          color='gray.50'
        >
          <Box>
            <Text
              fontSize={['sm', null, null, 'lg']}
              textAlign='center'
              fontWeight='semibold'
              textTransform='uppercase'
            >
              Comfort & Style
            </Text>
            <Heading
              as='h1'
              size='2xl'
              px={[3, null, null, null]}
              textAlign='center'
              fontWeight='semibold'
              textTransform='capitalize'
            >
              Face masks available
            </Heading>
          </Box>
          <Link to='/catalog'>
            <Button
              variant='solid'
              bg='purple.500'
              size='lg'
              textTransform='uppercase'
              fontWeight='semibold'
              _hover={{ bg: 'purple.300' }}
              _focus={{ outline: 'none' }}
            >
              Buy Now
            </Button>
          </Link>
        </Stack>
      </BackgroundImage>

      {/* Benefits Section */}

      <Box as='section' w='100%' h='auto' pt={16}>
        <Flex direction='column' justify='center' align='center'>
          <SectionTitle>Why Shop Genesis Style</SectionTitle>
          <Spacer />
        </Flex>
        <Flex
          maxWidth='1280px'
          mx='auto'
          py={8}
          direction={['column', null, null, 'row']}
          justify='center'
          align='center'
        >
          <Tile>
            <Image
              src={Clock}
              alt='clock icon'
              size={['32px', null, null, '64px']}
            />
            <Box textAlign='center'>
              <Heading size='sm' textTransform='uppercase'>
                Free Delivery
              </Heading>
              <Text fontSize='xs'>for orders over R1,000</Text>
            </Box>
          </Tile>
          <Tile>
            <Image
              src={Hand}
              alt='hand sanitizer icon'
              size={['32px', null, null, '64px']}
            />
            <Box textAlign='center'>
              <Heading size='sm' textTransform='uppercase'>
                Package Sanitized
              </Heading>
              <Text fontSize='xs'>at every exchange point</Text>
            </Box>
          </Tile>
          <Tile>
            <Image
              src={Truck}
              alt='truck icon'
              size={['32px', null, null, '64px']}
            />
            <Box textAlign='center'>
              <Heading size='sm' textTransform='uppercase'>
                Reliable Shipping
              </Heading>
              <Text fontSize='xs'>to your door from R60</Text>
            </Box>
          </Tile>
        </Flex>
      </Box>

      {/* Featured Products */}

      <Box as='section' w='100%' h='auto' pt={16}>
        <Flex direction='column' justify='center' align='center'>
          <SectionTitle>Featured Products</SectionTitle>
          <Spacer />
        </Flex>
        <Flex
          maxWidth='1280px'
          mx='auto'
          py={16}
          direction={['column', null, null, 'row']}
          justify='center'
          align='center'
        >
          {data.featured.edges.map(
            ({
              node: {
                id,
                handle,
                title,
                images: [firstImage],
                variants: [firstVariant],
              },
            }) => (
              <Card key={id}>
                <Link to={`/product/${handle}/`}>
                  {firstImage && firstImage.localFile && (
                    <Img
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />
                  )}
                </Link>
                <Heading as='h3' size='xs'>
                  {title}
                </Heading>
                <Text fontSize='xs'>R{firstVariant.price}</Text>
              </Card>
            )
          )}
        </Flex>
      </Box>

      {/* Art Direction */}

      <Box as='section' w='100%' h='auto' pt={16}>
        <Flex direction='column' justify='center' align='center'>
          <SectionTitle>Find Comfort in Yourself</SectionTitle>
          <Spacer
            w={[12, null, null, 24]}
            my={4}
            border='2px'
            borderColor='gray.600'
          />
        </Flex>
        <Box maxW='960px' h='auto' mx='auto' py={16} overflowX='hidden'>
          <Flex
            direction={['column', null, null, 'row']}
            justify='center'
            align='center'
          >
            <Box
              className='BO'
              w={['90%', null, null, null]}
              h='410px'
              mx={['auto', null, null, null]}
              mb={3}
              overflowY='hidden'
            >
              <Img fluid={data.portraitTwo.childImageSharp.fluid} alt='Genesis Style' />
            </Box>
            <Flex
              w={['90%', null, null, null]}
              h='420px'
              mx={['auto', null, null, null]}
              mb={6}
              mx={[null, null, null, 3]}
              direction='column'
              justify='center'
              align='center'
              bg='orange.400'
              color='gray.50'
            >
              <Heading textAlign='center'>
                Genesis <br /> Magnolia LX <br /> Buy Now
              </Heading>
            </Flex>
            <Box
              w={['90%', null, null, null]}
              h='420px'
              mx={['auto', null, null, null]}
              mb={6}
              overflowY='hidden'
            >
              <Img fluid={data.portraitOne.childImageSharp.fluid} alt='Genesis Style' />
            </Box>
          </Flex>
          <Box
            w={['90%', null, null, '100%']}
            maxHeight={['240px', null, null, '480px']}
            mx={['auto', null, null, null]}
            mb={6}
            overflowY='hidden'
          >
            <Img
              fluid={data.landscapeOne.childImageSharp.fluid}
              alt='Genesis Style'
              imgStyle={{
                height: '480px',
              }}
            />
          </Box>
          <Flex
            direction={['column', null, null, 'row']}
            justify='center'
            align='center'
          >
            <Flex
              w={['90%', null, null, null]}
              h='430px'
              mx={['auto', null, null, null]}
              mb={6}
              direction='column'
              justify='center'
              align='center'
              bg='red.600'
              color='gray.50'
              overflowX='hidden'
            >
              <Heading textAlign='center'>
                Red Hot <br /> Summer Sale <br /> Buy Now
              </Heading>
            </Flex>
            <Box
              w={['90%', null, null, null]}
              h='430px'
              mx={['auto', null, null, null]}
              mb={6}
              overflowY='hidden'
            >
              <Img fluid={data.portraitThree.childImageSharp.fluid} alt='Genesis Style' />
            </Box>
          </Flex>
          <Box
            className='IO'
            w={['90%', null, null, '100%']}
            maxHeight={['240px', null, null, '480px']}
            mx={['auto', null, null, null]}
            mb={6}
            overflowY='hidden'
          >
            <Img
              fluid={data.landscapeTwo.childImageSharp.fluid}
              imgStyle={{
                height: '480px',
              }}
              alt='Genesis Style'
            />
          </Box>
        </Box>
      </Box>

      {/* Social Proof */}

      <Box as='section' w='100%' h='auto' py={16}>
        <Flex direction='column' justify='center' align='center'>
          <Flex direction='column' justify='center' align='center'>
            <SectionTitle>What Our Customers Think</SectionTitle>
            <Spacer />
          </Flex>
          <Flex
            direction={['column', null, null, 'row']}
            justify='center'
            align='center'
            py={8}
          >
            <Flex
              w={['70%', null, null, '30%']}
              minH='240px'
              my={[6, null, null, null]}
              mr={[null, null, null, 12]}
              p={6}
              direction='column'
              justify='start'
              align='center'
            >
              <Box rounded='full' overflowX='hidden' overflowY='hidden'>
                <Img
                  imgStyle={{ borderRadius: '50px' }}
                  fixed={data.avatarOne.childImageSharp.fixed}
                  alt='Vuyokazi Ntonzima testimonial'
                />
              </Box>
              <Heading as='h3' size='sm' mt={6} mb={3}>
                Vuyokazi Ntonzima
              </Heading>
              <Text fontSize='xs'>
                Love your dress styles, perfect fit for my mom...
              </Text>
            </Flex>
            <Flex
              w={['70%', null, null, '30%']}
              minH='240px'
              my={[6, null, null, null]}
              mr={[null, null, null, 12]}
              p={6}
              direction='column'
              justify='start'
              align='center'
            >
              <Box rounded='full' overflowX='hidden' overflowY='hidden'>
                <Img
                  imgStyle={{ borderRadius: '50px' }}
                  fixed={data.avatarTwo.childImageSharp.fixed}
                  alt='Keneilwe Molupe testimonial'
                />
              </Box>
              <Heading as='h3' size='sm' mt={6} mb={3}>
                Keneilwe Molupe
              </Heading>
              <Text fontSize='xs'>
                I recently bought two Genesis dresses and I love them very much.
              </Text>
            </Flex>
            <Flex
              w={['70%', null, null, '30%']}
              minH='240px'
              my={[6, null, null, null]}
              p={6}
              direction='column'
              justify='start'
              align='center'
            >
              <Box rounded='full' overflowX='hidden' overflowY='hidden'>
                <Img
                  imgStyle={{ borderRadius: '50px' }}
                  fixed={data.avatarThree.childImageSharp.fixed}
                  alt='Audrey Alexander testimonial'
                />
              </Box>
              <Heading as='h3' size='sm' mt={6} mb={3}>
                Audrey Alexander
              </Heading>
              <Text fontSize='xs'>
                i love their clothing it caters for the petite and the fuller
                figure.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export const query = graphql`
  query {
    indexHero: file(name: { eq: "genesis-style-hero" }) {
      childImageSharp {
        fluid(
          maxWidth: 1200
          srcSetBreakpoints: [480, 768, 910]
        ) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    portraitOne: file(relativePath: { eq: "genesis-style-portrait-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, srcSetBreakpoints: [480]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    portraitTwo: file(relativePath: { eq: "genesis-style-portrait-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, srcSetBreakpoints: [480]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    portraitThree: file(relativePath: { eq: "genesis-style-portrait-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, srcSetBreakpoints: [480]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    landscapeOne: file(relativePath: { eq: "genesis-style-landscape-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, srcSetBreakpoints: [480]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    landscapeTwo: file(relativePath: { eq: "genesis-style-landscape-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 768, srcSetBreakpoints: [480]) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    avatarOne: file(relativePath: { eq: "vuyokazi-ntonzima.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    avatarTwo: file(relativePath: { eq: "keneilwe-molupe.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    avatarThree: file(relativePath: { eq: "audrey-alexander.jpg" }) {
      childImageSharp {
        fixed(width: 96, height: 96) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    featured: allShopifyProduct(
      filter: { tags: { eq: "featured" } }
      limit: 4
    ) {
      edges {
        node {
          id
          title
          handle
          createdAt(fromNow: true)
          publishedAt
          productType
          vendor
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            originalSrc
            id
            localFile {
              childImageSharp {
                fluid(
                  maxWidth: 240
                  maxHeight: 280
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`

export default IndexPage
