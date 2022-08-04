import { FC } from "react";
import styled from "styled-components";

type TitleProps = {
   deskTitle: string;
};

const TitleSC = styled.div`
   font-weight: 400;
   font-size: 32px;
   margin: 6px 12px;

`;

export const Title: FC<TitleProps> = ({ deskTitle }) => {
   return <TitleSC>{deskTitle}</TitleSC>;
};
