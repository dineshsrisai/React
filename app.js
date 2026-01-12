import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("h1", { id: "h1tag" }, "50 days challenge");

const Heading = () => {
  return (
    <div id="container">
      <h1 className="heading">50 days challenge</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
