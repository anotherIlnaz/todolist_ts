import styled from "styled-components";

export const Wrapper = styled.div``;

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
   border-radius: var(--rad);

   &:hover {
      opacity: 0.6;
   }
`;

export const FormInput = styled.input`
   border-bottom: 0px solid;
   border-color: var(--colors-ui-apple);
   /* border: none; */
   outline: none;
   background-color: transparent;
   font-size: 20px;
`;
