import styled from "styled-components";

export const Layout = styled.div`
   display: flex;
   justify-content: center;
`;

export const Wrapper = styled.div`
   padding: 30px 0 0 0;
   max-width: 1000px;
`;

export const Img = styled.div<{ src?: string | null }>`
   height: 200px;
   width: 200px;
   border-radius: 50%;
   background-image: url(${({ src }) => src});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 50%;
`;

export const Item = styled.div`
   font-size: 22px;
   padding: 5px;
`;
