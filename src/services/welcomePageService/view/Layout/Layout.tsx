import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { ModeSwitcher } from "../../../../components/ModeSwitcher";
import { Wrapper } from "./Layout.styled";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({}) => {
   return (
      <Wrapper>
         <ModeSwitcher />
         <Outlet />
      </Wrapper>
   );
};
