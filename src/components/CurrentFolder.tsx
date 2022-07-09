import { IoAlbumsOutline } from "react-icons/io5";
import styled from "styled-components";

const FolderContainer = styled.div`
   display: flex;
   align-items: center;
   color: var(--colors-ui-apple);
   font-size: var(--fs-ml);
   font-weight: var(--fw-normal);
   cursor: pointer;
   user-select: none;
`;

export const CurrentFolder = () => {
   return (
      <FolderContainer>
         <IoAlbumsOutline
            style={{ fontSize: "30px", paddingRight: "0.75rem" }}
         />
         <span>Folders</span>
      </FolderContainer>
   );
};
