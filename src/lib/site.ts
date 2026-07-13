/**
 * サイト全体で使う会社情報・定数。
 * 実際の会社情報が確定したら、このファイルの値を書き換えるだけで全ページに反映される。
 */
export const SITE = {
  name: '株式会社夏目住宅',
  nameEn: 'NATSUME JUTAKU CO., LTD.',
  catchCopy: '注文住宅・工務店',
  tagline: '暮らしに\n寄り添う、\n家づくりを。',
  tel: '【電話番号】',
  telHref: 'tel:0000000000',
  email: '【メールアドレス】',
  postalCode: '【郵便番号】',
  prefecture: '【都道府県】',
  city: '【市区町村】',
  addressRest: '【番地・建物名】',
  representative: '【代表者名】',
  founded: '【設立年】',
  licenseNumber: '【建設業許可番号】',
  businessHours: '【営業時間】',
  closedDays: '【定休日】',
  serviceArea: '【対応エリア】',
  formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME',
  mapEmbedSrc: '',
} as const;

export const NAV_ITEMS = [
  { href: '/', label: 'トップ' },
  { href: '/concept/', label: 'こだわり' },
  { href: '/works/', label: '施工事例' },
  { href: '/voice/', label: 'お客様の声' },
  { href: '/company/', label: '会社概要' },
  { href: '/access/', label: 'アクセス' },
] as const;

export const CONTACT_ITEM = { href: '/contact/', label: 'お問い合わせ' } as const;

/**
 * base path(GitHub Pagesのプロジェクトページ配下)を考慮した内部リンクを生成する。
 * astro.config.mjsのbaseに末尾スラッシュがあってもなくても、pathとの間が
 * 二重スラッシュ/スラッシュ欠落にならないよう正規化する。
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
