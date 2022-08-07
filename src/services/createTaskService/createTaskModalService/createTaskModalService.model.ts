import { createDomain, forward } from "effector";
import { createTaskService } from "../createTaskService.model";

const domain = createDomain("createTaskModalService");

const openDeskModal = domain.event();
const closeDeskModal = domain.event();
const $isModalOpen = domain.store(false);

forward({
   from: createTaskService.inputs.postTaskFx.doneData,
   to: closeDeskModal,
});

forward({
   from: createTaskService.inputs.addNewTask,
   to: openDeskModal,
});

$isModalOpen.on(openDeskModal, () => true).reset(closeDeskModal);

export const createTaskModalService = {
   inputs: {
      openDeskModal,
      closeDeskModal,
   },
   outputs: {
      $isModalOpen,
   },
};
