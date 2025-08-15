import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      [
        React.createElement("h1", { key: "h1-1" }, "I'm Dinesh Sri Sai"),
        React.createElement("h2", { key: "h2-1" }, "I'm an SRKREC Student")
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h1", { key: "h1-2" }, "I'm an AI&DS Student"),
        React.createElement("h2", { key: "h2-2" }, "I'm an Good Student")
      ]
    )
  ]
);



// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World! From React!");

// console.log(heading); //object


// root.render(heading);

console.log(parent);

root.render(parent);