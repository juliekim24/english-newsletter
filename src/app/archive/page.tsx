import { issues, booksData } from "@/data/books";
import Link from "next/link";

export default function ArchivePage() {
  const sorted = [...issues].sort((a, b) => b.number - a.number);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">지난 호 보기</h1>
        <p className="text-gray-500 text-sm">발행된 모든 뉴스레터를 확인하세요.</p>
      </div>

      <div className="space-y-3">
        {sorted.map((issue) => {
          const featuredLevel =
            booksData.levels.find((l) => l.label === issue.featuredLevel) ?? booksData.levels[1];
          return (
            <div
              key={issue.number}
              className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-white text-sm font-bold w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-lg"
                  style={{ backgroundColor: featuredLevel.color }}
                >
                  {issue.number}
                </span>
                <div>
                  <p className="font-bold text-gray-800">{issue.theme}</p>
                  <p className="text-sm text-gray-400 mt-0.5">
                    {issue.date} · Vol. {issue.number}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    이번 주 추천: <strong>{issue.featuredBook.title}</strong>
                  </p>
                </div>
              </div>
              <Link
                href={`/?issue=${issue.number}`}
                className="shrink-0 text-sm text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                보기 →
              </Link>
            </div>
          );
        })}
      </div>

      {issues.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p>아직 발행된 뉴스레터가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
