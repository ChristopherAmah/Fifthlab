import React from 'react';
// Assuming 'insights' is a mock image URL or placeholder as the original import is relative
import insights from '../assets/insights.jpg';
const Link = ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>; // Mock Link for standalone file

// --- Categories ---
const categories = ["All", "Fintech", "Ecommerce", "Banking", "Networking", "Others"];

// --- Featured Post ---
const featuredPost = {
  category: "Fintech",
  readTime: "15 mins read",
  date: "20 June 2025",
  title: "Speaking the Language of Innovation: The Role of Tech in Promoting Global Literacy",
  imageUrl: insights,
  logoUrl: "https://via.placeholder.com/30x15?text=fifthlab"
};

// --- Blog Posts (sample data with categories and two-line title parts) ---
const blogPosts = [
  {
    id: 1,
    category: "Fintech",
    titleMain: "Streamlining Business Operations in Africa:",
    titleSub: "SMERP’s ERP Solution for SMEs",
    image: insights,
  },
  {
    id: 2,
    category: "Banking",
    titleMain: "Future of Digital Banking in Emerging Markets:",
    titleSub: "How banks are evolving",
    image: insights,
  },
  {
    id: 3,
    category: "Ecommerce",
    titleMain: "How Ecommerce is Transforming Retail:",
    titleSub: "New customer experiences in Africa",
    image: insights,
  },
  {
    id: 4,
    category: "Networking",
    titleMain: "Building Robust Enterprise Networks:",
    titleSub: "Scalable infrastructure for growth",
    image: insights,
  },
  {
    id: 5,
    category: "Others",
    titleMain: "Tech Talent Gap in Africa:",
    titleSub: "Bridging skills with training",
    image: insights,
  },
  {
    id: 6,
    category: "Fintech",
    titleMain: "Digital Payments and the Future of Finance:",
    titleSub: "Faster, safer transactions",
    image: insights,
  },
];


const InsightsSection = () => {

  // --- Category Filter State ---
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="font-sans py-12 md:py-[120px] px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- Header Section --- */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-medium text-[#0E0E0E] tracking-tight mb-4 md:mb-6">
            Our Insights
          </h1>
          <p className="mt-4 text-[#596780] text-lg sm:text-[22px] max-w-2xl mx-auto px-4">
            Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* --- Category Filter Bar (Responsive for horizontal scrolling on mobile) --- */}
        <div className="flex justify-start md:justify-center mb-12 md:mb-[77px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center bg-[#F0F0F0] rounded-[10000px] border border-[#F0F0F0] p-[5px] sm:p-[7px] space-x-2 sm:space-x-4 mx-auto ">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-[21px] rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-sm"
                    : "text-[#818181] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}

            {/* Search Button */}
            <button className="flex-shrink-0 p-3 sm:p-4 bg-[#D8D8D8] text-[#302F33] hover:text-gray-700 rounded-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

          </div>
        </div>

        {/* --- Featured Blog Post --- */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <article className="flex flex-col lg:flex-row bg-white border border-gray-100 rounded-4xl  overflow-hidden md:px-[31.42px]">

            {/* Left Side (Image) */}
            <div className="lg:w-1/2 relative">
              {/* Added responsive height for image on small screens */}
              <img
                src={featuredPost.imageUrl}
                alt="Featured"
                className="w-full h-64 sm:h-80 lg:h-full rounded-4xl  object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/2F2F2F/FFFFFF?text=Insight+Image+Placeholder" }}
              />
              {/* Optional overlay content removed/commented out based on original structure */}
            </div>

            {/* Right Side (Text Content) */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-start">
              <div className="flex items-center text-sm sm:text-[17.83px] font-medium text-[#00242B] mb-2">
                <span className="text-[#00242B] mr-2">{featuredPost.category}</span>
                &bull;
                <span className="ml-2">{featuredPost.readTime}</span>
              </div>

              {/* Responsive Title Size */}
              <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-medium text-[#121212] leading-snug">
                {featuredPost.title}
              </h3>

              <p className="mt-2 text-base sm:text-[21.22px] text-[#00242B]">
                {featuredPost.date}
              </p>
              
              {/* <Link to='/article' className="mt-6 w-max">
                 <button className="bg-black text-white text-sm sm:text-base font-medium rounded-xl px-6 py-3 transition-transform duration-200 hover:scale-[1.02] shadow-md">
                   Read Full Article
                 </button>
              </Link> */}
            </div>
          </article>
        </div>

        {/* --- BLOG GRID (FILTERED) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 p-2 sm:p-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="rounded-[30px] sm:rounded-[38.15px] overflow-hidden relative group shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <img
                src={post.image}
                alt={post.titleMain}
                // Responsive image height for grid cards
                className="w-full h-80 sm:h-96 lg:h-[497px] object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x500/1E1E1E/FFFFFF?text=Post+Placeholder" }}
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000CC]/60 to-transparent p-6 flex flex-col justify-end">
                
                {/* Responsive Title Size */}
                <h3 className="text-white text-xl sm:text-[26.42px] font-medium leading-snug mb-3">
                  {post.titleMain}
                  <span className="block font-light text-lg sm:text-xl opacity-90">{post.titleSub}</span>
                </h3>

                <Link to='/article'>
                <button className="bg-white text-[#000000] text-xs sm:text-[11.93px] font-medium rounded-lg px-4 py-2 w-max transition-all duration-200 hover:bg-gray-200">
                  View Post
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;