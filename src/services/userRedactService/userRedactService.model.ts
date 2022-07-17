import { createDomain, forward, sample } from "effector";
import { createGate } from "effector-react";
import { PatchUserDto } from "../../api/types";
import { userService } from "../userService";

import { userRedactPost } from "./userRedactService.api";

const domain = createDomain("userRedactService");

const setUserDataFx = domain.createEffect(userRedactPost);

const handlePatch = domain.createEvent<PatchUserDto>();

const closeModal = domain.createEvent();

sample({
   source: userService.outputs.$userResponse,
   clock: handlePatch,
   fn: (user, patchUserPayload) => {
      return {
         email: patchUserPayload.email || user?.email,
         name: patchUserPayload.name || user?.name,
         avatar: patchUserPayload.avatar || user?.avatar,
      };
   },
   target: setUserDataFx as any,
});

forward({
   from: setUserDataFx.doneData,
   to: closeModal,
});

const $modalActive = domain.createStore(false);
const modalOpen = domain.createEvent();

$modalActive.on(modalOpen, () => true).reset(closeModal);

const GetUserGate = createGate();

export const userRedactService = {
   inputs: { modalOpen, handlePatch, closeModal, GetUserGate },
   outputs: { $modalActive },
};
