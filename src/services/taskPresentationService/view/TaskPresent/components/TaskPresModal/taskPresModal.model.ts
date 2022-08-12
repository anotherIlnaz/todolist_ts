import { createDomain, forward } from "effector";
import { taskPresFormService } from "../TaskPresForm/taskPresForm.model";

const domain = createDomain("taskPresModalService");

const $open = domain.store(false);
const handleOpen = domain.event();
const handleClose = domain.event();
$open.on(handleOpen, () => true).on(handleClose, () => false);

forward({
   from: taskPresFormService.inputs.deleteTaskFx.doneData,
   to: handleClose,
});

forward({
   from: taskPresFormService.inputs.patchTaskFx.doneData,
   to: handleClose,
});

export const taskPresModalService = {
   inputs: { handleOpen, handleClose },
   outputs: { $open },
};
