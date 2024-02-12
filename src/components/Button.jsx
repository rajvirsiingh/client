import React from "react";
import data from "./json/buttonData.json";
const Button = () => {
  const btns = data.map((items) => {
    return (
      <a href={items.link}>
        <button type="submit">{items.site}</button>
      </a>
    );
  });
  return <section className="btns">{btns}</section>;
};

export default Button;
