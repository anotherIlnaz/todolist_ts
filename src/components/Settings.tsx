import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledSettignsButton = styled.button`
   border: none;
   user-select: none;
   cursor: pointer;
   background-color: var(--colors-bg);
   color: var(--colors-ui-apple);
   font-size: 24px;
`;

export const Settings = () => {
   return (
      <StyledSettignsButton>
         <IoEllipsisHorizontalCircleOutline />
      </StyledSettignsButton>
   );
};
