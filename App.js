const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div",
        { id: "child" },
        [React.createElement("h1", {}, "Hello Welcome to the course!"),
        React.createElement("h2", {}, "hi iam h2 tag")]
    ),
    React.createElement("div",
        { id: "child2" },
        [React.createElement("h1", {}, "Hello Welcome to the course!"),
        React.createElement("h2", {}, "hi iam h2 tag")]
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);