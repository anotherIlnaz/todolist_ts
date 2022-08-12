import { axios } from "../../api";
import { TaskResponseDto } from "../../api/types";

import { PatchTaskPayload, TinyTaskWithColumn } from "./taskPresentation.types";

interface PatchTaskDto {
   title: string;
   description: string;
   preview: string;
}

export const getTaskDataRequest = (taskId: string): Promise<TaskResponseDto> =>
   axios.get(`/tasks/${taskId}`);

export const patchTaskRequest = ({
   title,
   preview,
   description,
   id,
}: PatchTaskPayload): Promise<TinyTaskWithColumn> =>
   axios.patch(`/tasks/${id}`, { title, preview, description });

export const deleteTaskRequest = (id: string): Promise<string> =>
   axios.delete(`tasks/${id}`);
