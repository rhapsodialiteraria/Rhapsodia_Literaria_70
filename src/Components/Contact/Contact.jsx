import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwx6Srv8aBIlYjTPIWY9Z6fm5JeqqxlCaqg3EKvj8l_DgYablsYIc9g3jrVjinrDkdl7w/exec", // <-- replace this
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: json,
                }
            );

            alert("Message sent successfully!");
            event.target.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error sending your message. Please try again later.");
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let’s Talk</h1>

                    <div className="contact-info">
                        <div className="contact-details">
                            <img src={mail_icon} alt="mail icon" />
                            <p>rhapsodialiteraria@gmail.com</p>
                        </div>
                        <div className="contact-details">
                            <img src={call_icon} alt="phone icon" />
                            <p>+91 8848274816</p>
                        </div>
                        <div className="contact-details">
                            <img src={location_icon} alt="location icon" />
                            <p>St. Aloysius College, Edathua, Kuttanad Taluk, Kerala</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <label>Write your message</label>
                    <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
