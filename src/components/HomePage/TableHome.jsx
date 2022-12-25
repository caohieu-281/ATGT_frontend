import React, { useState } from "react";
import { Button, Modal, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

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
      render: () => (
        <a
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="text-blue-700"
        >
          Xem Hình Ảnh
        </a>
      ),
    },
  ];
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      <Modal
        title="Hình ảnh vi phạm"
        open={isModalOpen}
        // onOk={handleClick}
        onCancel={handleCancel}
        // cancelButtonProps={{ disabled: true }}

        width={1024}
        bodyStyle={{ height: 600 }}
      >
        <img src="https://static.kinhtedothi.vn/images/upload/2021/12/25/a573cb83-d9a3-4000-870e-d64c3c4a4a7b.jpg" />
      </Modal>
    </div>
  );
};

export default TableHome;
