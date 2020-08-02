import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

import SEO from '../components/seo'
import '../css/hero.css'
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
        loading='eager'
      >
        <div className='flex flex-col items-center justify-center w-full h-full text-gray-100 BO'>
          <p className='font-semibold text-center uppercase lg:text-lg'>
            Comfort & Style
          </p>
          <h1 className='py-3 text-4xl font-semibold text-center capitalize lg:text-6xl lg:py-6'>
            Face masks available
          </h1>
          <Link to='/catalog'>
            <button className='p-3 text-2xl font-semibold text-gray-100 bg-purple-600 rounded-lg hover:bg-purple-500 hover focus:outline-none'>
              Buy Now
            </button>
          </Link>
        </div>
      </BackgroundImage>

      {/* Benefits Section */}

      <section className='w-full h-auto py-24'>
        <h2 className='text-2xl font-semibold text-center uppercase'>
          Why Shop Genesis Style
        </h2>
        <div className='flex flex-col items-center justify-around max-w-5xl py-12 mx-auto lg:flex-row'>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 text-center shadow-xl'>
            <img className='w-12 h-12' src={Clock} alt='clock icon' />
            <div className='mt-3'>
              <h3 className='font-semibold text-gray-800 uppercase'>
                Free Delivery
              </h3>
              <p className='text-xs'>for orders over R1,000</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 text-center shadow-xl'>
            <img className='w-12 h-12' src={Hand} alt='hand sanitizer icon' />
            <div className='mt-3'>
              <h3 className='font-semibold text-gray-800 uppercase'>
                Package Sanitized
              </h3>
              <p className='text-xs'>at every exchange point</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center w-64 h-64 p-6 text-center shadow-xl'>
            <img className='w-12 h-12' src={Truck} alt='truck icon' />
            <div className='mt-3'>
              <h3 className='font-semibold text-gray-800 uppercase'>
                Reliable Shipping
              </h3>
              <p className='text-xs'>to your door from R60</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}

      <section className='w-full h-auto py-24'>
        <h2 className='py-12 text-2xl font-semibold text-center uppercase'>
          Featured Products
        </h2>
        <div className='flex flex-col items-center justify-around max-w-6xl py-12 mx-auto lg:flex-row'>
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
              <div className='w-64 h-64 mx-6 text-xs' key={id}>
                <Link to={`/product/${handle}/`}>
                  {firstImage && firstImage.localFile && (
                    <Img
                      fluid={firstImage.localFile.childImageSharp.fluid}
                      alt={handle}
                    />
                  )}
                </Link>
                <h3 className='mt-3 font-semibold'>{title}</h3>
                <p className='mt-3'>R{firstVariant.price}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Social Proof */}

      <section className='w-full h-auto py-24'>
        <h2 className='py-12 text-2xl font-semibold text-center uppercase'>
          What Our Customers Think
        </h2>
        <div className='flex flex-col items-center justify-around max-w-6xl py-12 mx-auto lg:flex-row'>
          <div className='flex flex-col items-center justify-start w-full p-6 my-6 lg:my-0 lg:mr-6'>
            <div rounded='full' overflowX='hidden' overflowY='hidden'>
              <Img
                imgStyle={{ borderRadius: '50px' }}
                fixed={data.avatarOne.childImageSharp.fixed}
                alt='Vuyokazi Ntonzima testimonial'
              />
            </div>
            <h3 className='mt-6 mb-3 text-sm font-semibold'>
              Vuyokazi Ntonzima
            </h3>
            <p className='text-xs'>
              Love your dress styles, perfect fit for my mom...
            </p>
          </div>
          <div className='flex flex-col items-center justify-start w-full p-6 my-6 lg:my-0 lg:mr-6'>
            <div rounded='full' overflowX='hidden' overflowY='hidden'>
              <Img
                imgStyle={{ borderRadius: '50px' }}
                fixed={data.avatarTwo.childImageSharp.fixed}
                alt='Keneilwe Molupe testimonial'
              />
            </div>
            <h3 className='mt-6 mb-3 text-sm font-semibold'>Keneilwe Molupe</h3>
            <p className='text-xs'>
              I recently bought two Genesis dresses and I love them very much.
            </p>
          </div>
          <div className='flex flex-col items-center justify-start w-full p-6 my-6 lg:my-0 lg:mr-6'>
            <div rounded='full' overflowX='hidden' overflowY='hidden'>
              <Img
                imgStyle={{ borderRadius: '50px' }}
                fixed={data.avatarThree.childImageSharp.fixed}
                alt='Audrey Alexander testimonial'
              />
            </div>
            <h3 className='mt-6 mb-3 text-sm font-semibold'>
              Audrey Alexander
            </h3>
            <p className='text-xs'>
              i love their clothing it caters for the petite and the fuller
              figure.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    indexHero: file(name: { eq: "genesis-style-hero" }) {
      childImageSharp {
        fluid(maxWidth: 1200, srcSetBreakpoints: [480, 768, 910]) {
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
                fluid(maxWidth: 240, maxHeight: 280) {
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
