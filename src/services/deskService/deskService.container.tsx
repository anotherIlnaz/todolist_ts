import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../shared/Loader";
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

   return (
      <>
         {id && <DeskIdGate deskID={id} />}
         {loading && <Loader />}
         {!loading && desk && <Desk deskValue={desk} onDelete={onDelete} />}
      </>
   );
};
