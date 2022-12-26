import React, { useEffect, useState } from "react";
import { Col, Row, Breadcrumb, Layout, theme } from "antd";
import Map from "../components/Map/Map";
import { Select } from "antd";
import type { SelectProps } from "antd";
import TableHome from "../components/HomePage/TableHome";
import CardHome from "../components/HomePage/CardHome";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { IState, Place } from "../store/models";
import { LatLng } from "leaflet";
import { connect } from "react-redux";
import { setPlacePreviewVisibility, setSelectedPlace } from "../store/actions";

const options: SelectProps["options"] = [
  { label: "Hoan Kiem", value: "Hoan Kiem" },
  { label: "Cau giay", value: "Cau giay" },
  { label: "Hai Ba Trung", value: "Hai Ba Trung" },
];

const { Content } = Layout;

const HomePage: React.FC = ({ places }) => {
  const [listPosition, setPosition] = useState({});
  const [location, setLocation] = useState([
    "Hoan Kiem",
    "Cau giay",
    "Hai Ba Trung",
  ]);
  let navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    var locationObjTemp = {};
    location.map((diaDiem) => {
      // ["hoan kiem", "hai ba trung", ...]

      places.map((item) => {
        // [{{title: 'Ngã tư sở', description: 'Ngã tư sở Hà Nội', picture:...}, {{title: 'Ngã tư sở', description: 'Ngã tư sở Hà Nội', picture:}]
        if (item.district === diaDiem) {
          if (diaDiem in locationObjTemp) {
            locationObjTemp[diaDiem].push(item);
          } else locationObjTemp[diaDiem] = [item];
        }
      });
    });
    setPosition(locationObjTemp);
  }, [location, places]);

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
                defaultValue={["Hoan Kiem", "Cau giay", "Hai Ba Trung"]}
                onChange={handleChange}
                options={options}
              />
            </div>
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
                  style={{
                    boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
                    height: "100%",
                  }}
                >
                  {location.map((diaDiem) => {
                    return (
                      <div
                        key={diaDiem}
                        className="mt-2 mx-3"
                        style={{
                          boxShadow: ".5px .5px 5px .4em rgba(0,0,0,.1)",
                        }}
                      >
                        <p className="text-center font-bold text-lg pt-2">
                          {diaDiem}
                        </p>
                        {listPosition[diaDiem]?.map((camera, idx) => {
                          if (idx % 2 === 0)
                            if (idx + 1 !== listPosition[diaDiem].length) {
                              return (
                                <>
                                  <Row
                                    justify="space-between"
                                    style={{ height: "100%" }}
                                  >
                                    <Col span={12}>
                                      <div key={camera.title}>
                                        <div
                                          onClick={() => {
                                            navigate("/camera-exist");
                                          }}
                                          className="mx-2 mb-3"
                                        >
                                          <CardHome
                                            imageUrl={camera.picture}
                                            nameCamera={camera.title}
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                    <Col span={12}>
                                      <div key={places[idx + 1].title}>
                                        <div
                                          onClick={() => {
                                            navigate("/camera-exist");
                                          }}
                                          className="mx-2 mb-3"
                                        >
                                          <CardHome
                                            imageUrl={
                                              listPosition[diaDiem][idx + 1]
                                                ?.picture
                                            }
                                            nameCamera={
                                              listPosition[diaDiem][idx + 1]
                                                ?.title
                                            }
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </>
                              );
                            } else {
                              return (
                                <>
                                  <Row
                                    justify="space-between"
                                    style={{ height: "100%" }}
                                  >
                                    <Col span={12}>
                                      <div key={camera.title}>
                                        <div
                                          onClick={() => {
                                            navigate("/camera");
                                          }}
                                          className="mx-2 mb-3"
                                        >
                                          <CardHome
                                            imageUrl={camera.picture}
                                            nameCamera={camera.title}
                                          />
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </>
                              );
                            }
                        })}
                      </div>
                    );
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
const mapStateToProps = (state: IState) => {
  const { places } = state;
  return {
    places: places.places,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePreview: (payload: boolean) =>
      dispatch(setPlacePreviewVisibility(payload)),
    setPlaceForPreview: (payload: Place) => dispatch(setSelectedPlace(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
