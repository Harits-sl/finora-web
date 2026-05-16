import { api } from '@/shared/lib/api';
import { LoginDto, LoginResponse } from '../types/auth.type';
import { ApiResponse } from '@/shared/types/api.types';

export async function login(payload: LoginDto) {
  const response = await api.post<ApiResponse<LoginResponse>>('/v1/auth/login', payload);
  return response.data;
}
