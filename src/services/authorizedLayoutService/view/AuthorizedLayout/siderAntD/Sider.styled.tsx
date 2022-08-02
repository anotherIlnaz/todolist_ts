import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";

export const SiderSC = styled(Sider)``;

export const LayoutSC = styled(Layout)`
   .site-layout-background {
      position: absolute;
      left: 200px;
      top: 50px;
   }

   .ant-layout-sider {
      min-height: 100vh;
   }
   .site-layout .site-layout-background {
      background: rgba(232, 232, 232, 0);
   }
`;
