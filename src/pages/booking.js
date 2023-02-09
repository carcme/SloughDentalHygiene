import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Booking" />
      <Layout>
        <SimpleBanner
          title="Get in touch"
          introduction="We'll get back to you as soon as possible"
        >
          <StaticImage
            className="banner__image"
            src="../../static/booking.jpg"
            alt="girl brushing teeth"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
