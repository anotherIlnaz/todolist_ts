import { createDomain, forward } from "effector";
import { createTaskService } from "../../../../../createTaskService";
import { PatchTaskPayload } from "../../../../taskPresentation.types";
import { getTaskDataRequest } from "../../../../taskPresentationService.api";
import { taskPresentationService } from "../../../../taskPresentationService.model";

interface PatchTaskDto {
   title: string;
   description: string;
   preview: string;
}
const domain = createDomain("taskPresFormService");



const $deskData = createTaskService.outputs.$deskData;

const handleSubmit = domain.event<PatchTaskPayload>();

const reGetDesk = domain.event();

// forward({
//    from: createTaskService.inputs.postTaskFx.doneData,
//    to: reGetDesk,
// });

export const taskPresFormService = {
   inputs: {
      handleSubmit,
      reGetDesk,
   },
   outputs: { $deskData },
};
