import React, { useState } from "react"
import Button from "../Button/Button"
import { Link } from "gatsby"
import { ContactStyles } from "./ContactStyles"
import { RiCheckboxCircleLine } from "react-icons/ri"

const Contact = () => {
  const END_POINT =
    "https://public.herotofu.com/v1/3732d1b0-a854-11ed-a31e-753411848f80"
  const [status, setStatus] = useState()

  const sendEmail = (e) => {
    e.preventDefault()

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    }
    const inputs = e.target.elements
    const data = {}

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value
      }
    }

    Object.assign(data, injectedData)

    fetch(END_POINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input")
            el.type = "hidden"
            el.name = key
            el.value = injectedData[key]

            e.target.appendChild(el)
          })

          e.target.submit()
          throw new Error("Please finish the captcha challenge")
        }

        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        return response.json()
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()))
  }

  if (status) {
    return (
      <>
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <RiCheckboxCircleLine
            style={{
              fontSize: "128px",
              color: "var(--primary)",
            }}
          />
          <h1>Got your message</h1>
          <p>
            Thank you for getting in touch us. We will get back to you shortly.
          </p>

          <Button className="btn" text="Back to Homepage" as={Link} to="/" />
        </div>
      </>
    )
  }

  return (
    <ContactStyles className="section">
      <form
        onSubmit={sendEmail}
        action={END_POINT}
        method="POST"
        target="_blank"
      >
        <input
          placeholder="Your name..."
          type="text"
          // value={process.env.GATSBY_MODE_DEV ? "carc" : ""}
          name="Name"
          id="name"
          required
        />
        <input
          placeholder="Your email..."
          type="email"
          name="Email"
          // value={process.env.GATSBY_MODE_DEV === "true" ? "carc@carc.com" : ""}
          id="email"
          required
        />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
          // value={
          //   process.env.GATSBY_MODE_DEV
          //     ? "Here is some text with your own thank you page"
          //     : ""
          // }
          required
        ></textarea>
        {/* <input disabled={disableBtn} type="submit" value={disableBtn ? "Sending":"Send"} /> */}
        <div className="banner__btns">
          <Button type="submit" value="Send" text="Send Message" required />

          <Button
            className="btn"
            text="Book Appointment"
            as={Link}
            to="/booking"
          />

        </div>
      </form>
    </ContactStyles>
  )
}

export default Contact
