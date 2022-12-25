import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";
import { Breadcrumb, Modal, notification, theme } from "antd";
import { visitParameterList } from "typescript";
// import SendImgViaTelegram from "../bot/SendImgViaTelegram";

export default function CameraScreenExist() {
  const [isPlay, setIsPlay] = useState(false);
  const [timeAppear1, setTimeAppear1] = useState(false);
  const [timeAppear2, setTimeAppear2] = useState(false);
  const [timeAppear3, setTimeAppear3] = useState(false);

  const openNotification = () => {
    notification.warning({
      message: "Xuát hiện vi phạm",
      description: "Phát hiện phương tiện vi phạm. Đã gửi về hệ thống",
      duration: 3,
      style: {
        width: 430,
      },
    });
  };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleOk = () => {
  //   console.log("sdkfskhfasf");
  //   setIsModalOpen(true);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  const handleClick = () => {
    setIsPlay(true);
  };

  const createViPham2 = () => {
    setTimeout(() => {
      setTimeAppear2(true);
    }, 5000);
    // SendImgViaTelegram(
    //   "https://drive.google.com/file/d/1q0Me1WhqO2aWaOUfI111fM50Hl3gKvco/view?usp=sharing"
    // );
  };

  const createViPham3 = () => {
    setTimeout(() => {
      setTimeAppear3(true);
    }, 7000);
    // SendImgViaTelegram(
    //   "https://drive.google.com/file/d/1q0Me1WhqO2aWaOUfI111fM50Hl3gKvco/view?usp=sharing"
    // );
  };

  const viPham = [
    {
      time: "8:23:23",
      image: "img/demo_result.jpg",
    },
    {
      time: "8:23:23",
      image: "img/demo_result.jpg",
    },
    {
      time: "8:23:23",
      image: "img/demo_result.jpg",
    },
  ];

  const viPham1 = {
    time: "16:23:23",
    image: "img/demo_result.jpg",
  };
  const viPham2 = {
    time: "16:50:01",
    image: "img/demo_result.jpg",
  };
  const viPham3 = {
    time: "17:00:00",
    image: "img/demo_result.jpg",
  };

  useEffect(() => {
    // setIsPlay(true);

    setTimeout(function () {
      setTimeAppear1(true);
    }, 2000);
  }, [isPlay]);

  useEffect(() => {
    if (timeAppear1 && !timeAppear2) {
      openNotification();
    }
    if (timeAppear2 && !timeAppear3) {
      openNotification();
    }
    if (timeAppear3) {
      openNotification();
    }
  }, [timeAppear1, timeAppear2, timeAppear3]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="w-100 container-fluid mt-3 mb-5" onClick={handleClick}>
      <Breadcrumb
        style={{
          padding: "16px",
          margin: "16px 0",
          background: colorBgContainer,
          color: "blue",
          font: "15px",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Map</Breadcrumb.Item>
        <Breadcrumb.Item>Camera</Breadcrumb.Item>
      </Breadcrumb>

      <div className="row text-center text-lg mb-3">
        <h1 className="">Khu vực: Hai Bà Trưng</h1>
      </div>
      <div className="row justify-content-center px-2">
        <div className="col-7 row">
          <ReactPlayer
            url="vid1.mp4"
            playing={isPlay}
            loop={true}
            width="100%"
            height="80vh"
            // controls={true}
          />
        </div>
        <div
          className="col-5"
          style={{
            boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
            height: "80vh",
          }}
        >
          <h3 className="text-center pt-3 pb-2">
            Những phương tiện vi phạm giao thông
          </h3>
          {/* list */}
          <div className="overflow-auto" style={{ height: "90%" }}>
            {viPham.map((item) => {
              return (
                <div
                  className="block p-3 m-2 shadow-sm"
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
            {timeAppear1 && (
              <>
                <div
                  className="block p-3 m-3 shadow-sm"
                  style={{ backgroundColor: "aliceblue" }}
                >
                  <div className="image">
                    <img src={viPham1.image} alt="" className="w-100" />
                  </div>
                  <div className="time text-center pt-3 fw-bold">
                    {viPham1.time}
                  </div>
                </div>
                {createViPham2()}
              </>
            )}
            {timeAppear2 && (
              <>
                <div
                  className="block p-3 m-3 shadow-sm"
                  style={{ backgroundColor: "aliceblue" }}
                >
                  <div className="image">
                    <img src={viPham2.image} alt="" className="w-100" />
                  </div>
                  <div className="time text-center pt-3 fw-bold">
                    {viPham2.time}
                  </div>
                </div>
                {createViPham3()}
              </>
            )}
            {timeAppear3 && (
              <>
                <div
                  className="block p-3 m-3 shadow-sm"
                  style={{ backgroundColor: "aliceblue" }}
                >
                  <div className="image">
                    <img src={viPham3.image} alt="" className="w-100" />
                  </div>
                  <div className="time text-center pt-3 fw-bold">
                    {viPham3.time}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}