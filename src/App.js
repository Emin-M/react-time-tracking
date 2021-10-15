import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import daily from "./data/DailyData";
import weekly from "./data/WeeklyData";
import monthsly from "./data/MonthslyData";

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

  return (
    <div className="container">
      <Header choosed={choosed} setChoosed={setChoosed} />
      <Cards data={data} />
    </div>
  );
};

export default App;
