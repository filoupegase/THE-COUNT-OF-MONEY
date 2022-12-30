import { store } from '../../_store/store';
import { axiosClient } from "../../services/axios";


export interface AppSettings {
    popularCryptos: number;
    popularRss: number;
    _id: number;
}

// @ts-ignore
export const getAppSettings = async (): Promise<AppSettings> => {
    try {
        const token = store.getState().auth.userToken;
        const config = { headers: { Authorization: `Bearer ${ token }` } };
        const { data } = await axiosClient.get('settings', config)

        return data;
    } catch (error) {
        console.log(error)
    }
};