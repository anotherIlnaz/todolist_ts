import { ReactNode } from "react";
import { DeskTinyResponseDto } from "../../../../api/types";

export type AuthorizedLayoutProps = {
   desks: DeskTinyResponseDto[];
   children?: ReactNode; 
};
