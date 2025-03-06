import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../../data"; // ✅ Import Contact data
import "./Contact.scss";

function Contact() {
    return (
        <section id="contact" className="fade-in">
            <h2>Contact Me</h2>
            <div className="contact-info">
                <p>
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <a href={`tel:${contact.number}`}>{contact.number}</a> {/* ✅ Clickable Phone Number */}
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    <a href={`mailto:${contact.email_address}`}>{contact.email_address}</a> {/* ✅ Clickable Email */}
                </p>
            </div>
        </section>
    );
}

export default Contact;
