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

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

// 도쿄 인기 지역 (벤치마크 e-housing 참고)
export const AREAS = [
  { key: "minato", slug: "minato" },
  { key: "shibuya", slug: "shibuya" },
  { key: "shinjuku", slug: "shinjuku" },
  { key: "meguro", slug: "meguro" },
  { key: "setagaya", slug: "setagaya" },
  { key: "bunkyo", slug: "bunkyo" },
] as const;

// 상담 연락처 (실제 값)
export const CONTACT = {
  email: "japan@win-bro.com",
  kakaoId: "japanreal",
  kakaoUrl: "https://pf.kakao.com/_xjxiuNn/chat",
} as const;

// 상담 채널 버튼 (이메일 + 카카오톡). LINE/WhatsApp은 계정 확보 시 추가.
export const CONTACT_CHANNELS = [
  {
    key: "email",
    href: `mailto:${CONTACT.email}`,
    color: "#2563eb",
  },
  {
    key: "kakao",
    href: CONTACT.kakaoUrl,
    color: "#FEE500",
  },
] as const;

export type ContactChannelKey = (typeof CONTACT_CHANNELS)[number]["key"];

// 생활정보(생활 셋업) 토픽 — 콘텐츠는 후속 교체
export const GUIDE_TOPICS = [
  { key: "electricity", slug: "electricity" },
  { key: "gas", slug: "gas" },
  { key: "water", slug: "water" },
  { key: "internet", slug: "internet" },
  { key: "bank", slug: "bank" },
  { key: "mobile", slug: "mobile" },
] as const;

export function getGuideTopicBySlug(slug: string) {
  return GUIDE_TOPICS.find((g) => g.slug === slug);
}

// 블로그 포스트(플레이스홀더) — 후속 CMS/MDX로 대체
export const BLOG_POSTS = [
  { key: "shinjukuVsShibuya", slug: "shinjuku-vs-shibuya" },
  { key: "utilitiesGuide", slug: "utilities-setup-guide" },
  { key: "internetForForeigners", slug: "internet-for-foreigners" },
] as const;

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
