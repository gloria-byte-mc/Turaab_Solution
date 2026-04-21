import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description, keywords, url }) => {
  return (
    <Helmet>
      {/* ── BASIC ── */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Turaab Solutions Limited" />

      {/* ── OPEN GRAPH (Facebook, WhatsApp preview) ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="/images/turaab-og-image.png" />

      {/* ── TWITTER CARD ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/turaab-og-image.png" />

      {/* ── CANONICAL ── */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO