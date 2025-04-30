"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, isLoading } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      push("/account"); // Redireciona para a página da conta se o usuário estiver autenticado
    }
  }, [isAuthenticated, push]);

  if(isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>carregando</h1>
      </div>
    );
  }

  return (
    <div className="max-h-screen py-2 flex-1 items-center justify-center md:py-8 lg:pt-24">
      {children}
    </div>
  );
}