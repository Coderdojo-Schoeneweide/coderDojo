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
        className="relative bg-[#fbb040] rounded-2xl shadow-2xl max-w-2xl w-full mx-4 md:max-w-4xl md:flex md:gap-8 md:p-10 p-4"
        onClick={e => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-2 text-2xl text-white bg-[#463d5c] rounded-full w-10 h-10 flex items-center justify-center hover:bg-orange-600 transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {photo && (
          <img
            src={photo}
            alt={title}
            className="mb-4 rounded-xl w-full object-cover md:w-80 md:h-80 md:mb-0 md:mr-8 shadow-lg"
            style={{ maxHeight: 320 }}
          />
        )}
        <div
          className="flex-1 bg-white rounded-2xl p-6 shadow-lg overflow-y-auto max-h-[70vh] md:max-h-[80vh] text-[#463d5c] prose-workshop"
          style={{ minWidth: 0 }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
} 