import styled from "styled-components";

export const Image = styled.div<{ src: string }>`
   position: relative;

   width: 100%;
   height: 200px;
   object-fit: cover;
   border-radius: 6px;

   background-image: url(${({ src }) => src});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 50%;
`;

export const ButtonSC = styled.div`
   position: absolute;
   top: 10px;
   right: 10px;
   padding: 5px 25px;
   border-radius: 5px;
   background: #ffffffcc;
   display: flex;
   cursor: pointer;
   transition: 0.2s;
   color: red;

   &:hover {
      background: white;
   }
`;
