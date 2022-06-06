import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="Footer-background">
      <div className="Footer">
        <div className="Links-wrapper">
          <div className="Logo-part">
            <img src={logo} alt=""></img>
            <p>
              Diving Shop is a company created by three web developers who like
              diving and adventure .
            </p>
            <div className="Footer-icons">
              <Link
                to={{ pathname: "https://www.facebook.com/" }}
                target="_blank"
                className="icon facebook-icon"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to={{ pathname: "https://www.instagram.com/" }}
                target="_blank"
                className="icon instagram-icon"
              >
                <FaInstagramSquare size={24} />
              </Link>
              <Link
                to={{ pathname: "https://www.youtube.com/" }}
                target="_blank"
                className="icon youtube-icon"
              >
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>
          <div className="Quick-links">
            <h4>Quick Links</h4>

            <Link to="/" activeclassname="active">
              Home
            </Link>

            <Link to="/about">About</Link>
            <Link to="/products">Shop</Link>

            <Link to="/posts">Memorise</Link>

            <Link to="/contact">Contact</Link>
          </div>
          <div className="Partners-links">
            <h4>Partners Links</h4>
            <Link to={{ pathname: "https://www.scubapro.eu/" }} target="_blank">
              Scubapro
            </Link>
            <Link
              to={{ pathname: "https://www.mares.com/de_DE/" }}
              target="_blank"
            >
              Mares
            </Link>
            <Link to={{ pathname: "https://www.cressi.com/" }} target="_blank">
              Gressi
            </Link>
          </div>
          <div className="Contact-info">
            <h4>Get in touch</h4>
            <span>(+49) 123 456 789</span>
            <span>divingshop@gmail.com</span>
            <span>DCI WEB DEVELOPER Germany</span>
          </div>
        </div>
        <div className="Credentials">
          <span> NAUTILIUS DIVING SHOP| Copyright &copy; {year} </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
