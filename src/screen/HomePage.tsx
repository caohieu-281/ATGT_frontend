import React, { useState } from "react";
import { Col, Row, Breadcrumb, Layout, theme, Modal } from "antd";
import Map from "../components/Map/Map";
import { Select } from "antd";
import type { SelectProps } from "antd";
import TableHome from "../components/HomePage/TableHome";
import CardHome from "../components/HomePage/CardHome";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";

const options: SelectProps["options"] = [
  { label: "Hoan Kiem", value: "Hoan Kiem" },
  { label: "Bach Mai", value: "Bach Mai" },
  { label: "Hai Ba Trung", value: "Hai Ba Trung" },
];

const listCamera = [
  {
    nameCamera: "Camera 1",
    imageUrl:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2016_01_21/2_mtcp.jpg",
  },
  {
    nameCamera: "Camera 2",
    imageUrl:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2016_01_21/2_mtcp.jpg",
  },
  {
    nameCamera: "Camera 3",
    imageUrl:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2016_01_21/2_mtcp.jpg",
  },
  {
    nameCamera: "Camera 4",
    imageUrl:
      "https://image.thanhnien.vn/w1024/Uploaded/2022/pwivoviu/2016_01_21/2_mtcp.jpg",
  },
];

const { Content } = Layout;

const HomePage: React.FC = () => {
  const [location, setLocation] = useState([
    "Hoan Kiem",
    "Bach Mai",
    "Hai Ba Trung",
  ]);
  let navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (value: string) => {
    setLocation(value);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Content style={{ margin: "0 16px", flexDirection: "column" }}>
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
          </Breadcrumb>
          <div style={{ display: "flex", flexDirection: "col", width: "100%" }}>
            <div style={{ width: "50%" }}>
              <label style={{ marginRight: "10px" }}> Địa Điểm </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "50%", marginBottom: "16px" }}
                placeholder="Please select"
                defaultValue={["Hoan Kiem", "Bach Mai", "Hai Ba Trung"]}
                onChange={handleChange}
                options={options}
              />
            </div>
            {/* <div style={{ width: "50%" }}>
              <label style={{ marginRight: "10px" }}> Phường </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "50%", marginBottom: "16px" }}
                placeholder="Please select"
                defaultValue={["Hoan Kiem", "Bach Mai", "Hai Ba Trung"]}
                onChange={handleChange}
                options={options}
              />
            </div> */}
          </div>
          <div className="text-center font-bold text-xl mb-3">
            Danh sách camera
          </div>
          <div style={{ height: "60vh" }}>
            <Row justify="space-between" style={{ height: "100%" }}>
              <Col span={15}>
                <Map location={location}></Map>
              </Col>
              {location && (
                <Col
                  span={8}
                  className="overflow-auto"
                  style={{ height: "100%" }}
                >
                  {location.map((diaDiem) => {
                    if (diaDiem === "Hoan Kiem") {
                      return (
                        <div key={diaDiem}>
                          <p className="text-center font-bold text-lg">
                            {diaDiem}
                          </p>
                          {listCamera.map((camera) => (
                            <div key={camera.nameCamera}>
                              <div
                                onClick={() => {
                                  navigate("/camera");
                                }}
                                className="mx-5 mb-3"
                              >
                                <CardHome nameCamera={camera.nameCamera} />
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div key={diaDiem}>
                          <p className="text-center font-bold text-lg">
                            {diaDiem}
                          </p>
                          {listCamera.map((camera) => (
                            <div key={camera.nameCamera}>
                              <div
                                onClick={() => {
                                  navigate("/camera-exist");
                                }}
                                className="mx-5 mb-3"
                              >
                                <CardHome nameCamera={camera.nameCamera} />
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  })}
                </Col>
              )}
            </Row>
          </div>
          <div className="text-center font-bold text-xl mt-3">
            Danh sách vi phạm
          </div>

          <div className="mt-3">
            <TableHome></TableHome>
          </div>
          <Form />
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
