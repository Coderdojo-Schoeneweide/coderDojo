import React, { useState } from 'react';

export default function BlogGridIsland({ posts }) {
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
          >
            <a href={`/blog/${post.slug}`} className="block h-full">
              {/* Image */}
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-video w-full object-cover"
                />
              ) : (
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">📝</div>
                    <div className="text-sm font-medium">Blog Post</div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <time className="inline-block mb-3 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  {formatDate(post.date)}
                </time>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Description Preview */}
                {post.description && (
                  <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.description}
                  </p>
                )}

                {/* Author */}
                {post.authors && post.authors.length > 0 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Von {post.authors.join(', ')}
                  </p>
                )}
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Keine Beiträge gefunden.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <a
              key={page}
              href={`/blog?page=${page}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${currentPage === page
                ? 'bg-[#7aa89f] text-white'
                : 'bg-[#99c3bb] text-white hover:bg-[#7aa89f]'
                }`}
            >
              {page}
            </a>
          ))}
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Seite {currentPage} von {totalPages} ({posts.length} Beiträge)
        </p>
      )}
    </div>
  );
}
