import React from "react";
import { Button, TextInputTest } from "../lib";
import { TextInput } from "simple-component-library";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInputTest label="Email Address" placeholder="name@example.com" />
    <Button name="test"></Button>


    <TextInput label="Email Address 543" placeholder="name@example.com" />
  </div>
);

export default App;
