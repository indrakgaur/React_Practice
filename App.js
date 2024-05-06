const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-one" }, [
    React.createElement("h1", { id: "child-one-h1" }, "H1 Tag"),
    React.createElement("h2", { id: "child-one-h2" }, "H2 Tag"),
  ]),
  React.createElement("div", { id: "child-two" }, [
    React.createElement("h1", { id: "child-two-h1" }, "H1 Tag"),
    React.createElement("h2", { id: "child-two-h2" }, "H2 Tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
