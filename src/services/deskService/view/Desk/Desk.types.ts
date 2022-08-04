import { ColumnResponseDto, DeskResponseDto } from "../../../../api/types";

export type DeskProps = {
   deskValue: DeskResponseDto;
   onDelete: (id: string) => void;
};
