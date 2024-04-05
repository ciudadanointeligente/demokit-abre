/*

A video walkthrough of each SVGs source code: https://www.youtube.com/watch?v=kBT90nwUb_o

Follow me on twitter for more: https://twitter.com/HunorBorbely

*/

function Image0({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[0].svg = Image0;

function Image1({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268615727.gif"},
    null
  ));
}

detailScreens[1].svg = Image1;

function Image2({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268735155.gif"},
    null
  ));
}

detailScreens[2].svg = Image2;

function Image3({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[3].svg = Image3;

function Image4({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268951829.gif"},
    null
  ));
}

detailScreens[4].svg = Image4;

function Image5({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[5].svg = Image5;

function Image6({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268615727.gif"},
    null
  ));
}

detailScreens[6].svg = Image6;

function Image7({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268735155.gif"},
    null
  ));
}

detailScreens[7].svg = Image7;

function Image8({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[8].svg = Image8;

function Image9({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268951829.gif"},
    null
  ));
}

detailScreens[9].svg = Image9;

function Image10({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[10].svg = Image10;

function Image11({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268615727.gif"},
    null
  ));
}

detailScreens[11].svg = Image11;

function Image12({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[12].svg = Image12;

function Image13({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[13].svg = Image13;

function Image14({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268951829.gif"},
    null
  ));
}

detailScreens[14].svg = Image14;

function Image15({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[15].svg = Image15;

function Image16({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[16].svg = Image16;

function Image17({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268615727.gif"},
    null
  ));
}

detailScreens[17].svg = Image17;

function Image18({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268735155.gif"},
    null
  ));
}

detailScreens[18].svg = Image18;

function Image19({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[19].svg = Image19;

function Image20({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[20].svg = Image20;


function Image21({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268951829.gif"},
    null
  ));
}

detailScreens[21].svg = Image21;

function Image22({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[22].svg = Image22;

function Image23({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268777488.gif"},
    null
  ));
}

detailScreens[23].svg = Image23;



function Image24({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[24].svg = Image24;

function Day({ index, Component, select }) {
  const onMouseEnter = event => event.currentTarget.style["z-index"] = 10;
  const onMouseLeave = event => {
    const target = event.currentTarget;
    // Add a delay to leave enough time for the door to close
    setTimeout(() => {
      target.style["z-index"] = 1;
    }, 1000);
  };

  return /*#__PURE__*/(
    React.createElement("div", {
      class: "day",
      onClick: () => select(index),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave }, /*#__PURE__*/

    React.createElement("div", { class: "cover" }, index + 1), /*#__PURE__*/
    React.createElement(Component, { size: "0.6" })));


}

function App() {
  const [selection, setSelection] = React.useState(undefined);
  const DetailSVG = selection != undefined && detailScreens[selection].svg;

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("h1", null, "Democracia Kit"), /*#__PURE__*/
    React.createElement("p", null, "Herramientas para la democracia local")), /*#__PURE__*/

    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 0, Component: Image0, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 1, Component: Image1, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 2, Component: Image2, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 3, Component: Image3, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 4, Component: Image4, select: setSelection })), /*#__PURE__*/

    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 5, Component: Image5, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 6, Component: Image6, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 7, Component: Image7, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 8, Component: Image8, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 9, Component: Image9, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 10, Component: Image10, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 11, Component: Image11, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 12, Component: Image12, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 13, Component: Image13, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "big-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 14, Component: Image14, select: setSelection }), /*#__PURE__*/

    React.createElement("div", { class: "day twitter" }, "Síguenos", /*#__PURE__*/

    React.createElement("a", { href: "https://twitter.com/ciudadania_i", target: "_top" }, "@ciudadania_i")), /*#__PURE__*/




    React.createElement(Day, { index: 15, Component: Image15, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 16, Component: Image16, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 17, Component: Image17, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 18, Component: Image18, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 19, Component: Image19, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 20, Component: Image20, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "small-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 21, Component: Image21, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 22, Component: Image22, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 23, Component: Image23, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 24, Component: Image24, select: setSelection }))),


    selection != undefined && /*#__PURE__*/
    React.createElement("div", { className: "detail-screen" }, /*#__PURE__*/
    React.createElement("div", { className: "close", onClick: () => setSelection(undefined) }), /*#__PURE__*/
    React.createElement("div", { class: "content" }, /*#__PURE__*/
    React.createElement(DetailSVG, { size: "1" })), /*#__PURE__*/


    React.createElement("div", { class: "details" }, /*#__PURE__*/
    React.createElement("h1", null, detailScreens[selection].title), /*#__PURE__*/
    React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: detailScreens[selection].description } }),


))));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));