import { createDomain } from "effector";
import { useStore } from "effector-react";

const domain = createDomain("createDeskService");

const openDeskModal = domain.event();
const closeDeskModal = domain.event();
const $isModalOpen = domain.store(false);

$isModalOpen.on(openDeskModal, () => true).reset(closeDeskModal);


export const createDeskService = {
   inputs: { closeDeskModal, openDeskModal },
   outputs: { $isModalOpen },
};
