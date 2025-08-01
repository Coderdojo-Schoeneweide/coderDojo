import React, { useState } from 'react'
import WorkshopModal from './WorkshopModal.jsx'

export default function WorkshopModalIsland({ workshops }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [htmlContent, setHtmlContent] = useState('')
  const [photo, setPhoto] = useState('')

  // Helper to format plain text into HTML paragraphs and line breaks
  function formatTextContent(text) {
    // Remove leading/trailing whitespace
    let formatted = text.trim()
    // Replace double newlines with paragraph tags
    formatted = formatted.replace(/\n{2,}/g, '</p><p>')
    // Replace single newlines with <br>
    formatted = formatted.replace(/\n/g, '<br>')
    // Wrap in <p> if not already
    if (!formatted.startsWith('<p>')) formatted = `<p>${formatted}</p>`
    return formatted
  }

  // Load HTML and photo dynamically when a workshop is selected
  const handleOpen = async (workshop) => {
    setSelected(workshop)
    setOpen(true)

    try {
      const htmlResp = await fetch(`/workshops/${workshop.folder}/index.html`)
      const html = await htmlResp.text()

      // Extract content from <section class="single-workshop">...</section>
      let extracted = ''
      const sectionMatch = html.match(/<section[^>]*>([\s\S]*?)<\/section>/i)

      if (sectionMatch && sectionMatch[1]) {
        // Extract the card properties section
        const cardPropsMatch = sectionMatch[1].match(
          /<div[^>]*class=["']card-properties["'][^>]*>([\s\S]*?)<\/div>/i,
        )

        // Process the main content first
        extracted = sectionMatch[1]
          // Remove the h1 and img tags as they're handled separately
          .replace(/<h1[^>]*>.*?<\/h1>/i, '')
          .replace(/<img[^>]*>/i, '')
          // Remove card properties as we'll add it back properly formatted
          .replace(
            /<div[^>]*class=["']card-properties["'][^>]*>[\s\S]*?<\/div>/i,
            '',
          )
          // Add classes to lists for better styling
          .replace(/<ul>/g, '<ul class="list-disc pl-6 space-y-2 my-4">')
          // Add classes to paragraphs for better spacing
          .replace(/<p>/g, '<p class="mb-4">')
          .trim()

        // Add back the card properties with proper styling if it exists
        if (cardPropsMatch) {
          const cardPropsContent = cardPropsMatch[1]
            // Keep the original icon HTML structure but add flex container
            .replace(/<p>/g, '<p class="flex items-center gap-2 mb-2">')
            // Don't modify the icon HTML, just add margin
            .replace(
              /<img class=icon src=([^>]+)>/g,
              '<img class="icon mr-2" src=$1>',
            )
            // Style the tags
            .replace(
              /<span class=tag>/g,
              '<span class="inline-block bg-[#fbb040] text-white px-3 py-1 rounded-full text-xs font-semibold mr-2">',
            )
            .replace(/<\/span>/g, '</span>')

          extracted = `<div class="card-properties mb-6">${cardPropsContent}</div>${extracted}`
        }

        // Wrap the content in a container with proper styling
        extracted = `<div class="workshop-content prose dark:prose-invert max-w-none">${extracted}</div>`
      }

      if (!extracted) {
        extracted =
          "<div class='text-red-500'>Keine Workshop-Beschreibung gefunden.</div>"
      }
      setHtmlContent(extracted)
    } catch (e) {
      console.error('Error fetching workshop content:', e)
      setHtmlContent(
        "<div class='text-red-500'>Inhalt konnte nicht geladen werden.</div>",
      )
    }

    setPhoto(workshop.image)
  }

  const handleClose = () => {
    setOpen(false)
    setSelected(null)
    setHtmlContent('')
    setPhoto('')
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((ws, idx) => (
          <div
            key={ws.title}
            className="flex min-h-[320px] cursor-pointer flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-md transition-all hover:shadow-primary-200 dark:border-primary-400 dark:bg-primary-500/10"
            onClick={() => handleOpen(ws)}
          >
            <img
              src={ws.image}
              alt={ws.title}
              className="mb-4 h-40 w-full rounded-xl object-cover"
            />
            <h3 className="mb-2 text-xl font-bold text-slate-700 dark:text-white">
              {ws.title}
            </h3>
            <p className="mb-2 flex-1 text-base text-slate-600 dark:text-slate-200">
              {ws.description}
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {ws.tags &&
                ws.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold text-white shadow"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <div className="mt-4 flex justify-center gap-3">
              <span className="rounded-full bg-slate-600 px-3 py-1 text-xs font-semibold text-white">
                {ws.age}
              </span>
              <span className="rounded-full bg-slate-600 px-3 py-1 text-xs font-semibold text-white">
                {ws.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
      <WorkshopModal
        open={open}
        onClose={handleClose}
        htmlContent={htmlContent}
        photo={photo}
        title={selected?.title}
      />
    </>
  )
}
