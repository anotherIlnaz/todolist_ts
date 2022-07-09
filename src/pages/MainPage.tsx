import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FoldersListBlock } from "../components/FoldersListBlock";
import { MainInput } from "../components/MainInput";
import { NotesListBlock } from "../components/NotesListBlock";

const Container = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0 2rem;
`;

export const MainPage = () => {
   return (
      <>
         <MainInput/>
         <Container>
            <FoldersListBlock />
            <NotesListBlock />
         </Container>
      </>
   );
};
