import React, { useState, useRef } from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [disableBtn, setDisableBtn] = useState("")
  const [btnText, setBtnText] = useState("Send Message")
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    setDisableBtn("true")
    setBtnText("Sending...")

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset() // Clears form/inputs after button is Selected
          setDisableBtn("")
          setBtnText("Message Sent")
        },
        (error) => {
          setDisableBtn("")
          setBtnText("Send Failed!")
        }
      )
  }

  return (
    <ContactStyles className="section">
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Your name..."
          type="text"
          name="from_name"
          required
        />
        <input
          placeholder="Your email..."
          type="email"
          name="from_email"
          required
        />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
        ></textarea>
        {/* <input disabled={disableBtn} type="submit" value={disableBtn ? "Sending":"Send"} /> */}
        <Button
          disabled={disableBtn}
          type="submit"
          value="Send"
          text={btnText}
          required
        />
      </form>
    </ContactStyles>
  )
}

export default Contact
