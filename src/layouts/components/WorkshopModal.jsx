import React, { useEffect, useRef } from "react";

export default function WorkshopModal({ open, onClose, htmlContent, photo, title }) {
  const modalRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg md:max-w-xl mx-2 md:mx-0 rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-orange-400 dark:from-[#463d5c] dark:to-[#22223b] max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        style={{ maxHeight: '90vh' }}
      >
        <button
          className="absolute top-3 right-3 text-2xl text-white bg-[#463d5c] dark:bg-orange-400 rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 dark:hover:bg-orange-500 transition z-10 shadow-lg"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {photo && (
          <div className="w-full h-48 md:h-64 relative flex-shrink-0">
            <img
              src={photo}
              alt={title}
              className="object-cover w-full h-full rounded-t-3xl"
              style={{ maxHeight: 320 }}
            />
          </div>
        )}
        <div className="bg-white dark:bg-[#2a2139] rounded-b-3xl p-6 md:p-8 shadow-lg relative z-10 overflow-y-auto flex-1"
             style={{ minHeight: 0 }}>
          {title && <h2 className="text-2xl md:text-3xl font-bold text-[#463d5c] dark:text-orange-200 mb-4 text-center">{title}</h2>}
          <div
            className="prose dark:prose-invert max-w-none text-[#463d5c] dark:text-orange-100"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
} 