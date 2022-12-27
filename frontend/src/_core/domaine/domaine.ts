export interface User {
    email: string;
    password: string;
    username: string;
}

export interface LogInFormInterface {
    email: string;
    password: string;
}

export interface SignUpFormInterface {
    email: string;
    password: string;
    username: string;
}

export interface UserInfo {
    email: string;
    username: string;
    _id: string;
    roles: null;
    //googleId: string | undefined;
}