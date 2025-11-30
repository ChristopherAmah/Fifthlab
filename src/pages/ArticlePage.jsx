import React from 'react';
import insights from '../assets/insights.jpg'; 
import relatedImage from '../assets/insights.jpg'; 
import background from '../assets/background.png';

// === RELATED ARTICLES DATA ===
const relatedArticlesData = [
  {
    title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs",
    link: "#",
    image: relatedImage,
  },
  {
    title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs",
    link: "#",
    image: relatedImage,
  },
  {
    title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs",
    link: "#",
    image: relatedImage,
  },
];

// === RELATED ARTICLE CARD ===
const RelatedArticleCard = ({ article }) => {
  return (
    <div className="flex flex-col relative rounded-[38.15px] overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full object-cover h-full absolute"
      />
      <div className="relative p-6 flex flex-col justify-end h-full min-h-[497px] bg-linear-to-t from-[#000000] via-[#000000CC] to-[#00000000]">
        <h3 className="text-[26px] font-medium text-white mb-3 leading-snug">
          {article.title}
        </h3>

        <a
          href={article.link}
          className="w-min whitespace-nowrap px-4 py-2 text-[12px] font-medium text-black bg-white border border-white rounded-lg hover:bg-white hover:text-black transition"
        >
          View Post
        </a>
      </div>
    </div>
  );
};

// === MAIN ARTICLE PAGE ===
const ArticlePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* === Faint repeating background === */}
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
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[136px] py-[140px]">

        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl sm:text-[42px] font-semibold leading-tight text-black mb-4 px-[127px]">
            Speaking The Language Of Innovation: The Role Of Tech In Promoting Global Literacy
          </h1>
        </header>

        {/* Meta */}
        <div className="flex items-center text-[13px] text-[#6C6D6F] mb-10 px-[136px]">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
              FL
            </div>
            <span className="text-black text-[16px]">Fifthlab Africa</span>
          </div>
          <span className="mx-2">•</span>
          <span>3 min read</span>
          <span className="mx-2">•</span>
          <time dateTime="2024-09-09">2024-09-09</time>
        </div>

        {/* Featured Image */}
        <div className="relative w-full overflow-hidden mb-10 px-[77px]">
          <img
            src={insights}
            alt="A young woman smiling while working on a laptop."
            className="w-full h-auto object-cover rounded-4xl"
          />
        </div>

        {/* Article Body */}
        <section className="text-lg leading-relaxed text-[#3C3C3C] mb-[108px] px-[105px]">
          <p>
            In this modern internet age, technology has evolved into a universal
            language—one that transcends borders...
          </p>
          <br />
          <p>
            In this modern internet age, technology has evolved into a universal
            language—one that transcends borders...
          </p>
          <br />
          <p>
            In this modern internet age, technology has evolved into a universal
            language—one that transcends borders...
          </p>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl sm:text-[36px] font-semibold text-black mb-[27px]">
            Related Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticlesData.map((article, index) => (
              <RelatedArticleCard key={index} article={article} />
            ))}
          </div>
        </section>

      </div>

      {/* === RESPONSIVE BACKGROUND SIZE === */}
      <style jsx>{`
        @media (max-width: 640px) {
          div[style] {
            background-size: 80px 80px;
          }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          div[style] {
            background-size: 120px 120px;
          }
        }
        @media (min-width: 1025px) {
          div[style] {
            background-size: 160px 160px;
          }
        }
      `}</style>

    </div>
  );
};

export default ArticlePage;
