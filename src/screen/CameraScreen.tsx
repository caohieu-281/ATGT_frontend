import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import MultipleCanvas from "../components/DrawPolygon/MultipleCanvas";
import { Breadcrumb, Modal, notification, theme } from "antd";
// import SendImgViaTelegram from "../bot/SendImgViaTelegram";
import { getNewCamera } from "../services/CameraServices";
export default function CameraScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [timeAppear1, setTimeAppear1] = useState(false);
  const [timeAppear2, setTimeAppear2] = useState(false);
  const [timeAppear3, setTimeAppear3] = useState(false);
  // const [api, contextHolder] = notification.useNotification();

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(false);
    setIsVideoOn(true);
    setIsPlay(true);
    getNewCamera()
      .then((res) => {
        if (res.status === 200) {
          console.log("call API ok");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(function () {
      setTimeAppear1(true);
    }, 14000);
  };

  const createViPham2 = () => {
    setTimeout(() => {
      setTimeAppear2(true);
    }, 1000);
  };

  const createViPham3 = () => {
    setTimeout(() => {
      setTimeAppear3(true);
    }, 1000);
  };

  const viPham1 = {
    time:
      "Thời điểm vi phạm: 10:35 27/12/2022\nĐịa điểm: Phố Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
    image: "img/10_1/0.jpg",
  };
  const viPham2 = {
    time:
      "Thời điểm vi phạm: 10:35 27/12/2022\nĐịa điểm: Phố Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
    image: "img/10_1/1.jpg",
  };
  const viPham3 = {
    time:
      "Thời điểm vi phạm: 10:35 27/12/2022\nĐịa điểm: Phố Hàng Bông, Quận Hoàn Kiếm, Hà Nội",
    image: "img/10_1/2.jpg",
  };

  const confirm = () => {
    Modal.warning({
      title: "Bạn chưa thêm vùng vi phạm. Hãy thêm!!!",
      icon: <ExclamationCircleOutlined />,
      okText: "Thêm",
      okButtonProps: { style: { backgroundColor: "blue" } },
      onOk: () => {
        return handleOk();
      },
    });
  };

  useEffect(() => {
    confirm();
  }, []);

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
    <div className="w-100 container-fluid mt-3 mb-5">
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
      <Modal
        title="Thêm vùng vi phạm"
        open={isModalOpen}
        onOk={handleClick}
        onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "blue", justifyContent: "center" },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={1024}
        bodyStyle={{ height: 600 }}
      >
        <MultipleCanvas />
      </Modal>

      <div className="row text-center text-lg mb-3">
        <h1 className="">Khu vực: Hoàn Kiếm</h1>
      </div>
      <div className="row justify-content-center px-2">
        <div className="col-7 row">
          {isVideoOn && (
            <ReactPlayer
              url="vid10_1.mp4"
              playing={isPlay}
              loop={true}
              width="100%"
              height="80vh"
            />
          )}
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
