import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom'; 

// ✅ Dummy Data (FINAL FALLBACK ONLY)
const insightsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop',
  },
];

// ✅ Extract first image from Medium HTML
const extractImageFromContent = (html) => {
  if (!html) return null;

  const div = document.createElement("div");
  div.innerHTML = html;

  const img = div.querySelector("img");

  return (
    img?.getAttribute("src") ||
    img?.getAttribute("data-src") ||
    null
  );
};

const InsightsSection = () => {
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch Medium Posts
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thefifthlab"
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.slice(0, 4).map((item, index) => {
          const urlParts = item.guid.split('/');
          const cleanId = urlParts[urlParts.length - 1]; 

          // ✅ Proper image resolution chain
          const resolvedImage =
            item.thumbnail ||
            extractImageFromContent(item.content) ||
            insightsData[index]?.image ||
            null;

          return {
            id: cleanId, 
            titleMain: item.title.split(":")[0],
            titleSub: item.title.split(":")[1] || "",
            date: new Date(item.pubDate).toDateString(),
            category: item.categories?.[0] || "Others",
            content: item.content,
            image: resolvedImage, // ✅ FINAL IMAGE SOURCE
          };
        });

        setApiPosts(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ Click handler
  const handlePostClick = (post) => {
    navigate(`/article/${post.id}`, { state: post });
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Header */}
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-center text-[#0E0E0E] mb-6 font-sans">
          Our Insights
        </h2>

        {/* ✅ Carousel */}
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
            {(loading ? insightsData : apiPosts).map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-[260px]! sm:w-[300px]! md:w-[400px]! lg:w-[441px]!"
              >
                {({ isActive }) => (
                  <div
                    onClick={() => !loading && handlePostClick(item)}
                    className={`relative h-[280px] sm:h-[400px] md:h-[500px] rounded-[30px] sm:rounded-[45px] overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isActive 
                        ? 'scale-100 z-10' 
                        : 'scale-[0.85] opacity-70 saturate-50'
                    }`}
                  >
                    <img 
                      src={item.image}
                      alt={item.titleMain || "Insight"} 
                      loading="lazy"
                      className="w-full h-full object-cover" 
                    />

                    {/* ✅ Overlay */}
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
                        <h3 className="text-white text-base sm:text-xl md:text-[31px] font-medium mb-2 tracking-tight leading-snug">
                          {item.titleMain || "Loading..."}
                        </h3>

                        <button 
                          onClick={(e) => {
                            e.stopPropagation(); 
                            !loading && handlePostClick(item);
                          }}
                          className="bg-white text-black font-medium py-2 px-4 sm:py-3 sm:px-5 rounded-[9px] hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                        >
                          View Post
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Edge Fade */}
          <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* ✅ Footer Button */}
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
