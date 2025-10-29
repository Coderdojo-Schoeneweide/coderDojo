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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="from-primary-100 to-primary-300 relative mx-2 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-gradient-to-br shadow-2xl md:mx-0 md:max-w-xl dark:from-slate-700 dark:to-slate-800"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        style={{ maxHeight: '90vh' }}
      >
        <button
          className="hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-2xl text-white shadow-lg transition"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {photo && (
          <div className="relative h-48 w-full shrink-0 md:h-64">
            <img
              src={photo}
              alt={title}
              className="h-full w-full rounded-t-3xl object-cover"
              style={{ maxHeight: 320 }}
            />
          </div>
        )}
        <div
          className="relative z-10 flex-1 overflow-y-auto rounded-b-3xl bg-white p-6 shadow-lg md:p-8 dark:bg-slate-800"
          style={{ minHeight: 0 }}
        >
          {title && (
            <h2 className="dark:text-primary-200 mb-4 text-center text-2xl font-bold text-slate-700 md:text-3xl">
              {title}
            </h2>
          )}
          <div
            className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-100"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  )
}
