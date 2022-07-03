import { FC } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
   width: min-content;
   background-color: white;
`;

export const Container = styled.div`
   background-color: (--colors-ui-base);
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
`;

export const ModeSwWrapper = styled.div`
   display: flex;
   flex-direction: row-reverse;
   padding: 1rem;
   background-color: var(--colors-grey);
   box-shadow: var(--shadow);
`;

export const FormContainer = styled.div`
   background-color: var(--colors-grey);
   margin: 1rem;
   padding: 1rem;
   border-radius: var(--rad);
   width: 50%;
   color: var(--colors-ui-apple);
`;

export const FormItem = styled.div`
   padding: 1rem;
   font-size: var(--fs-ml);
`;

export const StyledButton = styled.button`
   color: var(--colors-ui-apple);
   font-size: var(--fs-ml);

   padding: 0 1rem;
   background-color: var(--colors-ui-base);
   box-shadow: var(--shadow);
   line-height: 2.5;

   cursor: pointer;
   color: var(--color-text);

   gap: 0.75rem;
   border: 1.6px solid;
   border-color: var(--color-text);

   &:hover {
      opacity: 0.6;
   }

   margin: 1rem;
`;

export const FormInput = styled.input`
   all: unset;
   padding: 0 10px;
   border: 2px solid;
   border-color: var(--colors-ui-apple);
   /* border: none; */
   outline: none;
   background-color: transparent;
   font-size: 16px;
`;

export const StyledLabel = styled.label`
   font-size: 20px;
   font-weight: 400;
`;

const StyledErrorMessageWrapper = styled.div`
   position: relative;
`;

const StyledErrorMessage = styled.div`
   color: red;
   font-size: 13px;
   position: absolute;
`;

export const ErrorMessage: FC<{ text?: string }> = ({ text }) => {
   return (
      <StyledErrorMessageWrapper>
         <StyledErrorMessage>{text}</StyledErrorMessage>
      </StyledErrorMessageWrapper>
   );
};
