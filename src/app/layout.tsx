import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "📚 영어원서 클래스 뉴스레터",
  description: "초등학생을 위한 AR 지수별 영어 원서 추천 뉴스레터. 매주 월요일 발행.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-[#f5f5f0]">
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-green-700 text-lg tracking-tight">
              📚 영어원서 클래스
            </Link>
            <nav className="flex items-center gap-5">
              <Link href="/" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
                최신 호
              </Link>
              <Link href="/books" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
                도서 탐색
              </Link>
              <Link href="/archive" className="text-sm text-gray-600 hover:text-green-700 transition-colors">
                지난 호
              </Link>
              <Link
                href="/#subscribe"
                className="text-sm bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors font-medium"
              >
                구독하기
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-800 text-gray-400 py-10 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-bold text-white mb-1">📚 영어원서 클래스 뉴스레터</p>
            <p className="text-sm mb-4">매주 월요일 · 초등학생을 위한 AR 지수별 영어 원서 추천</p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/books" className="hover:text-white transition-colors">도서 탐색</Link>
              <Link href="/archive" className="hover:text-white transition-colors">지난 호 보기</Link>
              <Link href="/#subscribe" className="hover:text-white transition-colors">구독하기</Link>
            </div>
            <p className="text-xs mt-6 text-gray-600">© 2026 영어원서 클래스. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
