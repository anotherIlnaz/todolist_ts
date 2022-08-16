import { axios } from "../../api";
import { ReplaceTaskRequestPayloadDto } from "../../api/types";

export const ReplaceTaskRequest = (
   replacePayload: ReplaceTaskRequestPayloadDto
) => axios.post("/tasks/replaceColumn", replacePayload);
