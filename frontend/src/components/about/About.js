import React from "react";
import "./About.css";
import logo from "../../images/logo.png";
import diving from "../../images/hero.jpg";

export default function About() {
  return (
    <div className="Container">
      <div className="Title-Container">
        <h1 className="Title-About">About Diving store</h1>
      </div>
      <div className="About-Container">
        <div className="Description-Container">
          <p className="Description-About">
            <span
              style={{
                color: "#623BC1",
                fontSize: "20px",
                fontWeight: "bolder",
                textShadow: "1px 1px 1px solid grey",
              }}
            >
              Diving Shop
            </span>{" "}
            is a company created by three web developers who like diving and
            adventure . We wanted to produce high-quality of diving equipment to
            sell as a hobby in an online store that we developed. We enjoyed the
            experience of making this ecommerce website as it was so
            entertaining. We hope you find products you like in each click.
          </p>
          <img style={{ width: "150px" }} src={logo} alt=""></img>
        </div>
        <div className="Image-Container">
          <img className="About-Image" src={diving} alt=""></img>
        </div>
      </div>
    </div>
  );
}
