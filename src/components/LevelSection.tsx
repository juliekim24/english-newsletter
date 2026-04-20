import { Level } from "@/types";
import BookCard from "./BookCard";

interface LevelSectionProps {
  level: Level;
  maxBooks?: number;
}

export default function LevelSection({ level, maxBooks }: LevelSectionProps) {
  const books = maxBooks ? level.books.slice(0, maxBooks) : level.books;

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="text-white text-sm font-bold px-3 py-1 rounded-full"
          style={{ backgroundColor: level.color }}
        >
          {level.label}
        </span>
        <div>
          <span className="font-bold text-gray-800 text-sm">{level.range}</span>
          <span className="text-gray-400 text-sm mx-1.5">·</span>
          <span className="text-gray-500 text-sm">{level.grade_guide}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((book) => (
          <BookCard key={book.title} book={book} levelColor={level.color} />
        ))}
      </div>
    </section>
  );
}
