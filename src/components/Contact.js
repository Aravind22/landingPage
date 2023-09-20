import React, { useState } from "react";
import axios from 'axios';

const Contact = ({ contactComponentRef }) => {
    const [userInput, setUserInput] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [message, setMessage] = useState('');

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const handleInputChange = (e) => {
        const inputEmail = e.target.value;
        setUserInput(e.target.value);
        const isValid = emailRegex.test(inputEmail);
        setIsValidEmail(isValid);
    };

    const handleClick = async () => {
        try {
            const response = await axios.post('http://3.109.154.232:5001/enroll', {
                email: userInput,
            });
            if (response.status === 200) {
                setMessage(response.data.message);
                setShowSuccessMessage(true)
                setShowErrorMessage(false)
              }
        } catch (err) {
            setMessage(err.response.data.message);
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    };

    return (
        <div className="contact-page-wrapper" ref={contactComponentRef}>
            <h1 className="primary-heading">Join the Waitlist, Stay Tuned</h1>
            <div className="contact-form-container">
                <input type="email" placeholder="Your Email" onChange={handleInputChange} />
                <button className="secondary-button" onClick={handleClick}>Submit</button>
            </div>
            {!isValidEmail && <p style={{ color: "red" }}>Please enter a valid email address.</p>}
            {showSuccessMessage && <p style={{ color: "green" }}>{message}</p>}
            {showErrorMessage && <p style={{ color: "red" }}>{message}</p>}
        </div>
    );
};

export default Contact;