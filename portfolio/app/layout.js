import { Geist, Geist_Mono,Roboto, Sometype_Mono } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  
});

const sometypeMono=Sometype_Mono({
  subsets:["latin"],
  weight:["400","700"],
  variable:"--font-sometypeMono",
});


export const metadata = {
  title: "Ujjwal Gupta",
  description: "Portfolio",
  viewport: "width=device-width, initial-scale=1",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.className} bg-black text-white min-h-screen w-full overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
