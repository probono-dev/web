import React, { memo } from 'react';
import Head from 'next/head';

import defaultImg from '../assets/logo_design.png';

export type SeoProps = {
  title: string;
  description: string;
  imageSrc?: string;
};

export const Seo = memo(
  ({ title, description, imageSrc = defaultImg }: SeoProps) => (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageSrc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@DanyKov" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  ),
);
