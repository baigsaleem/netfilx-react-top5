import React from "react";
import "./App.css";
import Heading from "./Heading";
import Images from "./Images";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgSrc={props.imgSrc} />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Heading sname={props.sname} />
            <a href={props.link} target="_blank">
              <button className="button">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
