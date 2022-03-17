import { apiJson } from "../../services/api";

export async function userLogin(payload: any) {
  const { data: response } = await apiJson.post("/login", payload);
  console.log("payload", payload);
  return response;
}
