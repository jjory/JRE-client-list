// 사이트 공통 구조 데이터 (라벨은 messages/*.json, 여기는 슬러그·외부 URL 등 비번역 데이터)

// 외부 매물 앱 (1차 연결, 추후 API 통합)
export const LISTINGS_URL = "https://list.japan-real.com";

export const SERVICES = [
  { key: "rent", slug: "rent" },
  { key: "buy", slug: "buy" },
  { key: "shortTerm", slug: "short-term" },
  { key: "sell", slug: "sell" },
  { key: "management", slug: "management" },
  { key: "office", slug: "office" },
] as const;

export type ServiceKey = (typeof SERVICES)[number]["key"];

// 도쿄 인기 지역 (벤치마크 e-housing 참고)
export const AREAS = [
  { key: "minato", slug: "minato" },
  { key: "shibuya", slug: "shibuya" },
  { key: "shinjuku", slug: "shinjuku" },
  { key: "meguro", slug: "meguro" },
  { key: "setagaya", slug: "setagaya" },
  { key: "bunkyo", slug: "bunkyo" },
] as const;

// 상담 채널 — TODO: 실제 계정/번호로 교체 (LINE, WhatsApp, KakaoTalk)
export const CONTACT_CHANNELS = [
  {
    key: "line",
    href: "https://line.me/R/ti/p/@japanreal",
    color: "#06C755",
  },
  {
    key: "whatsapp",
    href: "https://wa.me/818000000000",
    color: "#25D366",
  },
  {
    key: "kakao",
    href: "https://pf.kakao.com/_japanreal",
    color: "#FEE500",
  },
] as const;

export type ContactChannelKey = (typeof CONTACT_CHANNELS)[number]["key"];
