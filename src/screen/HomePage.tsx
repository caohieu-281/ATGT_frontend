import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, MenuProps, Row, Breadcrumb, Layout, Menu, theme } from "antd";
import Map from "../components/Map/Map";
import { Select } from "antd";
import type { SelectProps } from "antd";
import Preview from "../components/Preview/Preview";
import TableHome from "../components/HomePage/TableHome";

const options: SelectProps["options"] = [
  { label: "Hoan Kiem", value: "Hoan Kiem" },
  { label: "Bach Mai", value: "Bach Mai" },
  { label: "Hai Ba Trung", value: "Hai Ba Trung" },
];

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const HomePage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [location, setLocation] = useState(["Hoan Kiem"]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChange = (value: string) => {
    setLocation(value);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
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
              {/* <div> */}
              <label style={{ marginRight: "10px" }}> Địa Điểm </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "50%", marginBottom: "16px" }}
                placeholder="Please select"
                defaultValue={["Hoan Kiem"]}
                onChange={handleChange}
                options={options}
              />
            </div>
            <div style={{ width: "50%" }}>
              {/* <div> */}
              <label style={{ marginRight: "10px" }}> Phường </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "50%", marginBottom: "16px" }}
                placeholder="Please select"
                defaultValue={["Hoan Kiem"]}
                onChange={handleChange}
                options={options}
              />
            </div>
          </div>
          <div>
            <Row>
              <Col flex={20}>
                <Map location={location}></Map>
              </Col>
              <Col flex={3}>
                <div>
                  <TableHome></TableHome>
                </div>
              </Col>
            </Row>
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>ATGT - 2022 Camera</Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
