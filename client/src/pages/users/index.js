import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Space, Table, Row, Col, Button } from "antd";
//
import Layout from "../../components/Layout";

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
    title: "phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const UsersListingPage = () => (
  <Layout>
    <Row justify="end" style={{ marginBottom: 10 }}>
      <Col>
        <Button type="primary" block>
          <Link to="/add">Add User</Link>
        </Button>
      </Col>
    </Row>
    <Table columns={columns} dataSource={data} pagination={false} />
  </Layout>
);

export default UsersListingPage;
