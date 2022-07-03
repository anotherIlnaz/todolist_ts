import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Wrapper } from "./Layout.styled";
import { LayoutProps } from "./Layout.types";

export const Layout: FC<LayoutProps> = ({}) => {
   return (
      <Wrapper>
         <Header />
         <Outlet />
      </Wrapper>
   );
};
