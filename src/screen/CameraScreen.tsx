import React from "react";
import ReactPlayer from "react-player";

export default function CameraScreen() {
  const url = "rtsp://118.70.32.198:80/Streaming/Channels/101";
  return (
    <div>
      <h1 className="text-xl">Hello world!</h1>
      <ReactPlayer
        playing={true}
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
