import React from "react";
import "./Styles.css";
import UIExample from "z-react-cmp";

const App = () => {
    return (
        <div>
            <h1>A normal h1</h1>
            <UIExample text="a text prop from app1"></UIExample>
        </div>
    );
};

export default App;