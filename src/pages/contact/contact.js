import React, { useState } from "react";
import axios from "axios";
import "./contact.css";
import toast, { Toaster } from "react-hot-toast";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    const res = await axios.post(
      "https://experio-backend-sahil-halgekar.onrender.com/api/contact",
      details
    );
    console.log(res);
    setStatus("Submit");
    if (res.data.status === "Message Sent") {
      toast.success("Message delivered");
    } else {
      toast.error("Message not delivered");
    }
  };
  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div className="contactForm">
        <div>
          <p className="labels" htmlFor="name">
            Name
          </p>
          <input
            placeholder="Name"
            className="input"
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <p className="labels" htmlFor="email">
            Email
          </p>
          <input
            placeholder="Email"
            className="input"
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <p className="labels" htmlFor="message">
            Message
          </p>
          <textarea
            placeholder="Type your message here"
            id="message"
            required
          />
        </div>
        <button className="contactbtn1" type="submit">
          {status}
        </button>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              fontSize: "2rem",
            },
          },
          error: {
            style: {
              fontSize: "2rem",
            },
          },
        }}
      />
    </form>
  );
};

export default ContactForm;
