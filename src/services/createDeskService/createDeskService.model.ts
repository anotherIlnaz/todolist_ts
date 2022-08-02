import { createDomain, forward } from "effector";
import { useStore } from "effector-react";
import { CreateDeskDto } from "../../api/types";
import { fetchCreateDesk } from "./createDeskService.api";

const domain = createDomain("createDeskService");

const openDeskModal = domain.event();
const closeDeskModal = domain.event();
const $isModalOpen = domain.store(false);

const createDesk = domain.event<CreateDeskDto>();
const createDeskFx = domain.effect<CreateDeskDto, void> (fetchCreateDesk);

forward({
   from: createDesk,
   to: createDeskFx,
});

$isModalOpen.on(openDeskModal, () => true).reset(closeDeskModal);

export const createDeskService = {
   inputs: { closeDeskModal, openDeskModal, createDesk },
   outputs: { $isModalOpen },
};
