export interface Book {
  title: string;
  author: string;
  ar: string;
  theme: string[];
  pages: number | string;
  synopsis_ko: string;
  parent_tip: string;
  series: boolean;
  total_books?: number;
  award?: string;
  recommended_start?: string;
}

export interface Level {
  range: string;
  label: string;
  label_en: string;
  grade_guide: string;
  color: string;
  books: Book[];
}

export interface BooksData {
  levels: Level[];
  themes: string[];
  weekly_tips: string[];
}

export interface Issue {
  number: number;
  date: string;
  theme: string;
  featuredBook: Book;
  featuredLevel: string;
}
