import React, { useEffect, useState } from 'react';
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// 2. Import Swiper styles required for core functionality
import 'swiper/css';
import 'swiper/css/pagination';
// 3. Import required modules for effects
import { Pagination, Autoplay } from 'swiper/modules';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom'; 

// --- Dummy Data (Used for images only) ---
const insightsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop',
    title: 'Streamlining Business Operations in Africa: SMERP’s ERP Solution for SMEs',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    title: 'The Future of Fintech: Navigating Regulatory Landscapes across the Continent',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    title: 'Leveraging Data Analytics to Drive Growth in Emerging Markets',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop',
    title: 'Building Resilient Supply Chains in a Post-Pandemic World',
  },
];

const InsightsSection = () => {
  // State to store the fetched Medium API data
  const [apiPosts, setApiPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 1. Fetch Medium Posts and map the data
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thefifthlab"
    )
      .then((res) => res.json())
      .then((data) => {
        // Slice to match the dummy data length (4)
        const mapped = data.items.slice(0, 4).map((item) => {
          const urlParts = item.guid.split('/');
          const cleanId = urlParts[urlParts.length - 1]; 

          return {
            id: cleanId, 
            // Store the main title from the API
            titleMain: item.title.split(":")[0],
            titleSub: item.title.split(":")[1] || "",
            date: new Date(item.pubDate).toDateString(),
            category: item.categories?.[0] || "Others",
            content: item.content, 
            image: item.thumbnail, 
          };
        });
        setApiPosts(mapped);
      })
      .finally(() => setLoading(false));
  }, []);
  
  // 2. Combine Dummy Data (for images) and API Data (for content/links/title)
  const combinedPosts = apiPosts.map((apiPost, index) => ({
    ...apiPost,
    // Keep dummy image URL for the carousel display
    image: insightsData[index] ? insightsData[index].image : apiPost.image, 
    
    // **CHANGED: Use the actual API title for display**
    title: apiPost.titleMain, 
  }));


  // 3. Click handler for navigation
  const handlePostClick = (post) => {
    // Navigate to the article page, passing the full API post data in state
    navigate(`/article/${post.id}`, { state: post });
  };


  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Section Header --- */}
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-center text-[#0E0E0E] mb-6 font-sans">
          Our Insights
        </h2>

        {/* --- Carousel Container --- */}
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
              320: { spaceBetween: 8 }, // Mobile
              640: { spaceBetween: 8 }, // Small tablets
              768: { spaceBetween: 8 }, // Tablets & above
            }}
          >
            {/* Map over the combined data */}
            {(loading ? insightsData : combinedPosts).map((item, index) => (
              <SwiperSlide key={index} className="w-[260px]! sm:w-[300px]! md:w-[400px]! lg:w-[441px]!">
                {({ isActive }) => (
                  <div
                    // Use handlePostClick only if data is loaded
                    onClick={() => !loading && handlePostClick(item)}
                    className={`relative h-[280px] sm:h-[400px] md:h-[500px] rounded-[30px] sm:rounded-[45px] overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isActive 
                        ? 'scale-100 z-10' 
                        : 'scale-[0.85] opacity-70 saturate-50'
                    }`}
                  >
                    {/* Use the dummy image URL for the visual display */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />

                    {/* Active overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000CC] to-transparent transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className={`absolute bottom-0 left-0 p-4 sm:p-8 w-full flex flex-col items-start text-left transition-transform duration-500 delay-100 transform ${isActive ? 'translate-y-0' : 'translate-y-10'}`}>
                        <h3 className="text-white text-base sm:text-xl md:text-[31px] font-medium mb-2 tracking-tight leading-snug">
                          {/* Use the combined post title, which now comes from the API */}
                          {item.title} 
                        </h3>
                        
                        {/* Link/Button to Article Page */}
                        <button 
                          onClick={(e) => {
                            // Stop event propagation so the parent div click doesn't trigger twice
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

          {/* Edge fade */}
          <div className="absolute top-0 left-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-r from-white to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 sm:w-16 md:w-32 bg-linear-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>

        {/* --- Footer Button --- */}
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