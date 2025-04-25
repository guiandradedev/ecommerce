import Header from "@/components/header";
import SmallBanner from "@/components/small-banner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SmallBanner />
      <Header />
      <div className="container mx-auto px-4">
        {children}
      </div>
    </main>
  );
}
