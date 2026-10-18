# Plan aplikacji „Obrona MGR – fiszki z Informatyki”

Mobilna aplikacja webowa (PWA, instalowalna na telefonie) do intensywnej, 4-dniowej nauki do obrony
pracy magisterskiej. 40 zagadnień: 15 ogólnych + 25 kierunkowych. Czysty frontend: bez backendu,
bez kluczy API, bez kont. Postęp zapisywany w `localStorage` przeglądarki. Hosting za darmo na Netlify.

## 1. Stack (w 100% darmowy)

| Warstwa | Wybór | Uzasadnienie |
|---|---|---|
| Build | Vite 8 | szybki build statyczny, Netlify wykrywa automatycznie |
| UI | React 18 | wymaganie |
| Style | Tailwind CSS 4 (`@tailwindcss/vite`) | mobile-first, tryb ciemny przez klasę `.dark` na `<html>` |
| Ikony | `lucide-react` | wymaganie |
| Animacje / gesty | `framer-motion` | swipe kart (drag), obrót 3D, przejścia |
| Offline / instalacja | `vite-plugin-pwa` | „Dodaj do ekranu głównego”, działa bez internetu |
| Głos | Web Speech API przeglądarki (opcjonalnie) | dyktowanie słów-kluczy, bez klucza API; fallback: mikrofon klawiatury telefonu |
| Hosting | Netlify (plan Free) | `netlify.toml` w repo: `npm run build` → `dist/` |

## 2. Struktura plików

```
index.html                 – meta PWA, skrypt ustawiający motyw przed renderem
vite.config.js             – React + Tailwind + PWA (manifest, ikony)
netlify.toml               – build i przekierowanie SPA
public/                    – icon.svg, pwa-192.png, pwa-512.png, pwa-maskable-512.png, apple-touch-icon.png
scripts/validate-data.mjs  – walidator bazy pytań (`npm run validate`)
src/main.jsx               – punkt wejścia
src/index.css              – Tailwind + utility do kart 3D
src/App.jsx                – CAŁA aplikacja (wszystkie moduły UI i logika) w jednym pliku
src/data/index.js          – złożenie bazy: QUESTIONS, QUESTIONS_BY_ID, PDF_FULL, DAYS, CATEGORY_LABELS, AREAS
src/data/ogolne-*.js, kierunkowe-*.js – fiszki (6 plików, każdy eksportuje tablicę pytań)
src/data/pdf-pelne.js      – pełne odpowiedzi z PDF (generowane)
docs/                      – źródłowy PDF z opracowaniem odpowiedzi
```

## 3. Lista 40 zagadnień

Źródło treści: opracowanie „Egzamin dyplomowy – Informatyka, studia magisterskie – wersja pełna” (PDF,
`docs/Odpowiedzi_egzamin_Informatyka_WERSJA_PELNA.pdf`; podstawa: Załącznik nr 3 do Zarządzenia Dziekana 68/2025).
Fiszki (`src/data/ogolne-*.js`, `src/data/kierunkowe-*.js`) to ustrukturyzowane streszczenia odpowiedzi z PDF,
a pełny tekst każdej odpowiedzi jest w `src/data/pdf-pelne.js` (wygenerowany z PDF, z pogrubionymi słowami kluczowymi).
W wykazie uczelni pytania ogólne 10 i 15 mają identyczne brzmienie – O15 ćwiczy ujęcie uzupełniające z PDF
(rynek pracy z perspektywy absolwenta informatyki).

### Ogólne (Dzień 1) – `ogolne-a.js` (O1–O8), `ogolne-b.js` (O9–O15)

| ID | Dział | Zagadnienie |
|---|---|---|
| O1 | SZBI i audyt | Zasady bezpieczeństwa informacji w przedsiębiorstwie |
| O2 | SZBI i audyt | Istota audytu |
| O3 | Prawo | Podmioty prawa cywilnego – osoba fizyczna a osoba prawna |
| O4 | Prawo | Rodzaje i formy zawierania umów |
| O5 | Prawo | Procedury zakładania własnego przedsiębiorstwa |
| O6 | Prawo | Przyczyny i rodzaje upadłości przedsiębiorstw |
| O7 | Prawo | Prawa i obowiązki pracownika i pracodawcy |
| O8 | Prawo | Ochrona baz danych |
| O9 | Ekonomia | Rozwój gospodarczy a poziom życia społeczeństwa w świetle podstawowych mierników makroekonomicznych |
| O10 | Ekonomia | Rynek pracy – uwarunkowania, problemy, tendencje |
| O11 | Ekonomia | Polityka fiskalna państwa |
| O12 | Ekonomia | Polityka monetarna państwa |
| O13 | Ekonomia | Globalizacja i jej wpływ na sytuację gospodarczą |
| O14 | Ekonomia | Ocena członkostwa w Unii Europejskiej w wymiarze ekonomicznym i społecznym |
| O15 | Ekonomia | Rynek pracy – uwarunkowania, problemy, tendencje |

### Kierunkowe 1–13 (Dzień 2) – `kierunkowe-a.js` (K1–K7), `kierunkowe-b.js` (K8–K13)

| ID | Dział | Zagadnienie |
|---|---|---|
| K1 | Zarządzanie projektami | Zarządzanie projektem informatycznym – istota, etapy, zadania |
| K2 | Zarządzanie projektami | Czynniki wyboru systemu informatycznego |
| K3 | Zarządzanie projektami | Interesariusze i ograniczenia w projektach informatycznych |
| K4 | Zarządzanie projektami | Metodyki zarządzania projektem informatycznym |
| K5 | BI i hurtownie danych | Znaczenie baz i hurtowni danych dla podejmowania decyzji |
| K6 | BI i hurtownie danych | Funkcje raportowania, analizy i eksploracji danych |
| K7 | BI i hurtownie danych | Narzędzia, metody wykorzystywane w obszarze Business Intelligence |
| K8 | Bezpieczeństwo IT | Zagrożenia i metody ochrony informacji i infrastruktury w przedsiębiorstwie |
| K9 | Bezpieczeństwo IT | Bezpieczeństwo informatyczne i identyfikacja zagrożeń w przedsiębiorstwie |
| K10 | Bezpieczeństwo IT | System zarządzania bezpieczeństwem |
| K11 | Złożoność obliczeniowa | Na czym polega złożoność obliczeniowa algorytmów |
| K12 | Bazy danych | Charakterystyka baz danych – cechy, przykłady |
| K13 | Bazy danych | Obiekty bazodanowe, pojęcie klucza, typy danych (przykłady) |

### Kierunkowe 14–25 (Dzień 3) – `kierunkowe-c.js` (K14–K19), `kierunkowe-d.js` (K20–K25)

| ID | Dział | Zagadnienie |
|---|---|---|
| K14 | Systemy wspomagania decyzji | Wykorzystanie systemów wspomagania decyzji w przedsiębiorstwie |
| K15 | Systemy wspomagania decyzji | Systemy ekspertowe – budowa, znaczenie, wykorzystanie |
| K16 | Internet rzeczy | Internet rzeczy – istota działania, zalety, wady, wykorzystanie |
| K17 | Internet rzeczy | Zagrożenia w systemach Internetu rzeczy |
| K18 | Uczenie maszynowe | Uczenie maszynowe – analiza pojęcia, działanie, wykorzystanie |
| K19 | Uczenie maszynowe | Ograniczenia i problemy w uczeniu maszynowym |
| K20 | Uczenie maszynowe | Metody uczenia maszynowego |
| K21 | Aplikacje i technologie web | Charakterystyka, bezpieczeństwo aplikacji internetowych i mobilnych |
| K22 | Aplikacje i technologie web | Technologie backendowe i frontendowe – różnice, przykłady |
| K23 | Systemy operacyjne | System operacyjny: rola, działanie, budowa, rodzaje |
| K24 | Integracja systemów | Integracja systemów informatycznych |
| K25 | Cyberzagrożenia | Wymień i krótko omów wybrane zagrożenia cybernetyczne |

## 4. Schemat pytania (kontrakt danych)

Każdy plik pytań w `src/data/` eksportuje `export default [ ...pytania ]`.

```js
{
  id: 'O3',                 // 'O1'..'O15' | 'K1'..'K25'
  category: 'ogolne',       // 'ogolne' | 'kierunkowe'
  number: 3,                // numer w obrębie kategorii
  day: 1,                   // ogólne → 1, K1–K13 → 2, K14–K25 → 3
  area: 'Prawo',            // dział (tabela wyżej)
  title: '…',               // pełna nazwa zagadnienia
  hint: '…',                // 1–2 zdania: od czego zacząć, czego oczekuje komisja
  keywords: ['…'],          // 5–8 krótkich haseł na awers karty
  answer: {                 // schemat odpowiedzi na obronie
    definition: '…',        // 1. Definicja / istota (2–4 zdania)
    classification: ['…'],  // 2. Podziały / etapy / architektura (4–8 punktów, każdy „**Nazwa:** opis”)
    example: '…',           // 3. Przykład z praktyki IT (narzędzia, normy, przepisy)
    conclusion: '…',        // 4. Wniosek (1–2 zdania)
  },
  mustSay: [                // 8–16 pojęć obowiązkowych do Keyword Matchera (pogrubione terminy z PDF)
    { term: 'Minimalizacja danych', aliases: ['minimaliz'] },
  ],
  quiz: [                   // dokładnie 3 pytania ABCD sprawdzające detale
    { q: '…', options: ['A', 'B', 'C', 'D'], correct: 1, explain: '…' },
  ],
  cloze: [                  // dokładnie 2 zdania z lukami {{odpowiedź|wariant|wariant}}
    { text: 'Zgłoszenie naruszenia następuje w ciągu {{72}} godzin.' },
  ],
}
```

- W tekstach `**pogrubienie**` oznacza termin kluczowy – UI renderuje go jako wyróżnienie.
- `aliases` w `mustSay` to rdzenie słów (bez końcówek fleksyjnych), skróty i odpowiedniki angielskie.
  Dopasowanie ignoruje wielkość liter i polskie znaki (patrz §6.5).

## 5. Metodyka

1. **Active Recall** – na awersie tylko pytanie, podpowiedź i słowa-klucze. Użytkownik odpowiada w myślach
   lub na głos, dopiero potem odwraca kartę.
2. **Schemat odpowiedzi na obronie** – każda odpowiedź ma 4 sekcje: Definicja → Podział → Przykład IT → Wniosek.
   Ten sam szkielet wraca w symulacji egzaminu (checklista) i w treningu słów-kluczy.
3. **System Leitnera** – każda karta ma pudełko: `0` nowa, `1` trudna, `2` w trakcie, `3` opanowana.
   Swipe w prawo („Umiem”): 0→2, 1→2, 2→3, 3→3. Swipe w lewo („Jeszcze powtórz”): dowolne → 1.
   Do opanowania karty potrzeba dwóch udanych przypomnień w osobnych sesjach (spaced repetition).
4. **Pudełko błędów** – karta odrzucona w lewo wraca do bieżącej sesji (3 pozycje dalej lub na koniec kolejki),
   aż zostanie przesunięta w prawo.

## 6. Moduły (dolny pasek nawigacji – 5 zakładek)

### 6.1 Fiszki (Leitner, swipe)
- Filtry (chipy): Wszystkie · Ogólne · Kierunkowe · Dzień 1 · Dzień 2 · Dzień 3 · Trudne. Przełącznik „pomiń opanowane”.
- Kolejność w sesji: trudne → nowe → w trakcie → opanowane.
- Karta 3D (obrót `rotateY`): awers – kategoria, numer (np. „Ogólne · 3”), dział, pełny tytuł, ramka „Podpowiedź”,
  chipy słów-kluczy. Rewers – przewijane sekcje z ikonami: Definicja, Podział, Przykład IT, Wniosek; wyróżnione terminy.
- Gest: `framer-motion` `drag="x"`, obrót karty proporcjonalny do przesunięcia, nakładki „UMIEM” / „POWTÓRZ”,
  próg 110 px lub prędkość > 500 px/s, karta odlatuje za ekran. `touch-action: pan-y` – rewers da się przewijać pionowo.
- Przyciski: czerwony „Jeszcze powtórz” (lewo), „Obróć”, zielony „Umiem” (prawo), „Cofnij” ostatnią ocenę.
- Klawiatura: ← / → ocena, Spacja / Enter obrót. Wibracja `navigator.vibrate(12)` przy ocenie (jeśli dostępna).
- Licznik: „pozostało X · umiem Y · do powtórki Z”. Ekran końca sesji ze statystyką i przyciskiem „Powtórz trudne”.

### 6.2 Egzamin (symulacja obrony + Quiz ABC)
Przełącznik segmentowy: **Symulacja ustna** | **Quiz ABC**.

Symulacja ustna:
- „Losuj zestaw” → 1 pytanie ogólne + 2 kierunkowe (opcja „preferuj słabsze” – losowanie ważone: trudne ×3, nowe ×2,
  w trakcie ×1,5, opanowane ×1). Czas na odpowiedź do wyboru: 2 lub 3 min (domyślnie 3).
- Dla każdego pytania: tytuł, przycisk „Start”, okrągły licznik czasu z odliczaniem, pauza, „Zakończ wcześniej”.
  Opcjonalnie widoczny szkielet [Definicja] → [Podział] → [Przykład IT] → [Wniosek].
- Na końcu czasu: sygnał dźwiękowy (Web Audio, bez plików) + wibracja → checklista 4 kryteriów:
  „Czy padła definicja?”, „Czy podano podział/klasyfikację?”, „Czy podano przykład z IT?”, „Czy sformułowano wniosek?”
  oraz rozwijana modelowa odpowiedź do porównania.
- Podsumowanie zestawu: wynik każdego pytania (x/4) i łącznie (%), zapis w historii. Pytanie z wynikiem < 3/4
  trafia do pudełka „trudne” (box = 1). Historia ostatnich 10 symulacji.

Quiz ABC:
- Zakres: Wszystkie / Ogólne / Kierunkowe / Dzień 1–3; liczba pytań: 10 / 20 / wszystkie.
- Kolejność pytań i odpowiedzi tasowana (indeks poprawnej odpowiedzi przeliczany po tasowaniu).
- Natychmiastowa informacja zwrotna (zielony / czerwony) + wyjaśnienie, „Dalej”. Podsumowanie z listą błędów.
- Statystyki globalne: liczba odpowiedzi i skuteczność.

### 6.3 Plan (4-dniowy sprint)
- „Rozpocznij sprint dziś” zapisuje datę startu; bieżący dzień = różnica dni + 1 (1–4). Można zmienić ręcznie.
- 4 karty dni (tytuł i podtytuł z `DAYS`): pasek postępu dnia, lista pytań dnia z kropkami statusu, przycisk
  „Ucz się” (otwiera Fiszki z filtrem tego dnia).
- Postęp dni 1–3 = (opanowane + 0,5 × w trakcie) / liczba pytań dnia.
- Dzień 4 – zadania wyliczane automatycznie: ≥ 1 pełna symulacja (3 pytania), 0 kart „trudnych”, ≥ 3 odpowiedzi ustne
  łącznie, skuteczność quizu ≥ 80% przy ≥ 30 odpowiedziach. Postęp dnia 4 = odsetek spełnionych zadań.
- Pasek postępu ogólnego = średnia z 4 dni. Rozkład statusów 40 kart (nowe / trudne / w trakcie / opanowane).

### 6.4 Trening (Szkielet odpowiedzi + Active Recall)
Przełącznik segmentowy: **Słowa-klucze** | **Uzupełnij luki**.

Słowa-klucze (Keyword Matcher):
- Wybór pytania (lista z wyszukiwaniem, „Losuj”, „Następne”). Widoczny tytuł i szkielet
  [Definicja] → [Podziały/Normy] → [Przykład IT] → [Wniosek].
- Pole tekstowe na hasła, które powiedziałoby się komisji. Przycisk mikrofonu (Web Speech API, `pl-PL`),
  jeśli przeglądarka go obsługuje – dopisuje rozpoznany tekst.
- „Sprawdź” → zielone badge (przywołane pojęcia), czerwone badge (pominięte pojęcia z `mustSay`), wynik %,
  najlepszy wynik zapisany per pytanie, rozwijana modelowa odpowiedź.

Uzupełnij luki (Cloze):
- Zakres jak w quizie. Zdania z `cloze` w losowej kolejności; luki jako pola tekstowe w treści zdania.
- „Sprawdź” → każda luka zielona / czerwona z poprawną odpowiedzią. Akceptowane warianty po `|`;
  porównanie po normalizacji, tolerancja 1 literówki dla odpowiedzi ≥ 5 znaków.

### 6.5 Algorytm dopasowania słów-kluczy
```
normalize(s): małe litery → usunięcie diakrytyków (NFD + ł→l) → znaki inne niż [a-z0-9] → spacja → pojedyncze spacje
tokens(text) = normalize(text).split(' ')
matchAlias(alias, tokens):
  a = normalize(alias).split(' ')
  jeśli a ma 1 słowo:
    len ≤ 3  → token === a   (skróty: IOD, OSI, TCP – całe słowo)
    len ≥ 4  → token.startsWith(a)  lub (len ≥ 6 i levenshtein(token.slice(0, len), a) ≤ 1)
  jeśli wiele słów: istnieje i, że każde a[j] pasuje (regułą wyżej) do tokens[i + j]
pojęcie przywołane ⇔ term lub dowolny alias pasuje
```

### 6.6 Kompendium (Baza wiedzy)
- Pole wyszukiwania (natychmiastowe, bez polskich znaków): tytuł, słowa-klucze, `mustSay`, cała odpowiedź.
- Filtry: Wszystkie / Ogólne / Kierunkowe, chipy działów, status (nowe / trudne / w trakcie / opanowane).
- Lista kart-akordeonów: numer, tytuł, dział, status; po rozwinięciu pełna odpowiedź w 4 sekcjach
  z podświetleniem wyszukiwanej frazy oraz przycisk „Ćwicz słowa-klucze”.

## 7. Stan aplikacji (`localStorage`, klucz `fiszki-obrona:v1`)

```js
{
  cards:    { [id]: { box: 0|1|2|3, right: 0, wrong: 0, last: 1729260000000 } },
  exams:    [ { ts, ids: ['O4','K3','K17'], minutes: 3, scores: { O4: { definition: true, classification: true, example: false, conclusion: true } } } ],
  quiz:     { answered: 0, correct: 0 },
  matcher:  { [id]: najlepszyWynikProcent },
  cloze:    { answered: 0, correct: 0 },
  sprint:   { start: '2026-10-18' | null },
  settings: { theme: 'system'|'light'|'dark', examMinutes: 3, tab: 'cards' },
}
```
Zapis po każdej zmianie (debounce niepotrzebny – mały obiekt). Odczyt odporny na brak / uszkodzony JSON.
Ustawienia: przełącznik motywu (system / jasny / ciemny), eksport i import postępu (plik JSON), reset postępu z potwierdzeniem.

## 8. UI / UX
- Mobile-first, kontener `max-w-2xl` wyśrodkowany na desktopie. Wysokość `100dvh`, `env(safe-area-inset-*)`.
- Styl Duolingo/Anki: karty `rounded-3xl`, wyraźne cienie, duża typografia, kolory: indigo/violet (akcent),
  emerald (umiem), rose (powtórz), amber (trudne / w trakcie). Pełny tryb jasny i ciemny.
- Górny pasek: nazwa, mini pasek postępu ogólnego, przełącznik motywu, menu ustawień.
- Dolny pasek: Fiszki · Egzamin · Plan · Trening · Baza (ikony lucide + podpis), aktywna zakładka wyróżniona.
- Dostępność: `aria-label` przy przyciskach-ikonach, widoczny fokus, kontrast AA.

## 9. Kryteria akceptacji
- `npm run validate` → 40 poprawnych pytań; `npm run build` bez błędów i ostrzeżeń.
- Na ekranie 390×844 (iPhone) i 1280×800 (desktop): brak poziomego przewijania, wszystkie moduły używalne.
- Swipe palcem i myszą, strzałki i spacja działają; postęp przetrwa odświeżenie strony.
- Lighthouse PWA: aplikacja instalowalna, działa offline.

## 10. Wdrożenie na Netlify (za darmo)
1. Netlify → „Add new site” → „Import an existing project” → GitHub → `TomaszOpalka/fiszki`.
2. Branch: `main`. Build command i katalog publikacji Netlify odczyta z `netlify.toml`
   (`npm run build`, `dist`). Zmienne środowiskowe nie są potrzebne.
3. Każdy push na `main` automatycznie publikuje nową wersję.
4. Na telefonie: otwórz adres strony → „Dodaj do ekranu głównego” – aplikacja działa jak natywna, także offline.

## 11. Podział pracy
- Planowanie, schemat danych, konfiguracja, ekstrakcja tekstu z PDF, przegląd i testy: model Opus.
- Implementacja: model Sonnet – 6 agentów treści (konwersja odpowiedzi z PDF na fiszki, po jednym na plik
  `src/data/*.js`) i 1 agent UI (`src/App.jsx`), pracujący równolegle na wspólnym kontrakcie z §4 i §7.
