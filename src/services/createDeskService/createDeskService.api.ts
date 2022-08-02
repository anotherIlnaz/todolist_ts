import { axios } from "../../api";
import { CreateDeskDto } from "../../api/types";

export const fetchCreateDesk = (payload: CreateDeskDto): Promise<void> =>
   axios.post("desks", payload);
