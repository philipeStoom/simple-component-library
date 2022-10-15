import React from "react";
import { Button, TextInput } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
    <Button name="test"></Button>
  </div>
);

export default App;
