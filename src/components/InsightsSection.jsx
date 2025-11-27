import React from 'react';

// --- Data for Categories and Featured Post ---
const categories = ["All", "Fintech", "Ecommerce", "Banking", "Networking", "Others"];

const featuredPost = {
  category: "Fintech",
  readTime: "15 mins read",
  date: "20 June 2025",
  title: "Speaking the Language of Innovation: The Role of Tech in Promoting Global Literacy",
  imageUrl: "https://source.unsplash.com/random/600x400/?technology,business,woman", 
  logoUrl: "https://via.placeholder.com/30x15?text=fifthlab" // Placeholder for the fifthlab logo
};

const InsightsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Wave Pattern (Optional, based on original design) */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a0aec0\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34c0 1.105-1.12 2-2.5 2S31 35.105 31 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S33 35.105 33 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S35 35.105 35 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S37 35.105 37 34s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 35.105-1 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S1 35.105 1 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S3 35.105 3 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S5 35.105 5 34s1.12-2 2.5-2 2.5.895 2.5 2zm-20 0c0 1.105-1.12 2-2.5 2S11 35.105 11 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S13 35.105 13 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S15 35.105 15 34s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S17 35.105 17 34s1.12-2 2.5-2 2.5.895 2.5 2zM12 2c0 1.105-1.12 2-2.5 2S7 3.105 7 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S9 3.105 9 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S11 3.105 11 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S13 3.105 13 2s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 3.105-1 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S1 3.105 1 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S3 3.105 3 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S5 3.105 5 2s1.12-2 2.5-2 2.5.895 2.5 2zm20 0c0 1.105-1.12 2-2.5 2S31 3.105 31 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S33 3.105 33 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S35 3.105 35 2s1.12-2 2.5-2 2.5.895 2.5 2zm2 0c0 1.105-1.12 2-2.5 2S37 3.105 37 2s1.12-2 2.5-2 2.5.895 2.5 2zM0 34c0 1.105-1.12 2-2.5 2S-5 35.105-5 34s1.12-2 2.5-2 2.5.895 2.5 2zM0 2c0 1.105-1.12 2-2.5 2S-5 3.105-5 2s1.12-2 2.5-2 2.5.895 2.5 2zM36 0c0 1.105-1.12 2-2.5 2S31 1.105 31 0s1.12-2 2.5-2 2.5.895 2.5 2zm-24 0c0 1.105-1.12 2-2.5 2S7 1.105 7 0s1.12-2 2.5-2 2.5.895 2.5 2zM24 0c0 1.105-1.12 2-2.5 2S19 1.105 19 0s1.12-2 2.5-2 2.5.895 2.5 2zm-24 0c0 1.105-1.12 2-2.5 2S-5 1.105-5 0s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 1.105 43 0s1.12-2 2.5-2 2.5.895 2.5 2zM0 6c0 1.105-1.12 2-2.5 2S-5 7.105-5 6s1.12-2 2.5-2 2.5.895 2.5 2zm0 28c0 1.105-1.12 2-2.5 2S-5 35.105-5 34s1.12-2 2.5-2 2.5.895 2.5 2zM24 34c0 1.105-1.12 2-2.5 2S19 35.105 19 34s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S43 35.105 43 34s1.12-2 2.5-2 2.5.895 2.5 2zM12 6c0 1.105-1.12 2-2.5 2S7 7.105 7 6s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S31 7.105 31 6s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 7.105-1 6s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 7.105 43 6s1.12-2 2.5-2 2.5.895 2.5 2zM12 28c0 1.105-1.12 2-2.5 2S7 29.105 7 28s1.12-2 2.5-2 2.5.895 2.5 2zm24 0c0 1.105-1.12 2-2.5 2S31 29.105 31 28s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 29.105-1 28s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 29.105 43 28s1.12-2 2.5-2 2.5.895 2.5 2zM24 6c0 1.105-1.12 2-2.5 2S19 7.105 19 6s1.12-2 2.5-2 2.5.895 2.5 2zm0 28c0 1.105-1.12 2-2.5 2S19 35.105 19 34s1.12-2 2.5-2 2.5.895 2.5 2zm-48 0c0 1.105-1.12 2-2.5 2S-1 35.105-1 34s1.12-2 2.5-2 2.5.895 2.5 2zm48 0c0 1.105-1.12 2-2.5 2S43 35.105 43 34s1.12-2 2.5-2 2.5.895 2.5 2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' 
      }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* --- Category/Search Bar --- */}
        <div className="flex justify-center mb-12 md:mb-20">
          <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 p-1 space-x-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-black text-white' // Active/Selected style
                    : 'text-gray-700 hover:bg-gray-100' // Default style
                }`}
              >
                {category}
              </button>
            ))}
            
            {/* Search Button */}
            <button className="p-2 bg-transparent text-gray-500 hover:text-gray-700 rounded-full ml-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- Featured Blog Post Card --- */}
        <div className="max-w-4xl mx-auto">
          <article className="flex flex-col lg:flex-row bg-white rounded-xl shadow-2xl overflow-hidden">
            
            {/* Left Side: Image and Title Overlay */}
            <div className="lg:w-1/2 relative">
              <img 
                src={featuredPost.imageUrl} 
                alt="Woman speaking the language of innovation" 
                className="w-full h-80 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 p-8 flex flex-col justify-end text-white">
                <img 
                    src={featuredPost.logoUrl} 
                    alt="fifthlab logo" 
                    className="w-20 mb-4 h-auto" // Adjust size as needed
                />
                <h2 className="text-3xl font-bold leading-tight">
                  Speaking the Language of <span className="text-indigo-300">Innovation:</span> 
                  <span className="block text-xl font-normal mt-1">The Role of Tech in Promoting Global Literacy</span>
                </h2>
              </div>
            </div>

            {/* Right Side: Details and Metadata */}
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
  );
};

export default InsightsSection;