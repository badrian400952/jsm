"use client";

import { usePathname } from "next/navigation";
import Headers from "./headers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const withoutHeader = ["/login", "/register"];

  return (
    <div className={poppins.className}>
      {!withoutHeader.includes(pathname) && <Headers />}
      {children}
    </div>
  );
}
