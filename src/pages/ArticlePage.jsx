import React, { useMemo, useEffect } from 'react'; // 👈 Added useEffect
import { useLocation, useNavigate } from 'react-router-dom';
// insights import has been removed
import background from '../assets/background.png';
import logo from '../assets/logo.png';

// Utility function to safely set inner HTML for the article body
function createMarkup(htmlContent) {
  // We use a regex to wrap the content in a div to ensure the Tailwind CSS 'prose' styling is applied correctly,
  // especially for older Medium content that might lack proper top-level structural tags.
  return { __html: `<div class="prose max-w-none">${htmlContent}</div>` };
}

// === RELATED ARTICLE CARD (REVISED) ===
const RelatedArticleCard = ({ article }) => {
    const navigate = useNavigate();

    return (
        <div 
            // 💡 Ensure navigation pushes a new history entry even if the path is the same (only state changes)
            onClick={() => navigate(`/article/${article.id}`, { state: article })}
            className="flex flex-col relative rounded-[38.15px] overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[497px] cursor-pointer"
        >
            {/* Ensure article.image is the ONLY source here */}
            <img
                // src={article.image}
                // alt={article.titleMain}
                className="w-full h-full object-cover absolute"
            />
            <div className="relative p-4 sm:p-6 flex flex-col justify-end h-full bg-linear-to-t from-black/90 via-black/60 to-transparent">
                <h3 className="text-lg sm:text-[22px] lg:text-[26px] font-medium text-white mb-2 sm:mb-3 leading-snug">
                    {article.titleMain}
                </h3>

                <button
                    className="w-min whitespace-nowrap px-3 py-1.5 text-[12px] font-medium text-black bg-white border border-white rounded-lg hover:bg-gray-200 transition"
                >
                    View Post
                </button>
            </div>
        </div>
    );
};

// === MAIN ARTICLE PAGE (REVISED) ===
const ArticlePage = ({ allPosts = [] }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    // 💡 FIX 1: Scroll to the top when the component mounts or location changes
    useEffect(() => {
        // This ensures the page always starts at the top, not the footer.
        window.scrollTo(0, 0);
    }, [location.pathname]); // Run whenever the URL path changes

    // The current article data passed via navigation state
    const currentArticle = location.state;

    // Filter logic to determine related articles
    const relatedArticles = useMemo(() => {
        if (!currentArticle) return [];
        
        // Filter out the current article, and take the first 3 posts
        return allPosts
            .filter(post => post.id !== currentArticle.id)
            .slice(0, 3); 
    }, [allPosts, currentArticle]);


    // Handle missing article data (e.g., direct access without state)
    if (!currentArticle) {
        return (
            <div className="font-sans py-24 px-4 text-center">
                <h1 className="text-3xl font-semibold mb-4">Article Not Found</h1>
                <p className="text-gray-600 mb-6">
                    The article data is missing. Please go back to the insights page.
                </p>
                <button
                    onClick={() => navigate('/insights')} // Navigate directly to prevent the double-click issue
                    className="bg-black text-white px-6 py-3 rounded-xl"
                >
                    Go Back
                </button>
            </div>
        );
    }
    
    // Destructure properties for cleaner access
    const { 
        titleMain, 
        titleSub, 
        image, 
        date, 
        content,
        category,
        pubDate // Use pubDate to calculate approximate read time if needed
    } = currentArticle;


    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* === Faint repeating background (unchanged) === */}
            {/* ... (Background div remains the same) */}
            <div
                className="absolute inset-0 w-full h-full opacity-5"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    backgroundPosition: 'top left',
                }}
            ></div>

            {/* === PAGE CONTENT === */}
            <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-[136px] py-16 sm:py-20 lg:py-[140px] max-w-7xl">
                
                {/* Back Button */}
                <button 
                    // 💡 FIX 2: Navigate directly to the Insights route
                  onClick={() => navigate('/insights')} 
                  className="text-gray-600 hover:text-black mb-10 flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back to Insights
                </button>

                {/* Header */}
                <header className="mb-6 max-w-4xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight text-black mb-4">
                        {titleMain}
                        {titleSub && (
                            <span className="block text-xl font-light text-gray-700 mt-2">
                                {titleSub}
                            </span>
                        )}
                    </h1>
                </header>

                {/* Meta */}
                <div className="flex flex-wrap items-center text-[13px] text-[#6C6D6F] mb-10 max-w-4xl mx-auto gap-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-12 h-12 p-1 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <span className="text-black text-[16px]">Fifthlab Africa</span>
                    </div>
                    <span>•</span>
                    {/* Display the extracted category */}
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                    <span>•</span>
                    {/* Display the correct date */}
                    <time dateTime={pubDate}>{date}</time>
                </div>

                {/* Featured Image (Commented out in original) */}
{/*                 <div className="relative w-full overflow-hidden mb-10 max-w-4xl mx-auto">
                    <img
//                         src={image} 
//                         alt={titleMain}
                        className="w-full h-auto object-cover rounded-4xl"
                    />
                </div> */}

                {/* Article Body */}
                <section className="text-base sm:text-base lg:text-lg leading-relaxed text-[#3C3C3C] mb-12 sm:mb-16 lg:mb-[108px] max-w-4xl mx-auto">
                    {/* DANGEROUSLY SET INNER HTML for the Medium content */}
                    <div 
                        dangerouslySetInnerHTML={createMarkup(content)} 
                        className="medium-article-container"
                    />
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-20 pt-10 border-t border-gray-200">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-6 sm:mb-8 lg:mb-[27px] text-center">
                            More Insights
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
                            {/* Map over the filtered related articles */}
                            {relatedArticles.map((article, index) => (
                                <RelatedArticleCard key={index} article={article} />
                            ))}
                        </div>
                    </section>
                )}

            </div>

            {/* === Keep your original background media queries unchanged === */}
            <style jsx>{`
                /* ... (Your original background media queries here) ... */
            `}</style>

        </div>
    );
};

export default ArticlePage;