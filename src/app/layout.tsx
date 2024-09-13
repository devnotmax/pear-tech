// fuentes
import { Montserrat, Poppins } from "next/font/google";

// componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// estilos
import "./globals.css";
import { AuthProvider } from "@/contexts/authContext";

export const metadata = {
  title: "PearThech",
  description: "Tienda de Electronica",
};

const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Productos", href: "/products" },
    { name: "Contacto", href: "/contact" },
    { name: "Sobre", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
            rel="stylesheet"
          />
        </head>
        <body className={`${montserrat.className} ${poppins.className}`}>
          <Navbar links={navLinks} />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
