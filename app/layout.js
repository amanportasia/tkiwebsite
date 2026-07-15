import "./globals.css";
import BrowserTitle from "../components/BrowserTitle";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Amanportasia",
  alternateName: "Amanportasia",
  url: "https://www.amanportasia.com/"
};

export const metadata = {
  metadataBase: new URL("https://www.amanportasia.com"),
  applicationName: "Amanportasia",
  alternates: {
    canonical: "https://www.amanportasia.com/"
  },
  title: {
    default: "Lowongan Kerja Luar Negeri TKI",
    template: "%s | Lowongan Kerja Luar Negeri TKI"
  },
  description: "Website CTKI dengan menu Beranda, Profil, dan Contact Person.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Lowongan Kerja Luar Negeri TKI",
    description: "Website CTKI dengan menu Beranda, Profil, dan Contact Person.",
    url: "https://www.amanportasia.com",
    siteName: "Amanportasia",
    images: [
      {
        url: "/amanportasia.png",
        width: 1024,
        height: 1024,
        alt: "Amanportasia"
      }
    ],
    locale: "id_ID",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/flatly/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BrowserTitle />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
