import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.example.com"),
  title: {
    default: "Shashwat Sharma | Frontend Developer Portfolio",
    template: "%s | Shashwat Sharma",
  },
  description:
    "A responsive developer portfolio built with Next.js and Tailwind CSS, featuring projects, skills, contact links, and build decisions.",
  keywords: ["Frontend Developer", "React", "Next.js", "Tailwind CSS", "TypeScript", "Portfolio"],
  authors: [{ name: "Shashwat Sharma" }],
  openGraph: {
    title: "Shashwat Sharma | Frontend Developer Portfolio",
    description:
      "Recruiter-friendly portfolio with selected projects, technical stack, contact paths, and design decisions.",
    type: "website",
    images: [
      {
        url: "/portfolio-assets/hero-workspace.png",
        width: 1800,
        height: 1100,
        alt: "Developer workspace portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat Sharma | Frontend Developer Portfolio",
    description: "Responsive Next.js portfolio for frontend development work.",
    images: ["/portfolio-assets/hero-workspace.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
