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
   data,
   id,
}: PatchTaskPayload): Promise<TinyTaskWithColumn> =>
   ( axios.patch(`/tasks/${id}`, data));

export const deleteTaskRequest = async (id: string): Promise<string> =>
   (await axios.delete(`tasks/${id}`)).data._id;
