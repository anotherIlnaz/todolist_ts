import styled from "styled-components";

export const Wrapper = styled.div`
   width: 78vmax;
`;

export const ColumnsWrapper = styled.div`
   display: flex;
`;

export const TitleContainerSc = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const ButtonSC = styled.button`
   border: 1px solid #031d33;
   color: #031d33;
   background-color: #fff;
   font-family: inherit;
   padding: 4px 15px;

   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 15px;

   border-radius: 3px;

   :hover {
      box-shadow: #06233d32 0px 8px 24px;
   }
`;

export const ButtonBlock = styled.div`
   display: flex;
   flex-direction: row;
`;
