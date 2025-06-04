import React, { useEffect, useRef } from 'react'

export default function WorkshopModal({
  open,
  onClose,
  htmlContent,
  photo,
  title,
}) {
  const modalRef = useRef()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => (document.body.style.overflow = '')
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="relative mx-2 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-orange-200 to-orange-400 shadow-2xl dark:from-[#463d5c] dark:to-[#22223b] md:mx-0 md:max-w-xl"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        style={{ maxHeight: '90vh' }}
      >
        <button
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#463d5c] text-2xl text-white shadow-lg transition hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {photo && (
          <div className="relative h-48 w-full flex-shrink-0 md:h-64">
            <img
              src={photo}
              alt={title}
              className="h-full w-full rounded-t-3xl object-cover"
              style={{ maxHeight: 320 }}
            />
          </div>
        )}
        <div
          className="relative z-10 flex-1 overflow-y-auto rounded-b-3xl bg-white p-6 shadow-lg dark:bg-[#2a2139] md:p-8"
          style={{ minHeight: 0 }}
        >
          {title && (
            <h2 className="mb-4 text-center text-2xl font-bold text-[#463d5c] dark:text-orange-200 md:text-3xl">
              {title}
            </h2>
          )}
          <div
            className="prose dark:prose-invert max-w-none text-[#463d5c] dark:text-orange-100"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  )
}
