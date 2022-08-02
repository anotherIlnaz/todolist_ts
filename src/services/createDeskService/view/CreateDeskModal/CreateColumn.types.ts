import { FormikErrors } from "formik";
import { ColumnCreateDto, CreateDeskDto } from "../../../../api/types";

export type CreateColumnProps = {
   deleteColumn: ( index: number ) => void;
   index: number;
   columnsStateValue: ColumnCreateDto

   // onChange: (value: ColumnCreateDto) => Promise<void> | Promise<FormikErrors<CreateDeskDto>>
   onChange: (value: ColumnCreateDto) => void

};
