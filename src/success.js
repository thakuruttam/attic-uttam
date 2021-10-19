import React from "react";
import final from "./images/final.jpg";
import contact from "./images/contact.jpg";

export default function Success() {
  return (
    <div className="success-section">
      <img src={final} className="success-logo" alt="success" />
      <p className="success-bold"> Your Online notary has been schduled</p>
      <p className="success-para">
        Our Team will soon schedule Appointment for Notarisation
      </p>
      <p className="success-para" >
        In case of Emergency Notarisations,please reach out to us directly
      </p>
      <img className="success-num" src={contact} alt="contact" />
    </div >
  );
}
