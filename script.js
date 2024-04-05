/*

A video walkthrough of each SVGs source code: https://www.youtube.com/watch?v=kBT90nwUb_o

Follow me on twitter for more: https://twitter.com/HunorBorbely

*/

function Decoration({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[0].svg = Decoration;

function Three({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[1].svg = Three;

function Gingerbread({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[2].svg = Gingerbread;

function House({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[3].svg = House;

function DecorationWithClip({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[4].svg = DecorationWithClip;

function Star({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[5].svg = Star;

function Snowflake({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[6].svg = Snowflake;

function Forest({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[7].svg = Forest;

function DecorationWithGradient({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[8].svg = DecorationWithGradient;

function Snowman({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[9].svg = Snowman;

function ThreeWithCurves({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[10].svg = ThreeWithCurves;

function Gift({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[11].svg = Gift;

function Bell({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[12].svg = Bell;

function Candy({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[13].svg = Candy;

function Ribbon({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[14].svg = Ribbon;

function Bear({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[15].svg = Bear;

function Text({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[16].svg = Text;

function Sleigh({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[17].svg = Sleigh;

function RingingBell({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[18].svg = RingingBell;

function Snowing({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[19].svg = Snowing;

function Background({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[20].svg = Background;


function Clock({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[21].svg = Clock;

function Lights({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[22].svg = Lights;

function Diagram({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[23].svg = Diagram;



function SnowGlobe({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement(
    "img",
    {src: "./1712268485464.gif"},
    null
  ));
}

detailScreens[24].svg = SnowGlobe;

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
    React.createElement(Day, { index: 0, Component: Decoration, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 1, Component: Three, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 2, Component: Gingerbread, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 3, Component: House, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 4, Component: DecorationWithClip, select: setSelection })), /*#__PURE__*/

    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 5, Component: Star, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 6, Component: Snowflake, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 7, Component: Forest, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, {
      index: 8,
      Component: DecorationWithGradient,
      select: setSelection }), /*#__PURE__*/

    React.createElement(Day, { index: 9, Component: Snowman, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 10, Component: ThreeWithCurves, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 11, Component: Gift, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 12, Component: Bell, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 13, Component: Candy, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "big-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 14, Component: Ribbon, select: setSelection }), /*#__PURE__*/

    React.createElement("div", { class: "day twitter" }, "Síguenos", /*#__PURE__*/

    React.createElement("a", { href: "https://twitter.com/ciudadania_i", target: "_top" }, "@ciudadania_i")), /*#__PURE__*/




    React.createElement(Day, { index: 15, Component: Bear, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 16, Component: Text, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 17, Component: Sleigh, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 18, Component: RingingBell, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 19, Component: Snowing, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 20, Component: Background, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "small-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 21, Component: Clock, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 22, Component: Lights, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 23, Component: Diagram, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 24, Component: SnowGlobe, select: setSelection }))),


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