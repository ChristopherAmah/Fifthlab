import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from '../assets/insights.jpg';

const API_BASE = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

const getStrapiAttributes = (entry) => entry?.attributes || entry || {};

const getMediaUrl = (media, fallback = defaultImage) => {
  if (!media) return fallback;
  if (typeof media === 'string') return media.startsWith('http') ? media : `${API_BASE}${media}`;
  if (media?.data?.attributes?.url) return `${API_BASE}${media.data.attributes.url}`;
  if (media?.attributes?.url) return `${API_BASE}${media.attributes.url}`;
  if (media?.url) return media.url.startsWith('http') ? media.url : `${API_BASE}${media.url}`;
  return fallback;
};

const getArticleTitle = (attrs = {}) => attrs.title || attrs.Text || attrs.Title || 'Untitled article';

const normalizeCategory = (name) => {
  if (!name) return 'Others';
  const normalized = name.trim().toLowerCase();
  if (normalized === 'finance' || normalized === 'fintech') return 'Fintech';
  if (normalized === 'solutions') return 'Solutions';
  return 'Others';
};

const InsightsSection = () => {
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${API_BASE}/api/articles?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=4`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = (data?.data || []).map((article) => {
          const attrs = getStrapiAttributes(article);

          return {
            id: attrs.slug || article.id,
            slug: attrs.slug || article.id,
            titleMain: getArticleTitle(attrs),
            titleSub: attrs.description || '',
            date: new Date(attrs.updatedAt || attrs.createdAt || Date.now()).toDateString(),
            category: normalizeCategory(attrs.category?.data?.attributes?.name || attrs.category?.name || attrs.category || 'Others'),
            content: attrs.description || '',
            image: getMediaUrl(attrs.cover, defaultImage),
          };
        });

        setApiPosts(mapped);
      })
      .catch(() => {
        setApiPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const handlePostClick = (post) => {
    navigate(`/article/${post.slug}`, { state: post });
  };

  const slides = loading ? Array(4).fill(null) : apiPosts;

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-center text-[#0E0E0E] mb-6 font-sans">
          Our Insights
        </h2>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { spaceBetween: 8 },
              640: { spaceBetween: 8 },
              768: { spaceBetween: 8 },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide
                key={item?.id || index}
                className="w-[260px]! sm:w-[300px]! md:w-[400px]! lg:w-[441px]!"
              >
                {({ isActive }) => (
                  <div
                    onClick={() => !loading && item && handlePostClick(item)}
                    className={`relative h-[280px] sm:h-[400px] md:h-[500px] rounded-[30px] sm:rounded-[45px] overflow-hidden transition-all duration-500 ease-out ${
                      loading || !item ? 'cursor-default' : 'cursor-pointer'
                    } ${
                      isActive ? 'scale-100 z-10' : 'scale-[0.85] opacity-70 saturate-50'
                    }`}
                  >
                    {loading || !item ? (
                      <div className="w-full h-full bg-gray-200 animate-pulse" />
                    ) : (
                      <>
                        <img
                          src={item.image}
                          alt={item.titleMain || 'Insight'}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />

                        <div
                          className={`absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000CC] to-transparent transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <div
                            className={`absolute bottom-0 left-0 p-4 sm:p-8 w-full flex flex-col items-start text-left transition-transform duration-500 delay-100 transform ${
                              isActive ? 'translate-y-0' : 'translate-y-10'
                            }`}
                          >
                            <p className="text-white/80 text-sm mb-2">
                              {item.category} • {item.date}
                            </p>
                            <h3 className="text-white text-base sm:text-xl md:text-[31px] font-medium mb-2 tracking-tight leading-snug">
                              {item.titleMain}
                            </h3>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (!loading && item) handlePostClick(item);
                              }}
                              className="bg-white text-black font-medium py-2 px-4 sm:py-3 sm:px-5 rounded-[9px] hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                            >
                              View Post
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link to="/insights">
            <button className="inline-flex items-center gap-2 bg-[#00B4D8] text-white text-sm sm:text-[18px] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-[1010px] hover:bg-[#009bd6] transition-colors duration-300">
              View all Insights
              <BsArrowUpRight className="text-lg stroke-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
