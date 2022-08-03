import { FC } from "react";

type TitleProps = {
   deskTitle: string;
};

export const Title: FC<TitleProps> = ({ deskTitle }) => {
   return (
      <>
         <h1>{deskTitle}</h1>
      </>
   );
};
