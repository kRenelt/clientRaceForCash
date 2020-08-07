import { internalAxios } from './internal.axios'
import { Horse } from '../models/Horse';

export const getAllHorses = async () => {
    const response = await internalAxios.get<Horse[]>('/horses');
    return response.data.map(horse => {
        console.log(response);
        return horse;
    })
}