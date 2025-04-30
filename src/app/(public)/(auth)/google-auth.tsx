"use client";

import { useAuth } from "@/contexts/auth-context";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";

export default function GoogleAuth() {
    const { socialLogin } = useAuth();
    const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
        const googleToken = credentialResponse.credential;

        if (!googleToken) {
            console.error("Token do Google não encontrado.");
            return;
        }

        try {
            console.log("chamou")
            await socialLogin({ provider: "Google", token: googleToken });
            console.log("voltou")
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <div>
                <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.error("Erro no login")} />
            </div>
        </GoogleOAuthProvider>
    );
}
