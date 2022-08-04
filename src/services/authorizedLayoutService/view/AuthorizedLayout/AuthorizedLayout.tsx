import { FC } from "react";
import { CreateDeskContainer } from "../../../createDeskService";
import { Wrapper } from "./AuthorizedLayout.styled";
import { AuthorizedLayoutProps } from "./AuthorizedLayout.types";
import { Navbar } from "./Navbar";
import { SiderAntD } from "./siderAntD/Sider";

export const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({ desks }) => {
   return (
      <Wrapper>
         <CreateDeskContainer />
         <Navbar />
         <SiderAntD desks={desks} />
      </Wrapper>
   );
};
