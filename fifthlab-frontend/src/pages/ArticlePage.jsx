import React, { useMemo, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import background from '../assets/background.png';
import logo from '../assets/logo.png';

const API_BASE = import.meta.env.VITE_STRAPI_API_URL || 'https://fifthlab.onrender.com';

function createMarkup(htmlContent) {
  return { __html: `<div class="prose max-w-none">${htmlContent}</div>` };
}

const buildStrapiUrl = (url) => {
  if (!url) return null;
  return url.startsWith('http') ? url : `${API_BASE}${url}`;
};

const getStrapiAttributes = (entry) => entry?.attributes || entry || {};

const getMediaUrl = (media) => {
  if (!media) return null;
  if (typeof media === 'string') return buildStrapiUrl(media);
  if (media?.data?.attributes?.url) return buildStrapiUrl(media.data.attributes.url);
  if (media?.attributes?.url) return buildStrapiUrl(media.attributes.url);
  if (media?.url) return buildStrapiUrl(media.url);
  return null;
};

const updateMetaTag = (attrName, attrValue, content) => {
  if (!content || typeof document === 'undefined') return;
  const selector = `meta[${attrName}="${attrValue}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setArticleMetaTags = (article) => {
  if (!article) return;
  const title = `${article.titleMain} | Fifthlab`;
  const description = article.description || article.titleSub || 'Read the latest insights from Fifthlab.';
  const image = article.image || buildStrapiUrl(article.coverUrl);

  document.title = title;
  updateMetaTag('name', 'description', description);
  updateMetaTag('property', 'og:title', title);
  updateMetaTag('name', 'twitter:title', title);
  updateMetaTag('property', 'og:description', description);
  updateMetaTag('name', 'twitter:description', description);
  updateMetaTag('property', 'og:type', 'article');
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  if (image) {
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('name', 'twitter:image', image);
  }
};

const renderBlock = (block, index) => {
  if (!block) return null;

  switch (block.__component) {
    case 'shared.rich-text':
      return (
        <div key={index} className="prose max-w-none mb-8" dangerouslySetInnerHTML={createMarkup(block.body)} />
      );
    case 'shared.media': {
      const url = buildStrapiUrl(block.file?.data?.attributes?.url);
      return url ? (
        <div key={index} className="mb-8">
          <img src={url} alt={block.file?.data?.attributes?.name || 'Media'} className="w-full h-auto rounded-3xl object-cover" />
        </div>
      ) : null;
    }
    case 'shared.quote':
      return (
        <blockquote key={index} className="border-l-4 border-black pl-6 italic text-lg text-gray-700 mb-8">
          <p>{block.body}</p>
          {block.title && <span className="mt-4 block text-sm font-semibold text-black">— {block.title}</span>}
        </blockquote>
      );
    case 'shared.slider':
      return (
        <div key={index} className="grid grid-cols-1 gap-4 mb-8">
          {block.files?.data?.map((file, fileIndex) => {
            const url = buildStrapiUrl(file.attributes.url);
            return url ? (
              <img
                key={fileIndex}
                src={url}
                alt={file.attributes?.name || `Slider image ${fileIndex + 1}`}
                className="w-full h-auto rounded-3xl object-cover"
              />
            ) : null;
          })}
        </div>
      );
    default:
      return null;
  }
};

// === RELATED ARTICLE CARD (REVISED) ===
const RelatedArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const image = article.image || buildStrapiUrl(article.coverUrl);

  return (
    <div
      onClick={() => navigate(`/article/${article.slug || article.id}`, { state: article })}
      className="flex flex-col relative rounded-[38.15px] overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[497px] cursor-pointer"
    >
      <img
        src={image}
        alt={article.titleMain}
        className="w-full h-full object-cover absolute"
      />
      <div className="relative p-4 sm:p-6 flex flex-col justify-end h-full bg-linear-to-t from-black/90 via-black/60 to-transparent">
        <h3 className="text-lg sm:text-[22px] lg:text-[26px] font-medium text-white mb-2 sm:mb-3 leading-snug">
          {article.titleMain}
        </h3>

                <button
                    className="w-min whitespace-nowrap px-3 py-1.5 text-[12px] font-medium text-black bg-white border border-white rounded-lg hover:bg-gray-200 transition"
                >
                    View Post
                </button>
            </div>
        </div>
    );
};

// === MAIN ARTICLE PAGE (REVISED) ===
const ArticlePage = ({ allPosts = [] }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: articleSlug } = useParams();
  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(!location.state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (article || !articleSlug) return;

    setLoading(true);
    fetch(`${API_BASE}/api/articles?filters[slug][$eq]=${encodeURIComponent(articleSlug)}&populate=*&pagination[page]=1&pagination[pageSize]=1`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length > 0) {
          const item = data.data[0];
          const attrs = getStrapiAttributes(item);
          const coverUrl = getMediaUrl(attrs.cover);

          setArticle({
            id: attrs.id || item.id,
            slug: attrs.slug,
            titleMain: attrs.title || attrs.Text || attrs.Title || 'Untitled article',
            titleSub: attrs.subtitle || '',
            image: coverUrl,
            coverUrl,
            date: new Date(attrs.updatedAt || attrs.createdAt).toDateString(),
            pubDate: attrs.publishedAt || attrs.updatedAt || attrs.createdAt,
            category: attrs.category?.data?.attributes?.name || attrs.category?.name || attrs.category || 'Others',
            description: attrs.description || '',
            blocks: attrs.blocks || [],
          });
        }
      })
      .finally(() => setLoading(false));
  }, [articleSlug, article]);

  const currentArticle = article;

  useEffect(() => {
    if (!currentArticle) return;
    setArticleMetaTags(currentArticle);
  }, [currentArticle]);


  const relatedArticles = useMemo(() => {
    if (!currentArticle) return [];
    return allPosts.filter((post) => post.id !== currentArticle.id).slice(0, 3);
  }, [allPosts, currentArticle]);

  if (loading) {
      return (
        <div className="font-sans py-24 px-4 text-center">
          <h1 className="text-3xl font-semibold mb-4">Loading article…</h1>
        </div>
      );
    }

    if (!currentArticle) {
      return (
        <div className="font-sans py-24 px-4 text-center">
          <h1 className="text-3xl font-semibold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article data is missing. Please go back to the insights page.</p>
          <button onClick={() => navigate('/insights')} className="bg-black text-white px-6 py-3 rounded-xl">
            Go Back
          </button>
        </div>
      );
    }

    const {
      titleMain,
      titleSub,
      image,
      date,
      blocks,
      category,
      pubDate,
      description,
      content,
    } = currentArticle;

    const articleContent = Array.isArray(blocks) && blocks.length ? blocks : content || description || '';
    const topImage = image || buildStrapiUrl(currentArticle.coverUrl) || logo;


    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* === Faint repeating background (unchanged) === */}
            {/* ... (Background div remains the same) */}
            <div
                className="absolute inset-0 w-full h-full opacity-5"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    backgroundPosition: 'top left',
                }}
            ></div>

            {/* === PAGE CONTENT === */}
            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[136px] py-16 sm:py-20 lg:py-[140px] max-w-7xl">
                
                {/* Back Button */}
                <button 
                    // 💡 FIX 2: Navigate directly to the Insights route
                  onClick={() => navigate('/insights')} 
                  className="text-gray-600 hover:text-black mb-10 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to Insights
                </button>

                {/* Header */}
                <header className="mb-6 max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight text-black mb-4">
                        {titleMain}
                        {titleSub && (
                            <span className="block text-xl font-light text-gray-700 mt-2">
                                {titleSub}
                            </span>
                        )}
                    </h1>
                </header>

                {/* Meta */}
                <div className="flex flex-wrap items-center text-[13px] text-[#6C6D6F] mb-10 max-w-4xl mx-auto gap-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 p-1 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <span className="text-black text-[16px]">Fifthlab Africa</span>
                    </div>
                    <span>•</span>
                    {/* Display the extracted category */}
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                    <span>•</span>
                    {/* Display the correct date */}
                    <time dateTime={pubDate}>{date}</time>
                </div>

                {/* Featured Image (Commented out in original) */}
{/*                 <div className="relative w-full overflow-hidden mb-10 max-w-4xl mx-auto">
                    <img
//                         src={image} 
//                         alt={titleMain}
                        className="w-full h-auto object-cover rounded-4xl"
                    />
                </div> */}

                {/* Article Body */}
                <section className="text-base sm:text-base lg:text-lg leading-relaxed text-[#3C3C3C] mb-12 sm:mb-16 lg:mb-[108px] max-w-4xl mx-auto">
                  {Array.isArray(articleContent) ? (
                    articleContent.map((block, index) => renderBlock(block, index))
                  ) : (
                    <div dangerouslySetInnerHTML={createMarkup(articleContent)} className="medium-article-container" />
                  )}
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-20 pt-10 border-t border-gray-200">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-6 sm:mb-8 lg:mb-[27px] text-center">
                            More Insights
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
                            {/* Map over the filtered related articles */}
                            {relatedArticles.map((article, index) => (
                                <RelatedArticleCard key={index} article={article} />
                            ))}
                        </div>
                    </section>
                )}

            </div>

            {/* === Keep your original background media queries unchanged === */}
            <style jsx>{`
                /* ... (Your original background media queries here) ... */
            `}</style>

        </div>
    );
};

export default ArticlePage;