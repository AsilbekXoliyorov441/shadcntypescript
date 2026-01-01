import { api } from "../api/api";
import type { LoginPayload, LoginResponse } from "../types/auth";


export const login = async(data:LoginPayload) => {
  const res = await api.post<LoginResponse>("/auth/signin" , data)
  return res.data
}