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
src/data/index.js          – złożenie bazy: QUESTIONS, QUESTIONS_BY_ID, DAYS, CATEGORY_LABELS, AREAS
src/data/*.js              – treść merytoryczna (6 plików, każdy eksportuje tablicę pytań)
```

## 3. Lista 40 zagadnień

> PDF z pytaniami nie trafił do repozytorium, więc lista poniżej to rekonstrukcja na podstawie
> zakresu podanego w zleceniu (podział na dni i działy). Brzmienie pytań można podmienić 1:1 w
> plikach `src/data/*.js` – aplikacja nie zależy od konkretnych tytułów.

### Ogólne (Dzień 1) – `ogolne-prawo.js` (O1–O7), `ogolne-ekonomia-szbi.js` (O8–O15)

| ID | Dział | Zagadnienie |
|---|---|---|
| O1 | Prawo | Ochrona programów komputerowych w prawie autorskim – utwór, prawa osobiste i majątkowe, program stworzony przez pracownika |
| O2 | Prawo | Licencje oprogramowania – licencje własnościowe a wolne i otwarte (GPL, MIT, Apache, copyleft) |
| O3 | Prawo | Ochrona danych osobowych w świetle RODO – zasady przetwarzania, podstawy prawne i obowiązki administratora |
| O4 | Prawo | Identyfikacja elektroniczna i usługi zaufania – rozporządzenie eIDAS, rodzaje podpisów elektronicznych |
| O5 | Prawo | Krajowy system cyberbezpieczeństwa – ustawa o KSC oraz dyrektywy NIS i NIS2 |
| O6 | Prawo | Przestępstwa przeciwko ochronie informacji w Kodeksie karnym (art. 267–269b, 287 k.k.) |
| O7 | Prawo | Świadczenie usług drogą elektroniczną i umowy w IT – UŚUDE, umowy wdrożeniowe, SLA |
| O8 | Ekonomia | Podstawowe kategorie mikroekonomii – popyt, podaż, równowaga rynkowa, elastyczność, struktury rynku |
| O9 | Ekonomia | Podstawowe kategorie makroekonomii – PKB, inflacja, bezrobocie, polityka pieniężna i fiskalna |
| O10 | Ekonomia | Ocena efektywności inwestycji IT – NPV, IRR, ROI, okres zwrotu, TCO, próg rentowności |
| O11 | Ekonomia | Gospodarka cyfrowa i modele biznesowe e-biznesu (B2B, B2C, SaaS, platformy, efekt sieciowy) |
| O12 | SZBI i audyt | System Zarządzania Bezpieczeństwem Informacji wg ISO/IEC 27001:2022 |
| O13 | SZBI i audyt | Atrybuty bezpieczeństwa informacji – triada CIA i atrybuty rozszerzone (ISO/IEC 27000) |
| O14 | SZBI i audyt | Zarządzanie ryzykiem w bezpieczeństwie informacji – ISO 31000, ISO/IEC 27005, metody analizy |
| O15 | SZBI i audyt | Audyt systemów informatycznych – rodzaje, etapy, standardy (ISO 19011, ISO/IEC 27007, COBIT, ISACA) |

### Kierunkowe 1–13 (Dzień 2) – `kierunkowe-pm-bi.js` (K1–K8), `kierunkowe-alg-db.js` (K9–K13)

| ID | Dział | Zagadnienie |
|---|---|---|
| K1 | Zarządzanie projektami | Metodyki zarządzania projektami IT – podejście klasyczne (PMBOK, PRINCE2, Waterfall) a zwinne (Agile) |
| K2 | Zarządzanie projektami | Scrum i Kanban – role, artefakty, zdarzenia, limity WIP |
| K3 | Zarządzanie projektami | Planowanie i kontrola projektu – WBS, ścieżka krytyczna (CPM), PERT, wykres Gantta, metoda wartości wypracowanej (EVM) |
| K4 | Business Intelligence | Systemy Business Intelligence – definicja, architektura, KPI, dashboardy, analityka opisowa → preskryptywna |
| K5 | Hurtownie danych | Hurtownia danych – definicja Inmona, architektura, podejście Inmona a Kimballa, data mart |
| K6 | Hurtownie danych | Proces ETL i ELT – ekstrakcja, transformacja, ładowanie, jakość danych |
| K7 | Hurtownie danych | Modelowanie wielowymiarowe i OLAP – schemat gwiazdy i płatka śniegu, fakty i wymiary, SCD, operacje OLAP |
| K8 | Business Intelligence | Big Data – model 5V, ekosystem Hadoop i Spark, Data Lake i Lakehouse |
| K9 | Złożoność | Złożoność obliczeniowa algorytmów – notacje O, Ω, Θ, złożoność czasowa i pamięciowa |
| K10 | Złożoność | Klasy złożoności problemów – P, NP, NP-zupełne, NP-trudne, problem P vs NP |
| K11 | Złożoność | Algorytmy sortowania i wyszukiwania oraz struktury danych – porównanie złożoności |
| K12 | Bazy danych | Relacyjny model danych i normalizacja – klucze, zależności funkcyjne, postacie normalne 1NF–BCNF, SQL |
| K13 | Bazy danych | Transakcje i ACID, poziomy izolacji, bazy NoSQL i twierdzenie CAP |

### Kierunkowe 14–25 (Dzień 3) – `kierunkowe-os-net.js` (K14–K19), `kierunkowe-ml-sec.js` (K20–K25)

| ID | Dział | Zagadnienie |
|---|---|---|
| K14 | IoT | Internet Rzeczy – architektura warstwowa, protokoły (MQTT, CoAP, LoRaWAN, Zigbee), edge i fog computing |
| K15 | Systemy operacyjne | System operacyjny – funkcje, architektury jądra, procesy i wątki, planowanie przydziału procesora |
| K16 | Systemy operacyjne | Zarządzanie pamięcią – pamięć wirtualna, stronicowanie, segmentacja, algorytmy wymiany stron |
| K17 | Systemy operacyjne | Współbieżność i synchronizacja – sekcja krytyczna, semafory, muteksy, zakleszczenia (warunki Coffmana) |
| K18 | Sieci komputerowe | Modele warstwowe ISO/OSI i TCP/IP – warstwy, protokoły, enkapsulacja |
| K19 | Sieci komputerowe | Adresacja IP i routing – IPv4/IPv6, CIDR, podsieci, NAT, protokoły routingu (RIP, OSPF, BGP) |
| K20 | Uczenie maszynowe | Uczenie maszynowe – definicja, rodzaje uczenia, przeuczenie, walidacja, metryki jakości modeli |
| K21 | Uczenie maszynowe | Sztuczne sieci neuronowe i głębokie uczenie – perceptron, propagacja wsteczna, CNN, RNN, Transformery |
| K22 | Architektura | Architektury systemów informatycznych – warstwowa, MVC, SOA, mikroserwisy, REST, konteneryzacja |
| K23 | Architektura | Chmura obliczeniowa – definicja NIST, modele usług (IaaS, PaaS, SaaS) i wdrożenia, model współdzielonej odpowiedzialności |
| K24 | Cyberzagrożenia | Klasyfikacja cyberzagrożeń – malware, ransomware, phishing, DDoS, APT, OWASP Top 10, Cyber Kill Chain |
| K25 | Cyberzagrożenia | Metody ochrony systemów – kryptografia symetryczna i asymetryczna, PKI, MFA, IDS/IPS, SIEM, Zero Trust |

## 4. Schemat pytania (kontrakt danych)

Każdy plik w `src/data/` eksportuje `export default [ ...pytania ]`. Wzorzec: **O3 w `ogolne-prawo.js`**.

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
    classification: ['…'],  // 2. Podziały / etapy / architektura (4–7 punktów, każdy „**Nazwa:** opis”)
    example: '…',           // 3. Przykład z praktyki IT (narzędzia, normy, przepisy)
    conclusion: '…',        // 4. Wniosek (1–2 zdania)
  },
  mustSay: [                // 8–14 pojęć obowiązkowych do Keyword Matchera
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
- Planowanie, schemat danych, konfiguracja, wzorcowe pytanie O3, przegląd i testy: model Opus.
- Implementacja: model Sonnet – 6 agentów treści (po jednym na plik `src/data/*.js`) i 1 agent UI (`src/App.jsx`),
  pracujący równolegle na wspólnym kontrakcie z §4 i §7.
