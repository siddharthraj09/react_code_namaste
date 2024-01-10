import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "headings" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "headings" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "headings" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "headings" }, "I'm an h2 tag"),
  ]),
]);
const heading = React.createElement("h1", { id: "headings" }, "Hello world!"); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //it is responsible for converting it to h1 tag and put it upon root.
