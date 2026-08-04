import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_STRAPI_API_URL || 'https://fifthlab.onrender.com';

const defaultMeta = {
  title: 'Fifthlab: Ecosystem of Solutions that work',
  description: 'Design and build digital experiences for fintech and enterprise.',
  image: null,
};

const updateMetaTag = (attrName, attrValue, content) => {
  if (!content) return;
  const selector = `meta[${attrName}="${attrValue}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const buildAbsoluteUrl = (url) => {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  const base = API_BASE.endsWith('/') ? API_BASE.slice(0, -1) : API_BASE;
  return `${base}${url}`;
};

const setSeoTags = ({ title, description, image }) => {
  if (title) {
    document.title = title;
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('name', 'twitter:title', title);
  }
  if (description) {
    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('name', 'twitter:description', description);
  }
  updateMetaTag('property', 'og:type', 'website');
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  if (image) {
    const imageUrl = buildAbsoluteUrl(image);
    updateMetaTag('property', 'og:image', imageUrl);
    updateMetaTag('name', 'twitter:image', imageUrl);
  }
};

export default function SeoManager() {
  const [seoData, setSeoData] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/global?populate=defaultSeo.shareImage`)
      .then((response) => response.json())
      .then((result) => {
        const global = result?.data?.attributes || {};
        const defaultSeo = global.defaultSeo || {};
        setSeoData({
          title: defaultSeo.metaTitle || global.siteName || defaultMeta.title,
          description: defaultSeo.metaDescription || global.siteDescription || defaultMeta.description,
          image: defaultSeo.shareImage?.data?.attributes?.url || null,
        });
      })
      .catch(() => {
        setSeoData(defaultMeta);
      });
  }, []);

  useEffect(() => {
    if (!seoData) return;
    setSeoTags(seoData);
  }, [seoData]);

  return null;
}
