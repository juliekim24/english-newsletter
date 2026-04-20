import { NextRequest, NextResponse } from "next/server";

// 구독자 이메일을 저장합니다.
// 현재는 콘솔에 출력 + 성공 응답만 반환합니다.
// Resend(이메일 API) 연동 방법은 아래 주석을 참고하세요.
export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "올바른 이메일 주소를 입력해주세요." }, { status: 400 });
  }

  // ── Resend 연동 예시 ──────────────────────────────────────────
  // 1. npm install resend
  // 2. Vercel 환경 변수에 RESEND_API_KEY 설정
  // 3. 아래 주석 해제
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // await resend.contacts.create({
  //   email,
  //   firstName: name || "",
  //   audienceId: process.env.RESEND_AUDIENCE_ID!,
  // });
  //
  // await resend.emails.send({
  //   from: "영어원서 클래스 <newsletter@yourdomain.com>",
  //   to: email,
  //   subject: "[영어원서 클래스] 구독해주셔서 감사합니다!",
  //   html: `<p>안녕하세요${name ? ` ${name}님` : ""}! 매주 월요일 오전에 뉴스레터가 도착합니다.</p>`,
  // });
  // ─────────────────────────────────────────────────────────────

  console.log(`[구독 신청] ${name || "이름 없음"} <${email}>`);

  return NextResponse.json({
    message: `${name ? name + "님, " : ""}구독 신청이 완료되었습니다! 매주 월요일 오전에 뉴스레터가 도착합니다.`,
  });
}
