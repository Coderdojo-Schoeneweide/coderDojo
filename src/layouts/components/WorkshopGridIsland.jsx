import React, { useState } from "react";
import WorkshopModalIsland from "./WorkshopModalIsland.jsx";

export default function WorkshopGridIsland({ workshops }) {
  // Get all unique tags
  const allTags = Array.from(new Set(workshops.flatMap(ws => ws.tags)));
  const [selectedTag, setSelectedTag] = useState(null);

  // Filter workshops by selected tag
  const filteredWorkshops = selectedTag
    ? workshops.filter(ws => ws.tags.includes(selectedTag))
    : workshops;

  return (
    <div>
      {/* Tag Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          className={`px-5 py-2 border-2 rounded-full font-medium transition-all duration-200 shadow-sm ${
            !selectedTag
              ? 'bg-orange-400 text-white border-orange-400'
              : 'bg-white/60 dark:bg-[#222222cc] text-white dark:text-orange-400 border-orange-400'
          }`}
          onClick={() => setSelectedTag(null)}
        >
          Alle
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`px-5 py-2 border-2 rounded-full font-medium transition-all duration-200 shadow-sm ${
              selectedTag === tag
                ? 'bg-orange-400 text-white border-orange-400'
                : 'bg-white/60 dark:bg-[#222222cc] text-white dark:text-orange-400 border-orange-400'
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
  );
} 