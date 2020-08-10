import { internalAxios } from './internal.axios'
import { Race } from '../models/Race';

export const getAllRaces = async () => {
    const response = await internalAxios.get<Race[]>('/races');
    return response.data.map(race => {
        console.log(response);
        return race;
    })
}

export const getRaceById = async (id: number) => {
    const response = await internalAxios.get<Race>(`/races/id/${id}`);
    return response.data;
}