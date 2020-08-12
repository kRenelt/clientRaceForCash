import { internalAxios } from './internal.axios'
import { User } from '../models/User';

export const checkCredentials = async (user: User) => {
    const response = await internalAxios.post('/login', user);
    return response;
}

export const getUserById = async (id: number) => {
    const response = await internalAxios.get<User>(`/user/${id}`);
    return response;
}

export const registerUser = async (user: any) => {
    const response = await internalAxios.put('/register', user);
    return response;
}