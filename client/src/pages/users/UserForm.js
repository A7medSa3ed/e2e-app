import React from "react";
import Layout from "../../components/Layout";

import { Button, Form, Input, Row, Col } from "antd";
function UserForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <Row justify="center">
        <Col xl={12}>
          <Form
            layout="vertical"
            name="user-form"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="User Name" required>
              <Input placeholder="user name" />
            </Form.Item>
            <Form.Item
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item label="age">
              <Input type="number" placeholder="age" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}

export default UserForm;
