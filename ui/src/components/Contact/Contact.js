import React from "react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import './Contact.css';

function Contact({telephone, email}) {
  const emailLink = `mailto:${email}`;
  const teleLink = `tel::${telephone}`;
  return (
      <div>
        <BsTelephone />{" "}<a href={teleLink} className="contact-detail">{telephone}</a>{"  "}
        <BsEnvelope />{" "}<a href={emailLink} className="contact-detail">{email}</a>
      </div>

  );
}

export default Contact;
