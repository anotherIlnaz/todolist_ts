import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useMemo, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { LayoutSC, SiderSC } from "./Sider.styled";
import { SiderAntDProps } from "./Sider.types";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
   label: React.ReactNode,
   key: React.Key,
   children?: MenuItem[]
): MenuItem {
   return {
      key,
      children,
      label,
   } as MenuItem;
}

export const SiderAntD: React.FC<SiderAntDProps> = ({ desks }) => {
   const [collapsed, setCollapsed] = useState(false);
   const navigate = useNavigate();

   const menuItems = useMemo(() => {
      return [
         getItem(
            "Desks",
            "desks",
            desks.map((desk) => getItem(desk.name, desk._id))
         ),
      ];
   }, [desks]);

   return (
      <LayoutSC>
         <SiderSC
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            theme="light"
         >
            <Menu
               theme="dark"
               mode="inline"
               items={menuItems}
               onClick={(value) => {
                  const keyPath = value.keyPath;
                  const path = `/${keyPath[1]}/${keyPath[0]}`;

                  navigate(path);
               }}
            />
         </SiderSC>
      </LayoutSC>
   );
};
