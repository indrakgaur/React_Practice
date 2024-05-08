import React from "react";
import ReactDOM from "react-dom/client";

const headingJSX = <h1 className='test'>Namaste React!</h1>;

const Title = () => {
  return <h2 className='child-div'>Heading 2 from component</h2>;
};

const elem = <h2>Heading 2 from element</h2>;

const Heading = () => {
  return (
    <div id='container'>
      <h1>Heading 1 Component</h1>
      <Title />
      {elem}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
