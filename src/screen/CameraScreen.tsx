import React from "react";
import ReactPlayer from "react-player";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";

export default function CameraScreen() {
  const url = "https://www.youtube.com/watch?v=urZ0bhF9bB4";
  return (
    <div className="container-fluid m-0 pt-5" style={container}>
      <div style={formatCam}>
        <ReactPlayer
          // playing={true}
          url={url}
          width="100vh"
          height="60vh"
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
      <MultipleCanvas />
    </div>
  );
}

const container = {
  // marginTop:0,
  backgroundColor: "aliceblue",
  // paddingTop:20,
};

const formatCam = {
  display: "flex",
  justifyContent: "center",
  
};
