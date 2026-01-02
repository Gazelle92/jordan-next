import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 1200",
  display: "swap",
});

export const jordan = localFont({
  src: [
    {
      path: "../fonts/Jordan NHG Disp-65 Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/Jordan NHG Disp-95 Black.otf",
      weight: "900",
      style: "normal",
    },
    // 필요한 다른 weight 파일이 있다면 여기에 추가
  ],
  variable: "--font-jordan",
  display: "swap",
});
