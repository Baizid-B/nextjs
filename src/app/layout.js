import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import NextJsSessionProvider from "@/Providers/NextJsSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight : ["400", "600", "700"],
  subsets: ["latin"]
}
)

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default: "Create Next Apps",
    template: " %s | Learning NextJs"
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextJsSessionProvider>
        <body
          className={`${poppins.className} antialiased`}
        >
          <NavBar></NavBar>
          {children}
        </body>
      </NextJsSessionProvider>
    </html>
  );
}
