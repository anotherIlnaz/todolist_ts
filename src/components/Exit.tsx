import { IoExitOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledExit = styled.div`
   color: var(--colors-ui-apple);
   border: none;
   background-color: var(--colors-bg);
   font-size: var(--fs-ml);
   display: flex;
   cursor: pointer;
   user-select: none;
`;

export const Exit = () => {
   return (
      <StyledExit>
         <IoExitOutline />
         Выйти
      </StyledExit>
   );
};
