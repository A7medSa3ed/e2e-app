import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => (
  <Layout className="layout">
    <Header className="header">
      <div className="logo">E2E App</div>
    </Header>
    <Content>
      <div className="site-layout-content">{props.children}</div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Ant Design ©{new Date().getFullYear()} Created by Mahmoud A.tomy
    </Footer>
  </Layout>
);

export default CustomLayout;
