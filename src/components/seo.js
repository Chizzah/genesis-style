import React from 'react'
import { Title, Link, Meta } from 'react-head'

const SEO = (props) => (
  <>
    <Title>{props.title}</Title>
    <Meta name="description" content={props.description} />
    <Link rel="canonical" content="https://genesisstyle.co.za" />
  </>
)

export default SEO
