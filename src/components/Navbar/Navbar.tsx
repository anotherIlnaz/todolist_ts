import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { MainInput } from "../MainInput";
import { Back } from "../Back";
import { Add } from "../AddButton";
import { Options } from "../Options";

const Container = styled.header`
   box-shadow: var(--shadow);
   background-color: (--colors-ui-base);
   box-sizing: border-box;
`;

const Wrapper = styled.div`
   padding: 1rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Navbar = () => {
   return (
      <>
         <Container>
            <Wrapper>
               <Back />
               <Add />
               <Options />
            </Wrapper>
         </Container>
         <MainInput />
      </>
   );
};
