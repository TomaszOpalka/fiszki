// Walidator bazy pytań: `npm run validate` (cała baza) lub `node scripts/validate-data.mjs src/data/plik.js`.
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const files = process.argv.slice(2)
const errors = []
const warnings = []

function check(cond, msg) {
  if (!cond) errors.push(msg)
}

function balancedBold(s) {
  return (s.match(/\*\*/g) || []).length % 2 === 0
}

function expectedDay(q) {
  if (q.category === 'ogolne') return 1
  return q.number <= 13 ? 2 : 3
}

function validateQuestion(q) {
  const where = q?.id ?? JSON.stringify(q).slice(0, 40)
  const e = (msg) => `${where}: ${msg}`
  check(/^(O|K)\d{1,2}$/.test(q.id), e('id musi mieć postać O1..O15 lub K1..K25'))
  check(['ogolne', 'kierunkowe'].includes(q.category), e('category: ogolne | kierunkowe'))
  check(q.id?.[0] === (q.category === 'ogolne' ? 'O' : 'K'), e('prefiks id niezgodny z category'))
  check(Number(q.id?.slice(1)) === q.number, e('number niezgodny z id'))
  check(q.category !== 'ogolne' || (q.number >= 1 && q.number <= 15), e('number ogólnych 1–15'))
  check(q.category !== 'kierunkowe' || (q.number >= 1 && q.number <= 25), e('number kierunkowych 1–25'))
  check(q.day === expectedDay(q), e(`day powinien wynosić ${expectedDay(q)}`))
  check(typeof q.area === 'string' && q.area.length > 1, e('brak area'))
  check(typeof q.title === 'string' && q.title.length > 10, e('brak title'))
  check(typeof q.hint === 'string' && q.hint.length > 20, e('brak hint'))
  check(Array.isArray(q.keywords) && q.keywords.length >= 5 && q.keywords.length <= 8, e('keywords: 5–8 pozycji'))

  const a = q.answer || {}
  for (const k of ['definition', 'example', 'conclusion']) {
    check(typeof a[k] === 'string' && a[k].length > 40, e(`answer.${k} za krótkie lub brak`))
    if (typeof a[k] === 'string') check(balancedBold(a[k]), e(`answer.${k}: niezamknięte **`))
  }
  check(Array.isArray(a.classification) && a.classification.length >= 4 && a.classification.length <= 7, e('answer.classification: 4–7 punktów'))
  ;(a.classification || []).forEach((c, i) => {
    check(typeof c === 'string' && c.length > 20, e(`classification[${i}] za krótkie`))
    if (typeof c === 'string') check(balancedBold(c), e(`classification[${i}]: niezamknięte **`))
  })

  check(Array.isArray(q.mustSay) && q.mustSay.length >= 8 && q.mustSay.length <= 14, e('mustSay: 8–14 pojęć'))
  ;(q.mustSay || []).forEach((m, i) => {
    check(typeof m.term === 'string' && m.term.length > 1, e(`mustSay[${i}].term`))
    check(Array.isArray(m.aliases) && m.aliases.length >= 1, e(`mustSay[${i}].aliases: min. 1 alias`))
    ;(m.aliases || []).forEach((al) => check(typeof al === 'string' && al.trim().length > 0, e(`mustSay[${i}]: pusty alias`)))
  })

  check(Array.isArray(q.quiz) && q.quiz.length === 3, e('quiz: dokładnie 3 pytania'))
  ;(q.quiz || []).forEach((z, i) => {
    check(typeof z.q === 'string' && z.q.length > 10, e(`quiz[${i}].q`))
    check(Array.isArray(z.options) && z.options.length === 4, e(`quiz[${i}].options: dokładnie 4`))
    check(new Set(z.options || []).size === (z.options || []).length, e(`quiz[${i}]: powtórzone opcje`))
    check(Number.isInteger(z.correct) && z.correct >= 0 && z.correct <= 3, e(`quiz[${i}].correct: 0–3`))
    check(typeof z.explain === 'string' && z.explain.length > 10, e(`quiz[${i}].explain`))
  })
  const correctIdx = (q.quiz || []).map((z) => z.correct)
  if (correctIdx.length === 3 && new Set(correctIdx).size === 1) warnings.push(`${where}: wszystkie poprawne odpowiedzi quizu mają ten sam indeks`)

  check(Array.isArray(q.cloze) && q.cloze.length === 2, e('cloze: dokładnie 2 zdania'))
  ;(q.cloze || []).forEach((c, i) => {
    const gaps = (c.text || '').match(/\{\{[^{}]+\}\}/g) || []
    check(gaps.length >= 1 && gaps.length <= 3, e(`cloze[${i}]: 1–3 luki {{...}}`))
    gaps.forEach((g) => check(g.slice(2, -2).split('|').every((s) => s.trim().length > 0), e(`cloze[${i}]: pusta odpowiedź w ${g}`)))
    check(!/\{\{|\}\}/.test((c.text || '').replace(/\{\{[^{}]+\}\}/g, '')), e(`cloze[${i}]: niedomknięte nawiasy`))
  })
}

let questions
if (files.length) {
  questions = []
  for (const f of files) {
    const mod = await import(pathToFileURL(path.resolve(f)).href)
    check(Array.isArray(mod.default), `${f}: default export musi być tablicą`)
    questions.push(...(mod.default || []))
  }
} else {
  const mod = await import(pathToFileURL(path.resolve('src/data/index.js')).href)
  questions = mod.QUESTIONS
}

questions.forEach(validateQuestion)
const ids = questions.map((q) => q.id)
const dup = ids.filter((id, i) => ids.indexOf(id) !== i)
check(dup.length === 0, `powtórzone id: ${[...new Set(dup)].join(', ')}`)

if (!files.length) {
  const o = questions.filter((q) => q.category === 'ogolne').length
  const k = questions.filter((q) => q.category === 'kierunkowe').length
  if (o !== 15 || k !== 25) warnings.push(`baza niekompletna: ${o}/15 ogólnych, ${k}/25 kierunkowych`)
}

warnings.forEach((w) => console.warn('UWAGA  ' + w))
if (errors.length) {
  errors.forEach((er) => console.error('BŁĄD   ' + er))
  console.error(`\n${errors.length} błędów w ${questions.length} pytaniach.`)
  process.exit(1)
}
console.log(`OK – ${questions.length} pytań poprawnych (${ids.join(', ')}).`)
