import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading1" }, "Hello World ");

//React Element

//React Componet
//class component => older way => uses JS Classes
//functional component => newer way => uses JS Functions == normal JS functions

//   imp > any React Component should start with Capital letter...
// a funtion which returing some piece of React element or we can say some JSX code is react function component

const JsxHeading = () => <h1>This is heading from JSX 🚀</h1>;

const JsxHeading2 = function () {
  return <h1>This is heading from JSX 🚀</h1>;
};
//jsxHeading2 and jsxHeading are same

const HeadingComponent = () => {
  return (
    <>
      <JsxHeading />
      <JsxHeading></JsxHeading>
      {JsxHeading()}
      {/* calling function component > component inside component > component composition */}
      <h1>This is heading one from Component 🚀</h1>
      {100 + 200} {/* we can write JS inside js using {} */}
      {/* {jsxHeadingElement} */}
      <h2>This is heading two from Component 🚀</h2>
    </>
  );
};

const jsxHeadingElement = (
  <h1>
    This is heading from JSX react element🚀
    {/* {HeadingComponent()} */}
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeadingElement);

// root.render(<HeadingComponent />);

// React element > simple JS object
// React component > just making the same react element or JS object into arrow function

// any other simple function which is returning some JSX code is also a React component
//we can use {} to write any JS inside JSX
//also to include any react element inside another react element
//also to include any react component inside another react component
//React component should return only one parent element

//React component composition > calling one component inside another component
// JSX sanitizes data before executing it
//{data} => data inside {} will be sanitized known as JSX sanitization => prevent cross site scripting attack => XSS attack => preventing attacker to run any malicious code on our website/browser...
// JSX sanitization is done by React itself

// bellow 3 component call are same
// <JsxHeading />
// <JsxHeading></JsxHeading>
// {JsxHeading()} > function call  inside curly braces... as above functions  are simple JS functions at the end of the day
