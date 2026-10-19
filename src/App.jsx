/* =============================================================================
   Obrona MGR – fiszki z Informatyki (PWA)
   Cała aplikacja w jednym pliku: stan, narzędzia tekstowe, komponenty wspólne
   oraz moduły Fiszki / Egzamin / Plan / Trening / Kompendium.
   Dane pytań: ./data/index.js (kontrakt w PLAN.md §4), stan: PLAN.md §7.
   ============================================================================= */
import {
  createContext,
  forwardRef,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion'
import {
  ArrowRight,
  BookMarked,
  BookOpen,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleCheck,
  CircleX,
  ClipboardCheck,
  Cpu,
  Download,
  GraduationCap,
  History,
  Info,
  Layers,
  Lightbulb,
  ListChecks,
  ListTree,
  Mic,
  MicOff,
  Monitor,
  Moon,
  Pause,
  PenLine,
  Play,
  RefreshCw,
  RotateCcw,
  Rocket,
  Search,
  Settings as SettingsIcon,
  Shuffle,
  Sparkles,
  Square,
  Sun,
  Trash2,
  Trophy,
  Undo2,
  Upload,
  X,
} from 'lucide-react'
import { AREAS, CATEGORY_LABELS, DAYS, PDF_FULL, PDF_SHORT, QUESTIONS, QUESTIONS_BY_ID } from './data/index.js'

// ==== Stałe i dane pochodne ====

const STORAGE_KEY = 'fiszki-obrona:v1'

// Baza może być w trakcie uzupełniania (0, 1 lub 40 pytań) – wszystko liczone defensywnie.
const ALL_Q = (Array.isArray(QUESTIONS) ? QUESTIONS : []).filter((q) => q && q.id)
const Q_BY_ID = QUESTIONS_BY_ID || {}
const AREA_LIST = Array.isArray(AREAS) ? AREAS.filter(Boolean) : []

// Pełne odpowiedzi z PDF: { [id]: { title, paragraphs[] } } – brak wpisu = brak przycisków „Pełna odpowiedź”.
const FULL_MAP = PDF_FULL && typeof PDF_FULL === 'object' ? PDF_FULL : {}
const fullOf = (id) => {
  const f = FULL_MAP[id]
  return f && Array.isArray(f.paragraphs) && f.paragraphs.length ? f : null
}

// Wersja skrócona PDF („W PIGUŁCE”): { [id]: { note?, bullets[] } } – szybka powtórka przed egzaminem.
const SHORT_MAP = PDF_SHORT && typeof PDF_SHORT === 'object' ? PDF_SHORT : {}
const shortOf = (id) => {
  const f = SHORT_MAP[id]
  return f && Array.isArray(f.bullets) && f.bullets.length ? f : null
}
const hasPdf = (id) => !!fullOf(id) || !!shortOf(id)

const TABS = [
  { id: 'cards', label: 'Fiszki', icon: Layers },
  { id: 'exam', label: 'Egzamin', icon: GraduationCap },
  { id: 'plan', label: 'Plan', icon: CalendarCheck },
  { id: 'train', label: 'Trening', icon: PenLine },
  { id: 'base', label: 'Baza', icon: BookOpen },
]
const TAB_IDS = TABS.map((t) => t.id)

// Pudełka Leitnera: 0 nowa, 1 trudna, 2 w trakcie, 3 opanowana.
const BOX_STATUS = ['new', 'hard', 'learning', 'mastered']
const STATUS_META = {
  new: {
    label: 'Nowe',
    badge: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    dot: 'bg-slate-400 dark:bg-slate-500',
  },
  hard: {
    label: 'Trudne',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
    dot: 'bg-rose-500',
  },
  learning: {
    label: 'W trakcie',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  mastered: {
    label: 'Opanowane',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
}
const STATUS_ORDER = ['new', 'hard', 'learning', 'mastered']

const FILTERS = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'ogolne', label: 'Ogólne' },
  { id: 'kierunkowe', label: 'Kierunkowe' },
  { id: 'd1', label: 'Dzień 1' },
  { id: 'd2', label: 'Dzień 2' },
  { id: 'd3', label: 'Dzień 3' },
  { id: 'hard', label: 'Trudne' },
]
const SCOPES = FILTERS.filter((f) => f.id !== 'hard')

const CRITERIA = [
  { key: 'definition', label: 'Czy padła definicja?' },
  { key: 'classification', label: 'Czy podano podział / klasyfikację?' },
  { key: 'example', label: 'Czy podano przykład z IT?' },
  { key: 'conclusion', label: 'Czy sformułowano wniosek?' },
]

// Cztery sekcje odpowiedzi (wspólne dla rewersu fiszki, egzaminu, treningu i kompendium).
const SECTIONS = [
  {
    key: 'definition',
    n: 1,
    title: 'Definicja',
    icon: BookMarked,
    head: 'text-indigo-700 dark:text-indigo-300',
    iconBg: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300',
    dot: 'bg-indigo-400',
  },
  {
    key: 'classification',
    n: 2,
    title: 'Podział / klasyfikacja',
    icon: ListTree,
    head: 'text-violet-700 dark:text-violet-300',
    iconBg: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300',
    dot: 'bg-violet-400',
  },
  {
    key: 'example',
    n: 3,
    title: 'Przykład z praktyki IT',
    icon: Cpu,
    head: 'text-sky-700 dark:text-sky-300',
    iconBg: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300',
    dot: 'bg-sky-400',
  },
  {
    key: 'conclusion',
    n: 4,
    title: 'Wniosek',
    icon: Lightbulb,
    head: 'text-amber-700 dark:text-amber-300',
    iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300',
    dot: 'bg-amber-400',
  },
]

// Bezpieczne akcesory (pytania w trakcie uzupełniania mogą nie mieć wszystkich pól).
const kwOf = (q) => (Array.isArray(q.keywords) ? q.keywords.filter(Boolean) : [])
const mustOf = (q) => (Array.isArray(q.mustSay) ? q.mustSay.filter((m) => m && m.term) : [])
const validQuiz = (it) =>
  it &&
  typeof it.q === 'string' &&
  Array.isArray(it.options) &&
  it.options.length >= 2 &&
  Number.isInteger(it.correct) &&
  it.options[it.correct] != null
const quizOf = (q) => (Array.isArray(q.quiz) ? q.quiz.filter(validQuiz) : [])
const clozeOf = (q) =>
  (Array.isArray(q.cloze) ? q.cloze : []).filter((c) => c && typeof c.text === 'string' && /\{\{[^{}]+\}\}/.test(c.text))

function matchesFilter(q, filter, boxOf) {
  switch (filter) {
    case 'ogolne':
      return q.category === 'ogolne'
    case 'kierunkowe':
      return q.category === 'kierunkowe'
    case 'd1':
      return q.day === 1
    case 'd2':
      return q.day === 2
    case 'd3':
      return q.day === 3
    case 'hard':
      return boxOf(q.id) === 1
    default:
      return true
  }
}

// ==== Narzędzia ogólne ====

const cx = (...a) => a.filter(Boolean).join(' ')
const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n))
const pad2 = (n) => String(n).padStart(2, '0')
const isPlain = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Losowanie ważone bez zwracania (PLAN.md §6.2).
function weightedSample(items, n, weightOf) {
  const pool = items.map((it) => ({ it, w: Math.max(0.01, weightOf(it)) }))
  const out = []
  while (out.length < n && pool.length) {
    const total = pool.reduce((s, p) => s + p.w, 0)
    let r = Math.random() * total
    let i = 0
    for (; i < pool.length - 1; i++) {
      r -= pool[i].w
      if (r <= 0) break
    }
    out.push(pool.splice(i, 1)[0].it)
  }
  return out
}

function vibrate(pattern) {
  try {
    navigator.vibrate?.(pattern)
  } catch {
    /* brak wibracji */
  }
}

const toDateStr = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
function parseDateStr(s) {
  const [y, m, d] = String(s).split('-').map(Number)
  return new Date(y, (m || 1) - 1, d || 1)
}
const dayDiff = (a, b) =>
  Math.round(
    (Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()) - Date.UTC(b.getFullYear(), b.getMonth(), b.getDate())) /
      86400000,
  )
const fmtDateTime = (ts) =>
  new Date(ts).toLocaleString('pl-PL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

// ==== Narzędzia tekstowe (normalize, levenshtein, matcher) ====

// PLAN.md §6.5: małe litery → bez diakrytyków (NFD + ł→l) → tylko [a-z0-9] → pojedyncze spacje.
function normalize(s) {
  return String(s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ł/g, 'l')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

function levenshtein(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1))
    }
    prev = cur
  }
  return prev[b.length]
}

const tokensOf = (text) => normalize(text).split(' ').filter(Boolean)

// Jedno słowo aliasu vs. token: ≤3 znaki → równość, ≥4 → prefiks (≥6 dodatkowo literówka ≤1).
function wordMatches(aw, token) {
  if (token === undefined) return false
  const len = aw.length
  if (len <= 3) return token === aw
  if (token.startsWith(aw)) return true
  return len >= 6 && levenshtein(token.slice(0, len), aw) <= 1
}

function aliasMatches(alias, tokens) {
  const a = tokensOf(alias)
  if (!a.length) return false
  if (a.length === 1) return tokens.some((t) => wordMatches(a[0], t))
  for (let i = 0; i + a.length <= tokens.length; i++) {
    if (a.every((w, j) => wordMatches(w, tokens[i + j]))) return true
  }
  return false
}

function termRecalled(m, tokens) {
  const aliases = Array.isArray(m.aliases) ? m.aliases : []
  return [m.term, ...aliases].some((x) => aliasMatches(x, tokens))
}

// Luki cloze: {{odp|wariant|wariant}} → [{t:'text'}, {t:'gap', answers}]
function parseCloze(text) {
  const parts = []
  const re = /\{\{([^{}]+)\}\}/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push({ t: 'text', v: text.slice(last, m.index) })
    parts.push({
      t: 'gap',
      answers: m[1]
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean),
    })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push({ t: 'text', v: text.slice(last) })
  return parts
}

function checkGap(input, answers) {
  const raw = (s) => String(s ?? '').trim().toLowerCase()
  const ni = normalize(input) || raw(input)
  if (!ni) return false
  const compact = ni.replace(/ /g, '')
  return answers.some((ans) => {
    const na = normalize(ans) || raw(ans)
    if (ni === na || compact === na.replace(/ /g, '')) return true
    return na.length >= 5 && levenshtein(ni, na) <= 1
  })
}

// Wyszukiwarka Kompendium: indeksy znormalizowanych pól – fiszka (tytuł, słowa-klucze, mustSay.term,
// cała odpowiedź) oraz pełny tekst z PDF (osobno, żeby wiedzieć, gdzie trafienie).
const CARD_INDEX = Object.fromEntries(
  ALL_Q.map((q) => {
    const a = q.answer || {}
    const text = [
      q.id,
      q.area,
      q.title,
      kwOf(q).join(' '),
      mustOf(q)
        .map((m) => m.term)
        .join(' '),
      a.definition,
      ...(Array.isArray(a.classification) ? a.classification : []),
      a.example,
      a.conclusion,
    ].join(' ')
    return [q.id, normalize(text)]
  }),
)
const FULL_INDEX = Object.fromEntries(
  ALL_Q.map((q) => [q.id, fullOf(q.id) ? normalize(`${FULL_MAP[q.id].title ?? ''} ${FULL_MAP[q.id].paragraphs.join(' ')}`) : '']),
)
const SHORT_INDEX = Object.fromEntries(
  ALL_Q.map((q) => [q.id, shortOf(q.id) ? normalize(`${SHORT_MAP[q.id].note ?? ''} ${SHORT_MAP[q.id].bullets.join(' ')}`) : '']),
)
const SEARCH_INDEX = Object.fromEntries(
  ALL_Q.map((q) => [q.id, `${CARD_INDEX[q.id]} ${SHORT_INDEX[q.id]} ${FULL_INDEX[q.id]}`]),
)

// Dopasowanie długości 1:1 po „złożeniu” znaków (do podświetlania fraz w oryginalnym tekście).
function foldKeepLength(s) {
  let out = ''
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const f = c
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/ł/g, 'l')
    out += f.length === 1 ? f : c
  }
  return out
}

function highlightNodes(text, tokens) {
  if (!tokens.length) return text
  const folded = foldKeepLength(text)
  const ranges = []
  for (const t of tokens) {
    let from = 0
    for (;;) {
      const i = folded.indexOf(t, from)
      if (i < 0) break
      ranges.push([i, i + t.length])
      from = i + t.length
    }
  }
  if (!ranges.length) return text
  ranges.sort((a, b) => a[0] - b[0])
  const merged = [ranges[0]]
  for (const r of ranges.slice(1)) {
    const last = merged[merged.length - 1]
    if (r[0] <= last[1]) last[1] = Math.max(last[1], r[1])
    else merged.push(r)
  }
  const out = []
  let pos = 0
  merged.forEach(([s, e], i) => {
    if (s > pos) out.push(text.slice(pos, s))
    out.push(
      <mark
        key={i}
        className="rounded bg-yellow-200 px-0.5 text-slate-900 dark:bg-yellow-400/40 dark:text-yellow-50"
      >
        {text.slice(s, e)}
      </mark>,
    )
    pos = e
  })
  if (pos < text.length) out.push(text.slice(pos))
  return out
}

// ==== Stan i localStorage ====

const defaultState = () => ({
  cards: {},
  exams: [],
  quiz: { answered: 0, correct: 0 },
  matcher: {},
  cloze: { answered: 0, correct: 0 },
  sprint: { start: null },
  settings: { theme: 'system', examMinutes: 3, tab: 'cards', skipMastered: false },
})

// Głębokie scalenie z domyślnymi – odporne na brakujące pola i zły typ.
function mergeDefaults(def, val) {
  if (Array.isArray(def)) return Array.isArray(val) ? val : def
  if (isPlain(def)) {
    const src = isPlain(val) ? val : {}
    const keys = Object.keys(def)
    if (keys.length === 0) return { ...src } // mapa swobodna (cards, matcher)
    const out = {}
    for (const k of keys) out[k] = mergeDefaults(def[k], src[k])
    return out
  }
  if (def === null) return typeof val === 'string' ? val : null
  if (typeof def === 'number') return typeof val === 'number' && Number.isFinite(val) ? val : def
  return typeof val === typeof def ? val : def
}

const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d)

function sanitizeState(raw) {
  const s = mergeDefaults(defaultState(), raw)
  const cards = {}
  for (const [id, c] of Object.entries(s.cards)) {
    if (!isPlain(c)) continue
    cards[id] = {
      box: clamp(Math.round(num(c.box)), 0, 3),
      right: Math.max(0, Math.round(num(c.right))),
      wrong: Math.max(0, Math.round(num(c.wrong))),
      last: Math.max(0, num(c.last)),
    }
  }
  s.cards = cards
  const matcher = {}
  for (const [id, v] of Object.entries(s.matcher)) {
    if (typeof v === 'number' && Number.isFinite(v)) matcher[id] = clamp(Math.round(v), 0, 100)
  }
  s.matcher = matcher
  s.exams = s.exams
    .filter((e) => isPlain(e) && Array.isArray(e.ids) && isPlain(e.scores) && typeof e.ts === 'number')
    .slice(0, 30)
  for (const k of ['quiz', 'cloze']) {
    s[k].answered = Math.max(0, Math.round(s[k].answered))
    s[k].correct = clamp(Math.round(s[k].correct), 0, s[k].answered)
  }
  if (s.sprint.start !== null && !/^\d{4}-\d{2}-\d{2}$/.test(s.sprint.start)) s.sprint.start = null
  if (!['system', 'light', 'dark'].includes(s.settings.theme)) s.settings.theme = 'system'
  if (![2, 3].includes(s.settings.examMinutes)) s.settings.examMinutes = 3
  if (!TAB_IDS.includes(s.settings.tab)) s.settings.tab = 'cards'
  return s
}

function loadState() {
  try {
    const txt = localStorage.getItem(STORAGE_KEY)
    return sanitizeState(txt ? JSON.parse(txt) : null)
  } catch {
    return sanitizeState(null)
  }
}

// Scalenie importowanego postępu z bieżącym (bez nadpisywania ustawień).
function mergeStates(cur, inc) {
  const cards = { ...cur.cards }
  for (const [id, c] of Object.entries(inc.cards)) {
    const mine = cards[id]
    if (!mine || c.last > mine.last || (c.last === mine.last && c.box > mine.box)) cards[id] = c
  }
  const seen = new Set()
  const exams = [...cur.exams, ...inc.exams]
    .filter((e) => {
      const k = `${e.ts}|${e.ids.join(',')}`
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 30)
  const matcher = { ...cur.matcher }
  for (const [id, v] of Object.entries(inc.matcher)) matcher[id] = Math.max(matcher[id] ?? 0, v)
  const pickMore = (a, b) => (b.answered > a.answered ? b : a)
  return {
    ...cur,
    cards,
    exams,
    matcher,
    quiz: pickMore(cur.quiz, inc.quiz),
    cloze: pickMore(cur.cloze, inc.cloze),
    sprint: { start: cur.sprint.start ?? inc.sprint.start },
  }
}

// Jeden hook trwałego stanu – zapis do localStorage po każdej zmianie.
function usePersistentState() {
  const [state, setState] = useState(loadState)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* tryb prywatny / brak miejsca – aplikacja działa dalej bez zapisu */
    }
  }, [state])
  return [state, setState]
}

// Reguły Leitnera (PLAN.md §5): „umiem” 0→2, 1→2, 2→3, 3→3; „powtórz” → 1.
const nextBox = (box, known) => (known ? (box >= 2 ? 3 : 2) : 1)

// Postęp: dni 1–3 = (opanowane + 0,5 × w trakcie) / liczba pytań dnia; dzień 4 = odsetek zadań (PLAN.md §6.3).
function computeProgress(state) {
  const { cards, exams, quiz } = state
  const boxOf = (id) => cards[id]?.box ?? 0
  const counts = { new: 0, hard: 0, learning: 0, mastered: 0 }
  for (const q of ALL_Q) counts[BOX_STATUS[boxOf(q.id)]]++
  const days = [1, 2, 3].map((day) => {
    const qs = ALL_Q.filter((q) => q.day === day)
    const mastered = qs.filter((q) => boxOf(q.id) === 3).length
    const learning = qs.filter((q) => boxOf(q.id) === 2).length
    return {
      day,
      total: qs.length,
      mastered,
      learning,
      progress: qs.length ? (mastered + 0.5 * learning) / qs.length : 0,
    }
  })
  const sims = exams.filter((e) => e.ids.length >= 3).length
  const oral = exams.reduce((n, e) => n + e.ids.length, 0)
  const studied = Object.values(cards).some((c) => c.right + c.wrong > 0)
  const quizPct = quiz.answered ? Math.round((quiz.correct / quiz.answered) * 100) : 0
  const tasks = [
    { id: 'sim', label: 'Co najmniej 1 pełna symulacja (3 pytania)', done: sims >= 1, value: `${Math.min(sims, 1)}/1` },
    { id: 'hard', label: 'Zero kart „trudnych”', done: studied && counts.hard === 0, value: `trudnych: ${counts.hard}` },
    { id: 'oral', label: 'Co najmniej 3 odpowiedzi ustne', done: oral >= 3, value: `${Math.min(oral, 3)}/3` },
    {
      id: 'quiz',
      label: 'Skuteczność quizu ≥ 80% (min. 30 odpowiedzi)',
      done: quiz.answered >= 30 && quizPct >= 80,
      value: `${quiz.answered} odp. · ${quizPct}%`,
    },
  ]
  const day4 = tasks.filter((t) => t.done).length / tasks.length
  const parts = [...days.filter((d) => d.total > 0).map((d) => d.progress), day4]
  const overall = parts.reduce((s, v) => s + v, 0) / parts.length
  return { counts, total: ALL_Q.length, days, tasks, day4, overall }
}

const AppCtx = createContext(null)
const useApp = () => useContext(AppCtx)

// ==== Komponenty wspólne ====

const FOCUS =
  'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900'

const BTN_VARIANTS = {
  primary:
    'bg-linear-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-500 hover:to-violet-500',
  success: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400',
  danger: 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400',
  soft: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
  outline:
    'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
  ghost: 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
}
const BTN_SIZES = { sm: 'h-10 px-3 text-sm', md: 'h-12 px-4 text-base', lg: 'h-14 px-5 text-base' }

function Btn({ variant = 'soft', size = 'md', icon: Icon, className, children, type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition active:scale-95 disabled:pointer-events-none disabled:opacity-50',
        FOCUS,
        BTN_VARIANTS[variant],
        BTN_SIZES[size],
        className,
      )}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 20} aria-hidden="true" className="shrink-0" />}
      {children}
    </button>
  )
}

function IconBtn({ label, icon: Icon, className, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cx(
        'grid h-10 w-10 shrink-0 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 active:scale-90 dark:text-slate-300 dark:hover:bg-slate-800',
        FOCUS,
        className,
      )}
      {...props}
    >
      <Icon size={20} aria-hidden="true" />
    </button>
  )
}

function Chip({ active, onClick, children, className, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!active}
      className={cx(
        'inline-flex h-9 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 text-sm font-semibold transition active:scale-95',
        FOCUS,
        active
          ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

function Panel({ className, children, as: Tag = 'div', ...props }) {
  return (
    <Tag
      className={cx(
        'rounded-3xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 sm:p-5',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

function Segmented({ value, onChange, options, className, label, columns }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cx('grid gap-1 rounded-2xl bg-slate-200/70 p-1 dark:bg-slate-800', className)}
      style={{ gridTemplateColumns: columns || `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((o) => {
        const on = o.id === value
        const Icon = o.icon
        return (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(o.id)}
            className={cx(
              'flex min-h-10 items-center justify-center gap-1.5 rounded-xl px-2 py-1 text-center text-sm font-semibold leading-tight transition active:scale-95',
              FOCUS,
              on
                ? 'bg-white text-indigo-700 shadow dark:bg-slate-700 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
            )}
          >
            {Icon && <Icon size={16} aria-hidden="true" />}
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function Switch({ checked, onChange, label, className }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cx(
        'flex items-center gap-2 rounded-full py-2 text-xs font-semibold text-slate-600 dark:text-slate-300',
        FOCUS,
        className,
      )}
    >
      <span
        className={cx(
          'relative h-6 w-10 shrink-0 rounded-full transition-colors',
          checked ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700',
        )}
      >
        <span
          className={cx(
            'absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform',
            checked ? 'translate-x-4' : 'translate-x-0',
          )}
        />
      </span>
      <span className="text-left">{label}</span>
    </button>
  )
}

function ProgressBar({ value, className, fill = 'bg-linear-to-r from-indigo-500 to-violet-500' }) {
  const p = clamp(Math.round(value * 100), 0, 100)
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={p}
      className={cx('h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800', className)}
    >
      <div className={cx('h-full rounded-full transition-[width] duration-500', fill)} style={{ width: `${p}%` }} />
    </div>
  )
}

function StatusBadge({ status, className }) {
  const m = STATUS_META[status]
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold',
        m.badge,
        className,
      )}
    >
      <span className={cx('h-2 w-2 rounded-full', m.dot)} />
      {m.label}
    </span>
  )
}

function EmptyState({ icon: Icon = Info, title, children, action }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-3xl border border-dashed border-slate-300 bg-white/60 px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900/60">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
        <Icon size={28} aria-hidden="true" />
      </span>
      <h3 className="text-lg font-bold">{title}</h3>
      {children && <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">{children}</p>}
      {action}
    </div>
  )
}

function Collapse({ open, children }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="collapse"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Tekst z **pogrubieniem** i opcjonalnym podświetleniem szukanej frazy (<mark>).
function RichText({ text, query }) {
  const tokens = useMemo(
    () =>
      query
        ? foldKeepLength(query.trim())
            .split(/\s+/)
            .filter((t) => t.length >= 2)
        : [],
    [query],
  )
  const parts = String(text ?? '').split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((p, i) => {
        if (!p) return null
        const bold = p.length > 4 && p.startsWith('**') && p.endsWith('**')
        const inner = bold ? p.slice(2, -2) : p
        const content = highlightNodes(inner, tokens)
        return bold ? (
          <strong key={i} className="font-semibold text-indigo-700 dark:text-indigo-300">
            {content}
          </strong>
        ) : (
          <Fragment key={i}>{content}</Fragment>
        )
      })}
    </>
  )
}

// Odpowiedź w 4 sekcjach (Definicja → Podział → Przykład IT → Wniosek).
function AnswerSections({ q, query, className }) {
  const a = q.answer || {}
  return (
    <div className={cx('space-y-5', className)}>
      {SECTIONS.map((s) => {
        const val = a[s.key]
        if (!val || (Array.isArray(val) && !val.length)) return null
        const Icon = s.icon
        return (
          <section key={s.key}>
            <h4 className={cx('mb-2 flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-wide', s.head)}>
              <span className={cx('grid h-8 w-8 shrink-0 place-items-center rounded-xl', s.iconBg)}>
                <Icon size={18} aria-hidden="true" />
              </span>
              <span>
                {s.n}. {s.title}
              </span>
            </h4>
            {Array.isArray(val) ? (
              <ul className="space-y-2">
                {val.map((it, i) => (
                  <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                    <span className={cx('mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full', s.dot)} />
                    <span className="min-w-0 break-words">
                      <RichText text={it} query={query} />
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="break-words text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                <RichText text={val} query={query} />
              </p>
            )}
          </section>
        )
      })}
    </div>
  )
}

// Wspólny wybór zakresu / liczby elementów (Quiz ABC, Cloze).
function SessionConfig({ scope, setScope, count, setCount, available, onStart, noun, startLabel = 'Start' }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Zakres</div>
        <div className="flex flex-wrap gap-2">
          {SCOPES.map((s) => (
            <Chip key={s.id} active={scope === s.id} onClick={() => setScope(s.id)}>
              {s.label}
            </Chip>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Liczba</div>
        <div className="flex flex-wrap gap-2">
          {[10, 20, 'all'].map((c) => (
            <Chip key={c} active={count === c} onClick={() => setCount(c)}>
              {c === 'all' ? 'Wszystkie' : c}
            </Chip>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {available > 0 ? (
          <>
            W wybranym zakresie dostępne: <strong>{available}</strong> {noun}.
          </>
        ) : (
          <>Brak {noun} w wybranym zakresie – baza pytań jest jeszcze uzupełniana lub zakres jest pusty.</>
        )}
      </p>
      <Btn variant="primary" size="lg" icon={Play} className="w-full" disabled={available === 0} onClick={onStart}>
        {startLabel}
      </Btn>
    </div>
  )
}

// Pełna odpowiedź z PDF: akapity; kolejne akapity zaczynające się od „• ” tworzą listę <ul>.
function FullAnswer({ id, query, showTitle = true }) {
  const f = fullOf(id)
  if (!f) return null
  const blocks = []
  for (const para of f.paragraphs) {
    const text = String(para ?? '')
    if (text.startsWith('• ')) {
      const last = blocks[blocks.length - 1]
      if (last && last.type === 'ul') last.items.push(text.slice(2))
      else blocks.push({ type: 'ul', items: [text.slice(2)] })
    } else if (text.trim()) {
      blocks.push({ type: 'p', text })
    }
  }
  return (
    <div className="space-y-3" data-testid="full-answer">
      {showTitle && f.title && (
        <div className="flex items-start gap-2 rounded-2xl bg-indigo-50 px-3 py-2 text-sm font-bold text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-200">
          <BookOpen size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span className="min-w-0 break-words">{f.title}</span>
        </div>
      )}
      {blocks.map((b, i) =>
        b.type === 'ul' ? (
          <ul key={i} className="space-y-1.5">
            {b.items.map((it, j) => (
              <li key={j} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                <span className="min-w-0 break-words">
                  <RichText text={it} query={query} />
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="break-words text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
            <RichText text={b.text} query={query} />
          </p>
        ),
      )}
    </div>
  )
}

// Wersja skrócona z PDF („W PIGUŁCE”): punkty z pogrubionymi słowami kluczowymi.
function ShortAnswer({ id, query }) {
  const f = shortOf(id)
  if (!f) return null
  return (
    <div className="space-y-3" data-testid="short-answer">
      {f.note && (
        <p className="rounded-2xl bg-amber-50 px-3 py-2 text-sm leading-relaxed text-amber-900 dark:bg-amber-500/15 dark:text-amber-100">
          <RichText text={f.note} query={query} />
        </p>
      )}
      <ul className="space-y-2">
        {f.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
            <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span className="min-w-0 break-words">
              <RichText text={b} query={query} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Odpowiedź z PDF z przełącznikiem „W pigułce” / „Pełna odpowiedź” (domyślnie skrót, jeśli istnieje).
function PdfAnswer({ id, query }) {
  const hasS = !!shortOf(id)
  const hasF = !!fullOf(id)
  const [pick, setPick] = useState(null)
  useEffect(() => setPick(null), [id])
  const view = pick ?? (hasS ? 'short' : 'full')
  return (
    <div className="space-y-4">
      {hasS && hasF && (
        <Segmented
          label="Wersja odpowiedzi z PDF"
          value={view}
          onChange={setPick}
          options={[
            { id: 'short', label: 'W pigułce', icon: ListChecks },
            { id: 'full', label: 'Pełna odpowiedź', icon: BookOpen },
          ]}
        />
      )}
      {view === 'short' ? <ShortAnswer id={id} query={query} /> : <FullAnswer id={id} query={query} />}
    </div>
  )
}

// Arkusz wysuwany od dołu (portal do <body>): Esc i tło zamykają, treść przewijana.
function BottomSheet({ open, onClose, label, title, subtitle, children, tall = false }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="sheet"
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={label || title}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 34, stiffness: 340 }}
            className={cx(
              'relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:rounded-3xl',
              tall ? 'h-[90dvh] sm:h-[85dvh] sm:max-w-2xl' : 'max-h-[90dvh]',
            )}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-5 py-3 dark:border-slate-800">
              <div className="min-w-0">
                <h2 className="break-words text-lg font-extrabold leading-tight">{title}</h2>
                {subtitle && <p className="mt-0.5 line-clamp-2 break-words text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
              </div>
              <IconBtn label="Zamknij" icon={X} onClick={onClose} autoFocus />
            </div>
            <div
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5"
              style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

// ==== Header, nawigacja, ustawienia ====

function Header({ dark, onToggleTheme, onOpenSettings }) {
  const { progress } = useApp()
  const p = Math.round(progress.overall * 100)
  return (
    <header
      className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80"
      style={{ height: 'var(--header-h)', paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="mx-auto flex h-full max-w-2xl items-center gap-3 px-4">
        <div className="flex shrink-0 items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30">
            <GraduationCap size={18} aria-hidden="true" />
          </span>
          <span className="text-base font-extrabold tracking-tight">Obrona MGR</span>
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2" title="Postęp ogólny">
          <ProgressBar value={progress.overall} className="h-2.5" />
          <span className="w-10 shrink-0 text-right text-xs font-bold tabular-nums text-slate-600 dark:text-slate-300">
            {p}%
          </span>
        </div>
        <div className="flex shrink-0 items-center">
          <IconBtn
            label={dark ? 'Przełącz na jasny motyw' : 'Przełącz na ciemny motyw'}
            icon={dark ? Sun : Moon}
            onClick={onToggleTheme}
          />
          <IconBtn label="Ustawienia" icon={SettingsIcon} onClick={onOpenSettings} />
        </div>
      </div>
    </header>
  )
}

function BottomNav({ tab, onChange }) {
  return (
    <nav
      aria-label="Główna nawigacja"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90"
      style={{ height: 'var(--nav-h)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="mx-auto grid h-16 max-w-2xl grid-cols-5">
        {TABS.map((t) => {
          const on = t.id === tab
          const Icon = t.icon
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => onChange(t.id)}
              aria-current={on ? 'page' : undefined}
              className={cx(
                'relative flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold transition active:scale-95',
                FOCUS,
                on ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400',
              )}
            >
              <span className="relative grid h-8 w-14 place-items-center">
                {on && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-indigo-100 dark:bg-indigo-500/20"
                    transition={{ type: 'spring', stiffness: 500, damping: 36 }}
                  />
                )}
                <Icon size={21} aria-hidden="true" className="relative" />
              </span>
              {t.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function SettingsSheet({ open, onClose }) {
  const { state, setState } = useApp()
  const [msg, setMsg] = useState(null)
  const [confirmReset, setConfirmReset] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    if (!open) {
      setMsg(null)
      setConfirmReset(false)
    }
  }, [open])

  const setSetting = (patch) => setState((s) => ({ ...s, settings: { ...s.settings, ...patch } }))

  const doExport = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `fiszki-postep-${toDateStr(new Date())}.json`
    document.body.appendChild(a)
    a.click()
    a.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setMsg({ ok: true, text: 'Plik z postępem został pobrany.' })
  }

  const doImport = async (e) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    try {
      const data = JSON.parse(await file.text())
      const known = ['cards', 'exams', 'quiz', 'matcher', 'cloze', 'sprint']
      if (!isPlain(data) || !known.some((k) => k in data)) throw new Error('format')
      const inc = sanitizeState(data)
      setState((s) => mergeStates(s, inc))
      setMsg({
        ok: true,
        text: `Zaimportowano: ${Object.keys(inc.cards).length} kart, ${inc.exams.length} symulacji (scalono z bieżącym postępem).`,
      })
    } catch {
      setMsg({ ok: false, text: 'Nie udało się wczytać pliku – to nie jest poprawny plik z postępem.' })
    }
  }

  const doReset = () => {
    setState((s) => ({ ...defaultState(), settings: s.settings }))
    setConfirmReset(false)
    setMsg({ ok: true, text: 'Postęp został wyzerowany.' })
  }

  const section = 'text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400'

  return (
    <BottomSheet open={open} onClose={onClose} title="Ustawienia" label="Ustawienia">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className={section}>Motyw</div>
          <Segmented
            label="Motyw"
            value={state.settings.theme}
            onChange={(theme) => setSetting({ theme })}
            options={[
              { id: 'system', label: 'System', icon: Monitor },
              { id: 'light', label: 'Jasny', icon: Sun },
              { id: 'dark', label: 'Ciemny', icon: Moon },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className={section}>Czas odpowiedzi w egzaminie</div>
          <Segmented
            label="Czas odpowiedzi"
            value={state.settings.examMinutes}
            onChange={(examMinutes) => setSetting({ examMinutes })}
            options={[
              { id: 2, label: '2 minuty' },
              { id: 3, label: '3 minuty' },
            ]}
          />
        </div>

        <div className="space-y-2">
          <div className={section}>Kopia postępu</div>
          <div className="grid grid-cols-2 gap-2">
            <Btn variant="outline" icon={Download} onClick={doExport}>
              Eksportuj
            </Btn>
            <Btn variant="outline" icon={Upload} onClick={() => fileRef.current?.click()}>
              Importuj
            </Btn>
          </div>
          <input ref={fileRef} type="file" accept="application/json,.json" className="hidden" onChange={doImport} />
        </div>

        <div className="space-y-2">
          <div className={section}>Reset</div>
          {!confirmReset ? (
            <Btn variant="outline" icon={Trash2} className="w-full" onClick={() => setConfirmReset(true)}>
              Resetuj postęp
            </Btn>
          ) : (
            <div className="rounded-2xl border border-rose-300 bg-rose-50 p-3 dark:border-rose-500/40 dark:bg-rose-500/10">
              <p className="mb-3 text-sm font-medium text-rose-800 dark:text-rose-200">
                Na pewno? Usunie to wszystkie oceny fiszek, historię symulacji i statystyki. Operacji nie można cofnąć.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Btn variant="soft" onClick={() => setConfirmReset(false)}>
                  Anuluj
                </Btn>
                <Btn variant="danger" icon={Trash2} onClick={doReset}>
                  Tak, usuń
                </Btn>
              </div>
            </div>
          )}
        </div>

        {msg && (
          <p
            role="status"
            className={cx(
              'rounded-2xl px-3 py-2 text-sm font-medium',
              msg.ok
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300'
                : 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300',
            )}
          >
            {msg.text}
          </p>
        )}

        <p className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Info size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
          Postęp zapisywany jest lokalnie na tym urządzeniu. Pytań w bazie: {ALL_Q.length}.
        </p>
      </div>
    </BottomSheet>
  )
}

// ==== Moduł: Fiszki ====

// Kolejność w sesji: trudne → nowe → w trakcie → opanowane (PLAN.md §6.1).
function makeSession(filter, skip, cards) {
  const boxOf = (id) => cards[id]?.box ?? 0
  const pool = ALL_Q.filter(
    (q) => matchesFilter(q, filter, boxOf) && !(skip && filter !== 'hard' && boxOf(q.id) === 3),
  )
  const groups = { 1: [], 0: [], 2: [], 3: [] }
  for (const q of pool) groups[boxOf(q.id)].push(q.id)
  const queue = [...shuffle(groups[1]), ...groups[0], ...shuffle(groups[2]), ...shuffle(groups[3])]
  return { queue, pos: 0, known: 0, again: 0, retry: [], history: [] }
}

function CardFront({ q, status, active }) {
  const keywords = kwOf(q)
  return (
    <div
      aria-hidden={!active}
      className={cx(
        'absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-indigo-500/10 backface-hidden dark:border-slate-800 dark:bg-slate-900',
        !active && 'pointer-events-none',
      )}
    >
      <div className="flex shrink-0 items-center justify-between gap-2 bg-linear-to-r from-indigo-600 to-violet-600 px-5 py-3 text-white">
        <span className="whitespace-nowrap text-sm font-extrabold uppercase tracking-wide">
          {CATEGORY_LABELS?.[q.category] ?? q.category} · {q.number}
        </span>
        <span className="min-w-0 truncate rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{q.area}</span>
      </div>
      <div className="relative min-h-0 flex-1">
        <div className="h-full space-y-4 overflow-y-auto overscroll-contain p-5">
          <StatusBadge status={status} />
          <h2 className="break-words text-xl font-bold leading-snug sm:text-2xl">{q.title}</h2>
          {q.hint && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3.5 dark:border-amber-500/30 dark:bg-amber-500/10">
              <div className="mb-1 flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-amber-700 dark:text-amber-300">
                <Sparkles size={14} aria-hidden="true" /> Podpowiedź
              </div>
              <p className="break-words text-sm leading-relaxed text-amber-900 dark:text-amber-100">{q.hint}</p>
            </div>
          )}
          {keywords.length > 0 && (
            <div>
              <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Słowa-klucze
              </div>
              <div className="flex flex-wrap gap-2">
                {keywords.map((k) => (
                  <span
                    key={k}
                    className="max-w-full break-words rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-white to-transparent dark:from-slate-900"
        />
      </div>
      <div className="shrink-0 border-t border-slate-100 px-4 py-2 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Stuknij kartę, aby zobaczyć odpowiedź
      </div>
    </div>
  )
}

function CardBack({ q, active, onOpenFull }) {
  return (
    <div
      aria-hidden={!active}
      className={cx(
        'absolute inset-0 flex rotate-y-180 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-indigo-500/10 backface-hidden dark:border-slate-800 dark:bg-slate-900',
        !active && 'pointer-events-none',
      )}
    >
      <div className="flex shrink-0 items-center gap-3 bg-linear-to-r from-violet-600 to-indigo-600 px-5 py-3 text-white">
        <span className="whitespace-nowrap text-sm font-extrabold uppercase tracking-wide">
          Odpowiedź · {q.id}
        </span>
        <span className="min-w-0 flex-1 truncate text-right text-xs font-medium text-white/80">{q.area}</span>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5">
        <AnswerSections q={q} />
        {hasPdf(q.id) && (
          <button
            type="button"
            data-testid="open-full"
            // Capture + stopPropagation: klik nie odwraca karty i nie uruchamia przeciągania (framer słucha pointerdown na karcie).
            onPointerDownCapture={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              onOpenFull?.()
            }}
            className={cx(
              'mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 transition hover:bg-indigo-100 active:scale-95 dark:border-indigo-500/40 dark:bg-indigo-500/15 dark:text-indigo-200 dark:hover:bg-indigo-500/25',
              FOCUS,
            )}
          >
            <BookOpen size={18} aria-hidden="true" />
            Odpowiedź z PDF: w pigułce i pełna
          </button>
        )}
        <div className="h-2" />
      </div>
    </div>
  )
}

const SwipeCard = forwardRef(function SwipeCard({ q, status, flipped, onFlip, onRate, onOpenFull }, ref) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-12, 12])
  const likeOpacity = useTransform(x, [25, 120], [0, 1])
  const nopeOpacity = useTransform(x, [-120, -25], [1, 0])
  const dragged = useRef(false)
  const flying = useRef(false)

  const fling = useCallback(
    (dir) => {
      if (flying.current) return
      flying.current = true
      vibrate(12)
      animate(x, dir * window.innerWidth * 1.2, {
        duration: 0.26,
        ease: [0.4, 0, 1, 1],
        onComplete: () => onRate(dir > 0),
      })
    },
    [x, onRate],
  )

  useImperativeHandle(ref, () => ({ fling, isFlying: () => flying.current }), [fling])

  const handleDragEnd = (_e, info) => {
    // Tap vs drag: flaga resetowana po zakończeniu przeciągania (po ewentualnym „click”).
    setTimeout(() => {
      dragged.current = false
    }, 60)
    if (flying.current) return
    const { offset, velocity } = info
    const farEnough = Math.abs(offset.x) > 110
    const fastEnough = Math.abs(velocity.x) > 500 && Math.abs(offset.x) > 20
    if (farEnough || fastEnough) {
      fling((farEnough ? offset.x : velocity.x) > 0 ? 1 : -1)
    } else {
      animate(x, 0, { type: 'spring', stiffness: 520, damping: 34 })
    }
  }

  const handleClick = () => {
    if (dragged.current || flying.current) return
    onFlip()
  }

  return (
    <motion.div
      drag="x"
      dragDirectionLock
      dragElastic={0.7}
      dragMomentum={false}
      style={{ x, rotate, touchAction: 'pan-y' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      onDragStart={() => {
        dragged.current = true
      }}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      className="absolute inset-0 z-10 cursor-grab select-none active:cursor-grabbing"
      data-testid="swipe-card"
    >
      <div className="perspective-1000 h-full w-full">
        <motion.div
          className="preserve-3d relative h-full w-full"
          initial={false}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0.15, 0.2, 1] }}
          data-flipped={flipped ? 'true' : 'false'}
        >
          <CardFront q={q} status={status} active={!flipped} />
          <CardBack q={q} active={flipped} onOpenFull={onOpenFull} />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: likeOpacity }}
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl bg-emerald-500/20 ring-4 ring-inset ring-emerald-500"
        aria-hidden="true"
      >
        <span className="absolute left-5 top-16 -rotate-12 rounded-xl border-4 border-emerald-500 bg-white/85 px-3 py-1 text-2xl font-black tracking-wider text-emerald-600 dark:bg-slate-900/80 dark:text-emerald-400">
          UMIEM
        </span>
      </motion.div>
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="pointer-events-none absolute inset-0 z-20 rounded-3xl bg-rose-500/20 ring-4 ring-inset ring-rose-500"
        aria-hidden="true"
      >
        <span className="absolute right-5 top-16 rotate-12 rounded-xl border-4 border-rose-500 bg-white/85 px-3 py-1 text-2xl font-black tracking-wider text-rose-600 dark:bg-slate-900/80 dark:text-rose-400">
          POWTÓRZ
        </span>
      </motion.div>
    </motion.div>
  )
})

function ActionBtn({ tone, icon: Icon, label, className, ...props }) {
  const tones = {
    rose: 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400',
    emerald: 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400',
    slate:
      'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
    ghost: 'text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800',
  }
  return (
    <button
      type="button"
      className={cx(
        'flex h-14 min-w-0 flex-col items-center justify-center gap-0.5 rounded-2xl px-1 text-[11px] font-bold leading-tight tracking-tight transition active:scale-95 disabled:pointer-events-none disabled:opacity-40',
        FOCUS,
        tones[tone],
        className,
      )}
      {...props}
    >
      <Icon size={20} aria-hidden="true" />
      <span className="max-w-full truncate">{label}</span>
    </button>
  )
}

function Cards({ active, filter, setFilter, epoch }) {
  const { state, setState, getBox, statusOf, rate, setCard } = useApp()
  const skip = state.settings.skipMastered
  const [localEpoch, setLocalEpoch] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [fullOpen, setFullOpen] = useState(false)
  const cardRef = useRef(null)

  // Nowa sesja startuje przy zmianie filtra / przełącznika „pomiń opanowane” / restarcie.
  const sessKey = `${filter}|${skip}|${epoch}|${localEpoch}`
  const [sess, setSess] = useState(() => ({ key: sessKey, ...makeSession(filter, skip, state.cards) }))
  if (sess.key !== sessKey) setSess({ key: sessKey, ...makeSession(filter, skip, state.cards) })

  const currentId = sess.queue[sess.pos]
  const current = currentId ? Q_BY_ID[currentId] || ALL_Q.find((q) => q.id === currentId) : null
  const remaining = sess.queue.length - sess.pos
  const finished = sess.queue.length > 0 && remaining <= 0
  const empty = sess.queue.length === 0
  const hardCount = ALL_Q.filter((q) => getBox(q.id) === 1).length

  const commit = (known) => {
    if (!currentId) return
    const prev = state.cards[currentId]
    const queue = [...sess.queue]
    const retry = sess.retry.filter((x) => x !== currentId)
    // „Pudełko błędów”: odrzucona karta wraca 3 pozycje dalej (lub na koniec kolejki).
    if (!known) {
      retry.push(currentId)
      queue.splice(Math.min(sess.pos + 4, queue.length), 0, currentId)
    }
    setSess({
      ...sess,
      queue,
      pos: sess.pos + 1,
      known: sess.known + (known ? 1 : 0),
      again: sess.again + (known ? 0 : 1),
      retry,
      history: [
        ...sess.history,
        { id: currentId, prev, snapshot: { queue: sess.queue, pos: sess.pos, known: sess.known, again: sess.again, retry: sess.retry } },
      ],
    })
    rate(currentId, known)
    setFlipped(false)
  }
  const commitRef = useRef(commit)
  commitRef.current = commit
  const onRate = useCallback((known) => commitRef.current(known), [])

  const undo = () => {
    const h = sess.history[sess.history.length - 1]
    if (!h || cardRef.current?.isFlying()) return
    setSess({ ...sess, ...h.snapshot, history: sess.history.slice(0, -1) })
    setCard(h.id, h.prev)
    setFlipped(false)
  }

  // Klawiatura – tylko gdy aktywna zakładka Fiszki i fokus nie jest w polu tekstowym.
  useEffect(() => {
    if (!active || fullOpen) return
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const el = document.activeElement
      const tag = el?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el?.isContentEditable) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault()
        if (!e.repeat) cardRef.current?.fling(e.key === 'ArrowRight' ? 1 : -1)
      } else if (e.key === ' ' || e.key === 'Enter') {
        // Przycisk sfokusowany klawiaturą zachowuje natywną aktywację.
        let kbFocus = false
        try {
          kbFocus = !!el && el !== document.body && el.matches(':focus-visible')
        } catch {
          kbFocus = false
        }
        if (kbFocus) return
        e.preventDefault()
        if (el && el !== document.body) el.blur?.()
        if (!e.repeat) setFlipped((f) => !f)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, fullOpen])

  if (!ALL_Q.length) {
    return (
      <div className="py-6">
        <EmptyState icon={Layers} title="Baza pytań jest pusta">
          Fiszki pojawią się, gdy w plikach danych pojawią się pytania.
        </EmptyState>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col gap-2 py-3"
      style={{ height: 'calc(100dvh - var(--header-h) - var(--nav-h))' }}
    >
      <div className="no-scrollbar -mx-4 flex shrink-0 gap-2 overflow-x-auto px-4 py-0.5" role="group" aria-label="Filtry fiszek">
        {FILTERS.map((f) => (
          <Chip key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}
            {f.id === 'hard' && hardCount > 0 && (
              <span
                className={cx(
                  'rounded-full px-1.5 text-xs',
                  filter === 'hard' ? 'bg-white/25' : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300',
                )}
              >
                {hardCount}
              </span>
            )}
          </Chip>
        ))}
      </div>

      <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-3">
        <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300" aria-live="polite">
          <span data-testid="stat-remaining">
            Pozostało <b className="text-[13px] text-slate-900 dark:text-white">{Math.max(remaining, 0)}</b>
          </span>
          <span className="text-emerald-600 dark:text-emerald-400" data-testid="stat-known">
            Umiem <b className="text-[13px]">{sess.known}</b>
          </span>
          <span className="text-rose-600 dark:text-rose-400" data-testid="stat-retry">
            Do powtórki <b className="text-[13px]">{sess.retry.length}</b>
          </span>
        </div>
        <Switch
          checked={skip}
          onChange={(v) => setState((s) => ({ ...s, settings: { ...s.settings, skipMastered: v } }))}
          label="Pomiń opanowane"
          className="ml-auto !text-[11px] !gap-1.5"
        />
      </div>

      <div className="relative min-h-0 flex-1">
        {empty ? (
          <div className="flex h-full items-center">
            <div className="w-full">
              <EmptyState
                icon={filter === 'hard' ? Trophy : Layers}
                title={filter === 'hard' ? 'Brak trudnych kart' : 'Brak kart w tym filtrze'}
                action={
                  <Btn variant="primary" onClick={() => setFilter('all')}>
                    Pokaż wszystkie
                  </Btn>
                }
              >
                {filter === 'hard'
                  ? 'Nic nie oznaczono jako trudne – świetnie! Wróć tu, gdy któraś karta sprawi kłopot.'
                  : skip
                    ? 'Wszystkie karty z tego zakresu są już opanowane (albo baza jest jeszcze uzupełniana). Wyłącz „Pomiń opanowane”.'
                    : 'W tym zakresie nie ma jeszcze pytań (baza jest uzupełniana).'}
              </EmptyState>
            </div>
          </div>
        ) : finished ? (
          <div className="flex h-full items-center">
            <Panel className="w-full text-center">
              <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
                <Trophy size={32} aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-extrabold">Sesja zakończona!</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Umiem: <b className="text-emerald-600 dark:text-emerald-400">{sess.known}</b> · powtórki:{' '}
                <b className="text-rose-600 dark:text-rose-400">{sess.again}</b>
              </p>
              <div className="mt-5 grid gap-2">
                <Btn variant="primary" size="lg" icon={RotateCcw} onClick={() => setLocalEpoch((n) => n + 1)}>
                  Zacznij od nowa
                </Btn>
                {hardCount > 0 && filter !== 'hard' && (
                  <Btn variant="danger" icon={RefreshCw} onClick={() => setFilter('hard')}>
                    Powtórz trudne ({hardCount})
                  </Btn>
                )}
                {sess.history.length > 0 && (
                  <Btn variant="ghost" icon={Undo2} onClick={undo}>
                    Cofnij ostatnią ocenę
                  </Btn>
                )}
              </div>
            </Panel>
          </div>
        ) : (
          current && (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-x-3 -bottom-0 top-3 rounded-3xl border border-slate-200 bg-white/70 shadow-md dark:border-slate-800 dark:bg-slate-900/60"
              />
              <SwipeCard
                key={`${sess.key}-${sess.pos}-${currentId}`}
                ref={cardRef}
                q={current}
                status={statusOf(currentId)}
                flipped={flipped}
                onFlip={() => setFlipped((f) => !f)}
                onRate={onRate}
                onOpenFull={() => setFullOpen(true)}
              />
            </>
          )
        )}
      </div>

      <div className="grid shrink-0 grid-cols-[3.25rem_1fr_4rem_1fr] gap-2">
        <ActionBtn
          tone="ghost"
          icon={Undo2}
          label="Cofnij"
          aria-label="Cofnij ostatnią ocenę"
          onClick={undo}
          disabled={sess.history.length === 0}
        />
        <ActionBtn
          tone="rose"
          icon={RotateCcw}
          label="Jeszcze powtórz"
          aria-label="Jeszcze powtórz (strzałka w lewo)"
          onClick={() => cardRef.current?.fling(-1)}
          disabled={!current || finished}
        />
        <ActionBtn
          tone="slate"
          icon={RefreshCw}
          label="Obróć"
          aria-label="Obróć kartę (spacja)"
          onClick={() => setFlipped((f) => !f)}
          disabled={!current || finished}
        />
        <ActionBtn
          tone="emerald"
          icon={Check}
          label="Umiem"
          aria-label="Umiem (strzałka w prawo)"
          onClick={() => cardRef.current?.fling(1)}
          disabled={!current || finished}
        />
      </div>

      <BottomSheet
        open={fullOpen && !!current && hasPdf(currentId)}
        onClose={() => setFullOpen(false)}
        title={current ? `${current.id} · odpowiedź z PDF` : 'Odpowiedź z PDF'}
        subtitle={current?.title}
        label="Odpowiedź z PDF"
        tall
      >
        {current && <PdfAnswer id={current.id} />}
      </BottomSheet>
    </div>
  )
}

// ==== Moduł: Egzamin ====

// Sygnał dźwiękowy bez plików (Web Audio). Kontekst tworzymy/odblokowujemy przy kliknięciu „Start”.
function useBeeper() {
  const ctxRef = useRef(null)
  const unlock = useCallback(() => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext
      if (!AC) return
      if (!ctxRef.current) ctxRef.current = new AC()
      if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    } catch {
      /* brak audio */
    }
  }, [])
  const beep = useCallback((times = 3) => {
    const ctx = ctxRef.current
    if (!ctx) return
    try {
      const t0 = ctx.currentTime + 0.02
      for (let i = 0; i < times; i++) {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        const t = t0 + i * 0.3
        osc.type = 'sine'
        osc.frequency.value = i === times - 1 ? 1175 : 880
        gain.gain.setValueAtTime(0.0001, t)
        gain.gain.exponentialRampToValueAtTime(0.4, t + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22)
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.start(t)
        osc.stop(t + 0.24)
      }
    } catch {
      /* ignoruj */
    }
  }, [])
  return { unlock, beep }
}

// Okrągły wskaźnik czasu (SVG, stroke-dasharray).
function TimerRing({ remaining, total, paused }) {
  const R = 78
  const C = 2 * Math.PI * R
  const frac = total > 0 ? clamp(remaining / total, 0, 1) : 0
  const secs = Math.ceil(remaining / 1000)
  const color = secs <= 10 ? 'text-rose-500' : secs <= 30 ? 'text-amber-500' : 'text-indigo-500'
  return (
    <div
      className="relative mx-auto h-52 w-52"
      role="timer"
      aria-label={`Pozostało ${Math.floor(secs / 60)} minut ${secs % 60} sekund`}
    >
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="90" cy="90" r={R} fill="none" strokeWidth="12" className="stroke-slate-200 dark:stroke-slate-800" />
        <circle
          cx="90"
          cy="90"
          r={R}
          fill="none"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - frac)}
          className={cx('stroke-current transition-colors', color)}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-5xl font-extrabold tabular-nums" data-testid="timer-text">
            {pad2(Math.floor(secs / 60))}:{pad2(secs % 60)}
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {paused ? 'Pauza' : 'Pozostało'}
          </div>
        </div>
      </div>
    </div>
  )
}

function Skeleton4() {
  const steps = ['Definicja', 'Podział', 'Przykład IT', 'Wniosek']
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Szkielet odpowiedzi">
      {steps.map((s, i) => (
        <Fragment key={s}>
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">
            {s}
          </span>
          {i < steps.length - 1 && <ArrowRight size={14} className="text-slate-400" aria-hidden="true" />}
        </Fragment>
      ))}
    </div>
  )
}

const critCount = (sc) => CRITERIA.filter((c) => sc?.[c.key]).length
const examPercent = (e) => {
  const n = e.ids.length
  return n ? Math.round((e.ids.reduce((s, id) => s + critCount(e.scores[id]), 0) / (n * 4)) * 100) : 0
}
const scoreTone = (p) =>
  p >= 80
    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
    : p >= 50
      ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'
      : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'

function QuestionTag({ q }) {
  return (
    <div className="mb-2 flex flex-wrap items-center gap-2">
      <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
        {CATEGORY_LABELS?.[q.category] ?? q.category} · {q.number}
      </span>
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {q.area}
      </span>
    </div>
  )
}

function Simulation() {
  const { state, setState, getBox } = useApp()
  const { unlock, beep } = useBeeper()
  const [opts, setOpts] = useState({ weak: true, skeleton: true })
  const [run, setRun] = useState(null)
  const [now, setNow] = useState(() => Date.now())
  const [showModel, setShowModel] = useState(false)

  const generals = useMemo(() => ALL_Q.filter((q) => q.category === 'ogolne'), [])
  const specifics = useMemo(() => ALL_Q.filter((q) => q.category === 'kierunkowe'), [])
  const canDraw = generals.length >= 1 && specifics.length >= 2
  const minutes = state.settings.examMinutes

  const draw = () => {
    const weights = { 1: 3, 0: 2, 2: 1.5, 3: 1 }
    const w = (q) => (opts.weak ? weights[getBox(q.id)] : 1)
    const picked = [...weightedSample(generals, 1, w), ...weightedSample(specifics, 2, w)]
    setShowModel(false)
    setRun({
      ids: picked.map((q) => q.id),
      idx: 0,
      step: 'ready',
      minutes,
      endAt: 0,
      left: minutes * 60000,
      scores: {},
      timedOut: false,
    })
  }

  // Timer odporny na uśpienie karty: liczymy od endAt (Date.now), a nie od liczby tyknięć.
  const step = run?.step
  const endAt = run?.endAt
  useEffect(() => {
    if (step !== 'running') return
    const tick = () => {
      const t = Date.now()
      setNow(t)
      if (t >= endAt) {
        clearInterval(id)
        beep()
        vibrate([200, 100, 200])
        setRun((r) => (r && r.step === 'running' ? { ...r, step: 'check', timedOut: true } : r))
      }
    }
    const id = setInterval(tick, 250)
    document.addEventListener('visibilitychange', tick)
    tick()
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', tick)
    }
  }, [step, endAt, beep])

  const start = () => {
    unlock()
    const t = Date.now()
    setNow(t)
    setRun((r) => ({ ...r, step: 'running', endAt: t + r.minutes * 60000, timedOut: false }))
  }
  const pause = () => setRun((r) => ({ ...r, step: 'paused', left: Math.max(0, r.endAt - Date.now()) }))
  const resume = () => {
    const t = Date.now()
    setNow(t)
    setRun((r) => ({ ...r, step: 'running', endAt: t + r.left }))
  }
  const stopEarly = () => setRun((r) => ({ ...r, step: 'check', timedOut: false }))
  const toggleCrit = (id, key) =>
    setRun((r) => ({ ...r, scores: { ...r.scores, [id]: { ...r.scores[id], [key]: !r.scores[id]?.[key] } } }))

  const finishSet = () => {
    const scores = {}
    for (const id of run.ids) {
      scores[id] = Object.fromEntries(CRITERIA.map((c) => [c.key, !!run.scores[id]?.[c.key]]))
    }
    const entry = { ts: Date.now(), ids: run.ids, minutes: run.minutes, scores }
    setState((s) => {
      const cards = { ...s.cards }
      // Wynik < 3/4 → karta trafia do pudełka „trudne”.
      for (const id of run.ids) {
        if (critCount(scores[id]) < 3) {
          const cur = cards[id] || { box: 0, right: 0, wrong: 0, last: 0 }
          cards[id] = { ...cur, box: 1, last: Date.now() }
        }
      }
      return { ...s, cards, exams: [entry, ...s.exams].slice(0, 30) }
    })
    setRun((r) => ({ ...r, step: 'summary' }))
  }

  const next = () => {
    setShowModel(false)
    if (run.idx + 1 < run.ids.length) {
      setRun((r) => ({ ...r, idx: r.idx + 1, step: 'ready', left: r.minutes * 60000, timedOut: false }))
    } else {
      finishSet()
    }
  }

  const abandon = () => {
    if (window.confirm('Przerwać zestaw? Wyniki tej symulacji nie zostaną zapisane.')) setRun(null)
  }

  // ---- widok: konfiguracja ----
  if (!run) {
    const history = state.exams.slice(0, 10)
    return (
      <div className="space-y-4">
        <Panel>
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
              <GraduationCap size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold leading-tight">Symulacja ustna</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">1 pytanie ogólne + 2 kierunkowe</p>
            </div>
          </div>
          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Odpowiadasz na głos na czas, a potem oceniasz się według schematu: definicja → podział → przykład z IT →
            wniosek. Wynik poniżej 3/4 wrzuca pytanie do „trudnych” fiszek.
          </p>
          <div className="space-y-3">
            <div>
              <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Czas na odpowiedź
              </div>
              <Segmented
                label="Czas na odpowiedź"
                value={minutes}
                onChange={(examMinutes) => setState((s) => ({ ...s, settings: { ...s.settings, examMinutes } }))}
                options={[
                  { id: 2, label: '2 minuty' },
                  { id: 3, label: '3 minuty' },
                ]}
              />
            </div>
            <Switch
              checked={opts.weak}
              onChange={(weak) => setOpts((o) => ({ ...o, weak }))}
              label="Preferuj słabsze pytania (trudne ×3, nowe ×2)"
            />
            <Switch
              checked={opts.skeleton}
              onChange={(skeleton) => setOpts((o) => ({ ...o, skeleton }))}
              label="Pokazuj szkielet odpowiedzi podczas liczenia"
            />
          </div>
          {!canDraw && (
            <p className="mt-4 rounded-2xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
              Do losowania zestawu potrzeba co najmniej 1 pytania ogólnego i 2 kierunkowych. W bazie jest teraz:{' '}
              {generals.length} ogólnych i {specifics.length} kierunkowych – baza jest jeszcze uzupełniana.
            </p>
          )}
          <Btn variant="primary" size="lg" icon={Shuffle} className="mt-4 w-full" disabled={!canDraw} onClick={draw}>
            Losuj zestaw
          </Btn>
        </Panel>

        <Panel>
          <h3 className="mb-3 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            <History size={16} aria-hidden="true" /> Ostatnie symulacje
          </h3>
          {history.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">Brak zapisanych symulacji – wylosuj pierwszy zestaw.</p>
          ) : (
            <ul className="divide-y divide-slate-100 dark:divide-slate-800">
              {history.map((e) => {
                const p = examPercent(e)
                return (
                  <li key={`${e.ts}-${e.ids.join('')}`} className="flex items-center justify-between gap-3 py-2.5">
                    <div className="min-w-0">
                      <div className="text-xs text-slate-500 dark:text-slate-400">{fmtDateTime(e.ts)} · {e.minutes} min</div>
                      <div className="truncate text-sm font-semibold">{e.ids.join(' · ')}</div>
                    </div>
                    <span className={cx('shrink-0 rounded-full px-3 py-1 text-sm font-extrabold tabular-nums', scoreTone(p))}>
                      {p}%
                    </span>
                  </li>
                )
              })}
            </ul>
          )}
        </Panel>
      </div>
    )
  }

  // ---- widok: podsumowanie ----
  if (run.step === 'summary') {
    const total = examPercent({ ids: run.ids, scores: run.scores })
    return (
      <div className="space-y-4">
        <Panel className="text-center">
          <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
            <Trophy size={32} aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-extrabold">Zestaw zakończony</h2>
          <div className={cx('mx-auto mt-3 inline-block rounded-full px-5 py-1.5 text-3xl font-extrabold tabular-nums', scoreTone(total))}>
            {total}%
          </div>
        </Panel>
        {run.ids.map((id) => {
          const q = Q_BY_ID[id]
          if (!q) return null
          const sc = run.scores[id]
          const n = critCount(sc)
          return (
            <Panel key={id}>
              <QuestionTag q={q} />
              <h3 className="mb-3 break-words text-base font-bold leading-snug">{q.title}</h3>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Wynik</span>
                <span className={cx('rounded-full px-3 py-0.5 text-sm font-extrabold', scoreTone(n * 25))}>{n}/4</span>
              </div>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {CRITERIA.map((c) => (
                  <li key={c.key} className="flex items-center gap-2 text-sm">
                    {sc?.[c.key] ? (
                      <CircleCheck size={18} className="shrink-0 text-emerald-500" aria-hidden="true" />
                    ) : (
                      <CircleX size={18} className="shrink-0 text-rose-500" aria-hidden="true" />
                    )}
                    <span className="text-slate-700 dark:text-slate-300">{c.label.replace('Czy ', '').replace('?', '')}</span>
                  </li>
                ))}
              </ul>
              {n < 3 && (
                <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-xs font-medium text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">
                  Karta trafiła do pudełka „trudne”.
                </p>
              )}
            </Panel>
          )
        })}
        <Btn variant="primary" size="lg" icon={Shuffle} className="w-full" onClick={() => setRun(null)}>
          Nowy zestaw
        </Btn>
      </div>
    )
  }

  // ---- widok: pytanie ----
  const q = Q_BY_ID[run.ids[run.idx]]
  const total = run.minutes * 60000
  const remaining = run.step === 'running' ? Math.max(0, run.endAt - now) : run.step === 'paused' ? run.left : total
  const sc = run.scores[q.id] || {}
  const isLast = run.idx + 1 >= run.ids.length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 px-1">
        <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
          Pytanie {run.idx + 1} z {run.ids.length}
        </span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {run.ids.map((id, i) => (
            <span
              key={id}
              className={cx(
                'h-2 rounded-full transition-all',
                i === run.idx ? 'w-8 bg-indigo-600' : i < run.idx ? 'w-4 bg-emerald-500' : 'w-4 bg-slate-300 dark:bg-slate-700',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={abandon}
          className={cx('rounded-full px-2 py-1 text-xs font-semibold text-slate-500 hover:text-rose-600 dark:text-slate-400', FOCUS)}
        >
          Przerwij
        </button>
      </div>

      <Panel>
        <QuestionTag q={q} />
        <h2 className="break-words text-xl font-bold leading-snug sm:text-2xl">{q.title}</h2>
      </Panel>

      {run.step === 'ready' && (
        <Panel className="space-y-4 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Masz <b>{run.minutes} min</b> na odpowiedź. Kliknij „Start” i mów na głos.
          </p>
          {opts.skeleton && <Skeleton4 />}
          <Btn variant="primary" size="lg" icon={Play} className="w-full" onClick={start}>
            Start
          </Btn>
        </Panel>
      )}

      {(run.step === 'running' || run.step === 'paused') && (
        <Panel className="space-y-4">
          <TimerRing remaining={remaining} total={total} paused={run.step === 'paused'} />
          {opts.skeleton && <Skeleton4 />}
          <div className="grid grid-cols-2 gap-2">
            {run.step === 'running' ? (
              <Btn variant="soft" icon={Pause} onClick={pause}>
                Pauza
              </Btn>
            ) : (
              <Btn variant="primary" icon={Play} onClick={resume}>
                Wznów
              </Btn>
            )}
            <Btn variant="outline" icon={Square} onClick={stopEarly}>
              Zakończ wcześniej
            </Btn>
          </div>
        </Panel>
      )}

      {run.step === 'check' && (
        <Panel className="space-y-4">
          <div>
            <h3 className="text-lg font-extrabold">{run.timedOut ? 'Czas minął!' : 'Odpowiedź zakończona'}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Oceń szczerze – co faktycznie padło w odpowiedzi?</p>
          </div>
          <div className="space-y-2" role="group" aria-label="Kryteria oceny">
            {CRITERIA.map((c) => {
              const on = !!sc[c.key]
              return (
                <button
                  key={c.key}
                  type="button"
                  role="checkbox"
                  aria-checked={on}
                  onClick={() => toggleCrit(q.id, c.key)}
                  className={cx(
                    'flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-3 py-2 text-left transition active:scale-[0.98]',
                    FOCUS,
                    on
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10'
                      : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900',
                  )}
                >
                  <span
                    className={cx(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full',
                      on ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500',
                    )}
                  >
                    <Check size={18} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] font-semibold">{c.label}</span>
                </button>
              )
            })}
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-2.5 dark:bg-slate-800/60">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Wynik pytania</span>
            <span className={cx('rounded-full px-3 py-0.5 text-sm font-extrabold', scoreTone(critCount(sc) * 25))}>
              {critCount(sc)}/4
            </span>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowModel((v) => !v)}
              aria-expanded={showModel}
              className={cx(
                'flex w-full items-center justify-between rounded-2xl bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200',
                FOCUS,
              )}
            >
              Modelowa odpowiedź
              <ChevronDown size={18} className={cx('transition-transform', showModel && 'rotate-180')} aria-hidden="true" />
            </button>
            <Collapse open={showModel}>
              <div className="pt-4">
                <AnswerSections q={q} />
              </div>
            </Collapse>
          </div>
          <Btn variant="primary" size="lg" icon={isLast ? Trophy : ArrowRight} className="w-full" onClick={next}>
            {isLast ? 'Zakończ zestaw' : 'Następne pytanie'}
          </Btn>
        </Panel>
      )}
    </div>
  )
}

function QuizAbc() {
  const { state, setState, nav } = useApp()
  const [scope, setScope] = useState('all')
  const [count, setCount] = useState(10)
  const [qz, setQz] = useState(null)

  const pool = useMemo(
    () =>
      ALL_Q.filter((q) => matchesFilter(q, scope, () => 0)).flatMap((q) =>
        quizOf(q).map((item) => ({ qid: q.id, item })),
      ),
    [scope],
  )

  const startQuiz = () => {
    const picked = shuffle(pool).slice(0, count === 'all' ? pool.length : count)
    setQz({
      items: picked.map(({ qid, item }) => ({
        qid,
        q: item.q,
        explain: item.explain,
        // Tasowanie opcji z przeliczeniem indeksu poprawnej odpowiedzi (flaga ok przy każdej opcji).
        opts: shuffle(item.options.map((text, idx) => ({ text, ok: idx === item.correct }))),
      })),
      idx: 0,
      picked: null,
      answers: [],
      done: false,
    })
  }

  const pick = (i) => {
    if (!qz || qz.picked !== null) return
    const it = qz.items[qz.idx]
    const ok = it.opts[i].ok
    setQz({ ...qz, picked: i, answers: [...qz.answers, { ...it, chosen: i, ok }] })
    setState((s) => ({
      ...s,
      quiz: { answered: s.quiz.answered + 1, correct: s.quiz.correct + (ok ? 1 : 0) },
    }))
  }

  const nextQ = () =>
    setQz(qz.idx + 1 < qz.items.length ? { ...qz, idx: qz.idx + 1, picked: null } : { ...qz, done: true })

  const globalPct = state.quiz.answered ? Math.round((state.quiz.correct / state.quiz.answered) * 100) : 0

  if (!qz) {
    return (
      <div className="space-y-4">
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <ListChecks size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold leading-tight">Quiz ABC</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">Pytania zamknięte sprawdzające detale</p>
            </div>
          </div>
          <SessionConfig
            scope={scope}
            setScope={setScope}
            count={count}
            setCount={setCount}
            available={pool.length}
            noun="pytań quizowych"
            onStart={startQuiz}
            startLabel="Start quizu"
          />
        </Panel>
        <Panel className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Statystyki globalne</div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Odpowiedzi: <b>{state.quiz.answered}</b> · poprawne: <b>{state.quiz.correct}</b>
            </div>
          </div>
          <span className={cx('rounded-full px-3 py-1 text-lg font-extrabold tabular-nums', state.quiz.answered ? scoreTone(globalPct) : scoreTone(0))}>
            {globalPct}%
          </span>
        </Panel>
      </div>
    )
  }

  if (qz.done) {
    const good = qz.answers.filter((a) => a.ok).length
    const p = Math.round((good / qz.answers.length) * 100)
    const wrong = qz.answers.filter((a) => !a.ok)
    return (
      <div className="space-y-4">
        <Panel className="text-center">
          <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
            <Trophy size={32} aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-extrabold">Quiz zakończony</h2>
          <p className="mt-1 text-slate-600 dark:text-slate-400">
            {good} z {qz.answers.length} poprawnie
          </p>
          <div className={cx('mx-auto mt-3 inline-block rounded-full px-5 py-1.5 text-3xl font-extrabold tabular-nums', scoreTone(p))}>
            {p}%
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Btn variant="primary" icon={RotateCcw} onClick={startQuiz}>
              Jeszcze raz
            </Btn>
            <Btn variant="outline" onClick={() => setQz(null)}>
              Zmień zakres
            </Btn>
          </div>
        </Panel>
        {wrong.length > 0 && (
          <div className="space-y-3">
            <h3 className="px-1 text-sm font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Do powtórki ({wrong.length})
            </h3>
            {wrong.map((a, i) => (
              <Panel key={i} className="space-y-2">
                <p className="break-words text-[15px] font-bold leading-snug">{a.q}</p>
                <p className="break-words rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-800 dark:bg-rose-500/10 dark:text-rose-200">
                  Twoja odpowiedź: {a.opts[a.chosen].text}
                </p>
                <p className="break-words rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200">
                  Poprawna: {a.opts.find((o) => o.ok)?.text}
                </p>
                {a.explain && <p className="break-words text-sm text-slate-600 dark:text-slate-400">{a.explain}</p>}
                <Btn variant="soft" size="sm" icon={BookOpen} onClick={() => nav.goBase(a.qid)}>
                  Otwórz {a.qid} w Kompendium
                </Btn>
              </Panel>
            ))}
          </div>
        )}
      </div>
    )
  }

  const it = qz.items[qz.idx]
  const answered = qz.picked !== null
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  return (
    <div className="space-y-4">
      <div className="px-1">
        <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
          <span>
            Pytanie {qz.idx + 1} z {qz.items.length}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{it.qid}</span>
        </div>
        <ProgressBar value={(qz.idx + (answered ? 1 : 0)) / qz.items.length} />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={qz.idx}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.16 }}
          className="space-y-3"
        >
          <Panel>
            <h2 className="break-words text-lg font-bold leading-snug sm:text-xl">{it.q}</h2>
          </Panel>
          <div className="space-y-2.5" role="group" aria-label="Odpowiedzi">
            {it.opts.map((o, i) => {
              const chosen = qz.picked === i
              let tone = 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-500'
              if (answered) {
                if (o.ok) tone = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10'
                else if (chosen) tone = 'border-rose-500 bg-rose-50 dark:bg-rose-500/10'
                else tone = 'border-slate-200 bg-white opacity-60 dark:border-slate-800 dark:bg-slate-900'
              }
              return (
                <button
                  key={i}
                  type="button"
                  disabled={answered}
                  onClick={() => pick(i)}
                  data-correct={o.ok ? 'true' : 'false'}
                  className={cx(
                    'flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-3 py-2.5 text-left transition active:scale-[0.98] disabled:cursor-default',
                    FOCUS,
                    tone,
                  )}
                >
                  <span
                    className={cx(
                      'grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-extrabold',
                      answered && o.ok
                        ? 'bg-emerald-500 text-white'
                        : answered && chosen
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
                    )}
                  >
                    {answered && o.ok ? <Check size={18} aria-hidden="true" /> : answered && chosen ? <X size={18} aria-hidden="true" /> : letters[i]}
                  </span>
                  <span className="min-w-0 break-words text-[15px] font-medium leading-snug">{o.text}</span>
                </button>
              )
            })}
          </div>
          {answered && (
            <div
              className={cx(
                'rounded-2xl p-4 text-sm leading-relaxed',
                it.opts[qz.picked].ok
                  ? 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-100'
                  : 'bg-rose-100 text-rose-900 dark:bg-rose-500/15 dark:text-rose-100',
              )}
              role="status"
            >
              <div className="mb-1 font-extrabold">{it.opts[qz.picked].ok ? 'Dobrze!' : 'Niestety nie.'}</div>
              {it.explain}
            </div>
          )}
          {answered && (
            <Btn variant="primary" size="lg" icon={ArrowRight} className="w-full" onClick={nextQ}>
              {qz.idx + 1 < qz.items.length ? 'Dalej' : 'Zobacz wynik'}
            </Btn>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function Exam() {
  const [mode, setMode] = useState('sim')
  return (
    <div className="space-y-4 py-4">
      <Segmented
        label="Tryb egzaminu"
        value={mode}
        onChange={setMode}
        options={[
          { id: 'sim', label: 'Symulacja ustna', icon: GraduationCap },
          { id: 'quiz', label: 'Quiz ABC', icon: ListChecks },
        ]}
      />
      {/* Oba tryby pozostają zamontowane, żeby przełączenie nie przerywało timera ani quizu. */}
      <div className={mode === 'sim' ? '' : 'hidden'}>
        <Simulation />
      </div>
      <div className={mode === 'quiz' ? '' : 'hidden'}>
        <QuizAbc />
      </div>
    </div>
  )
}

// ==== Moduł: Plan ====

function Plan() {
  const { state, setState, progress, statusOf, nav } = useApp()
  const [openDay, setOpenDay] = useState(null)
  const start = state.sprint.start
  const curDay = start ? clamp(dayDiff(new Date(), parseDateStr(start)) + 1, 1, 4) : null

  const startSprint = () => setState((s) => ({ ...s, sprint: { start: toDateStr(new Date()) } }))
  const setCurDay = (d) => {
    const dt = new Date()
    dt.setDate(dt.getDate() - (d - 1))
    setState((s) => ({ ...s, sprint: { start: toDateStr(dt) } }))
  }

  const { counts, total } = progress
  const overallPct = Math.round(progress.overall * 100)

  return (
    <div className="space-y-4 py-4">
      <Panel className="overflow-hidden !p-0">
        <div className="bg-linear-to-br from-indigo-600 to-violet-600 p-5 text-white">
          {start ? (
            <>
              <div className="text-xs font-bold uppercase tracking-wider text-white/80">4-dniowy sprint</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-black">Dzień {curDay}</span>
                <span className="text-lg font-semibold text-white/80">z 4</span>
              </div>
              <div className="mt-1 text-sm text-white/80">
                Start: {parseDateStr(start).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' })}
              </div>
              <div className="mt-4" role="group" aria-label="Ustaw bieżący dzień">
                <div className="mb-1.5 text-xs font-semibold text-white/80">Ustaw dzień ręcznie</div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setCurDay(d)}
                      aria-pressed={curDay === d}
                      className={cx(
                        'h-10 w-10 rounded-full text-sm font-extrabold transition active:scale-90',
                        'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white',
                        curDay === d ? 'bg-white text-indigo-700' : 'bg-white/20 text-white hover:bg-white/30',
                      )}
                    >
                      {d}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setState((s) => ({ ...s, sprint: { start: null } }))}
                    className="ml-auto rounded-full px-3 text-xs font-semibold text-white/80 hover:text-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Wyczyść
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                  <Rocket size={26} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-extrabold leading-tight">4-dniowy sprint</h2>
                  <p className="text-sm text-white/80">Dzień 1–3 nauka, dzień 4 mock-exam</p>
                </div>
              </div>
              <button
                type="button"
                onClick={startSprint}
                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white font-bold text-indigo-700 shadow-lg transition active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
              >
                <Rocket size={20} aria-hidden="true" /> Rozpocznij sprint dziś
              </button>
            </>
          )}
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-sm font-bold">Postęp ogólny</span>
            <span className="text-2xl font-black tabular-nums text-indigo-600 dark:text-indigo-300">{overallPct}%</span>
          </div>
          <ProgressBar value={progress.overall} className="h-3" />
          {total > 0 ? (
            <>
              <div
                className="mt-4 flex h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
                role="img"
                aria-label="Rozkład statusów kart"
              >
                {STATUS_ORDER.map((st) =>
                  counts[st] > 0 ? (
                    <div key={st} className={STATUS_META[st].dot} style={{ width: `${(counts[st] / total) * 100}%` }} />
                  ) : null,
                )}
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm">
                {STATUS_ORDER.map((st) => (
                  <li key={st} className="flex items-center gap-2">
                    <span className={cx('h-2.5 w-2.5 rounded-full', STATUS_META[st].dot)} />
                    <span className="text-slate-600 dark:text-slate-300">{STATUS_META[st].label}</span>
                    <b className="ml-auto tabular-nums">{counts[st]}</b>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Baza pytań jest jeszcze pusta.</p>
          )}
        </div>
      </Panel>

      {DAYS.map((d, idx) => {
        const isToday = curDay === d.day
        const isDay4 = d.day === 4
        const info = progress.days[idx]
        const p = isDay4 ? progress.day4 : info.progress
        const qs = isDay4 ? [] : ALL_Q.filter((q) => q.day === d.day)
        const open = openDay === d.day
        return (
          <Panel key={d.day} className={cx(isToday && 'ring-2 ring-indigo-500')}>
            <div className="mb-3 flex items-start gap-3">
              <span
                className={cx(
                  'grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-lg font-black',
                  isToday
                    ? 'bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
                )}
              >
                {d.day}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-extrabold leading-tight">Dzień {d.day}</h3>
                  {isToday && (
                    <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                      Dziś
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">{d.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{d.subtitle}</div>
              </div>
              <span className="shrink-0 text-lg font-black tabular-nums text-indigo-600 dark:text-indigo-300">
                {Math.round(p * 100)}%
              </span>
            </div>
            <ProgressBar value={p} />

            {isDay4 ? (
              <>
                <ul className="mt-4 space-y-2">
                  {progress.tasks.map((t) => (
                    <li key={t.id} className="flex items-center gap-3 text-sm">
                      <span
                        className={cx(
                          'grid h-6 w-6 shrink-0 place-items-center rounded-full',
                          t.done ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500',
                        )}
                      >
                        <Check size={14} aria-hidden="true" />
                      </span>
                      <span className={cx('min-w-0 flex-1', t.done && 'text-slate-500 line-through dark:text-slate-400')}>
                        {t.label}
                      </span>
                      <span className="shrink-0 text-xs font-semibold tabular-nums text-slate-500 dark:text-slate-400">
                        {t.value}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Btn variant="primary" size="sm" icon={Layers} onClick={() => nav.goCards('hard')}>
                    Trudne fiszki
                  </Btn>
                  <Btn variant="outline" size="sm" icon={GraduationCap} onClick={() => nav.setTab('exam')}>
                    Symulacja
                  </Btn>
                </div>
              </>
            ) : (
              <>
                <div className="mt-3 flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    {info.total > 0
                      ? `Opanowane ${info.mastered} · w trakcie ${info.learning} · razem ${info.total}`
                      : 'Brak pytań w tym dniu (baza jest uzupełniana)'}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Btn
                    variant="primary"
                    size="sm"
                    icon={Layers}
                    disabled={info.total === 0}
                    onClick={() => nav.goCards(`d${d.day}`)}
                  >
                    Ucz się
                  </Btn>
                  <Btn
                    variant="soft"
                    size="sm"
                    disabled={info.total === 0}
                    onClick={() => setOpenDay(open ? null : d.day)}
                    aria-expanded={open}
                  >
                    {open ? 'Ukryj pytania' : `Pytania (${info.total})`}
                    <ChevronDown size={16} className={cx('transition-transform', open && 'rotate-180')} aria-hidden="true" />
                  </Btn>
                </div>
                <Collapse open={open}>
                  <ul className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">
                    {qs.map((q) => (
                      <li key={q.id} className="flex items-start gap-3 py-2">
                        <span className={cx('mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full', STATUS_META[statusOf(q.id)].dot)} title={STATUS_META[statusOf(q.id)].label} />
                        <span className="w-9 shrink-0 text-sm font-extrabold text-slate-500 dark:text-slate-400">{q.id}</span>
                        <span className="min-w-0 line-clamp-2 break-words text-sm text-slate-700 dark:text-slate-200">{q.title}</span>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              </>
            )}
          </Panel>
        )
      })}
    </div>
  )
}

// ==== Moduł: Trening ====

const SpeechRec =
  typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : undefined

const FIELD =
  'w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500'

function QuestionPicker({ value, onChange }) {
  const { state } = useApp()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const q = Q_BY_ID[value]

  const list = useMemo(() => {
    const toks = normalize(query).split(' ').filter(Boolean)
    return ALL_Q.filter((x) => {
      const hay = normalize(`${x.id} ${x.area} ${x.title}`)
      return toks.every((t) => hay.includes(t))
    })
  }, [query])

  const idx = ALL_Q.findIndex((x) => x.id === value)
  const randomPick = () => {
    const others = ALL_Q.filter((x) => x.id !== value)
    const pool = others.length ? others : ALL_Q
    onChange(pool[Math.floor(Math.random() * pool.length)].id)
  }
  const nextPick = () => onChange(ALL_Q[(idx + 1) % ALL_Q.length].id)

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cx(
          'flex w-full items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white p-3 text-left shadow-sm transition active:scale-[0.99] dark:border-slate-700 dark:bg-slate-900',
          FOCUS,
        )}
      >
        <span className="grid h-11 min-w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 px-1 text-sm font-extrabold text-white">
          {q?.id ?? '?'}
        </span>
        <span className="min-w-0 flex-1 line-clamp-2 break-words text-sm font-semibold leading-snug">
          {q?.title ?? 'Wybierz pytanie'}
        </span>
        <ChevronDown size={20} className={cx('shrink-0 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      <Collapse open={open}>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900">
          <div className="relative">
            <Search size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj pytania…"
              aria-label="Szukaj pytania"
              className={cx(FIELD, 'py-2 pl-10')}
            />
          </div>
          <ul className="max-h-64 overflow-y-auto overscroll-contain">
            {list.length === 0 && <li className="px-3 py-4 text-center text-sm text-slate-500">Brak pasujących pytań</li>}
            {list.map((x) => (
              <li key={x.id}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(x.id)
                    setOpen(false)
                  }}
                  className={cx(
                    'flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800',
                    FOCUS,
                    x.id === value && 'bg-indigo-50 dark:bg-indigo-500/15',
                  )}
                >
                  <span className="w-9 shrink-0 text-sm font-extrabold text-indigo-600 dark:text-indigo-300">{x.id}</span>
                  <span className="min-w-0 flex-1 line-clamp-2 break-words text-sm">{x.title}</span>
                  {state.matcher[x.id] != null && (
                    <span className={cx('shrink-0 rounded-full px-2 py-0.5 text-xs font-bold', scoreTone(state.matcher[x.id]))}>
                      {state.matcher[x.id]}%
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
      <div className="grid grid-cols-2 gap-2">
        <Btn variant="soft" size="sm" icon={Shuffle} onClick={randomPick}>
          Losuj
        </Btn>
        <Btn variant="soft" size="sm" icon={ArrowRight} onClick={nextPick}>
          Następne
        </Btn>
      </div>
    </div>
  )
}

function KeywordTrainer({ target }) {
  const { state, setState } = useApp()
  const [qid, setQid] = useState(ALL_Q[0]?.id ?? null)
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [showModel, setShowModel] = useState(false)
  const [listening, setListening] = useState(false)
  const recRef = useRef(null)
  const q = qid ? Q_BY_ID[qid] : null

  const stopMic = useCallback(() => {
    try {
      recRef.current?.abort?.()
    } catch {
      /* ignoruj */
    }
    recRef.current = null
    setListening(false)
  }, [])

  // Przejście z Kompendium („Ćwicz słowa-klucze”) wybiera pytanie.
  useEffect(() => {
    if (target?.id && Q_BY_ID[target.id]) setQid(target.id)
  }, [target])

  // Zmiana pytania czyści odpowiedź i wynik.
  useEffect(() => {
    setText('')
    setResult(null)
    setShowModel(false)
    stopMic()
  }, [qid, stopMic])

  useEffect(() => () => stopMic(), [stopMic])

  const toggleMic = () => {
    if (listening) {
      recRef.current?.stop?.()
      return
    }
    try {
      const rec = new SpeechRec()
      rec.lang = 'pl-PL'
      rec.continuous = true
      rec.interimResults = false
      rec.onresult = (e) => {
        let add = ''
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) add += ` ${e.results[i][0].transcript}`
        }
        add = add.trim()
        if (add) setText((t) => (t ? `${t.replace(/\s+$/, '')} ` : '') + add)
      }
      rec.onend = () => setListening(false)
      rec.onerror = () => setListening(false)
      recRef.current = rec
      rec.start()
      setListening(true)
    } catch {
      setListening(false)
    }
  }

  if (!ALL_Q.length) {
    return (
      <EmptyState icon={PenLine} title="Baza pytań jest pusta">
        Trening słów-kluczy będzie dostępny, gdy w bazie pojawią się pytania.
      </EmptyState>
    )
  }
  if (!q) return null

  const terms = mustOf(q)
  const best = state.matcher[q.id]

  const check = () => {
    if (!terms.length) return
    const tokens = tokensOf(text)
    const hit = []
    const miss = []
    for (const m of terms) (termRecalled(m, tokens) ? hit : miss).push(m.term)
    const score = Math.round((hit.length / terms.length) * 100)
    setResult({ hit, miss, score, prevBest: best ?? null, record: best == null || score > best })
    setState((s) => ({ ...s, matcher: { ...s.matcher, [q.id]: Math.max(s.matcher[q.id] ?? 0, score) } }))
    stopMic()
  }

  const steps = ['Definicja', 'Podziały / normy', 'Przykład IT', 'Wniosek']

  return (
    <div className="space-y-4">
      <QuestionPicker value={qid} onChange={setQid} />

      <Panel className="space-y-4">
        <div>
          <QuestionTag q={q} />
          <h2 className="break-words text-lg font-bold leading-snug sm:text-xl">{q.title}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-1.5" aria-label="Szkielet odpowiedzi">
          {steps.map((s, i) => (
            <Fragment key={s}>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200">
                {s}
              </span>
              {i < steps.length - 1 && <ArrowRight size={12} className="text-slate-400" aria-hidden="true" />}
            </Fragment>
          ))}
        </div>

        {terms.length === 0 ? (
          <p className="rounded-2xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
            To pytanie nie ma jeszcze zdefiniowanych pojęć obowiązkowych – nie da się sprawdzić odpowiedzi.
          </p>
        ) : (
          <>
            <div>
              <label htmlFor="kw-input" className="mb-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span>Twoja odpowiedź (hasła, pojęcia)</span>
                {best != null && <span className="normal-case">Najlepszy wynik: <b>{best}%</b></span>}
              </label>
              <div className="relative">
                <textarea
                  id="kw-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={5}
                  placeholder="Wpisz lub podyktuj pojęcia, które powiedziałbyś komisji…"
                  className={cx(FIELD, 'min-h-32 resize-y pr-14')}
                />
                {SpeechRec && (
                  <button
                    type="button"
                    onClick={toggleMic}
                    aria-label={listening ? 'Zatrzymaj dyktowanie' : 'Dyktuj odpowiedź mikrofonem'}
                    aria-pressed={listening}
                    className={cx(
                      'absolute right-2 top-2 grid h-11 w-11 place-items-center rounded-full transition active:scale-90',
                      FOCUS,
                      listening
                        ? 'animate-pulse bg-rose-500 text-white shadow-lg shadow-rose-500/40'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300',
                    )}
                  >
                    {listening ? <MicOff size={20} aria-hidden="true" /> : <Mic size={20} aria-hidden="true" />}
                  </button>
                )}
              </div>
              {!SpeechRec && (
                <p className="mt-1.5 flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Mic size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
                  Dyktowanie w tej przeglądarce jest niedostępne – możesz też użyć mikrofonu na klawiaturze telefonu.
                </p>
              )}
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-2">
              <Btn variant="primary" size="lg" icon={ClipboardCheck} disabled={!text.trim()} onClick={check}>
                Sprawdź
              </Btn>
              <Btn
                variant="outline"
                size="lg"
                aria-label="Wyczyść odpowiedź"
                disabled={!text && !result}
                onClick={() => {
                  setText('')
                  setResult(null)
                }}
              >
                <RotateCcw size={20} aria-hidden="true" />
              </Btn>
            </div>
          </>
        )}
      </Panel>

      {result && (
        <Panel className="space-y-4" data-testid="kw-result">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Wynik</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Przywołano <b>{result.hit.length}</b> z <b>{terms.length}</b> pojęć
              </div>
              {result.record && result.score > 0 && (
                <div className="mt-0.5 flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                  <Trophy size={14} aria-hidden="true" /> Nowy rekord!
                </div>
              )}
            </div>
            <span className={cx('rounded-full px-4 py-1.5 text-3xl font-extrabold tabular-nums', scoreTone(result.score))}>
              {result.score}%
            </span>
          </div>
          <ProgressBar
            value={result.score / 100}
            fill={result.score >= 80 ? 'bg-emerald-500' : result.score >= 50 ? 'bg-amber-500' : 'bg-rose-500'}
          />
          {result.hit.length > 0 && (
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                Przywołane
              </div>
              <div className="flex flex-wrap gap-2">
                {result.hit.map((t) => (
                  <span
                    key={t}
                    data-badge="hit"
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200"
                  >
                    <Check size={14} className="shrink-0" aria-hidden="true" />
                    <span className="min-w-0 break-words">{t}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
          {result.miss.length > 0 && (
            <div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
                Pominięte
              </div>
              <div className="flex flex-wrap gap-2">
                {result.miss.map((t) => (
                  <span
                    key={t}
                    data-badge="miss"
                    className="inline-flex max-w-full items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-800 dark:bg-rose-500/20 dark:text-rose-200"
                  >
                    <X size={14} className="shrink-0" aria-hidden="true" />
                    <span className="min-w-0 break-words">{t}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div>
            <button
              type="button"
              onClick={() => setShowModel((v) => !v)}
              aria-expanded={showModel}
              className={cx(
                'flex w-full items-center justify-between rounded-2xl bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200',
                FOCUS,
              )}
            >
              Modelowa odpowiedź
              <ChevronDown size={18} className={cx('transition-transform', showModel && 'rotate-180')} aria-hidden="true" />
            </button>
            <Collapse open={showModel}>
              <div className="pt-4">
                <AnswerSections q={q} />
              </div>
            </Collapse>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Btn
              variant="outline"
              icon={RotateCcw}
              onClick={() => {
                setText('')
                setResult(null)
              }}
            >
              Spróbuj ponownie
            </Btn>
            <Btn
              variant="primary"
              icon={ArrowRight}
              onClick={() => setQid(ALL_Q[(ALL_Q.findIndex((x) => x.id === qid) + 1) % ALL_Q.length].id)}
            >
              Następne
            </Btn>
          </div>
        </Panel>
      )}
    </div>
  )
}

function ClozeTrainer() {
  const { state, setState } = useApp()
  const [scope, setScope] = useState('all')
  const [count, setCount] = useState(10)
  const [sess, setSess] = useState(null)
  const inputsRef = useRef([])

  const pool = useMemo(
    () =>
      ALL_Q.filter((q) => matchesFilter(q, scope, () => 0)).flatMap((q) =>
        clozeOf(q).map((c) => ({ qid: q.id, parts: parseCloze(c.text) })),
      ),
    [scope],
  )

  const startCloze = () => {
    const items = shuffle(pool).slice(0, count === 'all' ? pool.length : count)
    const first = items[0]
    setSess({
      items,
      idx: 0,
      values: first.parts.filter((p) => p.t === 'gap').map(() => ''),
      checked: false,
      results: [],
      tally: { total: 0, correct: 0 },
      done: false,
    })
  }

  // Autofokus pierwszej luki tylko na urządzeniach z myszą (na telefonie nie wysuwamy klawiatury).
  useEffect(() => {
    if (!sess || sess.done || sess.checked) return
    try {
      if (window.matchMedia('(pointer: fine)').matches) inputsRef.current[0]?.focus()
    } catch {
      /* ignoruj */
    }
  }, [sess?.idx, sess?.done, sess === null])

  const item = sess && !sess.done ? sess.items[sess.idx] : null
  const gaps = item ? item.parts.filter((p) => p.t === 'gap') : []

  const setValue = (gi, v) => setSess((s) => ({ ...s, values: s.values.map((x, i) => (i === gi ? v : x)) }))

  const check = () => {
    if (!sess || sess.checked) return
    const results = gaps.map((g, i) => checkGap(sess.values[i], g.answers))
    const good = results.filter(Boolean).length
    setSess({
      ...sess,
      checked: true,
      results,
      tally: { total: sess.tally.total + results.length, correct: sess.tally.correct + good },
    })
    setState((s) => ({
      ...s,
      cloze: { answered: s.cloze.answered + results.length, correct: s.cloze.correct + good },
    }))
  }

  const nextItem = () => {
    if (sess.idx + 1 >= sess.items.length) {
      setSess({ ...sess, done: true })
      return
    }
    const nx = sess.items[sess.idx + 1]
    inputsRef.current = []
    setSess({
      ...sess,
      idx: sess.idx + 1,
      values: nx.parts.filter((p) => p.t === 'gap').map(() => ''),
      checked: false,
      results: [],
    })
  }

  const onKeyDown = (e, gi) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (sess.checked) return nextItem()
    const last = gi === gaps.length - 1
    const allFilled = sess.values.every((v) => v.trim())
    if (last || allFilled) check()
    else inputsRef.current[gi + 1]?.focus()
  }

  const clozePct = state.cloze.answered ? Math.round((state.cloze.correct / state.cloze.answered) * 100) : 0

  if (!sess) {
    return (
      <div className="space-y-4">
        <Panel>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
              <PenLine size={24} aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold leading-tight">Uzupełnij luki</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">Zdania z brakującymi pojęciami</p>
            </div>
          </div>
          <SessionConfig
            scope={scope}
            setScope={setScope}
            count={count}
            setCount={setCount}
            available={pool.length}
            noun="zdań z lukami"
            onStart={startCloze}
            startLabel="Zacznij"
          />
        </Panel>
        <Panel className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Statystyki luk</div>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              Luki: <b>{state.cloze.answered}</b> · poprawne: <b>{state.cloze.correct}</b>
            </div>
          </div>
          <span className={cx('rounded-full px-3 py-1 text-lg font-extrabold tabular-nums', scoreTone(state.cloze.answered ? clozePct : 0))}>
            {clozePct}%
          </span>
        </Panel>
      </div>
    )
  }

  if (sess.done) {
    const p = sess.tally.total ? Math.round((sess.tally.correct / sess.tally.total) * 100) : 0
    return (
      <Panel className="text-center">
        <span className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-500/30">
          <Trophy size={32} aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-extrabold">Gotowe!</h2>
        <p className="mt-1 text-slate-600 dark:text-slate-400">
          Poprawne luki: {sess.tally.correct} z {sess.tally.total}
        </p>
        <div className={cx('mx-auto mt-3 inline-block rounded-full px-5 py-1.5 text-3xl font-extrabold tabular-nums', scoreTone(p))}>
          {p}%
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Btn variant="primary" icon={RotateCcw} onClick={startCloze}>
            Jeszcze raz
          </Btn>
          <Btn variant="outline" onClick={() => setSess(null)}>
            Zmień zakres
          </Btn>
        </div>
      </Panel>
    )
  }

  let gapIndex = -1
  return (
    <div className="space-y-4">
      <div className="px-1">
        <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-slate-600 dark:text-slate-300">
          <span>
            Zdanie {sess.idx + 1} z {sess.items.length}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.qid}</span>
        </div>
        <ProgressBar value={(sess.idx + (sess.checked ? 1 : 0)) / sess.items.length} />
      </div>
      <Panel className="space-y-4">
        <p className="break-words text-lg leading-[2.6rem] sm:text-xl sm:leading-[2.8rem]" data-testid="cloze-sentence">
          {item.parts.map((p, i) => {
            if (p.t === 'text') {
              return (
                <span key={i}>
                  <RichText text={p.v} />
                </span>
              )
            }
            gapIndex += 1
            const gi = gapIndex
            const ok = sess.results[gi]
            const longest = Math.max(...p.answers.map((a) => a.length), 3)
            return (
              <span key={i} className="whitespace-nowrap">
                <input
                  ref={(el) => {
                    inputsRef.current[gi] = el
                  }}
                  type="text"
                  value={sess.values[gi] ?? ''}
                  readOnly={sess.checked}
                  onChange={(e) => setValue(gi, e.target.value)}
                  onKeyDown={(e) => onKeyDown(e, gi)}
                  aria-label={`Luka ${gi + 1}`}
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  style={{ width: `${longest + 2}ch`, maxWidth: '100%' }}
                  className={cx(
                    'mx-1 inline-block h-10 rounded-lg border-2 px-1 text-center align-middle text-base font-semibold transition focus:outline-hidden',
                    !sess.checked &&
                      'border-slate-300 bg-slate-50 text-slate-900 focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100',
                    sess.checked &&
                      ok &&
                      'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200',
                    sess.checked &&
                      !ok &&
                      'border-rose-500 bg-rose-50 text-rose-800 dark:bg-rose-500/15 dark:text-rose-200',
                  )}
                  data-result={sess.checked ? (ok ? 'ok' : 'bad') : undefined}
                />
                {sess.checked && !ok && (
                  <span className="mr-1 rounded-lg bg-emerald-100 px-2 py-1 align-middle text-sm font-bold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200">
                    {p.answers.join(' / ')}
                  </span>
                )}
              </span>
            )
          })}
        </p>
        {sess.checked ? (
          <div className="space-y-3">
            <p
              role="status"
              className={cx(
                'rounded-2xl px-4 py-2.5 text-sm font-semibold',
                sess.results.every(Boolean)
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-200'
                  : 'bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-200',
              )}
            >
              {sess.results.every(Boolean)
                ? 'Świetnie – wszystkie luki poprawne!'
                : `Poprawne luki: ${sess.results.filter(Boolean).length} z ${sess.results.length}`}
            </p>
            <Btn variant="primary" size="lg" icon={ArrowRight} className="w-full" onClick={nextItem} autoFocus>
              {sess.idx + 1 < sess.items.length ? 'Dalej' : 'Zobacz wynik'}
            </Btn>
          </div>
        ) : (
          <Btn variant="primary" size="lg" icon={ClipboardCheck} className="w-full" onClick={check}>
            Sprawdź
          </Btn>
        )}
      </Panel>
    </div>
  )
}

function Train({ target }) {
  const [mode, setMode] = useState('keywords')
  useEffect(() => {
    if (target) setMode('keywords')
  }, [target])
  return (
    <div className="space-y-4 py-4">
      <Segmented
        label="Tryb treningu"
        value={mode}
        onChange={setMode}
        options={[
          { id: 'keywords', label: 'Słowa-klucze', icon: PenLine },
          { id: 'cloze', label: 'Uzupełnij luki', icon: ListChecks },
        ]}
      />
      {/* Oba tryby pozostają zamontowane – wpisany tekst nie ginie po przełączeniu. */}
      <div className={mode === 'keywords' ? '' : 'hidden'}>
        <KeywordTrainer target={target} />
      </div>
      <div className={mode === 'cloze' ? '' : 'hidden'}>
        <ClozeTrainer />
      </div>
    </div>
  )
}

// ==== Moduł: Kompendium ====

function Compendium({ target }) {
  const { statusOf, nav } = useApp()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('all')
  const [area, setArea] = useState('all')
  const [status, setStatus] = useState('all')
  const [open, setOpen] = useState({})
  const [views, setViews] = useState({}) // id → 'card' | 'short' | 'full' (wybór użytkownika)

  const queryTokens = useMemo(() => normalize(query).split(' ').filter(Boolean), [query])
  const results = useMemo(() => {
    const toks = queryTokens
    return ALL_Q.filter(
      (q) =>
        (cat === 'all' || q.category === cat) &&
        (area === 'all' || q.area === area) &&
        (status === 'all' || statusOf(q.id) === status) &&
        toks.every((t) => SEARCH_INDEX[q.id].includes(t)),
    )
  }, [queryTokens, cat, area, status, statusOf])

  // Przejście z quizu / treningu: rozwiń pytanie i przewiń do niego.
  useEffect(() => {
    if (!target?.id) return
    setQuery('')
    setCat('all')
    setArea('all')
    setStatus('all')
    setViews((v) => ({ ...v, [target.id]: 'card' }))
    setOpen((o) => ({ ...o, [target.id]: true }))
    const t = setTimeout(() => {
      document.getElementById(`base-${target.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 180)
    return () => clearTimeout(t)
  }, [target])

  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }))
  const filtered = query.trim() || cat !== 'all' || area !== 'all' || status !== 'all'
  const clear = () => {
    setQuery('')
    setCat('all')
    setArea('all')
    setStatus('all')
  }

  if (!ALL_Q.length) {
    return (
      <div className="py-4">
        <EmptyState icon={BookOpen} title="Baza pytań jest pusta">
          Kompendium wypełni się, gdy w plikach danych pojawią się pytania.
        </EmptyState>
      </div>
    )
  }

  const scrollRow = 'no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 py-0.5'

  return (
    <div className="space-y-3 py-4">
      <div className="relative">
        <Search size={20} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Szukaj w bazie wiedzy…"
          aria-label="Szukaj w bazie wiedzy"
          className={cx(FIELD, 'pl-12 pr-12 shadow-sm')}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Wyczyść wyszukiwanie"
            className={cx('absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800', FOCUS)}
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
      </div>

      <div className={scrollRow} role="group" aria-label="Kategoria">
        {[{ id: 'all', label: 'Wszystkie' }, ...Object.entries(CATEGORY_LABELS || {}).map(([id, label]) => ({ id, label }))].map((c) => (
          <Chip key={c.id} active={cat === c.id} onClick={() => setCat(c.id)}>
            {c.label}
          </Chip>
        ))}
      </div>
      {AREA_LIST.length > 0 && (
        <div className={scrollRow} role="group" aria-label="Dział">
          <Chip active={area === 'all'} onClick={() => setArea('all')}>
            Wszystkie działy
          </Chip>
          {AREA_LIST.map((a) => (
            <Chip key={a} active={area === a} onClick={() => setArea(area === a ? 'all' : a)}>
              {a}
            </Chip>
          ))}
        </div>
      )}
      <div className={scrollRow} role="group" aria-label="Status">
        <Chip active={status === 'all'} onClick={() => setStatus('all')}>
          Każdy status
        </Chip>
        {STATUS_ORDER.map((st) => (
          <Chip key={st} active={status === st} onClick={() => setStatus(status === st ? 'all' : st)}>
            <span className={cx('h-2 w-2 rounded-full', status === st ? 'bg-white' : STATUS_META[st].dot)} />
            {STATUS_META[st].label}
          </Chip>
        ))}
      </div>

      <div className="flex items-center justify-between px-1 text-sm text-slate-600 dark:text-slate-400" aria-live="polite">
        <span data-testid="base-count">
          Wyniki: <b className="text-slate-900 dark:text-white">{results.length}</b> z {ALL_Q.length}
        </span>
        {filtered && (
          <button type="button" onClick={clear} className={cx('rounded-full px-2 py-1 text-xs font-bold text-indigo-600 dark:text-indigo-300', FOCUS)}>
            Wyczyść filtry
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <EmptyState
          icon={Search}
          title="Nic nie znaleziono"
          action={
            <Btn variant="primary" size="sm" onClick={clear}>
              Wyczyść filtry
            </Btn>
          }
        >
          Spróbuj innej frazy – wyszukiwanie ignoruje polskie znaki i wielkość liter.
        </EmptyState>
      ) : (
        <ul className="space-y-3">
          {results.map((q) => {
            const isOpen = !!open[q.id]
            const st = statusOf(q.id)
            const keywords = kwOf(q)
            const terms = mustOf(q)
            const hasFull = !!fullOf(q.id)
            const hasShort = !!shortOf(q.id)
            const hasAnyPdf = hasFull || hasShort
            // Trafienie tylko w tekście PDF → domyślnie pokazujemy widok, w którym fraza faktycznie występuje.
            const inIndex = (idx) => queryTokens.every((t) => idx[q.id].includes(t))
            const autoView =
              queryTokens.length === 0 || inIndex(CARD_INDEX)
                ? 'card'
                : hasShort && inIndex(SHORT_INDEX)
                  ? 'short'
                  : hasFull && inIndex(FULL_INDEX)
                    ? 'full'
                    : 'card'
            const picked = views[q.id]
            const view =
              hasAnyPdf && (picked === 'card' || (picked === 'short' && hasShort) || (picked === 'full' && hasFull))
                ? picked
                : hasAnyPdf
                  ? autoView
                  : 'card'
            return (
              <li
                key={q.id}
                id={`base-${q.id}`}
                style={{ scrollMarginTop: 'calc(var(--header-h) + 12px)' }}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => toggle(q.id)}
                  aria-expanded={isOpen}
                  className={cx('flex w-full items-start gap-3 p-4 text-left', FOCUS)}
                >
                  <span className="grid h-11 min-w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-indigo-600 to-violet-600 px-1 text-sm font-extrabold text-white">
                    {q.id}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="line-clamp-3 break-words text-[15px] font-bold leading-snug">
                      <RichText text={q.title} query={query} />
                    </span>
                    <span className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {q.area}
                      </span>
                      <StatusBadge status={st} />
                    </span>
                  </span>
                  <ChevronDown
                    size={20}
                    className={cx('mt-2 shrink-0 text-slate-400 transition-transform', isOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                <Collapse open={isOpen}>
                  <div className="space-y-5 border-t border-slate-100 p-4 dark:border-slate-800">
                    {hasAnyPdf && (
                      <Segmented
                        label="Widok odpowiedzi"
                        value={view}
                        onChange={(v) => setViews((m) => ({ ...m, [q.id]: v }))}
                        options={[
                          { id: 'card', label: 'Fiszka' },
                          ...(hasShort ? [{ id: 'short', label: 'W pigułce' }] : []),
                          ...(hasFull ? [{ id: 'full', label: 'Pełna' }] : []),
                        ]}
                      />
                    )}
                    {view === 'short' ? (
                      <ShortAnswer id={q.id} query={query} />
                    ) : view === 'full' ? (
                      <FullAnswer id={q.id} query={query} />
                    ) : (
                      <>
                        {keywords.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {keywords.map((k) => (
                              <span
                                key={k}
                                className="max-w-full break-words rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-200"
                              >
                                <RichText text={k} query={query} />
                              </span>
                            ))}
                          </div>
                        )}
                        <AnswerSections q={q} query={query} />
                        {terms.length > 0 && (
                          <div>
                            <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                              Pojęcia obowiązkowe
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {terms.map((m) => (
                                <span
                                  key={m.term}
                                  className="max-w-full break-words rounded-lg bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                >
                                  <RichText text={m.term} query={query} />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    <Btn
                      variant="primary"
                      size="sm"
                      icon={PenLine}
                      className="w-full"
                      onClick={() => nav.goTrain(q.id)}
                      disabled={terms.length === 0}
                    >
                      Ćwicz słowa-klucze
                    </Btn>
                  </div>
                </Collapse>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

// ==== App ====

export default function App() {
  const [state, setState] = usePersistentState()
  const tab = state.settings.tab
  const theme = state.settings.theme
  const [visited, setVisited] = useState(() => new Set([tab]))
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [cardFilter, setCardFilter] = useState('all')
  const [cardsEpoch, setCardsEpoch] = useState(0)
  const [trainTarget, setTrainTarget] = useState(null)
  const [baseTarget, setBaseTarget] = useState(null)

  // Motyw: klasa .dark na <html>, <meta name="theme-color"> i nasłuch preferencji systemu.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const dark = theme === 'dark' || (theme === 'system' && mq.matches)
      document.documentElement.classList.toggle('dark', dark)
      document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0f172a' : '#ffffff')
      setIsDark(dark)
    }
    apply()
    if (theme !== 'system') return
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])

  // Po kliknięciu myszą / dotknięciu zdejmujemy fokus z przycisku, żeby Spacja i Enter nadal sterowały fiszką
  // (odwrót karty) zamiast ponownie uruchamiać ostatnio klikniętą kontrolkę. Aktywacja klawiaturą (detail === 0)
  // zachowuje fokus, więc nawigacja klawiaturą pozostaje dostępna.
  useEffect(() => {
    const onClick = (e) => {
      if (e.detail === 0 || !(e.target instanceof Element)) return
      const btn = e.target.closest('button')
      if (btn && document.activeElement === btn) btn.blur()
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  const getBox = useCallback((id) => state.cards[id]?.box ?? 0, [state.cards])
  const statusOf = useCallback((id) => BOX_STATUS[getBox(id)], [getBox])
  const rate = useCallback(
    (id, known) =>
      setState((s) => {
        const cur = s.cards[id] || { box: 0, right: 0, wrong: 0, last: 0 }
        return {
          ...s,
          cards: {
            ...s.cards,
            [id]: {
              box: nextBox(cur.box, known),
              right: cur.right + (known ? 1 : 0),
              wrong: cur.wrong + (known ? 0 : 1),
              last: Date.now(),
            },
          },
        }
      }),
    [setState],
  )
  const setCard = useCallback(
    (id, entry) =>
      setState((s) => {
        const cards = { ...s.cards }
        if (entry) cards[id] = entry
        else delete cards[id]
        return { ...s, cards }
      }),
    [setState],
  )
  const progress = useMemo(() => computeProgress(state), [state])

  const setTab = useCallback(
    (t) => setState((s) => (s.settings.tab === t ? s : { ...s, settings: { ...s.settings, tab: t } })),
    [setState],
  )
  const nav = useMemo(
    () => ({
      setTab,
      goCards: (filter) => {
        setCardFilter(filter)
        setCardsEpoch((n) => n + 1)
        setTab('cards')
      },
      goTrain: (id) => {
        setTrainTarget({ id, n: Date.now() })
        setTab('train')
      },
      goBase: (id) => {
        setBaseTarget({ id, n: Date.now() })
        setTab('base')
      },
    }),
    [setTab],
  )

  useEffect(() => {
    setVisited((v) => (v.has(tab) ? v : new Set(v).add(tab)))
    window.scrollTo(0, 0)
  }, [tab])

  const toggleTheme = () =>
    setState((s) => ({ ...s, settings: { ...s.settings, theme: isDark ? 'light' : 'dark' } }))
  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  const ctx = useMemo(
    () => ({ state, setState, getBox, statusOf, rate, setCard, progress, nav }),
    [state, setState, getBox, statusOf, rate, setCard, progress, nav],
  )

  const panels = {
    cards: (
      <Cards
        active={tab === 'cards' && !settingsOpen}
        filter={cardFilter}
        setFilter={setCardFilter}
        epoch={cardsEpoch}
      />
    ),
    exam: <Exam />,
    plan: <Plan />,
    train: <Train target={trainTarget} />,
    base: <Compendium target={baseTarget} />,
  }

  return (
    <AppCtx.Provider value={ctx}>
      <div className="min-h-[100dvh] overflow-x-clip">
        <Header dark={isDark} onToggleTheme={toggleTheme} onOpenSettings={() => setSettingsOpen(true)} />
        <main className="mx-auto w-full max-w-2xl px-4" style={{ paddingBottom: 'var(--nav-h)' }}>
          {TABS.map(
            (t) =>
              (visited.has(t.id) || t.id === tab) && (
                <section
                  key={t.id}
                  className={t.id === tab ? 'animate-tab-in block' : 'hidden'}
                  aria-hidden={t.id === tab ? undefined : true}
                  data-tab={t.id}
                >
                  {panels[t.id]}
                </section>
              ),
          )}
        </main>
        <BottomNav tab={tab} onChange={setTab} />
        <SettingsSheet open={settingsOpen} onClose={closeSettings} />
      </div>
    </AppCtx.Provider>
  )
}
