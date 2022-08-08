import { ColumnResponseDto, CreateTaskDto } from "../../../../api/types";

export type CreateTaskFormProps = {
   handleSubmit: (payload: CreateTaskDto) => CreateTaskDto;


   deskId: string | undefined;
   columnsList: ColumnResponseDto[] | undefined;
};

export interface ColumnForm {
   id: string;
   name: string;
   color?: string;
}

export interface TaskForm {
   title: string;
   description: string;
   deskId: string;
   columnId: string;
}
