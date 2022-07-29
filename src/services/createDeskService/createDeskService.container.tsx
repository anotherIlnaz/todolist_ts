import { useEvent, useStore } from "effector-react";
import { useState } from "react";
import { ColumnCreateDto } from "../../api/types";
import { createDeskService } from "./createDeskService.model";
import { CreateDeskModal } from "./view/CreateDeskModal";

export const CreateDeskContainer = () => {
   const isModalOpen = useStore(createDeskService.outputs.$isModalOpen);
   console.log(isModalOpen);

   const handleCancel = useEvent(createDeskService.inputs.closeDeskModal);

   const [columns, setColumns] = useState<ColumnCreateDto[]>([
      { name: "", color: "" },
      { name: "", color: "" },
   ]);

   const addColumn = () => {
      setColumns((prev) => [...prev, { name: "", color: "" }]);
   };
   const deleteColumn = (index: number) => {
      setColumns((prev) => prev.filter((_, i) => index !== i));
   };

   const patchColumn = (
      index: number,
      value: string,
      fieldName: "name" | "color"
   ) => {
      setColumns((prev) =>
         prev.map((elem, i) =>
            index === i ? { ...elem, [fieldName]: value } : elem
         )
      );
   };

   return (
      <>
         {isModalOpen && (
            <CreateDeskModal
               columns={columns}
               deleteColumn={deleteColumn}
               addColumn={addColumn}
               isModalOpen={isModalOpen}
               handleCancel={handleCancel}
            />
         )}
      </>
   );
};
