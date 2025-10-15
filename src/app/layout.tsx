
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
      "Your customizable biolink for everywhere. Make your page truly yours.",
    url: "https://gluu.me",
    siteName: "gluu.me",
    images: [
      {
        url: "/og-image.png",
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
    description: "Customizable biolinks for everywhere. Make your gluu page yours.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

