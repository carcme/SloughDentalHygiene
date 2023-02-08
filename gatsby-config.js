/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Slough Dental Hygiene",
    description: "A dental hygiene site using GatsbyJS",
    author: "Hammer3",
    telephoneNumber: "+44 7942 26489",
    emailContact: "clare@sloughdentalhygiene.co.uk",
    twitterUsername: "",
    facebookUsername: "SloughDentalHygiene",
    instagramUsername: "",
    linkedinUsername: "",
    image: "/smile-1.png",
    siteUrl: "sloughdentalhygiene.vercel.app",
    developerName: "Hammer3",
    developerUrl: "https://www.hammer3.de",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    "gatsby-plugin-next",
  ],
}
