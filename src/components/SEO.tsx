import { Helmet } from "react-helmet-async";

const SITE_URL = "https://arcsla.net";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "profile" | "article";
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description = "Portal resmi PT Arcsla Cakrawala Indonesia — Mengelola talent, produksi konten YouTube, dan komunitas kreator digital di Indonesia.",
  image = `${SITE_URL}/og-image.jpg`,
  url = SITE_URL,
  type = "website",
  jsonLd,
  noIndex = false,
}: SEOProps) {
  const companyName = import.meta.env.VITE_COMPANY_NAME || "ARCSLA";
  const fullTitle = title ? `${title} | ${companyName}` : companyName;

  // Ensure absolute URL for images
  const absoluteImage = image?.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ARCSLA Kingdom" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Theme Color */}
      <meta name="theme-color" content="#6b21a8" />

      {/* JSON-LD Structured Data */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
