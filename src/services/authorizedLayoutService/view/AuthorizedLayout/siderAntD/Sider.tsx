import {
   DesktopOutlined,
   FileOutlined,
   PieChartOutlined,
   TeamOutlined,
   UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";

import './SiderStyles.css'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
   label: React.ReactNode,
   key: React.Key,
   icon?: React.ReactNode,
   children?: MenuItem[]
): MenuItem {
   return {
      key,
      icon,
      children,
      label,
   } as MenuItem;
}

const items: MenuItem[] = [
   getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
   ]),   
];

export const SiderAntD: React.FC = () => {
   const [collapsed, setCollapsed] = useState(false);

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme="light"
         >
            {/* <div className="logo" /> */}
            <Menu
               theme="dark"
               // theme="light"
               // defaultSelectedKeys={["1"]}
               // defaultOpenKeys={["1"]}
               // openKeys={["2"]}
               mode="inline"
               items={items}
            />
         </Sider>
         <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
               
               <div
                  className="site-layout-background"
                  style={{ padding:24, minHeight: 360 }}
               >
                  Bill is a cat.
               </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
               Zametkalar ©2022 Created by Shafigullin & Pronix Group
            </Footer>
         </Layout>
      </Layout>
   );
};

