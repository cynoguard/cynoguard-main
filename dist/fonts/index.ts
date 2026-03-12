import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "./Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const fontGeist = localFont({
  src: "./GeistVF.woff2",
  variable: "--font-geist-mono",
});
