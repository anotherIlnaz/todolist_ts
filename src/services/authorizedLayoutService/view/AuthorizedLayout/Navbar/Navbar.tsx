import { FC } from "react";

import { Back } from "../../../../../components/Back";
import { CurrentFolder } from "../../../../../components/CurrentFolder";
import { Options } from "../../../../../components/Options";

import { Container, Wrapper } from "./Navbar.styled";
import { NavbarProps } from "./Navbar.types";

export const Navbar: FC<NavbarProps> = ({}) => {
   return (
      <>
         <Container>
            <Wrapper>
               <Back />
               <CurrentFolder />
               <Options />
            </Wrapper>
         </Container>
      </>
   );
};
