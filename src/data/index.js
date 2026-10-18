// Zbiorcza baza 40 zagadnień na obronę (15 ogólnych + 25 kierunkowych).
// Każdy plik eksportuje tablicę obiektów w formacie opisanym w PLAN.md („Schemat pytania”).
import ogolnePrawo from './ogolne-prawo.js'
import ogolneEkonomiaSzbi from './ogolne-ekonomia-szbi.js'
import kierunkowePmBi from './kierunkowe-pm-bi.js'
import kierunkoweAlgDb from './kierunkowe-alg-db.js'
import kierunkoweOsNet from './kierunkowe-os-net.js'
import kierunkoweMlSec from './kierunkowe-ml-sec.js'
import pdfPelne from './pdf-pelne.js'

const order = (q) => (q.category === 'ogolne' ? 0 : 100) + q.number

export const QUESTIONS = [
  ...ogolnePrawo,
  ...ogolneEkonomiaSzbi,
  ...kierunkowePmBi,
  ...kierunkoweAlgDb,
  ...kierunkoweOsNet,
  ...kierunkoweMlSec,
].sort((a, b) => order(a) - order(b))

// Pełny tekst odpowiedzi z PDF: { [id]: { title, paragraphs: string[] } } – akapit zaczynający się od '• ' to punkt listy.
export const PDF_FULL = pdfPelne

export const QUESTIONS_BY_ID = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]))

export const CATEGORY_LABELS = {
  ogolne: 'Ogólne',
  kierunkowe: 'Kierunkowe',
}

// Plan 4-dniowego sprintu. Dni 1–3 obejmują pytania z polem `day`, dzień 4 to powtórka całości.
export const DAYS = [
  {
    day: 1,
    title: 'Pytania ogólne 1–15',
    subtitle: 'Bezpieczeństwo informacji i audyt, prawo cywilne, gospodarcze i pracy, ekonomia',
  },
  {
    day: 2,
    title: 'Pytania kierunkowe 1–13',
    subtitle: 'Zarządzanie projektami IT, hurtownie danych i BI, bezpieczeństwo IT, złożoność, bazy danych',
  },
  {
    day: 3,
    title: 'Pytania kierunkowe 14–25',
    subtitle: 'Systemy wspomagania decyzji i ekspertowe, IoT, uczenie maszynowe, aplikacje, systemy operacyjne, integracja, cyberzagrożenia',
  },
  {
    day: 4,
    title: 'Mock-exam i powtórka',
    subtitle: 'Pełna symulacja obrony, fiszki „Trudne”, odpowiedzi ustne na czas',
  },
]

export const AREAS = [...new Set(QUESTIONS.map((q) => q.area))]
