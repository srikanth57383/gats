import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ description, title, keywords, image, url }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate="%s | ZYCLYX"
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "google-site-verification",
          content: "google8234ea290c7b1d82.html",
        },
        {
          name: "msvalidate.01",
          content: "3383FA1564B9F2FA1625887CF8AC82D5",
        },
      ]}
    />
  );
};

export default SEO;
