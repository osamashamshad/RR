// Step 1: Import React
import * as React from 'react'
import Layout from '../../src/components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I MAKE ZABAR GO VROOM VROOM</p>

      <StaticImage alt="CEO OF ZABAR SITTING ON A HEAVY BIKE"
      src='../../src/images/chupachups.jpg'
      />
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage