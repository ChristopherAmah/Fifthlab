import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import insights from "../assets/insights.jpg";

// ✅ Extract first image from Medium HTML content
const extractImageFromContent = (html) => {
  if (!html) return null;
  const div = document.createElement("div");
  div.innerHTML = html;
  const img = div.querySelector("img");
  return img?.getAttribute("src") || img?.getAttribute("data-src") || null;
};

// ✅ Capitalize first letter of each word
const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const POSTS_PER_PAGE = 6; // change if needed

const InsightsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [currentPage, setCurrentPage] = useState(1);
  
  // 💡 NEW STATE FOR SEARCH
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const navigate = useNavigate();

  // ✅ FETCH MEDIUM POSTS
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thefifthlab"
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => {
          const urlParts = item.guid.split("/");
          const cleanId = urlParts[urlParts.length - 1];

          const resolvedImage =
            item.thumbnail || extractImageFromContent(item.content) || null;

          return {
            id: cleanId,
            category: item.categories?.[0] || "Others",
            titleMain: item.title.split(":")[0],
            titleSub: item.title.split(":")[1] || "",
            link: item.link,
            description: item.description.replace(/<[^>]*>?/gm, ""),
            date: new Date(item.pubDate).toDateString(),
            pubDate: item.pubDate,
            image: resolvedImage,
            content: item.content,
          };
        });

        setPosts(mapped);

        // ✅ Extract unique categories dynamically
        const uniqueCategories = [
          "All",
          ...Array.from(new Set(mapped.map((p) => p.category))),
        ];
        setCategories(uniqueCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  // 💡 Scroll to the top whenever the page number changes or search/category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // ✅ FILTER LOGIC: UPDATED TO INCLUDE SEARCH
  const filtered = posts.filter((p) => {
    // 1. Filter by Category
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;

    // 2. Filter by Search Term (case-insensitive on title)
    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const searchMatch = normalizedSearchTerm === "" || 
      p.titleMain.toLowerCase().includes(normalizedSearchTerm) ||
      p.titleSub.toLowerCase().includes(normalizedSearchTerm);

    return categoryMatch && searchMatch;
  });

  // ✅ RESET TO PAGE 1 WHEN CATEGORY OR SEARCH TERM CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  // ✅ FEATURED POST: first post of selected category
  const featuredPost = filtered[0];
  
  // 💡 SEARCH HANDLER
  const handleSearchToggle = () => {
      setIsSearchVisible(!isSearchVisible);
      // Optional: Clear search term when closing the input
      if (isSearchVisible) {
          setSearchTerm('');
      }
  };

  return (
    <section className="font-sans py-12 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto md:px-[136.92px]">
        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black">
            Our Insights
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover expert perspectives, industry trends, and actionable
            insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* CATEGORY FILTER & SEARCH (UPDATED) */}
        <div className="flex justify-start md:justify-center mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center bg-gray-100 rounded-full p-2 space-x-2">
            
            

            {/* CATEGORY BUTTONS */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                    setSelectedCategory(cat);
                    // Hide search bar if a category is clicked
                    setIsSearchVisible(false); 
                    setSearchTerm('');
                }}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  selectedCategory === cat && !isSearchVisible
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-300"
                }`}
                // Hide All button if search bar is open to save space
                style={{ display: isSearchVisible && cat === "All" ? 'none' : 'inline-block' }}
              >
                {capitalizeWords(cat)}
              </button>
            ))}

            {/* SEARCH ICON (NEW) */}
            <button
                onClick={handleSearchToggle}
                className={`flex items-center justify-center w-10 h-10 text-sm rounded-full transition ${
                  isSearchVisible ? " text-black" : "text-gray-600 hover:bg-gray-300"
                }`}
            >
                {/* SVG for Search Icon (Magnifying Glass) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {/* SEARCH INPUT (NEW, conditionally rendered) */}
            {isSearchVisible && (
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="px-4 py-2 text-sm rounded-full bg-white border border-gray-300 transition duration-300 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black"
                    // Optional: auto-focus when input appears
                    autoFocus
                />
            )}
          </div>
        </div>

        {/* FEATURED POST */}
        {!loading && featuredPost && (
          <div
            onClick={() =>
              navigate(`/article/${featuredPost.id}`, { state: featuredPost })
            }
            className="md:px-[31.42px] overflow-hidden mb-16 flex flex-col lg:flex-row gap-10 cursor-pointer"
          >
            <img
              src={featuredPost.image || insights}
              alt="Featured"
              loading="lazy"
              className="lg:w-1/2 w-full h-80 object-cover rounded-3xl"
            />

            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <p className="text-gray-700 text-sm mb-2">
                {capitalizeWords(featuredPost.category)} • {featuredPost.date}
              </p>

              <h3 className="text-3xl font-semibold mb-4">
                {featuredPost.titleMain}
              </h3>

              <button className="bg-black text-white px-6 py-3 rounded-xl w-max">
                Read Full Article
              </button>
            </div>
          </div>
        )}

        {/* GRID (NOW PAGINATED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? Array(6).fill(null) : paginatedPosts).map(
            (post, index) => (
              <div
                key={index}
                onClick={() => navigate(`/article/${post.id}`, { state: post })}
                className="rounded-3xl overflow-hidden relative shadow-lg group cursor-pointer"
              >
                {loading ? (
                  <div className="h-80 bg-gray-200 animate-pulse"></div>
                ) : (
                  <>
                    <img
                      src={post.image || insights}
                      alt={post.titleMain}
                      loading="lazy"
                      className="w-full h-80 object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-white text-xl sm:text-2xl font-medium leading-snug mb-3">
                        {post.titleMain}
                        <span className="block text-white/80 text-lg font-light">
                          {post.titleSub}
                        </span>
                      </h3>

                      <p className="text-white text-sm mb-2">
                        {capitalizeWords(post.category)} • {post.date}
                      </p>

                      <button className="bg-white text-black text-xs font-medium rounded-lg px-4 py-2 w-max hover:bg-gray-200">
                        View Post
                      </button>
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </div>

        {/* PAGINATION UI */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-3">
            {/* BACK */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              disabled={currentPage === 1}
            >
              ‹ Back
            </button>

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg border font-medium ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* NEXT */}
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              disabled={currentPage === totalPages}
            >
              Next ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightsSection;