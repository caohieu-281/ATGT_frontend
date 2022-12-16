import React from "react";
import ReactPlayer from "react-player";

export default function CameraScreen() {
  const url = "https://www.youtube.com/watch?v=OoQpHELxIwc";
  return (
    <div>
      <h1 className="text-xl">Hello world!</h1>
      <ReactPlayer
        url={url}
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
    </div>
  );
}
