import React from "react";

const UIExample = ({ text = "" }) => {
  return (
    <div>
      <h1>Shared React UI component with props injected: {text}</h1>
    </div>
  );
};

export default UIExample;