export type TokenInfo = {
  token:string,
  expiresAt:string,
}


export type Tokens = {
  accessToken: TokenInfo,
  refreshToken: TokenInfo,
}

export type User = { 
  userId:string,
  firstName:string,
  lastName:string,
  phone_number:string
}

export type LoginResponse = {
  success:boolean,
  message:string,
  data:{
    tokens:Tokens,
    user:User
  }
}

export type LoginPayload = {
  phone_number:string,
  password:string
}