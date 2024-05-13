
export const enum ApiRoutes {
    Config = "/api/config",
    Login = "/api/login",
    Register = "/api/register",
}

export type ApiRequest = {
    [ApiRoutes.Login]: {
        email: string
        password: string
    },
    [ApiRoutes.Register]: {
        email: string,
        password: string,
        name: string
    },
    [ApiRoutes.Config]: {}
}

export type ApiResponse = {
    [ApiRoutes.Login]: {
        name: string,
        password: string
    },
    [ApiRoutes.Register]: {
        name: string,
        email: string,
        password: string
    },
    [ApiRoutes.Config]: {
        apiUrl: string,
        apiPort: number 
    }
}