import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";
import Button from "../components/ButtonConva/Button";

export default function CameraScreen() {
  const url = "https://www.youtube.com/watch?v=urZ0bhF9bB4";
  const [isVisible, setIsVisible] = useState(false);
  const create = () => {
    setIsVisible(!isVisible);
  };

  const viPham = [
    {
      time: "16:23:23",
      image: "img/vi_pham.png",
    },
    {
      time: "16::50:01",
      image: "img/vi_pham.png",
    },
    {
      time: "17:00:00",
      image: "img/vi_pham.png",
    },
  ];

  return (
    <div className="w-100 container-fluid mt-3 mb-5">
      <button type="button" className="btn btn-primary">
        Back
      </button>
      <div className="row text-center  mb-3">
        <h1 className="">Khu vực: Ngã Tư Sở</h1>
      </div>
      <div className="row justify-content-center px-2">
        <div className="col-7 row">
          <ReactPlayer
            // playing={true}
            url={url}
            width="100%"
            height="75vh"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              facebook: {
                appId: "12345",
              },
            }}
          />
          <div className="row">
            <div className="col"></div>
            <div className="col">
              {/* <Button name="Thêm vùng vi phạm" onClick={create} /> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Thêm vùng vi phạm
              </button>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <MultipleCanvas />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
        <div
          className="col-5"
          style={{
            boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
          }}
        >
          <h3 className="text-center pt-3 pb-2">
            Những phương tiện vi phạm giao thông
          </h3>
          {/* list */}
          <div className="overflow-auto" style={{ height: "600px" }}>
            {viPham.map((item) => {
              return (
                <div
                  className="block p-3 m-3 shadow-sm"
                  style={{ backgroundColor: "aliceblue" }}
                >
                  <div className="image">
                    <img src={item.image} alt="" className="w-100" />
                  </div>
                  <div className="time text-center pt-3 fw-bold">
                    {item.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {isVisible && (
        <>
          <div className="modal-dialog modal-dialog-centered">
            <div>
              <MultipleCanvas />
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Button name="Save" onClick={create} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
