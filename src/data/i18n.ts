// ==========================================================================
// UI 文言辞書 + i18n ヘルパ
// 画面上の固定文言（ナビ・フッター・各ページ見出し等）を locale ごとに保持する。
// 可変コンテンツ（works/events/slides）は ./site.ts を参照。
// ==========================================================================

import type { Locale, EventStatus } from './site';

export type { Locale };

export const locales: Locale[] = ['ja', 'en'];

// --- ルート定義 / パスヘルパ ------------------------------------------------
// key はページ識別子、path は locale なしの相対パス（Home は '')。
export interface NavItem {
  key: string;
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Home', path: '' },
  { key: 'about', label: 'About', path: 'about' },
  { key: 'works', label: 'Works', path: 'works' },
  { key: 'events', label: 'Events', path: 'events' },
  { key: 'slides', label: 'Slides', path: 'slides' },
  { key: 'contact', label: 'Contact', path: 'contact' }
];

/** locale + ページパスから URL を生成（ja は '/', en は '/en/' 起点） */
export function localizedHref(locale: Locale, path: string): string {
  const prefix = locale === 'en' ? '/en' : '';
  return path ? `${prefix}/${path}` : `${prefix}/`;
}

/** 言語トグル用: 現在ページの反対 locale の URL を返す */
export function altLocaleHref(currentKey: string, targetLocale: Locale): string {
  const item = navItems.find((i) => i.key === currentKey);
  return localizedHref(targetLocale, item ? item.path : '');
}

// --- Events: status → 表示スタイル ------------------------------------------
export interface EventStyle {
  label: string;
  statusColor: string;
  statusBorder: string;
  dateColor: string;
  titleColor: string;
  venueColor: string;
}

const statusLabel: Record<EventStatus, Record<Locale, string>> = {
  upcoming: { ja: '予定', en: 'Upcoming' },
  past: { ja: '終了', en: 'Past' },
  planned: { ja: '準備中', en: 'Planned' }
};

export function eventStyle(status: EventStatus, locale: Locale): EventStyle {
  const label = statusLabel[status][locale];
  if (status === 'upcoming') {
    return {
      label,
      statusColor: '#3B6EA5',
      statusBorder: '1px solid #3B6EA5',
      dateColor: 'rgba(27,34,44,.78)',
      titleColor: '#1B222C',
      venueColor: 'rgba(27,34,44,.78)'
    };
  }
  if (status === 'planned') {
    return {
      label,
      statusColor: 'rgba(27,34,44,.55)',
      statusBorder: '1px dashed rgba(27,34,44,.4)',
      dateColor: 'rgba(27,34,44,.55)',
      titleColor: 'rgba(27,34,44,.58)',
      venueColor: 'rgba(27,34,44,.55)'
    };
  }
  // past
  return {
    label,
    statusColor: 'rgba(27,34,44,.72)',
    statusBorder: '1px solid rgba(27,34,44,.4)',
    dateColor: 'rgba(27,34,44,.78)',
    titleColor: '#1B222C',
    venueColor: 'rgba(27,34,44,.78)'
  };
}

// --- フッター共通 -----------------------------------------------------------
export interface FooterLink {
  label: string;
  href: string;
}

export const footerLinks: FooterLink[] = [
  { label: 'Email', href: 'mailto:contact@pulvis.jp' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'BOOTH', href: 'https://booth.pm' }
];

// --- ページ文言辞書 ---------------------------------------------------------
export const ui = {
  ja: {
    siteTitle: 'Pulvis Architect',
    footerCopyright: '© 2026 Pulvis Architect',
    footerNote: '主宰者個人のプロフィール・研究業績は',
    langJa: 'JA',
    langEn: 'EN',
    viewAll: 'すべて見る',
    home: {
      kicker: 'PULVIS ARCHITECT — PROJECT',
      title: '数学と幾何学、フラクタルをめぐる制作',
      desc: 'Pulvis Architect は、数学・幾何学・フラクタル・コンピュータグラフィクスを扱うソフトウェア開発プロジェクトです。ソフトウェア制作、展示、登壇、教材・模型制作を通じて、幾何学的な構造を可視化し、かたちにしています。',
      ctaWorks: 'Works を見る',
      ctaAbout: 'About',
      worksHeading: 'Works',
      worksLabel: '代表的な制作物',
      eventsHeading: 'Events',
      eventsLabel: '参加・予定イベント',
      slidesHeading: 'Slides',
      slidesLabel: '登壇・講義資料',
      slideWeb: 'Web版',
      slidePdf: 'PDF版'
    },
    about: {
      kicker: 'ABOUT',
      title: 'Pulvis Architect について',
      lead: 'Pulvis Architect は、数学・幾何学・フラクタル・コンピュータグラフィクスを扱う制作プロジェクトです。ソフトウェア、模型、展示、登壇資料といったかたちで、幾何学的な構造を可視化し、手に取れるものとして届けることを目指しています。',
      activitiesHeading: '活動内容',
      organizerHeading: '主宰者について',
      organizerBody: '主宰者は、数学・幾何学の可視化とソフトウェア制作を中心に活動しています。Pulvis Architect としての制作物・展示・頒布物は本サイトにまとめています。',
      somaNote: '主宰者個人のプロフィール、経歴、研究業績、その他の活動については',
      activities: [
        { name: 'ソフトウェア制作', desc: '数学的構造を対話的に探索・可視化するツールやビューアの開発' },
        { name: '展示', desc: 'イベントでの作品展示、フラクタル模型や図版の頒布' },
        { name: '登壇', desc: '講義・勉強会での発表、解説資料の公開' },
        { name: '教材制作', desc: '幾何学やフラクタルを学ぶための資料・教材の制作' },
        { name: '模型制作', desc: '3Dプリントによる数学模型・立体作品の制作' }
      ]
    },
    works: {
      kicker: 'WORKS',
      title: '作品・プロジェクト',
      lead: 'Pulvis Architect が制作したソフトウェア、模型、可視化作品の一覧です。数学・幾何学・フラクタルを主題に、対話的なツールから立体作品まで幅広く扱っています。'
    },
    events: {
      kicker: 'EVENTS',
      title: '参加・予定イベント',
      lead: 'Pulvis Architect として出展・頒布・登壇するイベントの一覧です。予定・終了の状態を各行に表示しています。',
      note: '※ 出展内容や頒布物は各イベントごとに異なります。詳細は SNS でお知らせします。'
    },
    slides: {
      kicker: 'SLIDES',
      title: '登壇・講義資料',
      lead: '講義・勉強会・イベントでの発表資料の一覧です。Web版とPDF版を用意しているものは、それぞれのリンクから閲覧できます。',
      web: 'Web版',
      pdf: 'PDF版'
    },
    contact: {
      kicker: 'CONTACT',
      title: 'お問い合わせ・リンク',
      lead: '制作物・展示・頒布・共同制作・講演依頼などのお問い合わせは、以下の連絡先までお願いします。',
      links: [
        { label: 'EMAIL', value: 'contact@pulvis.jp', href: 'mailto:contact@pulvis.jp' },
        { label: 'GITHUB', value: 'github.com/pulvis', href: 'https://github.com' },
        { label: 'X', value: '@pulvis', href: 'https://x.com' },
        { label: 'BOOTH', value: 'pulvis.booth.pm', href: 'https://booth.pm' },
        { label: '個人サイト', value: 'soma-arc.net', href: 'https://soma-arc.net' }
      ]
    }
  },
  en: {
    siteTitle: 'Pulvis Architect',
    footerCopyright: '© 2026 Pulvis Architect',
    footerNote: 'For the organizer’s personal profile and research, see',
    langJa: 'JA',
    langEn: 'EN',
    viewAll: 'View all',
    home: {
      kicker: 'PULVIS ARCHITECT — PROJECT',
      title: 'Mathematics, geometry, and fractal-driven work',
      desc: 'Pulvis Architect is a software project exploring mathematics, geometry, fractals, and computer graphics — through software, exhibitions, talks, teaching materials, and printed models.',
      ctaWorks: 'View Works',
      ctaAbout: 'About',
      worksHeading: 'Works',
      worksLabel: 'Selected works',
      eventsHeading: 'Events',
      eventsLabel: 'Upcoming & past events',
      slidesHeading: 'Slides',
      slidesLabel: 'Talks & lecture materials',
      slideWeb: 'Web version',
      slidePdf: 'PDF version'
    },
    about: {
      kicker: 'ABOUT',
      title: 'About Pulvis Architect',
      lead: 'Pulvis Architect is a project working with mathematics, geometry, fractals, and computer graphics. Through software, models, exhibitions, and talk materials, it aims to visualize geometric structures and deliver them as things you can hold and explore.',
      activitiesHeading: 'Activities',
      organizerHeading: 'The organizer',
      organizerBody: 'The organizer works mainly on the visualization of mathematics and geometry, and on software development. Works, exhibitions, and publications produced as Pulvis Architect are collected on this site.',
      somaNote: 'For the organizer’s personal profile, background, research, and other activities, please see',
      activities: [
        { name: 'Software', desc: 'Building tools and viewers for interactively exploring and visualizing mathematical structures' },
        { name: 'Exhibitions', desc: 'Exhibiting works at events, distributing fractal models and printed figures' },
        { name: 'Talks', desc: 'Presenting at lectures and study sessions, publishing explanatory materials' },
        { name: 'Teaching materials', desc: 'Producing resources and materials for learning geometry and fractals' },
        { name: 'Model making', desc: 'Creating mathematical models and 3D-printed sculptural works' }
      ]
    },
    works: {
      kicker: 'WORKS',
      title: 'Works & Projects',
      lead: 'A list of software, models, and visualization works produced by Pulvis Architect. Centered on mathematics, geometry, and fractals, it spans from interactive tools to physical sculptural pieces.'
    },
    events: {
      kicker: 'EVENTS',
      title: 'Events',
      lead: 'A list of events where Pulvis Architect exhibits, distributes works, or gives talks. Each row shows whether the event is upcoming or past.',
      note: 'Note: exhibits and publications differ per event. Details are announced on social media.'
    },
    slides: {
      kicker: 'SLIDES',
      title: 'Slides & Lecture Materials',
      lead: 'A list of presentation materials from lectures, study sessions, and events. Where a web or PDF version is available, it can be viewed from the corresponding link.',
      web: 'Web',
      pdf: 'PDF'
    },
    contact: {
      kicker: 'CONTACT',
      title: 'Contact & Links',
      lead: 'For inquiries about works, exhibitions, publications, collaborations, or speaking requests, please use the contacts below.',
      links: [
        { label: 'EMAIL', value: 'contact@pulvis.jp', href: 'mailto:contact@pulvis.jp' },
        { label: 'GITHUB', value: 'github.com/pulvis', href: 'https://github.com' },
        { label: 'X', value: '@pulvis', href: 'https://x.com' },
        { label: 'BOOTH', value: 'pulvis.booth.pm', href: 'https://booth.pm' },
        { label: 'PERSONAL', value: 'soma-arc.net', href: 'https://soma-arc.net' }
      ]
    }
  }
} as const;

export type UI = (typeof ui)[Locale];
