import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin", // This creates the CSS variable
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add the variable to the body class */}
      <body className={`${josefin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}