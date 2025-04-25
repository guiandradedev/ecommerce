export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
        className="max-h-screen py-2 flex-1 items-center justify-center md:py-8 lg:pt-24"    
    >
        { children }
    </div>
  );
}
