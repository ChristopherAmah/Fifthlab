import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import insights from "../assets/insights.jpg";

const categories = ["All", "Fintech", "Ecommerce", "Banking", "Networking", "Others"];

// ✅ Extract first image from Medium HTML content
const extractImageFromContent = (html) => {
  if (!html) return null;

  const div = document.createElement("div");
  div.innerHTML = html;
  const img = div.querySelector("img");

  return img?.getAttribute("src") || img?.getAttribute("data-src") || null;
};

const POSTS_PER_PAGE = 6;  // change if needed

const InsightsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); 

  const navigate = useNavigate();

  // ✅ FETCH MEDIUM POSTS
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thefifthlab"
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => {
          const urlParts = item.guid.split("/");
          const cleanId = urlParts[urlParts.length - 1];

          const resolvedImage =
            item.thumbnail ||
            extractImageFromContent(item.content) ||
            null;

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
      })
      .finally(() => setLoading(false));
  }, []);

  // 💡 FIX: Scroll to the top whenever the page number changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the very top (0, 0)
  }, [currentPage]); // Dependency array: runs every time currentPage changes

  // ✅ FILTER LOGIC
  const filtered =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  // ✅ RESET TO PAGE 1 WHEN CATEGORY CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // ✅ PAGINATION LOGIC
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <section className="font-sans py-12 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto md:px-[136.92px]">

        {/* ✅ HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black">
            Our Insights
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* ✅ CATEGORY FILTER */}
        <div className="flex justify-start md:justify-center mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex items-center bg-gray-100 rounded-full p-2 space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ FEATURED POST */}
        {!loading && posts.length > 0 && (
          <div
            onClick={() =>
              navigate(`/article/${posts[0].id}`, { state: posts[0] })
            }
            className="md:px-[31.42px] overflow-hidden mb-16 flex flex-col lg:flex-row gap-10 cursor-pointer"
          >
            <img
              src={posts[0].image || insights}
              alt="Featured"
              loading="lazy"
              className="lg:w-1/2 w-full h-80 object-cover rounded-3xl"
            />

            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <p className="text-gray-700 text-sm mb-2">
                {posts[0].category} • {posts[0].date}
              </p>

              <h3 className="text-3xl font-semibold mb-4">
                {posts[0].titleMain}
              </h3>

              <button className="bg-black text-white px-6 py-3 rounded-xl w-max">
                Read Full Article
              </button>
            </div>
          </div>
        )}

        {/* ✅ GRID (NOW PAGINATED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(loading ? Array(6).fill(null) : paginatedPosts).map((post, index) => (
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

                    <button className="bg-white text-black text-xs font-medium rounded-lg px-4 py-2 w-max hover:bg-gray-200">
                      View Post
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* ✅ PAGINATION UI (MATCHES YOUR DESIGN) */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 space-x-3">

            {/* ✅ BACK */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              disabled={currentPage === 1}
            >
              ‹ Back
            </button>

            {/* ✅ PAGE NUMBERS */}
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

            {/* ✅ NEXT */}
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