import React from "react";
import { FaEnvelope,FaWhatsapp, FaLinkedin, FaTwitter} from "react-icons/fa";
import "../styles/Footer.css"
const Footer = () => {
  const contactLinks = {
    gmail: "mailto:your.email@olowo.michael179.com",
    whatsapp: "https://wa.me/2348100316259",
    linkedin: "https://www.linkedin.com/in/michael-olowoyo-520b2b271",
    twitter: "https://twitter.com/olowoyo_michael",
  };

  return (
    <div className="footer grid justify-center bg-purple-900 p-4 " id="contact">
      <div className="text-center text-slate-400 font-mono font-extrabold text-xl md:space-x-4 m-auto">
        <p>Handles</p>
      </div>
      <div className="flex justify-center text-center p-2 m-auto">
        <a
          href={contactLinks.gmail}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 p-2 bg-red-800 text-white rounded-lg socials"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  p-2 bg-green-800 text-white rounded-lg socials"
        >
          <FaWhatsapp size={30} />
        </a>
        <a
          href={contactLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 p-2 bg-blue-800 text-white rounded-lg socials"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href={contactLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 p-2 bg-blue-500 text-white rounded-lg socials"
        >
          <FaTwitter size={30} />
        </a>
      </div>

    </div>
  );
}

export default Footer