import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FoldersListBlock } from "../components/FoldersListBlock";
import { Navbar } from "../components/Navbar/Navbar";
import { NotesListBlock } from "../components/NotesListBlock";

const Container = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0 2rem;
`;

export const MainPage = () => {
   return (
      <>
         <Navbar />
         <Container>
            {/* <h1>Страница с папками</h1> */}
            <FoldersListBlock />
            <NotesListBlock />
         </Container>
      </>
   );
};
