import styled from "styled-components";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

const StyledInput = styled.input.attrs({
   type: "search",
   placeholder: "Поиск",
})`
   border: none;
   outline: none;
   background-color: transparent;
   font-size: 20px;
`;

const StyledSearce = styled.div`
   display: flex;
   align-items: center;
   margin: 1rem 2rem;
   padding: 0.3rem;
   border: 0px solid;
   background-color: var(--colors-grey);
   border-radius: var(--rad); 
`;

export const MainInput = () => {
   return (
      <StyledSearce>
         <IoSearchOutline style={{ fontSize: "18px" }} />
         <StyledInput />
      </StyledSearce>
   );
};
