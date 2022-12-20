//import jwtDecode, { JwtPayload } from "jwt-decode";
import { updateTokenAuthWithGoogle } from '../../_store/services/auth/slice';


export function getParams(params: any) {
    if (params && params.search) {
        const token: string = params.search.slice(7);
        if (token) {
            return token;
        }
    }
}

export async function authGoogle() {
    try {
        window.open(
            `http://localhost:4000/api/auth/google`,
            "_self"
        );
    } catch (error) {
        console.error(error);
    }
}

export default authGoogle;