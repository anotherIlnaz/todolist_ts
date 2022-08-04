import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { createDeskService } from "./createDeskService.model";
import { CreateDeskModal } from "./view/CreateDeskModal";

const { inputs, outputs } = createDeskService;

export const CreateDeskContainer = () => {
   const isModalOpen = useStore(outputs.$isModalOpen);
   console.log(isModalOpen);

   const handleCancel = useEvent(inputs.closeDeskModal);

   const handleSubmit = useEvent(inputs.createDesk);

   useEffect(
      () => inputs.createDeskFx.doneData.watch(handleCancel).unsubscribe,
      []
   );

   return (
      <>
         {isModalOpen && (
            <CreateDeskModal
               isModalOpen={isModalOpen}
               handleSubmit={handleSubmit}
               handleCancel={handleCancel}
            />
         )}
      </>
   );
};
