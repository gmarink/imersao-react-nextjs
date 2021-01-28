/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

const Tag = ({
  title, description, url, bgimage,
}) => (

  <Head>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={bgimage} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={description} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={bgimage} />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
  </Head>

);

export default Tag;
