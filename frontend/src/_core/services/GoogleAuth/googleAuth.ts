import { axiosClient } from "../axios";


async function authGoogle() {
    try {
        // @ts-ignore
        const response = await axiosClient.get('crypto/popular');
        if (response) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export default authGoogle;