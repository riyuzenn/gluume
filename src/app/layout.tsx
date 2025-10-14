import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "gluu.me — Link everything. Stay glued.",
    template: "%s | gluu.me",
  },
  description:
    "Create your own customizable biolink for Discord and socials — personalize your page, showcase your world, and stay connected.",
  keywords: [
    "biolink",
    "discord bio",
    "link in bio",
    "social links",
    "customizable links",
    "gluu.me",
  ],
  authors: [{ name: "gluu.me" }],
  openGraph: {
    title: "gluu.me — Link everything. Stay glued.",
    description:
      "Your customizable biolink for Discord and beyond. Make your page truly yours.",
    url: "https://gluu.me",
    siteName: "gluu.me",
    images: [
      {
        url: "/og-image.png", // place your OG image in /public
        width: 1200,
        height: 630,
        alt: "gluu.me preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gluu.me — Link everything. Stay glued.",
    description:
      "Customizable biolinks for Discord. Make your gluu page yours.",
    images: ["/og-image.png"],
    creator: "@gluu_me",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://gluu.me"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider 
          defaultTheme="dark" 
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
