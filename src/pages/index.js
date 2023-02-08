import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import FormatTextModule from "../components/BasicTextModule/FormatTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Let Us Brighten Your Smile"
          subTitle="A family-run, independent dental hygiene practice in the heart of Slough Trading Estate."
          enquire="true"
        />
        <FormatTextModule
          title="So what is a hygenist and why do I need one?"
          link="/services"
          linkText="What We Do"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Products"
          introduction="A selection of products available at the practice..."
        />
        <LatestPosts
          title="Dental News"
          introduction="Latest interest articles regarding your oral health..."
        />
      </Layout>
    </>
  )
}

export default Index
