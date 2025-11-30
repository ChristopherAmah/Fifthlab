import React from 'react';
import insights from '../assets/insights.jpg'; 
import { Link } from 'react-router-dom';

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
    image: insights,  },
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
    <section className="py-16 md:py-[120px] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- Header Section --- */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-[64px] font-medium text-[#0E0E0E] tracking-tight mb-6">
            Our Insights
          </h1>
          <p className="mt-4 text-[#596780] text-[22px] max-w-2xl mx-auto">
            Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* --- Category Filter Bar --- */}
        <div className="flex justify-center mb-12 md:mb-[77px] md:px-[309px]">
          <div className="flex items-center bg-[#F0F0F0] rounded-[10000px] border border-[#F0F0F0] p-[7px] space-x-4">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-3 text-[21px] rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-black text-white shadow-sm"
                    : "text-[#818181] hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}

            {/* Search Button */}
            <button className="px-4 py-4 bg-[#D8D8D8] text-[#302F33] hover:text-gray-700 rounded-full">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

          </div>
        </div>

        {/* --- Featured Blog Post --- */}
        <div className="max-w-7xl mx-auto mb-20">
          <article className="flex flex-col lg:flex-row bg-transparent px-[31.42px] overflow-hidden">

            {/* Left Side */}
            <div className="lg:w-1/2 relative">
              <img
                src={featuredPost.imageUrl}
                alt="Featured"
                className="w-full h-80 lg:h-full rounded-4xl object-cover"
              />

              <div className="absolute inset-0 rounded-4xl p-8 flex flex-col justify-end text-white">
                {/* <img
                  src={featuredPost.logoUrl}
                  alt="fifthlab logo"
                  className="w-20 mb-4 h-auto"
                /> */}
                {/* <h2 className="text-[30px] font-medium leading-tight">
                  Speaking the Language of Innovation: <br />    
                    The Role of Tech in Promoting Global Literacy
                </h2> */}
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 p-8 flex flex-col justify-start">
              <div className="flex items-start text-[17.83px] font-medium text-[#00242B] mb-2">
              <span className="text-[#00242B] mr-2">{featuredPost.category}</span>
                &bull;
                <span className="ml-2">{featuredPost.readTime}</span>
              </div>

              <h3 className="text-[40px] font-medium text-[#121212] leading-snug">
                {featuredPost.title}
              </h3>

              <p className="mt-2 text-[21.22px] text-[#00242B">
                {featuredPost.date}
              </p>
            </div>
          </article>
        </div>

        {/* --- BLOG GRID (FILTERED) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
          {filteredPosts.map((post) => (
            <div key={post.id} className="rounded-[38.15px] overflow-hidden relative group">
              <img
                src={post.image}
                alt={post.titleMain}
                className="w-full h-[497.63671875PX] object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-[#000000CC] to-[#00000000] p-6 flex flex-col justify-end group-hover:bg-opacity-50 transition-all duration-300">
                {/* <-- Restored two-line H3 overlay (main + sub) */}
                <h3 className="text-white text-[26.42px] font-medium leading-snug mb-[11.02px]">
                  {post.titleMain}
                  {/* <span className="block font-medium">{post.titleSub}</span> */}
                </h3>

                <Link to='/article'>
                <button className="bg-white text-[#000000] text-[11.93px] font-medium rounded-[7.74px] px-4 py-2 w-max">
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
