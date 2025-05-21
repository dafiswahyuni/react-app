import { useState } from "react";
import frameworkData from "./framework.json";
import "./tailwind.css";

// Daftar warna latar untuk tiap card
const bgColors = [
  "bg-gradient-to-br from-pink-100 to-pink-200",
  "bg-gradient-to-br from-blue-100 to-blue-200",
  "bg-gradient-to-br from-green-100 to-green-200",
  "bg-gradient-to-br from-yellow-100 to-yellow-200",
  "bg-gradient-to-br from-purple-100 to-purple-200",
  "bg-gradient-to-br from-orange-100 to-orange-200",
];

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  const _searchTerm = searchTerm.toLowerCase();
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
    <div className="p-4 sm:p-6 md:p-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 ">
       Framework Explorer
      </h1>

      {/* Input & Select */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="🔍 Search framework..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <select
          name="selectedTag"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">📌 All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFrameworks.map((item, index) => (
          <div
            key={item.id}
            className={`${bgColors[index % bgColors.length]} p-6 rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
               {item.name}
            </h2>
            <p className="text-gray-700 text-sm mb-2">{item.description}</p>
            <p className="text-gray-600 text-sm mb-4">
            👨‍🏫 <b>{item.details.developer}</b>
            </p>

            <a
              className="text-blue-700 text-sm underline hover:text-blue-900 transition"
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              🌍 Visit website
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/70 backdrop-blur text-gray-800 px-3 py-1 text-xs rounded-full shadow-sm border border-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
