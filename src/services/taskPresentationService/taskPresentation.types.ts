import { PatchTaskDto, TaskTinyResponseDto } from "../../api/types";

export interface TinyTaskWithColumn extends TaskTinyResponseDto {
   column?: string;
}

export interface IPatchTask extends PatchTaskDto {}

export interface PatchTaskPayload {
   data: PatchTaskDto;
   id: string;
}
