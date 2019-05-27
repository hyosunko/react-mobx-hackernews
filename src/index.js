import React from "react";
import ReactDOM from "react-dom";
import { autorun } from "mobx";
import "./index.css";
import App from "./components/App";
import store from "./stores";

function render() {
  ReactDOM.render(
    <App
      stories={store.storyStore.readableStories}
      onArchive={objectID => store.archiveStore.archivedStoryIds.push(objectID)}
    />,
    document.getElementById("root")
  );
}

autorun(render);
