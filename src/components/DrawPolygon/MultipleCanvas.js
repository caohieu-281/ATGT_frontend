import React, { useMemo, useRef, useState, useEffect } from "react";
import { Stage, Layer, Image, Group, Line, Circle } from "react-konva";
import Button from "../ButtonConva/Button";

const videoSource = "./space_landscape.jpg";
const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
  backgroundColor: "aliceblue",
};
const columnStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
  backgroundColor: "aliceblue",
};
const MultipleCanvas = () => {
  const vertexRadius = 6;
  const [image, setImage] = useState();
  const imageRef = useRef(null);
  const dataRef = useRef(null);
  const [size, setSize] = useState({});
  const [position, setPosition] = useState([0, 0]);
  const [data, setData] = useState([
    {
      points: [
        // 342.7272720336914, 218.00821721816132, 315.7272720336914,
        // 135.0050886442742, 292.7272720336914, 125.0047117076613,
      ],
    },
  ]);
  const calcDistTwoPoints = (x1, y1, x2, y2) => {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2;
  };

  const videoElement = useMemo(() => {
    const element = new window.Image();
    element.width = 300;
    element.height = 302;
    element.src = videoSource;
    return element;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSource]); //it may come from redux so it may be dependency that's why I left it as dependecny...
  useEffect(() => {
    const onload = function () {
      setSize({
        width: videoElement.width,
        height: videoElement.height,
      });
      setImage(videoElement);
      imageRef.current = videoElement;
    };
    videoElement.addEventListener("load", onload);
    return () => {
      videoElement.removeEventListener("load", onload);
    };
  }, [videoElement]);

  const getMousePos = (stage) => {
    return [stage.getPointerPosition().x, stage.getPointerPosition().y];
  };

  const undo = () => {
    var tempData = data;
    tempData[tempData.length - 1].points = tempData[
      tempData.length - 1
    ].points.slice(0, -2);
    setData(tempData);
    setPosition(
      tempData[tempData.length - 1].points[
        tempData[tempData.length - 1].points - 1
      ]
    );
  };

  const reset = () => {
    var tempData = data;
    tempData = tempData.slice(0, -1);
    setData(tempData);
  };

  const add = () => {
    var dataTemp = data.concat({ points: [] });
    setData(dataTemp);
  };

  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const mousePos = getMousePos(stage);
    setPosition(mousePos);
  };

  const handleMouseDown = () => {
    if (data.length) {
      var tempData = data;
      var x1 = tempData[tempData.length - 1].points[0];
      var y1 = tempData[tempData.length - 1].points[1];
      if (calcDistTwoPoints(x1, y1, position[0], position[1]) < 150) {
        tempData[tempData.length - 1].points = tempData[
          tempData.length - 1
        ].points.concat([x1, y1]);
        setData(tempData);
        add();
      } else {
        tempData[tempData.length - 1].points =
          tempData[tempData.length - 1].points.concat(position);
        setData(tempData);
      }
    } else {
      setData([{ points: [position] }]);
    }
  };
  return (
    <div style={wrapperStyle}>
      <div style={columnStyle}>
        <Stage
          width={size.width || 650}
          height={size.height || 302}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
        >
          <Layer>
            <Image
              ref={imageRef}
              image={image}
              x={0}
              y={0}
              width={size.width}
              height={size.height}
            />
            {data.map((listPoint, idx) => {
              if (listPoint.points.length) {
                return (
                  <Group key={idx}>
                    <Line
                      key={idx}
                      points={listPoint.points}
                      stroke="#00F1FF"
                      strokeWidth={3}
                      fill="rgb(140,30,255,0.5)"
                    ></Line>

                    {listPoint.points.map((element, index) => {
                      if (index % 2 === 0) {
                        const x = element;
                        const y = listPoint.points[index + 1];
                        return index === 0 ? (
                          <Circle
                            key={index}
                            x={x}
                            y={y}
                            radius={vertexRadius}
                            fill="#7CFC00"
                            stroke="#00F1FF"
                            strokeWidth={2}
                            draggable
                          />
                        ) : (
                          <Circle
                            key={index}
                            x={x}
                            y={y}
                            radius={vertexRadius}
                            fill="#FF019A"
                            stroke="#00F1FF"
                            strokeWidth={2}
                            draggable
                          />
                        );
                      }
                    })}
                  </Group>
                );
              }
            })}
          </Layer>
        </Stage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button name="Undo" onClick={undo} />
          <Button name="Reset" onClick={reset} />
          <Button name="Add Polygon" onClick={add} />
        </div>
      </div>
      <div
        ref={dataRef}
        style={{
          width: 375,
          height: 302,
          boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};

export default MultipleCanvas;
