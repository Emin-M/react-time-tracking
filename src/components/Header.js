import React from "react";
import jeremy from "../images/image-jeremy.png";

const Header = ({ choosed, setChoosed }) => {
  return (
    <header>
      <div className="head">
        <img src={jeremy} alt="nice man" />
        <div className="head-text">
          <h4>Report for</h4>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul>
        <li
          className={choosed === "daily" ? "active" : ""}
          onClick={() => setChoosed("daily")}
        >
          Daily
        </li>
        <li
          className={choosed === "weekly" ? "active" : ""}
          onClick={() => setChoosed("weekly")}
        >
          Weekly
        </li>
        <li
          className={choosed === "monthly" ? "active" : ""}
          onClick={() => setChoosed("monthly")}
        >
          Monthly
        </li>
      </ul>
    </header>
  );
};

export default Header;
