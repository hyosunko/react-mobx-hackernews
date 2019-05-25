import React from "react";
import "./Story.css";
import Story from "./Story";

const Stories = ({ stories }) => (
  <div className="stories">
    {(stories || []).map(story => (
      <Story story={story} key={story.objectID} />
    ))}
  </div>
);
export default Stories;
