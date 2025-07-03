const BlogCard = ({ post }) => {
   return (
      <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow w-full max-w-[440px] mx-auto lg:w-[440px] lg:h-[514px] rounded-2xl lg:rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6">
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
   );
};

export default BlogCard;
