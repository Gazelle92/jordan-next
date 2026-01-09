import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOUSE OF GREATNESS",
  description: "HOUSE OF GREATNESS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col max-w-md mx-auto items-stretch min-h-dvh relative">
      {children}
    </main>
  );
}
