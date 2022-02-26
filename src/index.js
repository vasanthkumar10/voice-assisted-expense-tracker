import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="3cd079b6-abed-4dee-bdcf-9590ebac13b3" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
