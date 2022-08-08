import styled from "styled-components";

export const Wrapper = styled.div<{ isDragging: boolean }>`
   /* position: absolute; */
   width: 100%;

   padding: 6px;
   margin-top: 12px;

   border: 0px solid red;
   border-radius: 10px;

   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

   ${({ isDragging }) =>
      isDragging &&
      `border: 4px dashed #4f4f4faa;
       background-color: #51515171;
       color: #ffffff71;
  `}
`;
