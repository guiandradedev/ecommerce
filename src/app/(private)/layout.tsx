import PrivateHeader from "@/components/private/header";
import Header from "@/components/public/header";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="container mx-auto px-4">
        <PrivateHeader />
        {children}
      </div>
    </main>
  );
}
