import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { pretendard } from "@/ui/font";
import PageEnterAni from "@/ui/components/PageEnterAni";

export const metadata: Metadata = {
  title: "HOUSE OF GREATNESS",

  description: "HOUSE OF GREATNESS",

  openGraph: {
    images: [
      {
        url: "https://houseofgreatness.kr/images/Jordan_cover.jpg",
        width: 1200,
        height: 630,
        alt: "HOUSE OF GREATNESS",
      },
    ],
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>



      </head>

      <body className={`${pretendard.variable} pretendard`}>
        <PageEnterAni />
        <ViewTransitions>{children}</ViewTransitions>
        <Analytics />
      </body>

    </html>
  );
}
