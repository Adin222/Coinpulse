import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbzxail",
        "template_46r0x4g",
        form.current,
        "WvW_Y4_4O4h_S-MOA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="containerContact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="one">
          <label className="labelName">Name</label>
          <input className="ovalInput" type="text" name="from_name" />
        </div>
        <div className="two">
          <label className="labelName">Email</label>
          <input className="ovalInput" type="email" name="user_email" />
        </div>
        <div className="three">
          <label className="labelName">Message</label>
          <textarea name="message" />
          <input className="buttonContact" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};
