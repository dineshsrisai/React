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
      React.createElement("h3", { id: "c1h3" }, "I am child1 h3"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "c2h1" }, "I am child2 h1"),
    React.createElement("h2", { id: "c2h2" }, "I am child2 h2"),
    React.createElement("h3", { id: "c2h3" }, "I am child2 h3"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", { id: "c3h1" }, "I am child3 h1"),
    React.createElement("h2", { id: "c3h2" }, "I am child2 h2"),
    React.createElement("h3", { id: "c3h3" }, "I am child3 h3"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
