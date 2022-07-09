import styled from "styled-components";

const FoldersBlock = styled.div`
   display: flex;
   width: 40%;
   flex-direction: column;
   background: #b5b5b5;
   margin: 0.5rem;
   padding: 1rem;
   height: 70vh;
`;

export const FoldersListBlock = () => {
   return (
      <FoldersBlock>
         <h1>Folders List Block</h1>
      </FoldersBlock>
   );
};
