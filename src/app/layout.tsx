"use client";
// import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const exo = Exo({ subsets: ["latin"], weight: ["400", "700"] });
import { Imprima } from "next/font/google";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const roboto = Imprima({
  weight: "400",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "jersey panda",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
