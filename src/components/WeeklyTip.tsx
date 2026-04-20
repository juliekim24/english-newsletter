interface WeeklyTipProps {
  tip: string;
  issueNumber: number;
}

export default function WeeklyTip({ tip, issueNumber }: WeeklyTipProps) {
  return (
    <div className="bg-purple-50 border-t-4 border-purple-500 px-6 py-6 sm:px-8">
      <p className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-1.5">
        ✏️ 이번 주 독서 꿀팁 #{issueNumber}
      </p>
      <p className="text-gray-700 leading-relaxed">{tip}</p>
    </div>
  );
}
