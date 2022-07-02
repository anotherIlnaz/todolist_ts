import styled from "styled-components";

const StylesNotFound = styled.div`
   display: flex;
   justify-content: center;
   margin: 5rem;
`;

export const NotFound = () => {
   return (
      <StylesNotFound>
         <h1>Page not found</h1>
      </StylesNotFound>
   );
};
