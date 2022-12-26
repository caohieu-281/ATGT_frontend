import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { connect } from "react-redux";
import { setAllPlaces } from "../../store/actions";
import { IState, Place } from "../../store/models";

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
data.unshift({
  key: 100,
  time: `11:00 26/12/2022`,
  camera: "Nga Tu So",
  address: `Nga Tu So, Ha Noi`,
});

const TableHome: React.FC = ({ places, setPlaces }) => {
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
  useEffect(() => {
    // ajax request after empty completing
    setTimeout(() => {
      var listTemp = [];
      for (let i = 0; i < 46; i++) {
        listTemp.push(i);
      }
      setSelectedRowKeys(listTemp);
    }, 1000);
  }, []);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log(
      "🚀 ~ file: TableHome.jsx:78 ~ onSelectChange ~ newSelectedRowKeys",
      newSelectedRowKeys
    );
    if (newSelectedRowKeys.indexOf(100) !== -1) {
      const placeTemp = places.map((diaDiem) => {
        if (diaDiem.title === "Ngã tư sở") {
          return { ...diaDiem, isWarning: false };
        } else {
          return diaDiem;
        }
      });
      console.log(
        "🚀 ~ file: TableHome.jsx:92 ~ placeTemp ~ placeTemp",
        placeTemp
      );
      setPlaces(placeTemp);
      console.log("🚀 ~ file: TableHome.jsx:86 ~ placeTemp ~ diaDiem", places);
    }
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
        onOk={handleCancel}
        // onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "blue", justifyContent: "center" },
        }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={1024}
        bodyStyle={{ height: 600 }}
      >
        <img src="https://static.kinhtedothi.vn/images/upload/2021/12/25/a573cb83-d9a3-4000-870e-d64c3c4a4a7b.jpg" />
      </Modal>
    </div>
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
    setPlaces: (payload: Place[]) => dispatch(setAllPlaces(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableHome);
