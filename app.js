// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "c1h1" }, "I am child1 h1"),
      React.createElement("h2", { id: "c1h2" }, "I am child1 h2"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "c2h1" }, "I am child2 h1"),
    React.createElement("h2", { id: "c2h2" }, "I am child2 h2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
