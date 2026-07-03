import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tcogrm.net"),
  title: "The Church of God General Headquarters",
  description:
    "The Church of God General Headquarters is a worldwide church committed to God's Word, the Gospel, and Spirit-led service across churches, ministries, and communities.",
  openGraph: {
    title: "The Church of God General Headquarters",
    description:
      "One faith. One family. One mission. Connect with The Church of God General Headquarters.",
    images: ["/assets/tcog-website-mock-up.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
