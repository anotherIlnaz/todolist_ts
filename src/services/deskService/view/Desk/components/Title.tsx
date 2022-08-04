import { FC } from "react";

type TitleProps = {
   deskTitle: string;
};

export const Title: FC<TitleProps> = ({ deskTitle }) => {
   return (
      <div style={{ fontWeight: "400", fontSize :"32px" }}>{deskTitle}</div>
   );
};
