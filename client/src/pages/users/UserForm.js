import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button, Form, Input, Row, Col, message } from "antd";
//
import Layout from "../../components/Layout";
import { getUserById, createUser, updateUser } from "../../services/users";

function UserForm() {
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const editMode = location.pathname?.includes("edit");
  useEffect(() => {
    if (editMode) {
      getUserById(id)
        .then((data) => {
          form.setFieldsValue(data);
        })
        .catch(() => {
          message.error("user not found");
          navigator("/");
        });
    }
    return () => {};
  }, [editMode]);

  const onFinish = (values) => {
    if (editMode) {
      updateUser(id, values)
        .then(() => {
          message.success("new user updated successfully!");
          navigator("/");
        })
        .catch(() => {
          message.error("failed to update new user!");
        });
    } else {
      createUser(values)
        .then(() => {
          message.success("new user added successfully!");
          navigator("/");
        })
        .catch(() => {
          message.error("failed to add new user!");
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout>
      <Row justify="center">
        <Col span={24} xl={12}>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Invalid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="phone"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone!",
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
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
