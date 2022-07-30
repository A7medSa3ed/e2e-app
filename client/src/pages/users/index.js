import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Space, Table, Row, Col, Button, Popconfirm, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
//
import Layout from "../../components/Layout";
//
import { getAllUsers, deleteUser } from "../../services/users";

const UsersListingPage = () => {
  const navigator = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loadData = () => {
    setIsLoading(true);
    getAllUsers()
      .then((response) => {
        setIsLoading(false);
        setData(response);
      })
      .catch((e) => {
        setIsLoading(false);
        message.error("unexpected error!");
      });
  };
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleConfirmDelete = (id) => {
    deleteUser(id)
      .then(() => {
        message.success("deleted succesfully!");
        loadData();
      })
      .catch(() => {
        message.error("failed to delete!");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, row) => <Link to={`/edit/${row.id}`}>{text}</Link>,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" align="center">
          <Button
            type="primary"
            shape="round"
            icon={<EditOutlined />}
            onClick={() => {
              navigator(`/edit/${record.id}`);
            }}
          />
          <Popconfirm
            placement="top"
            title="Are you sure to delete this user?"
            onConfirm={() => handleConfirmDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="primary"
              shape="round"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <Layout>
      <Row justify="end" style={{ marginBottom: 10 }}>
        <Col>
          <Button type="primary" block>
            <Link to="/add">Add User</Link>
          </Button>
        </Col>
      </Row>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Layout>
  );
};

export default UsersListingPage;
