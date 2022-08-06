import styled from "styled-components";

export const WrapperSC = styled.div`
   margin-left: 15px;
   width: 100%;

   /* :nth-child(1) {
      margin-left: 0px;
   } */
`;

export const ColumnWrapper = styled.div<{ columnColor?: string }>`
   ${({ columnColor }) => columnColor && `background-color:${columnColor}60 ;`}
   display: flex;
   flex-direction: row;

   height: 80vh;
`;

export const NameSC = styled.div`
   font-size: 20px;
   font-weight: 400;
   padding: 6px 14px;

   width: 100%;
   max-height: 50px;

   background-color: #031d33;
   color: #fff;

   border-top-left-radius: 20px;
   border-top-right-radius: 20px;

   display: flex;
   justify-content: center;
   align-items: center;
`;
