import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { Loader } from "../../shared/Loader";
import { deskService } from "./deskService.model";
import { Desk } from "./view/Desk";

const { gates, outputs } = deskService;

const { DeskIdGate } = gates;

export const DeskContainer = () => {
   const { id } = useParams<{ id: string }>();

   const desk = useStore(outputs.$desk);
   const loading = useStore(outputs.$isLoad);


   return (
      <>
         {id && <DeskIdGate deskID={id} />}
         {loading && <Loader />}
         {!loading && desk && <Desk deskValue={desk} />}
      </>
   );
};
