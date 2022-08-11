import { createDomain} from "effector";

const domain = createDomain("taskPresModalService");

const $open = domain.store(false);
const handleOpen = domain.event();
const handleClose = domain.event();
$open.on(handleOpen, () => true).on(handleClose, () => false);




export const taskPresModalService = {
   inputs: { handleOpen, handleClose },
   outputs: { $open },
};
