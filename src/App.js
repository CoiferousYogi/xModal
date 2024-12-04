import React, { useState } from "react";
import "./App.css";

const FormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, email, phoneNumber, dateOfBirth } = formData;

    // checking if any field is empty
    if (!userName) {
      alert("Please enter a user name.");
      return;
    }

    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    if (!phoneNumber) {
      alert("Please enter a phone number.");
      return;
    }

    if (!dateOfBirth) {
      alert("Please enter a date of birth.");
      return;
    }

    // checking the conditions of validity
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      alert("**Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (new Date(dateOfBirth) > new Date()) {
      alert(
        "Invalid date of birth. The date of birth cannot exceed current date."
      );
      return;
    }

    // if all the validations pass, reset form and close the modal
    setFormData({ userName: "", email: "", phoneNumber: "", dateOfBirth: "" });

    setIsOpen(false);
  };

  return (
    <div className="parentDiv">
      <div className="headerDiv">
        <h1>User Details Modal</h1>
        <button className="formButton" onClick={() => setIsOpen(true)}>
          Open Form
        </button>
      </div>
      {isOpen && (
        <div className="modalDiv" onClick={() => setIsOpen(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h3 className="modalHeader">Fill Details</h3>

            <form onSubmit={handleSubmit} className="modalForm">
              <div className="userNameDiv">
                <label htmlFor="userName">User Name:</label>
                <br />
                <input
                  type="text"
                  id="username"
                  name="userName"
                  placeholder="Enter the name of the user"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="emailDiv">
                <label htmlFor="email">Email Address:</label>
                <br />
                <input
                  type="email"
                  id="emailAddress"
                  name="email"
                  placeholder="Enter the email address."
                  value={formData.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="phoneNumberDiv">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  placeholder="Enter the phone number."
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div className="dobDiv">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <br />
                <input
                  type="date"
                  id="dob"
                  name="dateOfBirth"
                  placeholder="DD/MM/YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button type="submit" className="submitButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
