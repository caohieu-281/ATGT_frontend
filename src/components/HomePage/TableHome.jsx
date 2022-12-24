import React, { useState } from "react";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Địa điểm",
    dataIndex: "address",
  },
  {
    title: "Thời gian",
    dataIndex: "time",
  },
  {
    title: "Camera",
    dataIndex: "camera",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a className="text-blue-700">Go to camera</a>,
  },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    time: `11:00 24/12/2022`,
    camera: 2,
    address: `Hai Ba Trung, Ha Noi`,
  });
}

const TableHome: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const start = () => {
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="px-5">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableHome;
