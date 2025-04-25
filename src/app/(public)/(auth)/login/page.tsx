"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import GoogleAuth from "../google-auth";

// Validação com Zod
const loginSchema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LogIn() {
    const form = useForm<LoginFormInputs>({
        resolver: zodResolver(loginSchema), // Usa o Zod para validação
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginFormInputs) => {
        console.log(data); // Substitua por lógica de autenticação
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Hero Section */}
            <div className="hidden md:flex flex-1 items-center justify-center py-8 px-4">
                <Image
                    src="/login.svg"
                    alt="Login Illustration"
                    width={400}
                    height={400}
                    className="dark:invert"
                />
            </div>

            {/* Login Section */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg w-full md:max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Acesse sua conta</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        {/* Email Input */}
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Digite seu email"
                                    {...form.register("email")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.email?.message}
                            </FormMessage>
                        </FormItem>

                        {/* Password Input */}
                        <FormItem>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <FormControl>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Digite sua senha"
                                    {...form.register("password")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.password?.message}
                            </FormMessage>
                        </FormItem>

                        {/* Forgot Password */}
                        <div className="flex justify-between items-center">
                            <a
                                href="/forgot-password"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Esqueceu a senha?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Entrar
                        </Button>
                    </form>
                </Form>

                {/* Google Login */}
                <div className="w-full mt-6">
                    <GoogleAuth />
                </div>

                {/* Register Link */}
                <p className="mt-4 text-sm text-gray-600">
                    Não tem uma conta?{" "}
                    <a href="/register" className="text-indigo-600 hover:underline">
                        Cadastre-se
                    </a>
                </p>
            </div>
        </div>
    );
}