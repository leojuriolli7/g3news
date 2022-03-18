import { apiJson } from "../../services/api";

export async function userLogin(payload: any) {
  const { data: response } = await apiJson.post("/login", payload);
  return response;
}

export async function userSignUp(payload: any) {
  const { data: response } = await apiJson.post("/users", payload);
  return response;
}
