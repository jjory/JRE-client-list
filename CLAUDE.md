# Project: JRE Global Home
외국인 대상 일본 부동산(브랜드 JRE) 글로벌 홈. 벤치마크: e-housing.jp
운영사: WINBRO LLC(도쿄 신주쿠). 기존: japan-real.com(한국어 레거시), list.japan-real.com(임대 앱)

## Stack
- Next.js(App Router) + Tailwind, Vercel 배포, GitHub 저장소
- 다국어: KO / EN / JP (i18n 키 구조, 언어 전환 헤더) — next-intl, `/[locale]` 라우팅, 기본 KO
- 프레임워크 세부 규칙은 @AGENTS.md 참조 (Next.js 16 breaking changes 주의)

## IA (필수 섹션)
- 서비스: Rent / Buy / Short-term / Sell / Management / Office
- 지역가이드 블로그(SEO 핵심) / 생활정보(전기·가스·인터넷)
- 상담: LINE · WhatsApp · KakaoTalk(japanreal) 버튼
- 신뢰 섹션: 회사 소개(WINBRO LLC·宅建士)·후기·실적
- 매물 리스트는 list.japan-real.com로 연결(1차), 추후 API 통합

## Conventions
- 모바일 우선, 이미지 최적화, 페이지별 SEO 메타
- 용어는 드라이브 99_공유/글로서리 준수, 브랜드는 GTM 가이드 준수(확정 전 임시 팔레트 사용)
- 플랜 모드: 구현 전 반드시 계획 승인
