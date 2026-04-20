"use client";

import { Book } from "@/types";

interface BookCardProps {
  book: Book;
  levelColor: string;
}

export default function BookCard({ book, levelColor }: BookCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-5 border-b border-gray-50">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-base leading-snug">{book.title}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{book.author} 저</p>
          </div>
          <span
            className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: levelColor }}
          >
            AR {book.ar}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {book.theme.map((t) => (
            <span key={t} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
              {t}
            </span>
          ))}
          {book.award && (
            <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full font-medium">
              🏆 {book.award}
            </span>
          )}
          {book.series && book.total_books && (
            <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full">
              시리즈 {book.total_books}권
            </span>
          )}
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-700 leading-relaxed mb-4">{book.synopsis_ko}</p>
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-3.5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">💡 부모님 TIP</p>
          <p className="text-sm text-gray-700 leading-relaxed">{book.parent_tip}</p>
        </div>
      </div>
    </div>
  );
}
