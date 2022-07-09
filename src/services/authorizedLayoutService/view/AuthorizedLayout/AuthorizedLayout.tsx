import { FC } from "react";
import { Wrapper } from "./AuthorizedLayout.styled";
import { AuthorizedLayoutProps } from "./AuthorizedLayout.types";
import { Navbar } from "./Navbar";

export const AuthorizedLayout: FC<AuthorizedLayoutProps> = ({}) => {
   return (
      <Wrapper>
         <Navbar />
      </Wrapper>
   );
};
