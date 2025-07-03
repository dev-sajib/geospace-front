import { useState } from "react";
import ValueProposition from "../Home/ValueProposition.jsx";
import BlogCard from "../../../components/common/BlogCard.jsx";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const blogPosts = Array(9).fill({
    category: "Geoscience",
    title: "Geoscience presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    image: "/images/consulting2.png",
    avatar: "/images/avatar1.png",
  });

  const mostReadArticles = Array(3).fill({
    category: "Geoscience",
    title: "Geoscience presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    author: "Olivia Rhye",
    date: "20 Jan 2025",
    image: "/images/choose-ge1.jpg",
    avatar: "/images/avatar1.png",
  });

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen">

      <section className={`bg-[url('/images/hero-bg.png')] bg-cover bg-center pt-24 py-12 sm:py-16 lg:py-20`}>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          GeoEspace Blog
        </h1>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed">
            Our name 'GeoEspace' reflects our commitment to Geoscience Excellence — we strive to connect top-tier professionals in geology, mining, and environmental fields with meaningful opportunities. Through a careful and selective process, we identify skilled freelancers who not only have technical expertise but also the dedication and professionalism to deliver exceptional results.
        </p>
      </div>
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16 pt-[46px]">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Explore Top Blogs
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Read Our Insights
            </button>
          </div>
        </div>
    </section>
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-0 md:mb-0">
            <h2 className="text-h2 lg:text-4xl mb-4 sm:mb-6">
              <span className="text-emerald-600">Explore</span> Your Needed
              Topic
            </h2>
            <p className="g-p2 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The GeoEspace Blog is a trusted space for curious minds, sharing
              expert insights, practical tutorials, and thought-provoking
              content. It's where innovation meets clarity—helping readers stay
              informed, inspired, and ahead of the curve.
            </p>
          </div>
          <ValueProposition enableSectionTopSection={false} />
        </div>
      </section>

      <section className="bg-[#0B8468] py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-6 lg:space-y-0 lg:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                Subscribe World Class Newsletter Weekly
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto lg:max-w-md xl:max-w-lg gap-3 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 sm:rounded-l-lg rounded-lg sm:rounded-r-none border-0 focus:outline-none bg-white text-gray-900 placeholder-gray-400 text-sm sm:text-base"
              />
              <button className="w-full sm:w-auto bg-[#05372C] text-white px-4 sm:px-6 py-3 sm:rounded-r-lg rounded-lg sm:rounded-l-none font-semibold hover:bg-[#043024] transition-colors text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-emerald-600">GeoEspace</span> Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              The GeoEspace Blog is a trusted space for curious minds, sharing
              expert insights, practical tutorials, and thought-provoking
              content. It's where innovation meets clarity—helping readers stay
              informed, inspired, and ahead of the curve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 justify-center">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post}/>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <div className="flex space-x-1">
              {renderPaginationNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && goToPage(page)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    page === currentPage
                      ? "bg-emerald-100 text-emerald-600 font-medium"
                      : page === "..."
                      ? "text-gray-400 cursor-default"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-emerald-600">Most Read</span> Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Here are most read article by our consumers. Feel freely explore
              all and hope you enjoy!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
            {mostReadArticles.map((post, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow w-full max-w-[440px] mx-auto lg:w-[440px] lg:h-[514px] rounded-2xl lg:rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-48 object-cover grayscale rounded-xl lg:rounded-2xl"
                />
                <div className="flex flex-col gap-4 sm:gap-6 flex-1">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-emerald-600 text-sm font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-start sm:items-center flex-col sm:flex-row">
                      <span className="mb-2 sm:mb-0">{post.title}</span>
                      <svg
                        className="w-5 h-5 sm:ml-2 flex-shrink-0 self-start sm:self-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
