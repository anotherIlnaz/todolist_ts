import { PatchTaskDto, TaskTinyResponseDto } from "../../api/types";

export interface TinyTaskWithColumn extends TaskTinyResponseDto {
   column?: string;
}

export interface IPatchTask extends PatchTaskDto {}

export interface PatchTaskPayload {
   title: string;
   preview: string;
   description: string;
   id: string;
}
