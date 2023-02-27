import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import Calendly from "../components/Booking/Calendly"

const contact = () => {
  return (
    <>
      <Seo title="Booking" />
      <Layout>
        <SimpleBanner
          title="Book your Appointment"
          introduction="Book your next appointment with us today"
        >
          <StaticImage
            className="banner__image"
            src="../../static/booking.jpg"
            alt="girl brushing teeth"
          />
        </SimpleBanner>
        <Calendly />
      </Layout>
    </>
  )
}

export default contact
