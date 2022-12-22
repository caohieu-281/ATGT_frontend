import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";
// import Button from "../components/ButtonConva/Button";
import { Modal } from "antd";

export default function CameraScreen() {
  const url = "https://www.youtube.com/watch?v=urZ0bhF9bB4";
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log("sdkfskhfasf");
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(false);
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

  const confirm = () => {
    Modal.warning({
      title: "Bạn chưa thêm vùng vi phạm. Hãy thêm!!!",
      icon: <ExclamationCircleOutlined />,
      okText: "Thêm",
      onOk: () => {
        return handleOk();
      },
    });
  };

  useEffect(() => {
    confirm();
  }, []);

  return (
    <div className="w-100 container-fluid mt-3 mb-5">
      <>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleClick}
          onCancel={handleCancel}
          width={1024}
          bodyStyle={{height:600}}
        >
          <MultipleCanvas />
        </Modal>
      </>
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
    </div>
  );
}
