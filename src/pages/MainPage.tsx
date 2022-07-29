import styled from "styled-components";
import { CreateDeskContainer } from "../services/createDeskService";

const Container = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0 2rem;
`;

export const MainPage = () => {
   return (
      <>
         <Container>
         <CreateDeskContainer />
         </Container>
      </>
   );
};
