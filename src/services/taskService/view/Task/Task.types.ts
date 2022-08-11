export type TaskProps = {
   taskTitle: string;
   taskDescription: string;
   taskId: string;
   parentColumnId: string;

   modalOpeningHandler: () => void;
   taskIdTransmit: (id: string) => string;
};
