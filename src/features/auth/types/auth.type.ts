export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface LoginResponse {
  access_token: string;
  user: AuthUser;
}
