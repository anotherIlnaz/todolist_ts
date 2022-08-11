import { axios } from "../../api";
import { TaskResponseDto } from "../../api/types";

import { PatchTaskPayload, TinyTaskWithColumn } from "./taskPresentation.types";

 interface PatchTaskDto {
   title: string;
   description: string;
   preview: string;
 }

export const getTaskDataRequest = async (
   taskId: string
): Promise<TaskResponseDto> => (await axios.get(`/tasks/${taskId}`)).data;

export const patchTaskRequest = async ({
   data,
   id,
}: PatchTaskPayload): Promise<TinyTaskWithColumn> =>
   (await axios.patch(`/tasks/${id}`, data)).data;

export const deleteTaskRequest = async (id: string): Promise<string> =>
   (await axios.delete(`tasks/${id}`)).data._id;
