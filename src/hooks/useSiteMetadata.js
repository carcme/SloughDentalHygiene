import { useStaticQuery, graphql } from "gatsby"

export const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            telephoneNumber
            emailContact
            twitterUsername
            siteUrl
            developerName
            developerUrl
            twitterUsername
            facebookUsername
            instagramUsername
            linkedinUsername
          }
        }
      }
    `
  )

  return site.siteMetadata
}
