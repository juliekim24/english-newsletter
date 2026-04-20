"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "구독 신청이 완료되었습니다!");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || "오류가 발생했습니다. 다시 시도해주세요.");
      }
    } catch {
      setStatus("error");
      setMessage("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-bold text-green-800 text-lg">{message}</p>
        <p className="text-green-600 text-sm mt-1">매주 월요일 오전에 뉴스레터가 도착합니다.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 underline"
        >
          다시 입력하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="이름 (선택)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
        <input
          type="email"
          placeholder="이메일 주소"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap"
        >
          {status === "loading" ? "처리 중..." : "무료 구독"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">{message}</p>
      )}
      <p className="text-xs text-gray-400">매주 월요일 발행 · 언제든 수신 거부 가능</p>
    </form>
  );
}
