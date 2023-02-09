import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import {
  FooterStyles,
  FooterMenuStyles,
  MapStyles,
  CopyrightStyles,
} from "./FooterStyles"
import useFeaturedProduct from "../../hooks/use-featured-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaPhone as Phone,
  FaEnvelope as Email,
} from "react-icons/fa"

const Footer = () => {
  const allProduct = useFeaturedProduct()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links.</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {allProduct.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/products">
                Featured Products<span>.</span>
              </Link>
            </h5>
            <ul>
              {allProduct.map((item, index) => {
                if (index < 5) {
                  const { gatsbyPath, title } = item

                  return (
                    <li key={index}>
                      <Link to={gatsbyPath}>
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                } else {
                  return undefined
                }
              })}
            </ul>
          </FooterMenuStyles>
        )}

        {siteMeta.telephoneNumber ||
        siteMeta.emailContact ||
        siteMeta.twitterUsername ||
        siteMeta.facebookUsername ||
        siteMeta.instagramUsername ||
        siteMeta.linkedinUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              <Link to="/contact">
                Contact<span>.</span>
              </Link>
            </h5>

            <div>
              <div class="open-hrs-wrapper">
                <div class="box">
                  <p className="day">Mo</p>
                </div>
                <div class="box">
                  <p className="day">Tu</p>
                </div>
                <div class="box">
                  <p className="day">We</p>
                </div>
                <div class="box day">
                  <p className="day">Th</p>
                </div>
                <div class="box day">
                  <p className="day">Fr</p>
                </div>
                <div class="box day">
                  <p className="day">Sa</p>
                </div>
                <div class="box open MON">
                  <p>10:00</p>
                </div>
                <div class="box open TUE">
                  <p>-</p>
                </div>
                <div class="box open WED">
                  <p>-</p>
                </div>
                <div class="box open THUR">
                  <p>10:00</p>
                </div>
                <div class="box open FRI">
                  <p>10:00</p>
                </div>
                <div class="box open SAT">
                  <p>10:30</p>
                </div>
                <div class="box close MON">
                  <p>20:00</p>
                </div>
                <div class="box close TUE">
                  <p>-</p>
                </div>
                <div class="box close WED">
                  <p>-</p>
                </div>
                <div class="box close THUR">
                  <p>20:00</p>
                </div>
                <div class="box close FRI">
                  <p>20:00</p>
                </div>
                <div class="box close SAT">
                  <p>15:00</p>
                </div>
              </div>
            </div>
            <ul>
              {siteMeta.telephoneNumber && (
                <li>
                  <a
                    href={`tel:${siteMeta.telephoneNumber}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Phone />
                  </a>
                </li>
              )}
              {siteMeta.emailContact && (
                <li>
                  <Link to="/contact">
                    <Email />
                  </Link>
                  {/* <a
                    href={`mailto:${siteMeta.emailContact}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Email />
                  </a> */}
                </li>
              )}
              {siteMeta.twitterUsername && (
                <li>
                  <a
                    href={`https://www.twitter.com/${siteMeta.twitterUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter />
                  </a>
                </li>
              )}
              {siteMeta.facebookUsername && (
                <li>
                  <a
                    href={`https://www.facebook.com/${siteMeta.facebookUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Facebook />
                  </a>
                </li>
              )}
              {siteMeta.instagramUsername && (
                <li>
                  <a
                    href={`https://www.instagram.com/${siteMeta.instagramUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Instagram />
                  </a>
                </li>
              )}
              {siteMeta.linkedinUsername && (
                <li>
                  <a
                    href={`https://www.linkedin.com/in/${siteMeta.linkedinUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Linkedin />
                  </a>
                </li>
              )}
            </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>

      <MapStyles>
        <iframe
          title="locationMap"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.266637989746!2d-0.6301624180297849!3d51.521165696986735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487665bf91ebd50f%3A0xa65bd896c1c15321!2sSlough%20Dental%20Hygiene!5e0!3m2!1sen!2sde!4v1675679115144!5m2!1sen!2sde"
        ></iframe>
      </MapStyles>

      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            {new Date().getFullYear()} &#169;{" "}
            <a
              href={siteMeta.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteMeta.developerName}
            </a>
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
