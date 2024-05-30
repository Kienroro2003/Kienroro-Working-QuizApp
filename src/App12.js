import "./styles.css";
import React, { useState } from "react";

export default function App() {
  let categories = ["one", "two", "three"];
  const [activeFilter, setActiveFilter] = useState(["one"]);

  const categoryOnClick = (category) => {
    activeFilter.includes(category)
      ? removeCategory(category)
      : setCategory(category);
  };
  const setCategory = (category) => {
    setActiveFilter([...activeFilter, category]);
  };
  const removeCategory = (category) => {
    const index = activeFilter.findIndex((cat) => cat === category);
    activeFilter.splice(index, 1);
    setActiveFilter([...activeFilter]);
  };
  return (
    <div className="chip-list my-3">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`${activeFilter.includes(category) ? "active" : ""}`}
            onClick={() => categoryOnClick(category)}
          >
            <span>{category}</span>
          </button>
        );
      })}
    </div>
  );
}
