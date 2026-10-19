# Obrona MGR – fiszki z Informatyki

Mobilna aplikacja webowa (PWA) do intensywnej, 4-dniowej nauki do obrony pracy magisterskiej:
40 zagadnień (15 ogólnych + 25 kierunkowych) z opracowania odpowiedzi na egzamin dyplomowy
(`docs/`: wersja pełna i skrócona „W pigułce”), każde jako fiszka według schematu
**Definicja → Podział → Przykład IT → Wniosek**, a do tego w wersji skróconej i pełnej wprost z PDF-ów.

Bez backendu, bez kluczy API, bez kont – całość działa w przeglądarce, a postęp zapisuje się
w `localStorage` urządzenia. Hosting za darmo na Netlify.

## Moduły

| Zakładka | Co robi |
|---|---|
| **Fiszki** | System Leitnera z gestem swipe (prawo = „Umiem”, lewo = „Jeszcze powtórz”), obrót karty 3D, filtry (dzień, kategoria, trudne). Na rewersie przycisk z odpowiedzią z PDF („W pigułce” i pełna). Na komputerze: ← → i spacja. |
| **Egzamin** | Symulacja obrony: losowanie 1 pytania ogólnego i 2 kierunkowych, odpowiedź ustna z timerem 2/3 min i checklistą 4 kryteriów. Quiz ABC ze szczegółów (artykuły, normy ISO, złożoności). |
| **Plan** | 4-dniowy sprint z paskami postępu (ogólny i dzienny). Dzień 4 rozliczany automatycznie z symulacji, quizu i fiszek „Trudne”. |
| **Trening** | Keyword Matcher – wpisujesz lub dyktujesz hasła, aplikacja pokazuje zielone (przywołane) i czerwone (pominięte) pojęcia. Tryb „Uzupełnij luki” (cloze). |
| **Baza** | Kompendium wszystkich 40 zagadnień z natychmiastowym wyszukiwaniem (także w tekście PDF) i filtrami. Każde zagadnienie w trzech widokach: Fiszka, W pigułce, Pełna. |

## Uruchomienie lokalne

```bash
npm install
npm run dev        # serwer deweloperski
npm run validate   # sprawdzenie poprawności bazy pytań
npm run build      # build produkcyjny do dist/
```

## Wdrożenie na Netlify (plan Free)

1. Zaloguj się na [netlify.com](https://www.netlify.com) → **Add new site** → **Import an existing project** → **GitHub**.
2. Wybierz repozytorium `TomaszOpalka/fiszki`, gałąź `main`.
3. Ustawienia buildu Netlify odczyta z `netlify.toml` (`npm run build`, katalog `dist`). Nic więcej nie trzeba ustawiać.
4. Kliknij **Deploy**. Każdy kolejny push na `main` publikuje nową wersję automatycznie.

Na telefonie otwórz adres strony i wybierz **Dodaj do ekranu głównego** – aplikacja uruchamia się
jak natywna i działa offline.

## Edycja treści pytań

Fiszki są w `src/data/ogolne-*.js` i `src/data/kierunkowe-*.js` (format opisany w `PLAN.md`, §4),
a odpowiedzi z PDF-ów – w `src/data/pdf-skrocone.js` („W pigułce”) i `src/data/pdf-pelne.js` (pełne). Po zmianach uruchom `npm run validate`.

Pełny plan i specyfikacja: [`PLAN.md`](PLAN.md).
