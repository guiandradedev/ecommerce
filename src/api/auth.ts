import { api } from "@/constants";
import axios from "axios";
import { Token, User } from "@/types/user";
export interface AuthResponse {
    data: {
        id: string,
        attributes: Omit<User, "id">,
        links: {
            self: string
        },
        token: Token
    }
}
interface IAuthAPI {
    // login(email: string, password: string): Promise<boolean>
    // register(email: string, password: string): Promise<boolean>
    logout(): Promise<void>
    social_login(provider: string, token: string): Promise<AuthResponse>
}

export class AuthAPI implements IAuthAPI {
    async social_login(provider: string, token: string): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>(api.base_url+"/auth/social-login", {
            token,
            provider
        });
        return response.data;
    }
    async logout(): Promise<void> {
        
    }

}