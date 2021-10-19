import React, { useState } from "react";
import BooksApp from "./images/books.jpg";
import LeftSection from './images/back.jpg'
import Logo from './images/logo.jpg'

import Success from './success'
import Form from './form'

export default function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState(0)
  const [nota, setNota] = useState(0)
  const [sign, setSign] = useState(0)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSave = () => {
    setLoading(true)
    fetch("https://api-notarize.herokuapp.com/customer/createPublicOrder", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: number,
        noOfSigners: sign,
        noOfNotarizations: nota,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        setLoading(false)
        if (body.status) setSuccess(true);
      }).catch(err => {
        setError(true)
        setLoading(false)
        console.log(err)
      }
      )
  };

  return (
    <div className="container">
      <div className="top-section-wrapper">
        <div className="top-left">
          <img src={BooksApp} alt="logo" />
        </div>
        <div className="top-right">
          <p className="top-right-head">91 Technologies Private limited</p>
          <p className="top-right-mid">1190-80/1, 26th Main Road, 9th Block</p>
          <p className="top-right-mid">Jayanagar, Bengaluru- 560069</p>
          <p className="top-right-bottom">CIN:U74999KA2019PTC122507</p>
        </div>
      </div>
      <div className="form-box-wrapper">
        <div className="form-box-left">
          {!success ? <>
            <img src={Logo} className="image-attic" alt="attic" />
            <Form name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} handleSave={handleSave} error={error} nota={nota} setNota={setNota} sign={sign} setSign={setSign} loading={loading} />
          </> : <Success />}

        </div>
        <div className="form-box-right">
          <img src={LeftSection} alt="left-section" />
        </div>
      </div>
    </div >
  );
}
