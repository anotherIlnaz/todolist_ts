import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const antIcon = <LoadingOutlined style={{ fontSize: 70 }} spin />;

const SpinSC = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;

   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Loader: React.FC = () => (
   <SpinSC>
      <Spin indicator={antIcon} />{" "}
   </SpinSC>
);
