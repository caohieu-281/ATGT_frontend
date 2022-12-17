import React from "react";
import ReactPlayer from "react-player";
import ReactDOM from "react-dom";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";

export default function CameraScreen() {
  const url = "https://www.youtube.com/watch?v=urZ0bhF9bB4";
  return (
    <div>
      <ReactPlayer
        // playing={true}
        url={url}
        // loop="true"
        width="100vh"
        height="100vh"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
          facebook: {
            appId: "12345",
          },
        }}
      />
      <MultipleCanvas />
    </div>
  );
}
