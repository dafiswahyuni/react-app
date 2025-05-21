import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  /** State **/
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  /** Ambil semua tag unik **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  /** Logic Filter **/
  const _searchTerm = searchTerm.toLowerCase();
  const _selectedTag = selectedTag.toLowerCase()
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8">
      {/* ✅ onChange pada input */}
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* ✅ onChange pada select */}
      <select
        name="selectedTag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* ✅ Gunakan filteredFrameworks di sini */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-600">
            Develop By <b>{item.details.developer}</b>
          </p>
          <a
            className="text-blue-600 underline"
            href={item.details.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
          </a>
          <div className="mt-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
