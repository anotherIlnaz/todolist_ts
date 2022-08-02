import { ColumnCreateDto, CreateDeskDto } from "../../../../api/types";

export type CreateDeskModalProps = {
   isModalOpen: boolean;

   handleSubmit: (payload: CreateDeskDto) => void;
   handleCancel: () => void

};
