import { booksData, issues } from "@/data/books";
import FeaturedBook from "@/components/FeaturedBook";
import LevelSection from "@/components/LevelSection";
import WeeklyTip from "@/components/WeeklyTip";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  const latestIssue = issues[issues.length - 1];
  const featuredLevel =
    booksData.levels.find((l) => l.label === latestIssue.featuredLevel) ?? booksData.levels[1];
  const weeklyTip =
    booksData.weekly_tips[(latestIssue.number - 1) % booksData.weekly_tips.length];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero / Subscribe */}
      <section className="bg-gradient-to-br from-green-700 to-green-500 rounded-2xl text-white px-8 py-10 mb-8">
        <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-2">
          WEEKLY ENGLISH BOOK NEWSLETTER
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2">영어원서 클래스</h1>
        <p className="text-green-100 mb-6">
          매주 월요일 · AR 지수별 영어 원서 추천 · 초등학생 학부모를 위한 뉴스레터
        </p>
        <div id="subscribe" className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
          <p className="font-semibold mb-3 text-sm">📬 무료로 구독하고 매주 받아보세요</p>
          <SubscribeForm />
        </div>
      </section>

      {/* Current Issue Header */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-white font-bold text-lg">Vol. {latestIssue.number}</span>
            <span className="text-gray-400 text-sm ml-3">{latestIssue.date}</span>
          </div>
          <span className="text-gray-300 text-sm hidden sm:block">📖 {latestIssue.theme}</span>
        </div>

        <div className="px-6 py-5 border-b border-gray-50">
          <p className="text-gray-600 text-sm leading-relaxed">
            안녕하세요, 학부모님 😊 이번 주 테마는{" "}
            <strong className="text-gray-800">『{latestIssue.theme}』</strong>입니다. 아이의 AR
            수준에 맞는 책을 찾아 즐거운 독서 시간 만들어보세요.
          </p>
        </div>

        <FeaturedBook
          book={latestIssue.featuredBook}
          levelLabel={featuredLevel.label}
          levelColor={featuredLevel.color}
        />

        <WeeklyTip tip={weeklyTip} issueNumber={latestIssue.number} />
      </div>

      {/* AR Level Sections — 2 books each */}
      <div className="space-y-10">
        {booksData.levels.map((level) => (
          <LevelSection key={level.label} level={level} maxBooks={2} />
        ))}
      </div>

      {/* AR Guide */}
      <section className="mt-12 bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-gray-700 px-6 py-4">
          <h2 className="text-white font-bold">📊 AR 지수 빠른 안내표</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {booksData.levels.map((level) => (
            <div key={level.label} className="flex items-center gap-4 px-6 py-4">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: level.color }}
              />
              <span className="font-bold text-sm text-gray-800 w-20">{level.label}</span>
              <span className="text-sm text-gray-500 w-28">{level.range}</span>
              <span className="text-sm text-gray-400">{level.grade_guide}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
