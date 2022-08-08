import styled from "styled-components";

export const WrapperSC = styled.div`
   margin-left: 15px;
   width: 100%;
`;

export const ColumnWrapper = styled.div<{ columnColor?: string }>`
   ${({ columnColor }) => columnColor && `background-color:${columnColor}60 ;`}

   position: relative;
   height: 80vh;

   box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
      rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
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
