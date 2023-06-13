import "./globals.css";
import "swiper/css";
import { mulish } from "@/helpers/fonts";

export const metadata = {
  title: "Saviour Care",
  description: "Saviour Care - Your best clinic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className}`}>{children}</body>
    </html>
  );
}
