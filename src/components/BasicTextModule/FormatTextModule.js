import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"
import { reasonItems } from "../../constants/reasons"

const FormatTextModule = ({ title, contents, link, linkText }) => {
  console.log(contents)
  return (
    <BasicTextModuleStyles className="section">
      <div className="container container__tight">
        <div>
          {title && <h2>{title}</h2>}

          {reasonItems.map((item, index) => {
            return (
              <>
                <h6>{item.heading}</h6>
                <p key={index} style={{ marginBottom: "20px" }}>
                  {item.text}
                </p>
              </>
            )
          })}

          <Button text={linkText} as={Link} to={link} />
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default FormatTextModule
