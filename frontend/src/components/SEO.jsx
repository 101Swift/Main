import { Helmet } from "react-helmet-async";

export default function SEO({ 
  title, 
  description, 
  canonical,
  type = "website",
  image = "https://customer-assets.emergentagent.com/job_49426a61-5ab8-4cbe-bfda-9c03f92f563c/artifacts/17lnfwcm_logo.png"
}) {
  const siteTitle = "Swift Website & SEO Services";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const baseUrl = "https://swiftwebseo.co.uk";
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      
      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
