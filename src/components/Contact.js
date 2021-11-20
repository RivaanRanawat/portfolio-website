import React, { useState } from "react";
import { db } from "../configs/firebase";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "" || email == "" || subject == "" || message == "") {
      alert("Please enter all information");
      return;
    }

    db.collection("messages")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        alert(
          "I will contact you soon, in the mean time have a look at my projects!"
        );
      })
      .catch((err) => {
        alert(err.message);
      });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div class="contact1">
      <Fade top>
        <h1 className="contactHeader">Contact Me</h1>
      </Fade>
      <div class="container-contact1">
        <div class="contact1-pic js-tilt" data-tilt>
        </div>
        <form className="contact1-form validate-form" onSubmit={handleSubmit}>
          <span className="contact1-form-title">Get in touch</span>
          <Fade right duration={500}>
            <div
              className="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                className="input1"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </Fade>

          <Fade right duration={1000}>
            <div
              class="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input1"
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </Fade>

          <Fade right duration={1500}>
            <div
              class="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                className="input1"
                type="text"
                value={subject}
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                style={{ marginBottom: "20px" }}
              />
            </div>
          </Fade>

          <Fade right duration={2000}>
            <div
              class="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                className="input1"
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginBottom: "20px" }}
              ></textarea>
            </div>
          </Fade>

          <Fade bottom duration={2000}>
            <div class="container-contact1-form-btn">
              <button class="contact1-form-btn">
                <span>
                  Send
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  );
};

export default Contact;
