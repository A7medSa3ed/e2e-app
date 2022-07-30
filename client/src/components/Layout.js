import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => (
  <Layout className="layout">
    <Header className="header">
      <Link to="/" className="logo">
        E2E App
      </Link>
    </Header>
    <Content>
      <div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      E2E App ©{new Date().getFullYear()} Created by Mahmoud A.tomy
    </Footer>
  </Layout>
);

export default CustomLayout;
