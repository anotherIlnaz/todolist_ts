import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBack = styled.div`
   color: var(--colors-ui-apple);
   border: none;
   font-size: var(--fs-ml);
   display: flex;
   cursor: pointer;
   user-select: none;
   display: flex;
   align-items: center;

   .back-wrapper {
      margin-left: 5px;
      font-weight: 500;
   }
`;

export const Back = () => {
   const navigate = useNavigate();

   const back = () => navigate(-1);

   return (
      <StyledBack onClick={back}>
         <IoChevronBackOutline />
         <span className="back-wrapper">Назад</span>
      </StyledBack>
   );
};
