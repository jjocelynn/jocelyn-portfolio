import React, { useState } from "react";

export default function Contact() {
  //create state variables for the input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //function to handle input change
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either name, email, or message
    switch (inputType) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      default:
        setMessage(inputValue);
    }
  };

  // validate email entry with regex
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  //function to handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && validateEmail(email) && message) {
      alert(
        `Hi ${name}! your message has been sent to Jocelyn. She will get back to you soon!`
      );
      const form = document.getElementById("contact");
      form.submit(); //submit form to formie.io
    } else if (!name) {
      return setErrorMessage("Please enter your name.");
    } else if (!email) {
      return setErrorMessage("Email is required.");
    } else if (!validateEmail(email)) {
      return setErrorMessage("Email is invalid.");
    } else if (!message) {
      return setErrorMessage("Please include a message.");
    } else {
      return alert(
        `Something doesn't seem right, please make sure you entered everything properly`
      );
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <form
      id="contact"
      action="https://formie.io/form/22464017-598d-45e0-887f-d846022b0fd1"
      method="POST"
      onSubmit={handleFormSubmit}
    >
      <input
        name="_redirect"
        type="hidden"
        value="http://localhost:3000/#intro" //replace this part once i publish.
      />
      <h3>CONTACT</h3>
      <section>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleInputChange}
          className="form-control"
          placeholder="name"
        />
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          className="form-control"
          placeholder="email@example.com"
        />
        <textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          className="form-control"
          placeholder="type your message here!"
          rows="3"
        />
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </section>
    </form>
  );
}
