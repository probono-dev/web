import React from 'react';

import apple_touch_icon57x57 from '../assets/generated/apple-touch-icon-57x57.png';
import apple_touch_icon60x60 from '../assets/generated/apple-touch-icon-60x60.png';
import apple_touch_icon72x72 from '../assets/generated/apple-touch-icon-72x72.png';
import apple_touch_icon76x76 from '../assets/generated/apple-touch-icon-76x76.png';
import apple_touch_icon114x114 from '../assets/generated/apple-touch-icon-114x114.png';
import apple_touch_icon120x120 from '../assets/generated/apple-touch-icon-120x120.png';
import apple_touch_icon144x144 from '../assets/generated/apple-touch-icon-144x144.png';
import apple_touch_icon152x152 from '../assets/generated/apple-touch-icon-152x152.png';
import apple_touch_icon180x180 from '../assets/generated/apple-touch-icon-180x180.png';
import icon32x32 from '../assets/generated/favicon-32x32.png';
import icon16x16 from '../assets/generated/favicon-16x16.png';
import webmanifest from '../assets/generated/site.webmanifest';
import maskIcon from '../assets/generated/safari-pinned-tab.svg';
import msTileImage from '../assets/generated/mstile-144x144.png';

export const Favicons = () => {
  return (
    <>
      <link rel="apple-touch-icon" sizes="57x57" href={apple_touch_icon57x57} />
      <link rel="apple-touch-icon" sizes="60x60" href={apple_touch_icon60x60} />
      <link rel="apple-touch-icon" sizes="72x72" href={apple_touch_icon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={apple_touch_icon76x76} />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={apple_touch_icon114x114}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={apple_touch_icon120x120}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={apple_touch_icon144x144}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={apple_touch_icon152x152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={apple_touch_icon180x180}
      />
      <link rel="icon" type="image/png" sizes="32x32" href={icon32x32} />
      <link rel="icon" type="image/png" sizes="16x16" href={icon16x16} />
      <link rel="manifest" href={webmanifest} />
      <link rel="mask-icon" href={maskIcon} color="#c45885" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-TileImage" content={msTileImage} />
      <meta name="theme-color" content="#fdf9f6" />
    </>
  );
};
