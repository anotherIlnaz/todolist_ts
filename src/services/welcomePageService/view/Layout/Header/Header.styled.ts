import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
   position: fixed;
   width: 100%;
   height: 60px;
   background-color: rgba(0, 0, 0, 0.8);

   font-weight: 600;
   font-size: 24px;

   display: flex;
   align-items: center;

   padding: 0 2rem;
`;

export const StyledLink = styled(Link)`
   all: none;
   cursor: pointer;
   color: var(--colors-ui-apple);
   text-decoration: none;

   &:hover {
      color: var(--colors-ui-apple);
   }
`;
