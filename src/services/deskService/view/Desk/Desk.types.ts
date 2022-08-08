import { ColumnResponseDto, DeskResponseDto, TaskTinyResponseDto } from "../../../../api/types";

export type DeskProps = {
   deskValue: DeskResponseDto;
   onDelete: (id: string) => void;
   addNewTask: (id: string) => string;
};
