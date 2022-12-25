import React, { useState } from "react";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, Navigate, useNavigate } from "react-router-dom";

// type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Map", "home", <DesktopOutlined />),
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
      onChange={(value) => {
        console.log("123");
      }}
    >
      <div
        style={{
          height: 40,
          margin: 16,
          //   background: "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => {
          navigate("/home");
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
          }}
          src="https://pbgdpl.tayninh.gov.vn/uploads/news/2020_10/atgt.jpg"
        />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["home"]}
        mode="inline"
        items={items}
        onClick={(e) => {
          navigate(`/${e.key}`);
        }}
      />
    </Sider>
  );
};

export default Sidebar;
