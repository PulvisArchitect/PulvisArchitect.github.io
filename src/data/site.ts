// ==========================================================================
// Pulvis Architect — 共有コンテンツデータ (single source of truth)
// Home と Works / Events / Slides ページの両方がここを参照します。
// 元データは Claude Design の data/site.js を移植したもの（現状プレースホルダ）。
// 実データ確定後に content collections へ昇格する場合も、この構造をそのまま
// works.json / events.json / slides.json へ対応させられます。
// ==========================================================================

export type Locale = 'ja' | 'en';

/** ja / en の両方を持つローカライズ文字列 */
export type Localized = Record<Locale, string>;

// --- Works（作品・プロジェクト） -------------------------------------------
export type WorkCategory = 'Software' | 'Print' | 'WebGL' | 'Visualization';

export interface Work {
  id: string;
  meta: string;
  imgLabel: string;
  category: WorkCategory;
  title: Localized;
  desc: Localized;
}

export const works: Work[] = [
  {
    id: 'reflection-engine',
    meta: 'No.01 — Software',
    imgLabel: 'WORK IMAGE — 01',
    category: 'Software',
    title: { ja: 'Reflection Engine', en: 'Reflection Engine' },
    desc: {
      ja: '鏡映変換による幾何学模様の生成ツール',
      en: 'A generative tool for geometric patterns built from reflection transforms'
    }
  },
  {
    id: 'apollonian-study',
    meta: 'No.02 — Print',
    imgLabel: 'WORK IMAGE — 02',
    category: 'Print',
    title: { ja: 'Apollonian Study', en: 'Apollonian Study' },
    desc: {
      ja: 'アポロニウスの円充填を用いたフラクタル模型',
      en: 'A fractal model built from Apollonian circle packing'
    }
  },
  {
    id: 'circle-inversion-viewer',
    meta: 'No.03 — WebGL',
    imgLabel: 'WORK IMAGE — 03',
    category: 'WebGL',
    title: { ja: 'Circle Inversion Viewer', en: 'Circle Inversion Viewer' },
    desc: {
      ja: '円の反転をリアルタイムに探索するビューア',
      en: 'A real-time viewer for exploring circle inversion'
    }
  },
  {
    id: 'kleinian-explorer',
    meta: 'No.04 — Software',
    imgLabel: 'WORK IMAGE — 04',
    category: 'Software',
    title: { ja: 'Kleinian Explorer', en: 'Kleinian Explorer' },
    desc: {
      ja: 'クライン群の極限集合を対話的に描画するソフトウェア',
      en: 'Interactive software for rendering the limit sets of Kleinian groups'
    }
  },
  {
    id: 'sierpinski-lattice',
    meta: 'No.05 — Print',
    imgLabel: 'WORK IMAGE — 05',
    category: 'Print',
    title: { ja: 'Sierpinski Lattice', en: 'Sierpinski Lattice' },
    desc: {
      ja: 'シェルピンスキー構造を立体化した 3D プリント作品',
      en: 'A 3D-printed work realizing the Sierpinski structure in three dimensions'
    }
  },
  {
    id: 'hyperbolic-tiling-atlas',
    meta: 'No.06 — Visualization',
    imgLabel: 'WORK IMAGE — 06',
    category: 'Visualization',
    title: { ja: 'Hyperbolic Tiling Atlas', en: 'Hyperbolic Tiling Atlas' },
    desc: {
      ja: '双曲平面のタイリングを網羅的に可視化した図譜',
      en: 'An atlas exhaustively visualizing tilings of the hyperbolic plane'
    }
  }
];

// --- Events（参加・予定イベント） ------------------------------------------
export type EventStatus = 'upcoming' | 'past' | 'planned';

export interface SiteEvent {
  id: string;
  date: string;
  dateEn?: string;
  status: EventStatus;
  title: Localized;
  venue: Localized;
}

export const events: SiteEvent[] = [
  {
    id: 'gijutsu-ten-20',
    date: '2026.03.14–15',
    status: 'upcoming',
    title: { ja: '技術書典 20', en: 'Gijutsu-ten 20' },
    venue: { ja: '東京ビッグサイト・頒布', en: 'Tokyo Big Sight — sales booth' }
  },
  {
    id: 'fms-lecture',
    date: '2025.11.13',
    status: 'past',
    title: { ja: 'FMS特別講義', en: 'FMS Special Lecture' },
    venue: { ja: 'オンライン・登壇', en: 'Online — talk' }
  },
  {
    id: 'comiket-106',
    date: '2025.08.10',
    status: 'past',
    title: { ja: 'コミックマーケット 106', en: 'Comic Market 106' },
    venue: { ja: '東京ビッグサイト・頒布', en: 'Tokyo Big Sight — sales booth' }
  },
  {
    id: 'math-day-tokyo',
    date: '2025.05.03',
    status: 'past',
    title: { ja: '数学デー at 東京', en: 'Math Day at Tokyo' },
    venue: { ja: '展示・トーク', en: 'Exhibition & talk' }
  },
  {
    id: 'next-tbd',
    date: '( 日付未定 )',
    dateEn: '( TBD )',
    status: 'planned',
    title: { ja: '( タイトル未定 )', en: '( Title TBD )' },
    venue: { ja: '—', en: '—' }
  }
];

// --- Slides（登壇・講義資料） ----------------------------------------------
export interface Slide {
  id: string;
  date: string;
  event: Localized;
  title: Localized;
  web: string;
  pdf: string;
}

export const slides: Slide[] = [
  {
    id: 'reflections',
    date: '2025.11.13',
    event: { ja: 'FMS特別講義', en: 'FMS Special Lecture' },
    title: { ja: '鏡映の織りなす世界', en: 'A World Woven by Reflections' },
    web: '#',
    pdf: '#'
  },
  {
    id: 'intro-fractal',
    date: '2025.08.10',
    event: { ja: 'コミックマーケット 106', en: 'Comic Market 106' },
    title: { ja: '幾何学とフラクタル入門', en: 'Introduction to Geometry and Fractals' },
    web: '#',
    pdf: '#'
  },
  {
    id: 'inversive-geometry',
    date: '2025.05.03',
    event: { ja: '数学デー at 東京', en: 'Math Day at Tokyo' },
    title: { ja: '円の反転幾何入門', en: 'An Introduction to Inversive Geometry' },
    web: '#',
    pdf: '#'
  },
  {
    id: 'math-models-3dprint',
    date: '2024.12.20',
    event: { ja: 'オンライン勉強会', en: 'Online study session' },
    title: { ja: '3Dプリントで作る数学模型', en: 'Building Mathematical Models with 3D Printing' },
    web: '#',
    pdf: '#'
  }
];
