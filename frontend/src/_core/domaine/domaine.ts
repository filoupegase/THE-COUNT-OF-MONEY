export interface AuthenticationResponse {
    jwt: string;
}

export type ApiResponse<T> = {
    content: T;
};

export interface User {
    email: string;
    password: string;
    username: string;
}

export interface LoginFormInterface {
    email: string;
    password: string;
}

