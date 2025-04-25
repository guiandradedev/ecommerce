import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <Header />
        <div className="container mx-auto px-4">
            {children}
        </div>
    </main>
  );
}
