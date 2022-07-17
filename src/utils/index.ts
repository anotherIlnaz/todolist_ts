import { apiUrl } from "../api/urls";

export const getImageLink = (src: string) =>
   `${apiUrl}files/image/${src}` ||
   "https://bycars.ru/upload/photos/79/7957.jpg";
