import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../shared/Loader";
import { createTaskService } from "../createTaskService";
import { deskService } from "./deskService.model";
import { Desk } from "./view/Desk";

const { gates, outputs, inputs } = deskService;

const { DeskIdGate } = gates;

export const DeskContainer = () => {
   const { id } = useParams<{ id: string }>();

   const desk = useStore(outputs.$desk);
   const loading = useStore(outputs.$isLoad);
   const onDelete = useEvent(inputs.deleteDesk);

   const navigate = useNavigate();

   useEffect(
      () =>
         inputs.deleteDeskFx.doneData.watch(() => navigate("/main"))
            .unsubscribe,
      []
   );

   const addNewTask = useEvent(createTaskService.inputs.addNewTask) 

   return (
      <>
         {id && <DeskIdGate deskID={id} />}
         {loading && <Loader />}
         {!loading && desk && <Desk deskValue={desk} onDelete={onDelete} addNewTask={addNewTask} />}
      </>
   );
};
