import React, { useState, useRef } from "react"
import { useRouter } from "next/router";
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [disableBtn, setDisableBtn] = useState("");
  const router = useRouter();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setDisableBtn("true");

    emailjs.sendForm(
      process.env.EMAILJS_SERVICE_ID, 
      process.env.EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
          form.current.reset();  // Clears form/inputs after button is Selected
          setDisableBtn("");
          router.push('/');    // return to home page

      }, (error) => {
          setDisableBtn("");
        });
  };


  return (
    <ContactStyles className="section">
        <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Your name..." type="text" name="from_name" required />
        <input placeholder="Your email..." type="email" name="from_email" required />
        <textarea
          placeholder="Your message..."
          name="message"
          rows="5"
        ></textarea>
        {/* <input disabled={disableBtn} type="submit" value={disableBtn ? "Sending":"Send"} /> */}
        <Button disabled={disableBtn} type="submit" value="Send" text={disableBtn ? "Sending...":"Send Message"} required />
       </form>
    </ContactStyles>
  )
}

export default Contact