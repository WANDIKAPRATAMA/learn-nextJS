import "@/app/ui/global.css";
import { gabarito } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased`}>{children}</body>
    </html>
  );
}
