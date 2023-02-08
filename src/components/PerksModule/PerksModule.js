import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building-1.jpg"
        alt="Perks Module"
        layout="fullWidth"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="The Practice"
          content="Located centrally in Slough Trading Estate with generallly plenty of parking spaces available"
        >
          <StaticImage
            src="../../../static/the-practice.jpg"
            alt="the practice"
            layout="fixed"
            height="350"
            width="300"
            placeholder="blurred"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Your Hygenist"
          content="Clare gaduated in 2016 and started running Slough Dental in 2019"
        >
          <StaticImage
            src="../../../static/clare.jpg"
            alt="the hygenist"
            layout="fixed"
            height="350"
            width="300"
            placeholder="blurred"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
