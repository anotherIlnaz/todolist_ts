import { ColumnCreateDto } from "../../../../api/types";

export type CreateDeskModalProps = {
   // index: number;
   deleteColumn: (index: number) => void;
   columns: Array<ColumnCreateDto>
   addColumn: () => void
   isModalOpen: boolean
   handleCancel: () => void
};
