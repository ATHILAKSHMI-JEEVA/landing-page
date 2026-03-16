import React, { useState } from "react";


function GetToTouch() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email){
      alert("Please fill all required fields");
      return;
    }

    alert("Message Sent Successfully ✅");

    console.log(formData);

    setFormData({
      name:"",
      email:"",
      phone:"",
      message:""
    });
  };

  return (
    <div className="contact-container">

      <div className="contact-left">
        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc" alt="contact"/>
      </div>

      <div className="contact-right">

        <p className="subtitle">/get in touch/</p>

        <h1>
          HAVE QUESTIONS? <br/>
          WE’RE HERE TO HELP!
        </h1>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="input-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default GetToTouch;