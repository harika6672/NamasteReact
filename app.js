const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "heading" }, "Hello React"),
    React.createElement(
      "h2",
      { id: "heading 1", key: "test" },
      "Hello React in h2 tag"
    ),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { key: "heading1" }, "Hello React1"),
    React.createElement(
      "h2",
      { id: "heading 2", key: "test1" },
      "Hello React in h2 tag2"
    ),
  ]),
]);
// const heading = React.createElement("h1", {id:"test"}, "Hello World from React")
console.log("Parent ", parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
