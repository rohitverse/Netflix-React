import React from "react";
import "./index.css";
// const Cards = (props) => { };

function Cards(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="cardimg" src={props.src} alt=" Netflix Official" />
          <div className="cardinfo">
            <span className="cardcategory"> {props.title}</span>
            <h3 className="cardtitle">{props.sname}</h3>
            <a href={props.link} target="_bl">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
