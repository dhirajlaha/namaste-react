const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a h1 tag nested inside div"),
    React.createElement("h2", {}, "This is a h2 tag nested inside div"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a h1 tag nested inside div"),
    React.createElement("h2", {}, "This is a h2 tag nested inside div"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
