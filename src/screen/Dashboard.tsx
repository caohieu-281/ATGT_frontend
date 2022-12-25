import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Row, Card, MenuProps, Col, Typography } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Map from "../components/Map/Map";
import { Select } from "antd";
import type { SelectProps } from "antd";
import Preview from "../components/Preview/Preview";

import { ResponsiveContainer, XAxis, YAxis, Tooltip, LabelList, Legend } from 'recharts';
import { LineChart, Line, CartesianGrid } from 'recharts';
import { BarChart, Bar } from 'recharts';
import GaugeChart from 'react-gauge-chart';


const { Title } = Typography;

// data for total and gauge charts
const total1 = 16902
const percent1 = 0.15

const total2 = 41923
const percent2 = 0.86

// data for "Xu phat" bar chart
const data_xuPhat = [
  { month: 'JAN', daXuPhat: 20, chuaXuPhat: 10 },
  { month: 'FEB', daXuPhat: 100, chuaXuPhat: 50 },
  { month: 'MAR', daXuPhat: 150, chuaXuPhat: 30 },
  { month: 'APR', daXuPhat: 90, chuaXuPhat: 20 },
]

// data for "Vi pham" line chart
const data_viPham = [
  { month: '01', soOtoViPham: 20, soXeMayVaPhuongTienKhac: 10 },
  { month: '02', soOtoViPham: 10, soXeMayVaPhuongTienKhac: 50 },
  { month: '03', soOtoViPham: 15, soXeMayVaPhuongTienKhac: 30 },
  { month: '04', soOtoViPham: 50, soXeMayVaPhuongTienKhac: 20 },
  { month: '05', soOtoViPham: 45, soXeMayVaPhuongTienKhac: 50 },
];

// data for "Quan nhieu vi pham" bar chart
const data_quanViPham = [
  { district: 'Ba Đình', caseNum: 15 },
  { district: 'Bắc Từ Liêm', caseNum: 58 },
  { district: 'Cầu Giấy', caseNum: 42 },
  { district: 'Đống Đa', caseNum: 39 },
  { district: 'Hà Đông', caseNum: 31 },
  { district: 'Hai Bà Trưng', caseNum: 32 },
  { district: 'Hoàn Kiếm', caseNum: 35 },
  { district: 'Hoàng Mai', caseNum: 39 },
  { district: 'Long Biên', caseNum: 44 },
  { district: 'Nam Từ Liêm', caseNum: 19 },
  { district: 'Tây Hồ', caseNum: 31 },
  { district: 'Thanh Xuân', caseNum: 30 },
]

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



const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [location, setLocation] = useState(["Hoan Kiem"]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function CustomizedTick(props) {
    const { x, y, stroke, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={10} dy={0} fill="#666" style={{ fontSize: "12px" }}>
          {payload.value.split(" ").map((item, index) => (
            <tspan
              textAnchor="middle"
              x="0"
              dy={index ? 15 : 0}
              key={index}>
              {item}
            </tspan>
          ))}
        </text>
      </g>
    );
  }

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
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Col>
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={12} align="middle">
                    <Card>
                      <Title level={4} style={{ padding: "0", margin: "0" }}>Total</Title>
                      <Title level={2} style={{ color: "#fec71c", padding: "0", margin: "0" }}>{total1}</Title>
                    </Card>
                    <Card>
                      <GaugeChart id="gauge-chart-1"
                        nrOfLevels={4}
                        colors={["#fec71c", "#f26629", "#673693", "#42bed0"]}
                        textColor={"#00000000"}
                        arcWidth={0.5}
                        percent={percent1}
                      />
                      <Title level={4}>7 Ngày</Title>
                    </Card>
                  </Col>
                  <Col span={12} align="middle">
                    <Card>
                      <Title level={4} style={{ padding: "0", margin: "0" }}>Total</Title>
                      <Title level={2} style={{ color: "#49b9c0", padding: "0", margin: "0" }}>{total2}</Title>
                    </Card>
                    <Card>
                      <GaugeChart id="gauge-chart-2"
                        nrOfLevels={4}
                        colors={["#fec71c", "#f26629", "#673693", "#42bed0"]}
                        textColor={"#00000000"}
                        arcWidth={0.5}
                        percent={percent2}
                      />
                      <Title level={4}>1 Tháng</Title>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col span={12} align="middle">
                <Card>
                  <Title level={4}>Số phương tiện đã và chưa xử phạt</Title>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data_xuPhat}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis width={30} />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="daXuPhat"
                        name="Số phương tiện đã xử phạt"
                        fill="#373e93" />
                      <Bar
                        dataKey="chuaXuPhat"
                        name="Số phương tiện chưa xử phạt"
                        fill="#ef1f1f" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col span={12} align="middle">
                <Card>
                  <Title level={4}>Số phương tiện vi phạm</Title>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={data_viPham}>
                      <Line
                        type="monotone"
                        dataKey="soOtoViPham"
                        name="Số ô tô vi phạm"
                        stroke="#e96534" />
                      <Line
                        type="monotone"
                        dataKey="soXeMayVaPhuongTienKhac"
                        name="Số xe máy và các phương tiện khác vi phạm"
                        stroke="#5f3a82" />
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="month" />
                      <YAxis width={30} />
                      <Legend />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
              <Col span={12} align="middle">
                <Card>
                  <Title level={4}>Quận xảy ra nhiều vi phạm</Title>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={data_quanViPham} margin={{ bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="district"
                        tick={<CustomizedTick />}
                        interval={0} />
                      <YAxis width={30} />
                      <Tooltip />
                      <Bar
                        dataKey="caseNum"
                        name="Số vụ vi phạm"
                        fill="#446bb2" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
    </Layout >
  );
};

export default Dashboard;
