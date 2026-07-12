import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next.js 16: `middleware` 규칙이 `proxy`로 변경됨.
// 로케일 감지·리다이렉트 (`/` → `/ko`).
export default createMiddleware(routing);

export const config = {
  // 내부 경로(_next, api), 정적 파일을 제외한 모든 경로에 적용
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
