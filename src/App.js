import React, { useEffect, useState } from "react";
import daily from "./data/DailyData";
import weekly from "./data/WeeklyData";
import monthsly from "./data/MonthslyData";

import jeremy from "./images/image-jeremy.png";
import "./App.css";
import "./css/header.css";
import "./css/cards.css";
import "./css/responsive.css";

const App = () => {
  const [data, setData] = useState();
  const [choosed, setChoosed] = useState("daily");

  useEffect(() => {
    if (choosed === "daily") {
      setData(daily);
    } else if (choosed === "weekly") {
      setData(weekly);
    } else {
      setData(monthsly);
    }
  }, [choosed]);

  const renderCards =
    data &&
    data.map((item) => {
      return (
        <div className="card" style={{ backgroundColor: `${item.color}` }}>
          <img src={item.image} alt={item.title} />
          <div className="card-text">
            <div className="point">
              <p>{item.title}</p>
              <span>...</span>
            </div>
            <div className="hrs">
              <h1>{item.current} hrs</h1>
              <p>
                {item.text} - {item.previous}hrs
              </p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <div className="container">
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
      <div className="cards">{renderCards}</div>
    </div>
  );
};

export default App;
