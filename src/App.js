import React from "react";
import "./styles.css";

import { Example } from "./Example";
import { Subscriber, AlertTopic } from "./PubSub";

export default function App() {
  return (
    <div className="App">
      <Example />
      <Subscriber topic={AlertTopic}>{text => <h1>{text}</h1>}</Subscriber>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
