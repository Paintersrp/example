import React from "react";
import { Helmet } from "react-helmet";
import { seoData } from "./seo-data";

const SEOHeader = () => {
  const { title, description, keywords, image, url } = seoData;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEOHeader;
