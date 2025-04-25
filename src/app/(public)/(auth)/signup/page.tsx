"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import GoogleAuth from "../google-auth";

// Validação com Zod
const signupSchema = z
    .object({
        name: z.string().nonempty("Nome é obrigatório"),
        email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
        phone: z.string().min(10, "Telefone inválido").nonempty("Telefone é obrigatório"),
        password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
        confirmPassword: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem",
        path: ["confirmPassword"], // Path to show the error under confirmPassword field
    });

type SignUpFormInputs = z.infer<typeof signupSchema>;

export default function SignUp() {
    const form = useForm<SignUpFormInputs>({
        resolver: zodResolver(signupSchema), // Usa o Zod para validação
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: SignUpFormInputs) => {
        console.log(data); // Substitua por lógica de cadastro
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Hero Section */}
            <div className="hidden md:flex flex-1 items-center justify-center py-8 px-4">
                <Image
                    src="/signup.svg"
                    alt="Signup Illustration"
                    width={400}
                    height={400}
                    className="dark:invert"
                />
            </div>

            {/* Signup Section */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-lg w-full md:max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Crie sua conta</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        {/* Name Input */}
                        <FormItem>
                            <FormLabel htmlFor="name">Nome</FormLabel>
                            <FormControl>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Digite seu nome"
                                    {...form.register("name")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.name?.message}
                            </FormMessage>
                        </FormItem>

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

                        {/* Phone Input */}
                        <FormItem>
                            <FormLabel htmlFor="phone">Telefone</FormLabel>
                            <FormControl>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Digite seu telefone"
                                    {...form.register("phone")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.phone?.message}
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

                        {/* Confirm Password Input */}
                        <FormItem>
                            <FormLabel htmlFor="confirmPassword">Confirme sua senha</FormLabel>
                            <FormControl>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirme sua senha"
                                    {...form.register("confirmPassword")}
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.confirmPassword?.message}
                            </FormMessage>
                        </FormItem>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full">
                            Cadastrar
                        </Button>
                    </form>
                </Form>

                <div className="w-full mt-6">
                    <GoogleAuth />
                </div>

                {/* Login Link */}
                <p className="mt-4 text-sm text-gray-600">
                    Já tem uma conta?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Faça login
                    </a>
                </p>
            </div>
        </div>
    );
}