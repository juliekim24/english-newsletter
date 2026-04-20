import { Book } from "@/types";

interface FeaturedBookProps {
  book: Book;
  levelLabel: string;
  levelColor: string;
}

export default function FeaturedBook({ book, levelLabel, levelColor }: FeaturedBookProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-t-4 border-b-4 border-amber-400 px-6 py-8 sm:px-8">
      <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">⭐ 이번 주 추천 도서</p>
      <h2 className="text-2xl font-bold text-gray-900 leading-tight">{book.title}</h2>
      <p className="text-gray-500 text-sm mt-1 mb-3">{book.author} 저</p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: levelColor }}>
          {levelLabel}
        </span>
        <span className="bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          AR {book.ar}
        </span>
        {book.award && (
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold border border-amber-300 px-3 py-1 rounded-full">
            🏆 {book.award}
          </span>
        )}
      </div>

      <p className="text-gray-700 leading-relaxed mb-5">{book.synopsis_ko}</p>

      <div className="bg-white/70 rounded-xl p-4">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1.5">💡 부모님 TIP</p>
        <p className="text-sm text-gray-700 leading-relaxed">{book.parent_tip}</p>
      </div>
    </div>
  );
}
