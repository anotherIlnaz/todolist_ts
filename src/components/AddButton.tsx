import { useEvent } from "effector-react";
import { IoAddCircleOutline } from "react-icons/io5";
import styled from "styled-components";
import { createDeskService } from "../services/createDeskService";

const FolderContainer = styled.div`
   display: flex;
   align-items: center;
   color: var(--colors-ui-apple);
   font-size: var(--fs-ml);
   font-weight: var(--fw-normal);
   cursor: pointer;
   user-select: none;
`;

export const Add = () => {
   const openDeskModal = useEvent(createDeskService.inputs.openDeskModal);
   return (
      <FolderContainer onClick={ () => openDeskModal() }>
         <IoAddCircleOutline
            style={{ fontSize: "40px", paddingRight: "0.75rem" }}
         />
         <span>create</span>
      </FolderContainer>
   );
};
