import * as React from "react";
import type { Metadata } from "next";

import "@/styles/globals.css";
import Providers from "@/app/_components/providers/providers";

export const metadata: Metadata = {
  title: "TODO",
  description: "TODO"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
