import { axios } from "../../api";
import { DeskResponseDto } from "../../api/types";

export const fetchDesk = (id: string): Promise<DeskResponseDto> =>
   axios.get(`desks/${id}`);

export const fetchDeleteDesk = (id: string): Promise<void> => axios.delete(`desks/${id}`);
