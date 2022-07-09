import { axios } from "../../api";

axios.get("api/users/me").then( response => console.log(response)  )