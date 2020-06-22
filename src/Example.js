import React from "react";
import { publish, AlertTopic } from "./PubSub";

export const Example = props => (
  <div>
    <button onClick={() => publish(AlertTopic, "Hello World")}>Click Me</button>
  </div>
);
