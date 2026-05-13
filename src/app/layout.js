import { Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const marcellus = Marcellus({
  weight: '400',
  variable: '--font-marcellus',
  subsets: ['latin']
})

export const metadata = {
  title: "Tiles-Gallery",
  description: "Best Tiles Shop In Bangladesh",
  icons: {
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${marcellus.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="min-h-screen container mx-auto">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
