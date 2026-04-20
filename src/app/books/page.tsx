"use client";

import { useState } from "react";
import { booksData } from "@/data/books";
import BookCard from "@/components/BookCard";

const ALL = "전체";

export default function BooksPage() {
  const [activeLevel, setActiveLevel] = useState(ALL);
  const [activeTheme, setActiveTheme] = useState(ALL);
  const [query, setQuery] = useState("");

  const allThemes = [ALL, ...booksData.themes];
  const allLevels = [ALL, ...booksData.levels.map((l) => l.label)];

  const filteredLevels = booksData.levels
    .filter((l) => activeLevel === ALL || l.label === activeLevel)
    .map((level) => ({
      ...level,
      books: level.books.filter((book) => {
        const matchTheme = activeTheme === ALL || book.theme.includes(activeTheme);
        const matchQuery =
          query === "" ||
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase()) ||
          book.synopsis_ko.includes(query);
        return matchTheme && matchQuery;
      }),
    }))
    .filter((l) => l.books.length > 0);

  const totalBooks = filteredLevels.reduce((sum, l) => sum + l.books.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">도서 탐색</h1>
        <p className="text-gray-500 text-sm">AR 지수와 테마별로 아이에게 맞는 책을 찾아보세요.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 space-y-4">
        {/* Search */}
        <input
          type="search"
          placeholder="제목, 저자, 내용으로 검색..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Level Filter */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">단계</p>
          <div className="flex flex-wrap gap-2">
            {allLevels.map((label) => {
              const level = booksData.levels.find((l) => l.label === label);
              const isActive = activeLevel === label;
              return (
                <button
                  key={label}
                  onClick={() => setActiveLevel(label)}
                  className={`text-sm px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isActive
                      ? "text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={isActive ? { backgroundColor: level?.color ?? "#4CAF50" } : {}}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Theme Filter */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">테마</p>
          <div className="flex flex-wrap gap-2">
            {allThemes.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                  activeTheme === theme
                    ? "bg-green-600 text-white font-medium"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-5">
        {totalBooks}권의 책이 있습니다.
      </p>

      {/* Results */}
      {filteredLevels.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📚</p>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredLevels.map((level) => (
            <section key={level.label}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-white text-sm font-bold px-3 py-1 rounded-full"
                  style={{ backgroundColor: level.color }}
                >
                  {level.label}
                </span>
                <span className="text-sm text-gray-500">
                  {level.range} · {level.grade_guide}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {level.books.map((book) => (
                  <BookCard key={book.title} book={book} levelColor={level.color} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
