import React, { useState } from 'react'
import WorkshopModalIsland from './WorkshopModalIsland.jsx'

export default function WorkshopGridIsland({ workshops }) {
  // Get all unique tags
  const allTags = Array.from(new Set(workshops.flatMap((ws) => ws.tags)))
  const [selectedTag, setSelectedTag] = useState(null)

  // Filter workshops by selected tag
  const filteredWorkshops =
    selectedTag ?
      workshops.filter((ws) => ws.tags.includes(selectedTag))
      : workshops

  return (
    <div>
      {/* Tag Bar */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        <button
          className={`rounded-full border-2 px-5 py-2 font-medium shadow-sm transition-all duration-200 ${!selectedTag ?
            'border-primary-400 bg-primary-500 text-white'
            : 'border-primary-400 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700'
            }`}
          onClick={() => setSelectedTag(null)}
        >
          Alle
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`rounded-full border-2 px-5 py-2 font-medium shadow-sm transition-all duration-200 ${selectedTag === tag ?
              'border-primary-400 bg-primary-500 text-white'
              : 'border-primary-400 bg-white dark:bg-gray-800 text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {/* Workshop Grid */}
      <WorkshopModalIsland workshops={filteredWorkshops} />
    </div>
  )
}
