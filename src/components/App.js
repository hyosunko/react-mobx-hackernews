import React from "react";
import Stories from "./Stories";

import "./App.css";

const App = ({ stories }) => (
  <div className="app">
    <Stories stories={stories} />
  </div>
);

export default App;
