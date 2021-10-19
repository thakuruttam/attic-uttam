import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function form({
  name,
  setName,
  email,
  setEmail,
  number,
  setNumber,
  nota,
  setNota,
  sign,
  setSign,
  error,
  handleSave,
  loading
}) {
  return (
    <div>
      <p className="form-box-head">Schedule an Online Notary Now</p>
      {error && (
        <p className="error-msg">
          There was an issue in form submission. Please try again!
        </p>
      )}
      <p className="form-label">Full Name</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Input text with label"
        className="input-box"
        type="text"
      />
      <p className="form-label">Email</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Input text with label"
        className="input-box"
        type="email"
      />
      <p className="form-label">Phone Number</p>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Input text with label"
        className="input-box"
        type="number"
      />
      <div className="form-select-section">
        <p>How many notarisations</p>
        <select
          name="nota"
          onChange={(e) => setNota(e.target.value)}
          value={nota}
          id="cars"
        >
          <option value="0">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="form-select-section">
        <p>How many Signers</p>
        <select
          name="sign"
          onChange={(e) => setSign(e.target.value)}
          value={sign}
          id="cars"
        >
          <option value="0">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="button-section">
        <button onClick={handleSave} className="save-button">
          {loading ? <Loader type="ThreeDots" color="#fff" height={10} width={50} /> : "Save and Continue"}
        </button>

      </div>
    </div>
  );
}
