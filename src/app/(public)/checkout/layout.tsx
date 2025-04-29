/**
 * 
 * TODO: validate if the back page was the checkout page and if user is logged in
 */

export default function PaymentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}
