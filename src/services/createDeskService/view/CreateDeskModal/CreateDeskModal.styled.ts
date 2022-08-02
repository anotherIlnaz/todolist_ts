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
   align-items: center;
   margin-top: 12px;
`;
export const StyledColumnInput = styled.div`
   width: 400px;
   margin-right: 10px;
   //Откуда маржины?
`;

export const PaggingTop = styled.div`
   margin: 0px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const StyledDelete = styled.div`
   width: 60px;
   border: 1px red solid;
   display: flex;
   align-items: center;
   justify-content: center;

   height: 38px;
   transition:all 0.2s, color 0.5s;

   :hover {
      transform: scale(1.1);
      color: red;
   }
   cursor: pointer;
   user-select: none;
`;

export const ColorPicker = styled.div`
   .react-colorful {
      width: auto;
   }
`;

export const StyledError = styled.div`
   color: red;
`;
