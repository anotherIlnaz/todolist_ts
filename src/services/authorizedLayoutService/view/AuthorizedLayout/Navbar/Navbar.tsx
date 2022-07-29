import { FC } from "react";

import { Back } from "../../../../../components/Back";
import { Add } from "../../../../../components/AddButton";
import { Options } from "../../../../../components/Options";

import { Container, Wrapper } from "./Navbar.styled";
import { NavbarProps } from "./Navbar.types";

export const Navbar: FC<NavbarProps> = ({}) => {
   return (
      <>
         <Container>
            <Wrapper>
               <Back />
               <Add />
               <Options />
            </Wrapper>
         </Container>
      </>
   );
};
