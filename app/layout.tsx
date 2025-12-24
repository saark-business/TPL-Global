import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import { IoMailOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedin,
  FaMedium,
  FaReddit,
  FaYoutube,
} from "react-icons/fa6";
import { Phone } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tplglobal.net/"),
  title: {
    default: "T.P.L. Global, LLC | Top U.S. Immigration Consultant for Indians",
    template: "%s | T.P.L. Global, LLC",
  },
  description:
    "We help individuals and families worldwide with U.S. visas, green cards, and citizenship. Practical advice. Careful execution. Book a consultation.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "US immigration for Indians",
    "U.S. visa consultant",
    "immigration lawyer",
    "B-1 B-2 visa",
    "K-1 visa",
    "IR-1 CR-1",
    "family green card",
    "asylum",
    "U visa",
    "T visa",
    "VAWA",
    "SIJ",
    "citizenship N-400",
    "Tejas G. Pate, Esq.l",
    "T.P.L. Global, LLC",
    "Boston Top Immigration Lawyer",
  ],
  openGraph: {
    type: "website",
    url: "https://www.tplglobal.net/",
    siteName: "T.P.L. Global, LLC",
    title:
      "Clear and effective U.S. immigration strategy | Wherever you are in the world.",
    description:
      "Visas, green cards, and citizenship for individuals and families. Practical advice. Careful execution.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "T.P.L. Global, LLC — U.S. Immigration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T.P.L. Global, LLC — U.S. Immigration for Individuals & Families",
    description:
      "Step-by-step help with visas, green cards, and citizenship. Practical advice. Careful execution.",
    images: ["/og/tpl-global-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M8PTDHG2');`}
        </Script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YN7C1JVPV5"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YN7C1JVPV5');
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8PTDHG2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Navbar />
        <div className=" flex-col fixed w-10 h-fit border border-black rounded-tl-lg rounded-bl-lg right-0 top-[60vh] lg:top-52 color-black text-center z-50 bg-white flex justify-center items-center">
          <a
            href="https://www.linkedin.com/company/t-p-l-global-llc/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <FaLinkedin className="m-2 w-6 h-6 lg:w-4 lg:h-4 " />
          </a>
          <a
            href="https://www.instagram.com/tpl_global/"
            target="_blank"
            aria-label="Instagram"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <FaInstagram className="m-2 w-6 h-6 lg:w-4 lg:h-4 " />
          </a>
          <a
            href="https://www.youtube.com/@tejaspatel-tplglobal"
            target="_blank"
            aria-label="Youtube"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <FaYoutube className="m-2 w-6 h-6 lg:w-4 lg:h-4 " />
          </a>
          <a
            href="https://medium.com/@tplglobal_usimmigration"
            target="_blank"
            aria-label="Medium"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <FaMedium className="m-2 w-6 h-6 lg:w-4 lg:h-4 " />
          </a>
          <a
            href="https://www.reddit.com/r/USimmigrationindia/"
            target="_blank"
            aria-label="Reddit"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <FaReddit className="m-2 w-6 h-6 lg:w-4 lg:h-4 " />
          </a>
          <a
            href="/consult"
            target="_blank"
            aria-label="Book a consultation"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <Phone className="m-2 w-6 h-6 lg:w-4 lg:h-4" />
          </a>
          <a
            href="mailto:Tejas.P@tplglobal.net"
            target="_blank"
            aria-label="send mail"
            className="hover:scale-[1.5] transition-all duration-300"
          >
            <IoMailOutline className="m-2 w-6 h-6 lg:w-4 lg:h-4" />
          </a>
        </div>
        {children}
        <Toaster/>
        <Footer />
      </body>
    </html>
  );
}
