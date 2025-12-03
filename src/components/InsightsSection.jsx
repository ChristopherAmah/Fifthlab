import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import insights from "../assets/insights.jpg"; // **KEEPING THE IMPORT**

const categories = ["All", "Fintech", "Ecommerce", "Banking", "Networking", "Others"];

const InsightsSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  // FETCH MEDIUM POSTS
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thefifthlab"
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.items.map((item) => {
          const urlParts = item.guid.split('/');
          const cleanId = urlParts[urlParts.length - 1]; 

          return {
            id: cleanId, 
            category: item.categories?.[0] || "Others",
            titleMain: item.title.split(":")[0],
            titleSub: item.title.split(":")[1] || "",
            link: item.link,
            description: item.description.replace(/<[^>]*>?/gm, ""),
            date: new Date(item.pubDate).toDateString(),
            pubDate: item.pubDate,
            image: item.thumbnail, // **CHANGED: Removed `|| insights` fallback here**
            content: item.content, 
          };
        });
        setPosts(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  // FILTER LOGIC
  const filtered =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

// --- RENDERING CODE (Adjusting image sources to use the local insights file as a fallback ONLY on this page) ---

  return (
    <section className="font-sans py-12 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black">
            Our Insights
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover expert perspectives, industry trends, and actionable insights shaping technology, design, and innovation at FifthLab.
          </p>
        </header>

        {/* CATEGORY FILTER */}
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

        {/* FEATURED POST */}
        {!loading && posts.length > 0 && (
          <div
            onClick={() =>
              navigate(`/article/${posts[0].id}`, { state: posts[0] })
            }
            className="px-30 overflow-hidden mb-16 flex flex-col lg:flex-row gap-10 cursor-pointer"
          >
            <img
              src={posts[0].image || insights} // **Re-added fallback here for Insights page display**
              alt="Featured"
              className="lg:w-1/2 w-full h-80 object-cover rounded-3xl"
            />
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <p className="text-gray-700 text-sm mb-2">
                {posts[0].category} • {posts[0].date}
              </p>
              <h3 className="text-3xl font-semibold mb-4">
                {posts[0].titleMain}
              </h3>

              <button
                onClick={() =>
                  navigate(`/article/${posts[0].id}`, { state: posts[0] })
                }
                className="bg-black text-white px-6 py-3 rounded-xl w-max"
              >
                Read Full Article
              </button>
            </div>
          </div>
        )}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
          {(loading ? Array(6).fill(null) : filtered).map((post, index) => (
            <div
              key={index}
              // The navigation uses the clean, short post.id now: /article/554f8e49ed72
              onClick={() => navigate(`/article/${post.id}`, { state: post })}
              className="rounded-3xl overflow-hidden relative shadow-lg group cursor-pointer"
            >
              {loading ? (
                <div className="h-80 bg-gray-200 animate-pulse"></div>
              ) : (
                <>
                  <img
                    src={post.image || insights} // **Re-added fallback here for Insights page display**
                    alt={post.titleMain}
                    className="w-full h-80 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-xl sm:text-2xl font-medium leading-snug mb-3">
                      {post.titleMain}
                      <span className="block text-white/80 text-lg font-light">
                        {post.titleSub}
                      </span>
                    </h3>

                    <button
                      onClick={() =>
                        navigate(`/article/${post.id}`, { state: post })
                      }
                      className="bg-white text-black text-xs font-medium rounded-lg px-4 py-2 w-max hover:bg-gray-200"
                    >
                      View Post
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default InsightsSection;