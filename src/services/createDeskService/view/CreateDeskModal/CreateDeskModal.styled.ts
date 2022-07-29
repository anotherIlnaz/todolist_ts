import styled from "styled-components";
export const FormInputDesk = styled.input`
   all: unset;

   width: 375px;

   padding: 0 10px;
   border: 2px solid;
   border-color: var(--colors-ui-apple);
   /* border: none; */
   outline: none;
   background-color: transparent;
   font-size: 16px;
`;

export const Container = styled.div`
   display: flex;
   flex-direction: row;
`;
export const StyledColumnInput = styled.div`
   width: 400px;
   margin-right: 10px;
   //Откуда маржины?
`;

export const PaggingTop = styled.div`
   margin: 0px;
`;

export const StyledDelete = styled.div`
   width: 60px;
   margin-top: 22px;
   border: 1px red solid;
   display: flex;
   align-items: center;
   justify-content: center;
`;
