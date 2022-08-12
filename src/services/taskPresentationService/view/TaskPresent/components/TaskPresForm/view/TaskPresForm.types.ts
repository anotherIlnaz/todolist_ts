import { TaskResponseDto } from "../../../../../../../api/types";
import { PatchTaskPayload } from "../../../../../taskPresentation.types";

export type TaskPresFormProps = {
   taskData: TaskResponseDto;
   deleteTask: (id: string) => string;
   patchTask: (payload: PatchTaskPayload) => PatchTaskPayload;
};
