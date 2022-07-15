import { createDomain, forward } from "effector";
import { PatchUserDto } from "../../api/types";

import { userRedactPost } from "./userRedactService.api";

const domain = createDomain("userRedactService");

const setUserDataFx = domain.createEffect(userRedactPost);

const handlePatch = domain.createEvent<PatchUserDto>();

const closeModal = domain.createEvent();

forward({
   from: handlePatch,
   to: setUserDataFx,
});

forward({
   from: setUserDataFx.doneData,
   to: closeModal,
});

const $modalActive = domain.createStore(false);
const modalOpen = domain.createEvent();

$modalActive.on(modalOpen, () => true).reset(closeModal);

export const userRedactService = {
   inputs: { modalOpen, handlePatch, closeModal },
   outputs: { $modalActive },
};
