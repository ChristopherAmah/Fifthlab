import React from 'react';

// --- I. Data Definitions (Centralized) ---

const categories = ["All", "Fintech", "Ecommerce", "Banking", "Networking", "Others"];

const featuredPost = {
  category: "Fintech",
  readTime: "15 mins read",
  date: "20 June 2025",
  title: "Speaking the Language of Innovation: The Role of Tech in Promoting Global Literacy",
  imageUrl: "https://source.unsplash.com/random/600x400/?technology,business,woman",
  logoUrl: "https://via.placeholder.com/30x15?text=fifthlab" 
};

const dummyPosts = [
  { id: 1, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x400/?business,africa,meeting" },
  { id: 2, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x401/?business,africa,meeting" },
  { id: 3, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x402/?business,africa,meeting" },
  { id: 4, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x403/?business,africa,meeting" },
  { id: 5, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x404/?business,africa,meeting" },
  { id: 6, title: "Streamlining Business Operations in Africa: SMERP's ERP Solution for SMEs", imageUrl: "https://source.unsplash.com/random/400x405/?business,africa,meeting" },
];

const featureItems = [
  { 
    title: "Buyer & seller security", 
    description: "Buyers and sellers are protected with funds held in a third party escrow. Payments are released only after orders are fulfilled."
  },
  { 
    title: "Financing opportunities", 
    description: "We provide financing options for our buyers and sellers on our own net terms while increasing their cash flow."
  },
  { 
    title: "Partnership Opportunities", 
    description: "Grow your business and earn more by partnering with KuleanPay. Our world-class API lets you accept secure payments in just a few lines of code."
  },
  { 
    title: "Track Transactions", 
    description: "Track your transaction every step of the way. Your money will be held securely until you’re satisfied with the services you received."
  },
];


// --- II. Reusable Sub-Components ---

const BlogCard = ({ post }) => (
  <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-50/50">
    <div className="relative pt-[120%]">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white leading-snug mb-4">
          {post.title}
        </h3>
        <button className="w-fit px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition">
          View Post
        </button>
      </div>
    </div>
  </div>
);

const Pagination = ({ totalPages, currentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-1 sm:space-x-3 text-gray-700 text-sm font-medium mt-12">
      <button className="p-2 text-gray-400 hover:text-gray-700">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <span className="hidden sm:inline">Back</span>

      {pages.map(page => (
        <button
          key={page}
          className={`w-8 h-8 rounded-lg transition ${
            page === currentPage 
              ? 'bg-black text-white' 
              : 'hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}
      
      <span className="hidden sm:inline">Next</span>
      <button className="p-2 text-gray-400 hover:text-gray-700">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};


// --- III. Main Component Structure ---

const HomePageContent = () => {
  // A consistent background for the entire section where the wave pattern is present
  const waveBackgroundStyle = { 
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34c0 1.105-1.12 2-2.5 2S31 35.105 31 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S33 35.105 33 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S35 35.105 35 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S37 35.105 37 34s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 35.105-1 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S1 35.105 1 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S3 35.105 3 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S5 35.105 5 34s1.12-2 2.5-2 2.5.895 2.5 2zm-20 0c0 1.105-1.12 2-2.5 2S11 35.105 11 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S13 35.105 13 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S15 35.105 15 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S17 35.105 17 34s1.12-2 2.5-2 2.5.895 2.5 2zM12 2c0 1.105-1.12 2-2.5 2S7 3.105 7 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S9 3.105 9 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S11 3.105 11 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S13 3.105 13 2s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 3.105-1 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S1 3.105 1 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S3 3.105 3 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S5 3.105 5 2s1.12-2 2.5-2 2.5.895 2.5 2zm20 0c0 1.105-1.12 2-2.5 2S31 3.105 31 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S33 3.105 33 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S35 3.105 35 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S37 3.105 37 2s1.12-2 2.5-2 2.5.895 2.5 2zM0 34c0 1.105-1.12 2-2.5 2S-5 35.105-5 34s1.12-2 2.5-2 2.5.895 2.5 2zM0 2c0 1.105-1.12 2-2.5 2S-5 3.105-5 2s1.12-2 2.5-2 2.5.895 2.5 2zM36 0c0 1.105-1.12 2-2.5 2S31 1.105 31 0s1.12-2 2.5-2 2.5.895 2.5 2zm-24 0c0 1.105-1.12 2-2.5 2S7 1.105 7 0s1.12-2 2.5-2 2.5.895 2.5 2zM24 0c0 1.105-1.12 2-2.5 2S19 1.105 19 0s1.12-2 2.5-2 2.5.895 2.5 2zm-24 0c0 1.105-1.12 2-2.5 2S-5 1.105-5 0s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 1.105 43 0s1.12-2 2.5-2 2.5.895 2.5 2zM0 6c0 1.105-1.12 2-2.5 2S-5 7.105-5 6s1.12-2 2.5-2 2.5.895 2.5 2zm0 28c0 1.105-1.12 2-2.5 2S-5 35.105-5 34s1.12-2 2.5-2 2.5.895 2.5 2zM24 34c0 1.105-1.12 2-2.5 2S19 35.105 19 34s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S43 35.105 43 34s1.12-2 2.5-2 2.5.895 2.5 2zM12 6c0 1.105-1.12 2-2.5 2S7 7.105 7 6s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S31 7.105 31 6s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 7.105-1 6s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 7.105 43 6s1.12-2 2.5-2 2.5.895 2.5 2zM12 28c0 1.105-1.12 2-2.5 2S7 29.105 7 28s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S31 29.105 31 28s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 29.105-1 28s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 29.105 43 28s1.12-2 2.5-2 2.5.895 2.5 2zM24 6c0 1.105-1.12 2-2.5 2S19 7.105 19 6s1.12-2 2.5-2 2.5.895 2.5 2zm0 28c0 1.105-1.12 2-2.5 2S19 35.105 19 34s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 35.105-1 34s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 35.105 43 34s1.12-2 2.5-2 2.5.895 2.5 2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
  };


  return (
    <div className="bg-white">
      
      {/* 1. Our Insights Section (Header, Filters, Featured Card) */}
      <section className="pt-16 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={waveBackgroundStyle}>
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header Section */}
          <header className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Insights
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
            </p>
          </header>

          {/* Category/Search Bar */}
          <div className="flex justify-center mb-12 md:mb-20">
            <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 p-1 space-x-2 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    category === 'All'
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button className="p-2 bg-transparent text-gray-500 hover:text-gray-700 rounded-full ml-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Featured Blog Post Card */}
          <div className="max-w-4xl mx-auto">
            <article className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="lg:w-1/2 relative">
                <img 
                  src={featuredPost.imageUrl} 
                  alt="Section visual" 
                  className="w-full h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end text-white">
                  <img src={featuredPost.logoUrl} alt="fifthlab logo" className="w-20 mb-4 h-auto" />
                  <h2 className="text-3xl font-bold leading-tight">
                    Speaking the Language of <span className="text-indigo-300">Innovation:</span> 
                    <span className="block text-xl font-normal mt-1">The Role of Tech in Promoting Global Literacy</span>
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm font-medium text-gray-500 mb-4">
                  <span className="text-indigo-600 mr-2 uppercase">{featuredPost.category}</span>
                  &bull;
                  <span className="ml-2">{featuredPost.readTime}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 leading-snug">
                  {featuredPost.title}
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  {featuredPost.date}
                </p>
              </div>
            </article>
          </div>
          
        </div>
      </section>

      {/* 2. Blog Grid & Pagination Section (Immediately follows the featured card) */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white" style={waveBackgroundStyle}>
        <div className="max-w-6xl mx-auto">
          
          {/* Blog Post Grid (3 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination totalPages={5} currentPage={2} />
          
        </div>
      </section>

      {/* 3. Payments & Security Feature Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Mobile Visual (Placeholder for phone cluster) */}
          <div className="lg:w-1/2 relative">
              <div className="relative w-full h-[500px] flex items-center justify-center">
                  <img 
                      src="https://source.unsplash.com/random/800x1200/?mobile+app+payments+ui" 
                      alt="KuleanPay mobile app screens"
                      className="absolute w-full h-full object-contain"
                  />
              </div>
          </div>

          {/* Right Side: Header and Features */}
          <div className="lg:w-1/2">
            
            {/* Logo/Branding (Added based on image_676557.png) */}
            <div className="flex items-center mb-6">
                <img src="https://via.placeholder.com/30" alt="KuleanPay Logo" className="w-8 h-8 mr-2"/>
                <span className="text-lg font-bold text-indigo-900">KuleanPay</span>
            </div>

            {/* Main Title (Combined) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 leading-tight">
              Protecting Both Parties On All Transactions.
            </h1>
            
            {/* Feature List (Slightly adjusted style to match the image, if this content is placed below the title) */}
            <div className="space-y-6 hidden"> {/* Hide if only the large title is needed here */}
              {featureItems.map((item, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action from image_676557.png */}
            <div className="mt-8 flex items-center">
              <a 
                  href="#" 
                  className="text-indigo-600 font-semibold hover:text-indigo-800 transition flex items-center text-lg"
              >
                  Visit Website 
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePageContent;