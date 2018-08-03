const React = require("react");
const ReactDom = require("react-dom");

const { SlideableGrid } = require("../index.jsx");

ReactDom.render(
  <SlideableGrid
    rows={["100px", "100px", "100px"]}
    columns={["100px", "100px", "100px"]}
  >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </SlideableGrid>,
  document.getElementById("app"),
);
