// Pytania ogólne 1–7: Prawo w informatyce.
// O3 jest wzorcem jakości i formatu dla wszystkich pozostałych pytań.
export default [
  {
    id: 'O3',
    category: 'ogolne',
    number: 3,
    day: 1,
    area: 'Prawo',
    title: 'Ochrona danych osobowych w świetle RODO – zasady przetwarzania, podstawy prawne i obowiązki administratora',
    hint: 'Zacznij od definicji danych osobowych (art. 4 pkt 1), potem zasady z art. 5 i podstawy z art. 6. Zakończ privacy by design, DPIA i zgłoszeniem naruszenia w 72 h.',
    keywords: [
      'Rozporządzenie (UE) 2016/679',
      'art. 5 – zasady',
      'art. 6 – podstawy',
      'ADO / IOD',
      'DPIA (art. 35)',
      '72 h (art. 33)',
      'kary do 20 mln € / 4%',
    ],
    answer: {
      definition:
        '**RODO** (Rozporządzenie Parlamentu Europejskiego i Rady **(UE) 2016/679**, stosowane od **25 maja 2018 r.**) to jednolity w całej UE akt regulujący przetwarzanie danych osobowych. **Dane osobowe** to wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej (art. 4 pkt 1), np. imię i nazwisko, PESEL, adres IP czy identyfikator cookie. Za zgodność przetwarzania odpowiada **administrator danych (ADO)**, który może powierzyć przetwarzanie **podmiotowi przetwarzającemu** na podstawie umowy (art. 28).',
      classification: [
        '**Zasady przetwarzania (art. 5):** zgodność z prawem, rzetelność i przejrzystość; ograniczenie celu; **minimalizacja danych**; prawidłowość; ograniczenie przechowywania; integralność i poufność oraz nadrzędna zasada **rozliczalności** (art. 5 ust. 2).',
        '**Podstawy prawne (art. 6):** zgoda, wykonanie umowy, obowiązek prawny, ochrona żywotnych interesów, zadanie w interesie publicznym, **prawnie uzasadniony interes** administratora. Dane szczególnych kategorii (np. zdrowie, biometria) regulują przesłanki z art. 9.',
        '**Prawa osoby, której dane dotyczą (art. 15–22):** dostęp, sprostowanie, usunięcie („**prawo do bycia zapomnianym**”, art. 17), ograniczenie przetwarzania, **przenoszenie danych** (art. 20), sprzeciw oraz prawo do niepodlegania decyzjom zautomatyzowanym, w tym profilowaniu.',
        '**Obowiązki administratora:** **privacy by design i by default** (art. 25), rejestr czynności przetwarzania (art. 30), środki bezpieczeństwa adekwatne do ryzyka (art. 32), **ocena skutków (DPIA)** dla przetwarzania wysokiego ryzyka (art. 35), wyznaczenie **IOD** w przypadkach z art. 37.',
        '**Naruszenia i sankcje:** zgłoszenie naruszenia organowi nadzorczemu (w Polsce **PUODO**) w ciągu **72 godzin** (art. 33), zawiadomienie osób przy wysokim ryzyku (art. 34); administracyjne kary pieniężne do **20 mln EUR lub 4% rocznego światowego obrotu** (art. 83).',
      ],
      example:
        'Sklep internetowy przetwarza dane klientów na podstawie **wykonania umowy** (realizacja zamówienia) i **zgody** (newsletter). Zespół IT wdraża **szyfrowanie** (TLS w tranzycie, AES-256 dla danych w spoczynku), **pseudonimizację** danych w środowisku testowym i politykę retencji logów. Przed uruchomieniem systemu rekomendacji opartego na profilowaniu przeprowadza **DPIA**, a z dostawcą chmury (np. AWS, Microsoft Azure) zawiera **umowę powierzenia** z art. 28.',
      conclusion:
        'RODO przesuwa ciężar ochrony danych z formalnych procedur na **podejście oparte na ryzyku i rozliczalność** – administrator musi umieć wykazać zgodność. Dla informatyka oznacza to wbudowanie ochrony danych w architekturę systemu już na etapie projektowania.',
    },
    mustSay: [
      { term: 'Dane osobowe (art. 4)', aliases: ['dane osobow', 'danych osobow', 'personal data'] },
      { term: 'Administrator danych (ADO)', aliases: ['administrator', 'ado'] },
      { term: 'Podmiot przetwarzający / powierzenie', aliases: ['podmiot przetwarz', 'procesor', 'powierzeni'] },
      { term: 'Minimalizacja danych', aliases: ['minimaliz'] },
      { term: 'Ograniczenie celu', aliases: ['ograniczeni celu', 'celowosc'] },
      { term: 'Rozliczalność', aliases: ['rozliczaln', 'accountability'] },
      { term: 'Podstawy prawne / zgoda (art. 6)', aliases: ['zgod', 'podstaw prawn', 'uzasadnion interes'] },
      { term: 'Prawo do bycia zapomnianym', aliases: ['zapomnian', 'prawo do usuniecia', 'usuniecie danych'] },
      { term: 'Privacy by design / by default', aliases: ['privacy by', 'by design', 'by default'] },
      { term: 'DPIA – ocena skutków', aliases: ['dpia', 'ocena skutk', 'oceny skutk'] },
      { term: 'Inspektor ochrony danych (IOD)', aliases: ['iod', 'inspektor', 'dpo'] },
      { term: 'Zgłoszenie naruszenia w 72 h', aliases: ['72', 'naruszeni'] },
      { term: 'Kary do 20 mln € / 4% obrotu', aliases: ['20 mln', 'kary', 'kara pieniezn'] },
    ],
    quiz: [
      {
        q: 'W jakim terminie administrator musi zgłosić naruszenie ochrony danych osobowych organowi nadzorczemu (art. 33 RODO)?',
        options: ['24 godzin', '72 godzin', '7 dni', '30 dni'],
        correct: 1,
        explain: 'Art. 33 RODO: bez zbędnej zwłoki, w miarę możliwości nie później niż w ciągu 72 godzin od stwierdzenia naruszenia.',
      },
      {
        q: 'Który artykuł RODO wprowadza obowiązek uwzględniania ochrony danych w fazie projektowania (privacy by design)?',
        options: ['Art. 17', 'Art. 30', 'Art. 25', 'Art. 83'],
        correct: 2,
        explain: 'Art. 25 – „Uwzględnianie ochrony danych w fazie projektowania oraz domyślna ochrona danych”.',
      },
      {
        q: 'Jaka jest maksymalna wysokość administracyjnej kary pieniężnej za najpoważniejsze naruszenia RODO?',
        options: [
          '10 mln EUR lub 2% światowego obrotu',
          '5 mln EUR lub 1% światowego obrotu',
          '50 mln EUR lub 10% światowego obrotu',
          '20 mln EUR lub 4% światowego obrotu',
        ],
        correct: 3,
        explain: 'Art. 83 ust. 5 RODO: do 20 000 000 EUR lub do 4% całkowitego rocznego światowego obrotu – w zależności od tego, która kwota jest wyższa.',
      },
    ],
    cloze: [
      {
        text: 'Naruszenie ochrony danych osobowych administrator zgłasza {{organowi nadzorczemu|PUODO|UODO}} w ciągu {{72}} godzin od jego stwierdzenia.',
      },
      {
        text: 'Ocenę skutków dla ochrony danych, czyli {{DPIA}}, przeprowadza się dla przetwarzania o wysokim ryzyku zgodnie z art. {{35}} RODO.',
      },
    ],
  },
]
