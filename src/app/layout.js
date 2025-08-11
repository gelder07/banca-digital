import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import NavbarLayout from "./AppProvider";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const lato = Lato({
  subsets: ["lato"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Banca Digital",
  description: "Prueba técnica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/logoLafise.png" type="image/png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${poppins.variable} ${lato.variable} antialiased`}>
        <NavbarLayout> {children}</NavbarLayout>
      </body>
    </html>
  );
}
