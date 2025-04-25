export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
        className="max-h-screen py-8 flex-1 items-center justify-center lg:py-36"    
    >
        { children }
    </div>
  );
}
