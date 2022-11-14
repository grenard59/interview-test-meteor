import { Layout } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;
import { DisplayUnsortedList } from "./object/DisplayUnsortedList";
import { GenerateObjectForm } from "./object/GenerateObjectForm";
import { Space } from "antd";

export const App = () => (
  <Layout>
    <Header>
      <h1 style={{ color: "white" }}>Resolve - Exercice</h1>
    </Header>
    <Content style={{ display: "flex", justifyContent: "center" }}>
      <Space
        style={{ margin: "10px 0 0 0" }}
        display="flex"
        size={10}
        direction="vertical"
        align="center"
      >
        <GenerateObjectForm />
        <DisplayUnsortedList />
      </Space>
    </Content>
    <Footer />
  </Layout>
);
