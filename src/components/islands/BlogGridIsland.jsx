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
      {/* Blog Posts List */}
      <div className="space-y-6">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
          >
            <a href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row">
              {/* Date Column */}
              <div className="bg-primary-500 px-6 py-4 sm:w-48 sm:flex-shrink-0 flex items-center justify-center">
                <time className="text-sm font-medium text-white text-center">
                  {formatDate(post.date)}
                </time>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h3>

                {post.description && (
                  <p className="mb-3 text-gray-600 dark:text-gray-300 line-clamp-2">
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

              {/* Arrow */}
              <div className="hidden sm:flex items-center px-6">
                <svg className="h-6 w-6 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
