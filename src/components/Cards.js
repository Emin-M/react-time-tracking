import React from "react";

const Cards = ({ data }) => {
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
  return <div className="cards">{renderCards}</div>;
};

export default Cards;
