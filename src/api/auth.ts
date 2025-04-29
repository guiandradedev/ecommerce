import { Product } from "@/constants/types";
import { api, products } from "@/constants";
import axios from "axios";
interface AuthResponse {
    data: {
        token: {
            access_token: string,
            refresh_token: string
        }
    }
}
interface IAuthAPI {
    // login(email: string, password: string): Promise<boolean>
    // register(email: string, password: string): Promise<boolean>
    // logout(): Promise<void>
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

}