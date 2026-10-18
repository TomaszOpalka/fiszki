// Pełne odpowiedzi z opracowania „Egzamin dyplomowy – Informatyka, studia magisterskie – wersja pełna” (PDF).
// Plik wygenerowany automatycznie z PDF (akapity; „• ” = punkt listy; **…** = słowa kluczowe pogrubione w PDF).
export default {
 "O1": {
  "title": "Zasady bezpieczeństwa informacji w przedsiębiorstwie",
  "paragraphs": [
   "Informacja jest dziś jednym z najcenniejszych aktywów przedsiębiorstwa – obok kapitału, ludzi i technologii decyduje o jego przewadze konkurencyjnej. **Bezpieczeństwo informacji** definiuje się (zgodnie z normą ISO/IEC 27000) jako zachowanie jej **poufności, integralności i dostępności** – tzw. triada CIA. Poufność oznacza, że dostęp do informacji mają wyłącznie osoby uprawnione; integralność – że informacja nie została zmieniona w sposób nieautoryzowany i jest kompletna; dostępność – że uprawniony użytkownik może z niej skorzystać wtedy, gdy jej potrzebuje. Triadę uzupełnia się często o **rozliczalność** (możliwość przypisania działania konkretnej osobie), **autentyczność** oraz **niezaprzeczalność**.",
   "Na praktykę zarządzania bezpieczeństwem składa się kilka fundamentalnych zasad:",
   "• **zasada minimalnych uprawnień** (least privilege) i **wiedzy koniecznej** (need to know) – pracownik otrzymuje tylko te uprawnienia, które są niezbędne do wykonywania jego obowiązków;",
   "• **rozdzielenie obowiązków** (segregation of duties) – krytyczne operacje nie mogą zależeć od jednej osoby;",
   "• **obrona w głąb** (defense in depth) – wiele warstw zabezpieczeń: fizycznych, technicznych i organizacyjnych, tak aby awaria jednej nie oznaczała utraty ochrony;",
   "• **klasyfikacja informacji** – podział na kategorie (np. publiczna, wewnętrzna, poufna, ściśle poufna) z przypisanymi regułami postępowania;",
   "• **podejście oparte na ryzyku** – dobór zabezpieczeń proporcjonalny do wartości aktywa i poziomu zagrożenia;",
   "• **bezpieczeństwo na etapie projektowania i domyślne** (security/privacy by design and by default) oraz koncepcja **zero trust** – nigdy nie ufaj, zawsze weryfikuj;",
   "• **ciągłe doskonalenie** – bezpieczeństwo jest procesem, a nie stanem osiąganym jednorazowo.",
   "Zasady te materializują się w **polityce bezpieczeństwa informacji** zatwierdzonej przez zarząd oraz w **systemie zarządzania bezpieczeństwem informacji (SZBI)** opartym na normie **ISO/IEC 27001:2022**, której załącznik A obejmuje 93 zabezpieczenia w czterech grupach: organizacyjnej, osobowej, fizycznej i technologicznej. Szczególną rolę odgrywa czynnik ludzki – szkolenia i budowanie kultury bezpieczeństwa – ponieważ znaczna część incydentów zaczyna się od błędu lub manipulacji pracownikiem (np. phishing).",
   "Bezpieczeństwo informacji ma również wymiar prawny. Przedsiębiorstwo musi uwzględniać m.in. **RODO** (ochrona danych osobowych), przepisy o **tajemnicy przedsiębiorstwa** (art. 11 ustawy o zwalczaniu nieuczciwej konkurencji – ochrona przysługuje tylko wtedy, gdy przedsiębiorca podjął działania w celu utrzymania poufności informacji), a w przypadku podmiotów kluczowych i ważnych – znowelizowaną **ustawę o krajowym systemie cyberbezpieczeństwa**, wdrażającą dyrektywę NIS2 (obowiązuje od 3 kwietnia 2026 r.).",
   "Podsumowując, skuteczne bezpieczeństwo informacji wymaga połączenia środków organizacyjnych, technicznych i prawnych oraz zaangażowania najwyższego kierownictwa – to ono ponosi ostateczną odpowiedzialność za ochronę zasobów informacyjnych firmy."
  ]
 },
 "O2": {
  "title": "Istota audytu",
  "paragraphs": [
   "**Audyt** (łac. audire – słuchać) to niezależna, obiektywna i systematyczna ocena określonego obszaru działalności organizacji pod kątem zgodności z przyjętymi kryteriami – przepisami prawa, normami, procedurami wewnętrznymi lub dobrymi praktykami. Jego istotą jest porównanie **stanu faktycznego** ze **stanem pożądanym** (wzorcowym), zebranie dowodów, sformułowanie ustaleń oraz rekomendacji. W klasycznym ujęciu Instytutu Audytorów Wewnętrznych (IIA) audyt wewnętrzny to niezależna i obiektywna działalność zapewniająca i doradcza, której celem jest przysporzenie wartości i usprawnienie działalności organizacji poprzez systematyczną ocenę procesów zarządzania ryzykiem, kontroli i ładu organizacyjnego.",
   "Kluczowe cechy audytu to: **niezależność** (audytor nie ocenia własnej pracy i raportuje do najwyższego szczebla – zarządu lub komitetu audytu), **obiektywizm**, **oparcie na dowodach**, **systematyczność** (określona metodyka) oraz **podejście oparte na ryzyku**. Audyt należy odróżnić od kontroli: kontrola koncentruje się na wykryciu nieprawidłowości i ustaleniu odpowiedzialności (ma charakter retrospektywny), natomiast audyt ocenia cały system i doradza, jak go usprawnić (ma charakter prospektywny).",
   "Wyróżnia się różne rodzaje audytu:",
   "• ze względu na podmiot: **wewnętrzny** (prowadzony przez komórkę organizacji) i **zewnętrzny** (niezależna firma, jednostka certyfikująca, biegły rewident);",
   "• ze względu na przedmiot: **finansowy** (badanie sprawozdań finansowych przez biegłego rewidenta), **zgodności** (compliance, np. z RODO), **operacyjny/efektywnościowy**, **systemów zarządzania** (np. ISO 9001, ISO/IEC 27001 – według wytycznych ISO 19011), **informatyczny** (audyt IT, oparty m.in. na ramach COBIT i standardach ISACA) oraz **audyt bezpieczeństwa**, w tym testy penetracyjne.",
   "Proces audytu obejmuje zwykle cztery etapy: **planowanie** (analiza ryzyka, określenie zakresu, celów i kryteriów, program audytu), **realizację** (zbieranie dowodów: wywiady, przegląd dokumentacji, obserwacja, testy), **raportowanie** (ustalenia, ocena, rekomendacje) oraz **działania sprawdzające** (follow-up) – weryfikację wdrożenia zaleceń.",
   "W informatyce audyt ma szczególne znaczenie: pozwala ocenić bezpieczeństwo systemów, zgodność z przepisami (np. ustawa o KSC nakłada na podmioty kluczowe obowiązek przeprowadzania regularnych audytów bezpieczeństwa systemu informacyjnego) oraz efektywność inwestycji IT. Istotą audytu nie jest więc szukanie winnych, lecz dostarczenie kierownictwu **racjonalnego zapewnienia**, że organizacja działa zgodnie z założeniami, a jej ryzyka są właściwie zarządzane."
  ]
 },
 "O3": {
  "title": "Podmioty prawa cywilnego – osoba fizyczna a osoba prawna",
  "paragraphs": [
   "Podmiotami prawa cywilnego są te jednostki, którym ustawa przyznaje **zdolność prawną**, czyli zdolność do bycia podmiotem praw i obowiązków. Kodeks cywilny wyróżnia trzy kategorie podmiotów: **osoby fizyczne**, **osoby prawne** oraz **jednostki organizacyjne niebędące osobami prawnymi, którym ustawa przyznaje zdolność prawną** (tzw. ułomne osoby prawne, art. 33 k.c.). Od zdolności prawnej należy odróżnić **zdolność do czynności prawnych** – możliwość samodzielnego kształtowania własnej sytuacji prawnej przez składanie oświadczeń woli.",
   "**Osoba fizyczna** to każdy człowiek. Zdolność prawną uzyskuje z chwilą urodzenia (art. 8 k.c.) i traci ją ze śmiercią; dziecko poczęte (nasciturus) ma ją warunkowo w zakresie praw majątkowych, jeżeli urodzi się żywe.",
   "Zdolność do czynności prawnych jest stopniowalna:",
   "• **pełna** – od ukończenia 18 lat, o ile osoba nie została ubezwłasnowolniona całkowicie (art. 11 k.c.);",
   "• **ograniczona** – osoby między 13. a 18. rokiem życia oraz ubezwłasnowolnione częściowo; do ważności poważniejszych czynności potrzebna jest zgoda przedstawiciela ustawowego, z wyjątkiem umów powszechnie zawieranych w drobnych bieżących sprawach życia codziennego (art. 20 k.c.);",
   "• **brak** – osoby poniżej 13 lat i ubezwłasnowolnione całkowicie; w ich imieniu działa przedstawiciel ustawowy.",
   "Osobę fizyczną indywidualizują m.in. imię i nazwisko, PESEL, miejsce zamieszkania i stan cywilny. Może ona również prowadzić działalność gospodarczą jako przedsiębiorca.",
   "**Osoba prawna** to Skarb Państwa i jednostki organizacyjne, którym przepisy szczególne przyznają osobowość prawną (art. 33 k.c.). Przykładami są: spółka z o.o., spółka akcyjna, prosta spółka akcyjna, spółdzielnia, fundacja, stowarzyszenie rejestrowe, jednostki samorządu terytorialnego czy uczelnie publiczne. Osoba prawna uzyskuje osobowość z reguły z chwilą **wpisu do właściwego rejestru** – najczęściej Krajowego Rejestru Sądowego (art. 37 k.c.). Nie działa sama, lecz **przez swoje organy** (teoria organów, art. 38 k.c.), np. zarząd, radę nadzorczą czy zgromadzenie wspólników. Jej zdolność do czynności prawnych jest pełna od chwili powstania, a byt prawny oddzielony od bytu członków – co oznacza przede wszystkim **odrębność majątkową**: za zobowiązania spółki kapitałowej co do zasady odpowiada spółka, a nie wspólnicy.",
   "Najważniejsze różnice można ująć następująco: osoba fizyczna istnieje w sposób naturalny, osoba prawna jest tworem prawa; osoba fizyczna działa osobiście (lub przez przedstawiciela), osoba prawna – przez organy; zdolność do czynności prawnych osoby fizycznej zależy od wieku i stanu psychicznego, osoby prawnej – jest pełna od powstania; osoba prawna kończy byt przez likwidację lub upadłość i wykreślenie z rejestru.",
   "Kategorię pośrednią stanowią ułomne osoby prawne – przede wszystkim spółki osobowe (jawna, partnerska, komandytowa, komandytowo-akcyjna) – które mają zdolność prawną, lecz za ich zobowiązania subsydiarnie odpowiadają (co najmniej niektórzy) wspólnicy."
  ]
 },
 "O4": {
  "title": "Rodzaje i formy zawierania umów",
  "paragraphs": [
   "**Umowa** jest najważniejszym rodzajem czynności prawnej – to zgodne oświadczenia woli co najmniej dwóch stron, zmierzające do ustanowienia, zmiany lub ustania stosunku prawnego. Podstawą prawa umów jest **zasada swobody umów** (art. 353 k.c.): strony mogą ułożyć stosunek prawny według swego uznania, byle jego treść lub cel nie sprzeciwiały się właściwości stosunku, ustawie ani zasadom współżycia społecznego.",
   "**Rodzaje umów** klasyfikuje się według różnych kryteriów:",
   "• **nazwane** (uregulowane w ustawie, np. sprzedaż, najem, dzieło, zlecenie, leasing) i **nienazwane** (np. franczyza, outsourcing IT, umowa o świadczenie usług SaaS);",
   "• **jednostronnie i dwustronnie zobowiązujące**; szczególną grupą są **umowy wzajemne**, w których świadczenie jednej strony jest odpowiednikiem świadczenia drugiej (np. sprzedaż);",
   "• **odpłatne i nieodpłatne** (np. darowizna, użyczenie);",
   "• **konsensualne** (dochodzą do skutku przez samo porozumienie) i **realne** (wymagają dodatkowo wydania rzeczy, np. użyczenie, przechowanie);",
   "• **zobowiązujące** i **rozporządzające** (przenoszące prawo), a także **przedwstępne** (zobowiązanie do zawarcia umowy przyrzeczonej, art. 389 k.c.) i **ramowe**;",
   "• w obrocie konsumenckim – umowy **zawierane na odległość i poza lokalem przedsiębiorstwa**, od których konsument może co do zasady odstąpić w terminie 14 dni.",
   "**Tryby zawierania umów** przewiduje Kodeks cywilny: **ofertę i jej przyjęcie** (art. 66 i n.), **negocjacje** (art. 72 – umowa zostaje zawarta, gdy strony dojdą do porozumienia co do wszystkich postanowień), **aukcję i przetarg** (art. 70 i n.). W praktyce umowa może dojść do skutku także przez **czynności konkludentne** (np. zakup biletu w automacie), a w obrocie elektronicznym – przez akceptację regulaminu i kliknięcie przycisku.",
   "Do wzorców umownych stosuje się art. 384 i n. k.c.",
   "**Formy czynności prawnych** (art. 73–81 k.c.):",
   "• **ustna lub dorozumiana** – zasada, jeśli ustawa nie zastrzega formy szczególnej (art. 60 k.c.);",
   "• **dokumentowa** – złożenie oświadczenia w postaci dokumentu pozwalającego ustalić osobę składającą, np. e-mail, SMS, skan (art. 77 k.c.);",
   "• **pisemna** – własnoręczny podpis na dokumencie;",
   "• **elektroniczna** – opatrzenie oświadczenia kwalifikowanym podpisem elektronicznym; jest równoważna formie pisemnej (art. 78 k.c.);",
   "• **z datą pewną**, **z urzędowo poświadczonym podpisem** oraz **akt notarialny** – wymagany np. przy przeniesieniu własności nieruchomości.",
   "Niezachowanie formy wywołuje skutki zależne od **rygoru**: **ad solemnitatem** – nieważność czynności (np. sprzedaż nieruchomości bez aktu notarialnego); **ad probationem** – ograniczenia dowodowe w procesie (art. 74 k.c.); **ad eventum** – czynność jest ważna, ale nie wywołuje określonych skutków (np. najem lokalu na okres dłuższy niż rok zawarty bez formy pisemnej poczytuje się za zawarty na czas nieoznaczony – art. 660 k.c.).",
   "W branży IT szczególnie istotne są przepisy prawa autorskiego: **przeniesienie autorskich praw majątkowych** do oprogramowania oraz **udzielenie licencji wyłącznej** wymagają formy pisemnej pod rygorem nieważności (art. 53 i art. 67 ust. 5 ustawy o prawie autorskim). Świadomy wybór rodzaju umowy i właściwej formy decyduje więc o bezpieczeństwie prawnym transakcji."
  ]
 },
 "O5": {
  "title": "Procedury zakładania własnego przedsiębiorstwa",
  "paragraphs": [
   "Podstawą prawną podejmowania działalności gospodarczej w Polsce jest **ustawa z 6 marca 2018 r. – Prawo przedsiębiorców**, która wyraża zasadę **wolności gospodarczej**: podjęcie, wykonywanie i zakończenie działalności jest wolne dla każdego na równych prawach, a przedsiębiorca może podejmować wszelkie działania, które nie są prawnie zabronione. Procedura założenia firmy zależy przede wszystkim od wybranej **formy prawnej**.",
   "**Etap przygotowawczy** obejmuje: opracowanie pomysłu i biznesplanu, analizę rynku i konkurencji, wybór formy prawnej (jednoosobowa działalność gospodarcza, spółka cywilna, spółki osobowe lub kapitałowe), określenie przedmiotu działalności według **Polskiej Klasyfikacji Działalności (PKD 2025)**, ustalenie źródeł finansowania (środki własne, dotacja z urzędu pracy, kredyt, inwestor) oraz sprawdzenie, czy działalność nie wymaga **koncesji, zezwolenia lub wpisu do rejestru działalności regulowanej**.",
   "**Jednoosobowa działalność gospodarcza (JDG)** to najprostsza forma. Rejestracja polega na złożeniu bezpłatnego wniosku **CEIDG-1** do Centralnej Ewidencji i Informacji o Działalności Gospodarczej – online lub w urzędzie gminy. Wniosek działa na zasadzie „jednego okienka”: obejmuje zgłoszenie do ZUS/KRUS, wybór formy opodatkowania do urzędu skarbowego oraz dane dla GUS (nadanie numeru REGON).",
   "Przedsiębiorca wybiera formę opodatkowania: **skalę podatkową** (12% i 32%), **podatek liniowy** (19%) lub **ryczałt od przychodów ewidencjonowanych**. Może skorzystać z preferencji składkowych: **ulgi na start** (6 miesięcy bez składek społecznych), następnie **preferencyjnych składek ZUS** (24 miesiące) i **małego ZUS plus**. Osoby o niewielkich przychodach (do 225% minimalnego wynagrodzenia w kwartale) mogą prowadzić **działalność nierejestrowaną**.",
   "**Spółki kapitałowe** wymagają zawarcia umowy spółki (w przypadku sp. z o.o. – w formie aktu notarialnego lub przy wykorzystaniu wzorca w systemie S24), wniesienia kapitału (sp. z o.o. – min. 5 000 zł, prosta spółka akcyjna – min. 1 zł, spółka akcyjna – min. 100 000 zł), powołania organów i **rejestracji w KRS** – wyłącznie elektronicznie, przez Portal Rejestrów Sądowych. Spółka uzyskuje osobowość prawną z chwilą wpisu.",
   "Następnie w ciągu 14 dni należy zgłosić **beneficjenta rzeczywistego** do Centralnego Rejestru Beneficjentów Rzeczywistych (CRBR).",
   "**Czynności dodatkowe** dotyczą wszystkich form: rejestracja dla celów **VAT** (formularz VAT-R), chyba że przedsiębiorca korzysta ze zwolnienia podmiotowego; założenie **rachunku firmowego** (widocznego na „białej liście” podatników VAT); przygotowanie się do **Krajowego Systemu e-Faktur (KSeF)**, obowiązkowego dla większości przedsiębiorców od 1 kwietnia 2026 r.; zgłoszenie pracowników do ZUS, spełnienie wymogów BHP, sanitarnych i przeciwpożarowych, zapewnienie zgodności z RODO; ewentualnie ubezpieczenie OC.",
   "Wybór formy prawnej to decyzja strategiczna – wpływa na **zakres odpowiedzialności** za zobowiązania (w JDG przedsiębiorca odpowiada całym majątkiem osobistym, w sp. z o.o. co do zasady ryzykuje jedynie wniesiony kapitał), na obciążenia podatkowe i składkowe oraz na koszty prowadzenia księgowości (uproszczona ewidencja lub pełne księgi rachunkowe)."
  ]
 },
 "O6": {
  "title": "Przyczyny i rodzaje upadłości przedsiębiorstw",
  "paragraphs": [
   "**Upadłość** to sądowe postępowanie o charakterze zbiorowym (uniwersalnym), którego celem jest zaspokojenie roszczeń wierzycieli niewypłacalnego dłużnika w możliwie najwyższym stopniu, a gdy racjonalne względy na to pozwolą – zachowanie dotychczasowego przedsiębiorstwa dłużnika. Podstawą prawną jest **ustawa z 28 lutego 2003 r. – Prawo upadłościowe**, a alternatywne ścieżki ratowania firm przewiduje **ustawa z 15 maja 2015 r. – Prawo restrukturyzacyjne**.",
   "Przesłanką ogłoszenia upadłości jest **niewypłacalność** (art. 11 p.u.), rozumiana dwojako:",
   "• **płynnościowo** – dłużnik utracił zdolność do wykonywania wymagalnych zobowiązań pieniężnych; domniemywa się ją, gdy opóźnienie przekracza **trzy miesiące**;",
   "• **bilansowo** (w przypadku osób prawnych i niektórych spółek osobowych) – zobowiązania pieniężne przekraczają wartość majątku, a stan ten utrzymuje się **ponad 24 miesiące**.",
   "Zarząd ma obowiązek złożyć wniosek o ogłoszenie upadłości **w terminie 30 dni** od dnia wystąpienia podstawy (art. 21 p.u.); zaniechanie grozi odpowiedzialnością osobistą za zobowiązania spółki (art. 299 k.s.h.), odszkodowawczą, a nawet karną.",
   "**Przyczyny upadłości** dzieli się na:",
   "• **wewnętrzne** – błędy zarządcze i strategiczne, niewłaściwe zarządzanie płynnością finansową, nadmierne zadłużenie, zbyt szybka ekspansja, wysokie koszty stałe, brak innowacyjności, uzależnienie od jednego odbiorcy, słaba kontrola wewnętrzna, nadużycia;",
   "• **zewnętrzne** – dekoniunktura, **zatory płatnicze** (upadłość kontrahentów), wzrost stóp procentowych, cen energii i surowców, wahania kursów walut, zmiany prawa i podatków, silna konkurencja, zdarzenia nadzwyczajne (pandemia, wojna, przerwanie łańcuchów dostaw).",
   "W praktyce czynniki zewnętrzne zwykle ujawniają słabości wewnętrzne – kryzys przetrwają firmy z rezerwami płynności i elastycznym modelem biznesowym. Symptomy zagrożenia pozwalają wcześnie wykryć **modele wczesnego ostrzegania** oparte na analizie dyskryminacyjnej (np. model Altmana, polskie modele Mączyńskiej, Gajdki i Stosa, Hołdy).",
   "**Rodzaje postępowań.** Od 2016 r. w Polsce funkcjonuje jeden rodzaj upadłości – **upadłość prowadzona w celu likwidacji majątku** dłużnika (dawną upadłość układową zastąpiły postępowania restrukturyzacyjne).",
   "Szczególną formą jest **przygotowana likwidacja (pre-pack)** – sprzedaż przedsiębiorstwa lub jego zorganizowanej części na warunkach uzgodnionych jeszcze przed ogłoszeniem upadłości, co pozwala zachować działalność i miejsca pracy. Odrębną kategorię stanowi **upadłość konsumencka** osób fizycznych nieprowadzących działalności gospodarczej. Alternatywą są cztery **postępowania restrukturyzacyjne**: o zatwierdzenie układu, przyspieszone postępowanie układowe, postępowanie układowe oraz sanacja – dostępne dla dłużników niewypłacalnych lub zagrożonych niewypłacalnością. W ujęciu ekonomicznym rozróżnia się także upadłość **techniczną** (utrata płynności) i **ekonomiczną** (trwała nierentowność).",
   "Podsumowując, upadłość jest rozwiązaniem ostatecznym – ustawodawca preferuje restrukturyzację, a zarządzający powinien reagować już na pierwsze sygnały kryzysu."
  ]
 },
 "O7": {
  "title": "Prawa i obowiązki pracownika i pracodawcy",
  "paragraphs": [
   "**Stosunek pracy** (art. 22 Kodeksu pracy) polega na tym, że pracownik zobowiązuje się do wykonywania pracy określonego rodzaju **na rzecz pracodawcy i pod jego kierownictwem**, w miejscu i czasie przez niego wyznaczonym, a pracodawca – do zatrudniania pracownika **za wynagrodzeniem**. Z tej definicji wynikają wzajemne prawa i obowiązki, które uzupełniają **podstawowe zasady prawa pracy** (art. 10 i n. k.p.): prawo do swobodnie wybranej pracy, poszanowanie godności i dóbr osobistych, równe traktowanie i zakaz dyskryminacji, prawo do godziwego wynagrodzenia i wypoczynku, zapewnienie bezpiecznych i higienicznych warunków pracy oraz zasada uprzywilejowania pracownika (postanowienia umów nie mogą być mniej korzystne niż przepisy prawa pracy).",
   "**Obowiązki pracownika** (art. 100 k.p.): sumienne i staranne wykonywanie pracy oraz stosowanie się do poleceń przełożonych, które dotyczą pracy i nie są sprzeczne z prawem lub umową; przestrzeganie czasu pracy, regulaminu pracy i porządku; przestrzeganie przepisów BHP i przeciwpożarowych; dbałość o dobro zakładu i ochrona jego mienia; zachowanie w tajemnicy informacji, których ujawnienie mogłoby narazić pracodawcę na szkodę; przestrzeganie zasad współżycia społecznego. Pracownik może być związany **umową o zakazie konkurencji** (art. 101 k.p.). Naruszenie obowiązków może skutkować **odpowiedzialnością porządkową** (upomnienie, nagana, kara pieniężna), **materialną** (przy winie nieumyślnej co do zasady do wysokości trzymiesięcznego wynagrodzenia – art. 119 k.p.) lub rozwiązaniem umowy.",
   "**Prawa pracownika**: wynagrodzenie nie niższe niż minimalne, wypłacane co najmniej raz w miesiącu, najpóźniej do 10. dnia następnego miesiąca (art. 85 k.p.); ochrona czasu pracy (norma 8 godzin na dobę i przeciętnie 40 godzin w tygodniu, prawo do odpoczynku dobowego i tygodniowego); **urlop wypoczynkowy** – 20 dni przy stażu poniżej 10 lat i 26 dni przy stażu co najmniej 10 lat (art. 154 k.p.); uprawnienia rodzicielskie; ochrona przed **mobbingiem** (art. 94 k.p.) i dyskryminacją; prawo do zrzeszania się; szczególna ochrona trwałości zatrudnienia (np. w wieku przedemerytalnym, w ciąży); prawo do świadectwa pracy; możliwość **pracy zdalnej**, uregulowanej w Kodeksie pracy od 2023 r.",
   "**Obowiązki pracodawcy** (art. 94 k.p.) obejmują m.in.: zapoznanie pracownika z zakresem obowiązków i podstawowymi uprawnieniami; organizowanie pracy w sposób zapewniający pełne wykorzystanie czasu pracy; zapewnienie bezpiecznych i higienicznych warunków pracy oraz szkoleń BHP (pracodawca odpowiada za stan BHP – art. 207 k.p.); terminowe i prawidłowe wypłacanie wynagrodzenia; ułatwianie podnoszenia kwalifikacji; przeciwdziałanie dyskryminacji i mobbingowi; prowadzenie dokumentacji pracowniczej (także w postaci elektronicznej); ochronę danych osobowych pracowników zgodnie z RODO. Od 24 grudnia 2025 r. pracodawca musi także przekazać kandydatowi informację o **wysokości lub przedziale wynagrodzenia** i nie może pytać o zarobki w poprzednich miejscach pracy – to pierwszy etap wdrażania unijnej dyrektywy o przejrzystości wynagrodzeń (2023/970).",
   "**Prawa pracodawcy**: kierowanie pracą i wydawanie poleceń, ustalanie regulaminu pracy, kontrola wykonywania pracy (w tym – w granicach prawa – monitoring), stosowanie kar porządkowych, dochodzenie odszkodowania za szkodę wyrządzoną przez pracownika, rozwiązanie umowy z zachowaniem przepisów.",
   "Relacja pracownik–pracodawca ma charakter wzajemny, jednak prawo pracy pełni przede wszystkim **funkcję ochronną** wobec pracownika jako strony słabszej. Nadzór nad przestrzeganiem przepisów sprawuje **Państwowa Inspekcja Pracy**, a spory rozstrzygają **sądy pracy**."
  ]
 },
 "O8": {
  "title": "Ochrona baz danych",
  "paragraphs": [
   "Bazy danych są cennym aktywem przedsiębiorstwa – ich stworzenie wymaga znacznych nakładów, a ich utrata lub wyciek może oznaczać poważne straty finansowe, wizerunkowe i prawne. Ochronę baz danych należy rozpatrywać w dwóch wymiarach: **prawnym** (ochrona praw twórcy lub producenta bazy) oraz **techniczno-organizacyjnym** (ochrona zawartości przed nieuprawnionym dostępem, utratą czy modyfikacją).",
   "**Ochrona prawna** w Polsce ma dwutorowy charakter, wynikający z dyrektywy 96/9/WE:",
   "• **ochrona prawnoautorska** – na podstawie ustawy z 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych bazy spełniające cechy utworu (twórczy, indywidualny dobór, układ lub zestawienie materiałów) chronione są jako utwory (art. 3 pr. aut.);",
   "• **ochrona sui generis** – na podstawie **ustawy z 27 lipca 2001 r. o ochronie baz danych** chroni się bazy, które nie są utworami, ale których sporządzenie, weryfikacja lub prezentacja wymagały **istotnego, co do jakości lub ilości, nakładu inwestycyjnego**. Producentowi przysługuje wyłączne prawo **pobierania danych** i ich **wtórnego wykorzystania** w całości lub w istotnej części. Ochrona trwa **15 lat** od sporządzenia bazy (lub jej publicznego udostępnienia), a istotna zmiana zawartości rozpoczyna bieg nowego okresu ochrony.",
   "Uzupełniające znaczenie mają: **RODO**, jeśli baza zawiera dane osobowe (art. 32 – obowiązek wdrożenia odpowiednich środków technicznych i organizacyjnych, np. pseudonimizacji i szyfrowania), przepisy o **tajemnicy przedsiębiorstwa**, umowy licencyjne i klauzule poufności (NDA) oraz przepisy karne dotyczące nieuprawnionego dostępu do systemu i niszczenia danych (art. 267–269 k.k.).",
   "**Ochrona techniczna i organizacyjna** obejmuje:",
   "• **kontrolę dostępu** – uwierzytelnianie (w tym wieloskładnikowe), autoryzację opartą na rolach (RBAC), zasadę minimalnych uprawnień, instrukcje GRANT/REVOKE, widoki ograniczające zakres danych i zabezpieczenia na poziomie wierszy (row-level security);",
   "• **szyfrowanie** – danych w spoczynku (np. Transparent Data Encryption), w transmisji (TLS) oraz na poziomie kolumn; **maskowanie i pseudonimizację** danych w środowiskach testowych;",
   "• **kopie zapasowe** zgodne z regułą **3-2-1** (trzy kopie, na dwóch różnych nośnikach, jedna poza siedzibą; obecnie rozszerzaną do 3-2-1-1-0 – z kopią niezmienialną i zweryfikowaną), regularne testy odtwarzania, replikację i klastry wysokiej dostępności;",
   "• **integralność** – ograniczenia (constraints), transakcje spełniające właściwości ACID, dzienniki transakcji;",
   "• **audyt i monitoring** – rejestrowanie operacji, systemy klasy Database Activity Monitoring, wykrywanie anomalii;",
   "• **bezpieczne programowanie i konfigurację** – zapytania parametryzowane chroniące przed **SQL injection**, regularne aktualizacje SZBD, hardening, usuwanie kont domyślnych;",
   "• **środki organizacyjne** – politykę bezpieczeństwa, klasyfikację danych, szkolenia, procedury nadawania i odbierania uprawnień, plany ciągłości działania.",
   "Skuteczna ochrona baz danych wymaga więc połączenia instrumentów prawnych, które zabezpieczają interes ekonomiczny producenta, z warstwą techniczną, która chroni poufność, integralność i dostępność samych danych."
  ]
 },
 "O9": {
  "title": "Rozwój gospodarczy a poziom życia społeczeństwa w świetle podstawowych mierników makroekonomicznych",
  "paragraphs": [
   "W ekonomii rozróżnia się **wzrost gospodarczy** – ilościowe zwiększanie produkcji dóbr i usług, mierzone zwykle tempem zmian realnego PKB – oraz szersze pojęcie **rozwoju gospodarczego**, obejmujące także zmiany jakościowe: strukturalne, technologiczne, instytucjonalne i społeczne, prowadzące do poprawy jakości życia. Wzrost jest warunkiem koniecznym, lecz niewystarczającym rozwoju – możliwy jest wzrost bez rozwoju, np. gdy korzyści trafiają do wąskiej grupy albo są osiągane kosztem środowiska.",
   "**Podstawowe mierniki makroekonomiczne**:",
   "• **produkt krajowy brutto (PKB)** – wartość dóbr i usług finalnych wytworzonych na terytorium kraju w danym okresie; liczony metodą produkcyjną, wydatkową (C + I + G + NX) lub dochodową. Do porównań w czasie stosuje się **PKB realny** (w cenach stałych), a do porównań międzynarodowych – **PKB per capita według parytetu siły nabywczej (PPS/PPP)**;",
   "• **produkt narodowy brutto / dochód narodowy brutto (PNB/DNB)** – uwzględnia dochody czynników produkcji należących do rezydentów, niezależnie od miejsca ich wytworzenia;",
   "• **stopa bezrobocia**, **stopa inflacji** (CPI, HICP), **realne wynagrodzenia i dochód rozporządzalny gospodarstw domowych**, **wskaźnik zatrudnienia**, relacja długu publicznego do PKB.",
   "Mierniki te mają jednak ograniczenia jako miary dobrobytu. PKB nie uwzględnia **pracy nierynkowej** (domowej, wolontariatu), **szarej strefy**, **rozkładu dochodów**, **kosztów środowiskowych**, czasu wolnego ani jakości dóbr publicznych. Może nawet rosnąć w wyniku zdarzeń negatywnych (np. usuwania skutków katastrofy). Dlatego poziom życia ocenia się miernikami uzupełniającymi:",
   "• **wskaźnikiem rozwoju społecznego (HDI)** ONZ – łączącym dochód (DNB per capita wg PPP), zdrowie (oczekiwana długość życia) i edukację (lata nauki);",
   "• **współczynnikiem Giniego** – miarą nierówności dochodowych (0 – pełna równość, 1 – maksymalna nierówność);",
   "• wskaźnikami ubóstwa i wykluczenia społecznego (AROPE), **Better Life Index OECD**, **wskaźnikiem postępu społecznego (SPI)**, **wskaźnikiem rzeczywistego postępu (GPI)** oraz subiektywnymi miarami zadowolenia z życia;",
   "• miernikami zrównoważonego rozwoju (Cele Zrównoważonego Rozwoju ONZ – SDG).",
   "Związek rozwoju gospodarczego z poziomem życia dobrze ilustruje przykład Polski: od akcesji do UE PKB per capita według PPS wzrósł z ok. 50% do ok. 80% średniej unijnej, co przełożyło się na wzrost realnych płac, spadek bezrobocia do jednego z najniższych poziomów w UE, wydłużenie przeciętnego trwania życia i poprawę infrastruktury. Jednocześnie utrzymują się wyzwania: zróżnicowanie regionalne, dostępność mieszkań, jakość usług publicznych i starzenie się społeczeństwa.",
   "Wniosek: wzrost gospodarczy jest fundamentem poprawy poziomu życia, ale pełny obraz dobrobytu daje dopiero zestaw mierników łączący wskaźniki ekonomiczne ze społecznymi i środowiskowymi – zgodnie z postulatami raportu Stiglitza, Sena i Fitoussiego (2009) oraz nurtu „Beyond GDP”."
  ]
 },
 "O10": {
  "title": "Rynek pracy – uwarunkowania, problemy, tendencje",
  "paragraphs": [
   "**Rynek pracy** to miejsce, w którym spotykają się **podaż pracy** (osoby zdolne i chętne do pracy) i **popyt na pracę** (zapotrzebowanie pracodawców), a ceną równoważącą jest **płaca**. W odróżnieniu od innych rynków jest silnie regulowany (prawo pracy, płaca minimalna, związki zawodowe), a jego „towar” – praca – jest nierozerwalnie związany z człowiekiem.",
   "**Podstawowe mierniki** to: **współczynnik aktywności zawodowej**, **wskaźnik zatrudnienia**, **stopa bezrobocia** – rejestrowanego (według danych urzędów pracy) oraz według Badania Aktywności Ekonomicznej Ludności (BAEL, zgodnego z definicją MOP) – a także liczba wolnych miejsc pracy i przeciętne wynagrodzenie.",
   "**Uwarunkowania rynku pracy**:",
   "• **demograficzne** – liczba ludności w wieku produkcyjnym, starzenie się społeczeństwa, niska dzietność, migracje;",
   "• **ekonomiczne** – koniunktura, struktura gospodarki, inwestycje, wydajność pracy, poziom płac;",
   "• **instytucjonalno-prawne** – prawo pracy, klin podatkowy, polityka rynku pracy (aktywna: szkolenia, dotacje, staże; pasywna: zasiłki), system edukacji; w Polsce od czerwca 2025 r. obowiązuje nowa **ustawa o rynku pracy i służbach zatrudnienia**;",
   "• **technologiczne** – automatyzacja, cyfryzacja, sztuczna inteligencja;",
   "• **społeczno-kulturowe** – mobilność, aspiracje zawodowe, model rodziny, poziom wykształcenia.",
   "**Rodzaje bezrobocia**: **frykcyjne** (naturalne, związane ze zmianą pracy), **strukturalne** (niedopasowanie kwalifikacji lub miejsca zamieszkania do potrzeb pracodawców), **koniunkturalne** (cykliczne, wynikające ze spadku popytu), **sezonowe** oraz **ukryte** (np. w rolnictwie).",
   "**Problemy** polskiego i europejskiego rynku pracy: **luka kompetencyjna** i niedopasowanie edukacji do potrzeb gospodarki; niedobór pracowników w wielu branżach (IT, budownictwo, ochrona zdrowia, transport); **starzenie się siły roboczej** i presja na system emerytalny; relatywnie niska aktywność zawodowa niektórych grup (osoby 55+, osoby z niepełnosprawnościami, osoby sprawujące opiekę); **zróżnicowanie regionalne** bezrobocia; segmentacja rynku (umowy cywilnoprawne a etaty); bezrobocie długotrwałe; odpływ wykwalifikowanych kadr za granicę.",
   "**Tendencje**:",
   "• transformacja cyfrowa i **AI** – zanik części zawodów rutynowych, powstawanie nowych (analityk danych, specjalista cyberbezpieczeństwa, inżynier ML) i rosnące znaczenie **uczenia się przez całe życie** (reskilling, upskilling);",
   "• **praca zdalna i hybrydowa**, elastyczne formy zatrudnienia, gospodarka platformowa (**gig economy**);",
   "• rosnąca rola **migracji zarobkowej** – Polska z kraju emigracji stała się także krajem imigracji (m.in. obywatele Ukrainy);",
   "• **rynek pracownika** – niskie bezrobocie przy niedoborze kadr, presja płacowa, znaczenie employer brandingu;",
   "• **zielona transformacja** (green jobs), znaczenie kompetencji miękkich i równowagi między pracą a życiem prywatnym, **przejrzystość wynagrodzeń** (dyrektywa UE 2023/970).",
   "Podsumowując, rynek pracy przeszedł od problemu masowego bezrobocia (ok. 20% na początku lat 2000.) do problemu **niedoboru pracowników i kompetencji**, a kluczowym wyzwaniem staje się dostosowanie kwalifikacji do gospodarki opartej na wiedzy i technologiach cyfrowych."
  ]
 },
 "O11": {
  "title": "Polityka fiskalna państwa",
  "paragraphs": [
   "**Polityka fiskalna** (budżetowa) to działania państwa polegające na kształtowaniu **dochodów** (głównie podatków) i **wydatków publicznych** w celu realizacji celów gospodarczych i społecznych. Prowadzi ją rząd – w Polsce przede wszystkim Minister Finansów – a jej głównym instrumentem jest **ustawa budżetowa** uchwalana przez parlament. Politykę fiskalną odróżnia się od monetarnej, którą prowadzi niezależny bank centralny.",
   "**Funkcje finansów publicznych** (według R. Musgrave'a):",
   "• **alokacyjna** – finansowanie dóbr publicznych (obronność, bezpieczeństwo, infrastruktura, edukacja);",
   "• **redystrybucyjna** – zmniejszanie nierówności poprzez progresję podatkową i transfery socjalne;",
   "• **stabilizacyjna** – łagodzenie wahań koniunktury, wspieranie zatrudnienia i stabilności cen.",
   "**Instrumenty polityki fiskalnej**: podatki bezpośrednie (PIT, CIT) i pośrednie (VAT, akcyza), składki, ulgi i zwolnienia; wydatki bieżące i inwestycyjne, transfery socjalne, subsydia; zarządzanie **deficytem budżetowym** i **długiem publicznym** (m.in. emisja obligacji skarbowych).",
   "**Rodzaje polityki fiskalnej**:",
   "• **ekspansywna** – obniżanie podatków lub zwiększanie wydatków w celu pobudzenia popytu w okresie recesji (koncepcja keynesowska, efekt mnożnikowy);",
   "• **restrykcyjna** – ograniczanie wydatków lub podwyższanie podatków w celu schłodzenia gospodarki, ograniczenia inflacji i deficytu.",
   "Wyróżnia się także **automatyczne stabilizatory** (np. progresywny podatek dochodowy, zasiłki dla bezrobotnych), które reagują na koniunkturę bez nowych decyzji politycznych, w odróżnieniu od polityki **dyskrecjonalnej**.",
   "**Ograniczenia i ryzyka**: opóźnienia czasowe (rozpoznania, decyzyjne, oddziaływania), **efekt wypychania** (crowding-out) – finansowanie deficytu podnosi stopy procentowe i ogranicza inwestycje prywatne, narastanie długu i kosztów jego obsługi, cykl polityczny (decyzje podporządkowane kalendarzowi wyborczemu). Dlatego stosuje się **reguły fiskalne**:",
   "• **konstytucyjny limit długu publicznego – 60% PKB** (art. 216 ust. 5 Konstytucji RP) oraz progi ostrożnościowe w ustawie o finansach publicznych;",
   "• **stabilizującą regułę wydatkową**;",
   "• unijne kryteria **Paktu Stabilności i Wzrostu**: deficyt do 3% PKB i dług do 60% PKB. Od 2024 r. obowiązują zreformowane ramy fiskalne UE, a Polska jest objęta **procedurą nadmiernego deficytu** (otwartą w 2024 r.), co zobowiązuje ją do stopniowej konsolidacji finansów publicznych.",
   "Współcześnie polityka fiskalna musi godzić sprzeczne cele: finansowanie rosnących wydatków na obronność, ochronę zdrowia i transformację energetyczną z potrzebą ograniczania deficytu. Jej skuteczność zależy od **koordynacji z polityką monetarną** – w czasie pandemii obie polityki działały ekspansywnie, natomiast w okresie wysokiej inflacji ekspansja fiskalna mogła osłabiać efekt podwyżek stóp procentowych."
  ]
 },
 "O12": {
  "title": "Polityka monetarna państwa",
  "paragraphs": [
   "**Polityka monetarna** (pieniężna) to działania banku centralnego polegające na oddziaływaniu na podaż pieniądza, koszt kredytu (stopy procentowe) i warunki płynnościowe w gospodarce w celu zapewnienia **stabilności cen**. W Polsce prowadzi ją **Narodowy Bank Polski**, a jej założenia ustala **Rada Polityki Pieniężnej** – dziesięcioosobowy organ, któremu przewodniczy prezes NBP. Zgodnie z art. 227 Konstytucji RP NBP odpowiada za wartość polskiego pieniądza, a według ustawy o NBP jego podstawowym celem jest utrzymanie stabilnego poziomu cen, przy jednoczesnym wspieraniu polityki gospodarczej rządu, o ile nie ogranicza to celu podstawowego.",
   "Od 1999 r. NBP stosuje **strategię bezpośredniego celu inflacyjnego** (inflation targeting). Od 2004 r. cel wynosi **2,5% z dopuszczalnym przedziałem wahań ±1 punkt procentowy** i ma charakter średniookresowy.",
   "Strategia opiera się na niezależności banku centralnego, przejrzystości (m.in. „Raport o inflacji”, komunikaty i konferencje po posiedzeniach RPP) oraz kotwiczeniu oczekiwań inflacyjnych.",
   "**Instrumenty polityki monetarnej**:",
   "• **stopy procentowe NBP** – kluczowa jest **stopa referencyjna** (wyznacza rentowność podstawowych operacji otwartego rynku); ponadto **stopa lombardowa** (górna granica korytarza – oprocentowanie kredytu na koniec dnia dla banków), **stopa depozytowa** (dolna granica) oraz stopy redyskonta i dyskonta weksli;",
   "• **operacje otwartego rynku** – przede wszystkim emisja 7-dniowych **bonów pieniężnych NBP**, absorbujących nadwyżkę płynności sektora bankowego; także operacje dostrajające i strukturalne (w 2020 r. NBP skupował obligacje);",
   "• **operacje depozytowo-kredytowe** (kredyt lombardowy, depozyt na koniec dnia);",
   "• **rezerwa obowiązkowa** – część środków, którą banki muszą utrzymywać na rachunku w NBP;",
   "• **interwencje walutowe** oraz **komunikacja** z rynkiem (forward guidance).",
   "**Mechanizm transmisji monetarnej**: zmiana stopy referencyjnej wpływa na stopy rynku międzybankowego i wskaźniki referencyjne, oprocentowanie kredytów i depozytów, kurs walutowy, ceny aktywów i oczekiwania, a w konsekwencji na popyt, produkcję i inflację. Działa to z opóźnieniem – zwykle kilku kwartałów.",
   "**Rodzaje polityki**: **ekspansywna** (łagodna, „gołębia”) – obniżanie stóp i zwiększanie płynności pobudza popyt i inwestycje w okresie spowolnienia; **restrykcyjna** („jastrzębia”) – podwyższanie stóp ogranicza akcję kredytową i inflację. Przykładem jest cykl podwyżek z lat 2021–2022: w reakcji na gwałtowny wzrost inflacji (w szczycie, na początku 2023 r., ok. 18% r/r) RPP podniosła stopę referencyjną z 0,1% do 6,75%, a następnie – wraz ze spadkiem inflacji – rozpoczęła cykl obniżek.",
   "**Ograniczenia**: opóźnienia transmisji, ograniczona skuteczność przy stopach bliskich zera (pułapka płynności), słaba reakcja inflacji kosztowej (np. wywołanej cenami energii) na stopy procentowe, ryzyko konfliktu z polityką fiskalną. Polska, pozostając poza strefą euro, zachowuje **autonomię monetarną i płynny kurs złotego**, co pozwala dostosowywać politykę do krajowej koniunktury; przyjęcie euro oznaczałoby przekazanie tych kompetencji Europejskiemu Bankowi Centralnemu."
  ]
 },
 "O13": {
  "title": "Globalizacja i jej wpływ na sytuację gospodarczą",
  "paragraphs": [
   "**Globalizacja** to proces pogłębiającej się współzależności gospodarek, społeczeństw i państw, wynikający z intensyfikacji przepływów **towarów, usług, kapitału, technologii, informacji i ludzi** ponad granicami. W wymiarze ekonomicznym oznacza tworzenie jednolitego rynku światowego, na którym produkcja jest rozproszona w **globalnych łańcuchach wartości**, a kluczowymi aktorami są korporacje transnarodowe.",
   "**Siły napędowe globalizacji**: liberalizacja handlu (GATT, od 1995 r. **Światowa Organizacja Handlu – WTO**) i przepływów kapitału; integracja regionalna (UE, USMCA, ASEAN); postęp w transporcie (konteneryzacja) i spadek jego kosztów; **rewolucja informacyjna** – Internet, telekomunikacja, obecnie chmura obliczeniowa i platformy cyfrowe; upadek bloku wschodniego oraz otwarcie gospodarek Chin i Indii.",
   "**Pozytywne skutki**:",
   "• wzrost handlu i światowego PKB, efekty skali, specjalizacja zgodna z przewagami komparatywnymi;",
   "• **transfer technologii i know-how** poprzez bezpośrednie inwestycje zagraniczne (BIZ);",
   "• dostęp konsumentów do tańszych i bardziej zróżnicowanych dóbr;",
   "• wyjście setek milionów ludzi ze skrajnego ubóstwa (zwłaszcza w Azji);",
   "• rozwój rynku usług IT – offshoring i outsourcing (Polska stała się jednym z liderów sektora nowoczesnych usług biznesowych i centrów kompetencyjnych IT).",
   "**Negatywne skutki i zagrożenia**:",
   "• **transmisja kryzysów** – kryzys finansowy z 2008 r. szybko rozprzestrzenił się na cały świat;",
   "• **podatność łańcuchów dostaw** – ujawniona w czasie pandemii COVID-19 (np. niedobór półprzewodników) i wojny w Ukrainie (ceny energii i żywności);",
   "• rosnące nierówności wewnątrz państw, deindustrializacja niektórych regionów, presja na płace i standardy pracy („wyścig na dno”);",
   "• ograniczenie suwerenności ekonomicznej państw oraz agresywna optymalizacja podatkowa korporacji (odpowiedzią jest m.in. globalny minimalny podatek dochodowy w wysokości 15%);",
   "• koszty środowiskowe transportu i przenoszenie emisji do krajów o łagodniejszych regulacjach.",
   "**Współczesne tendencje** wskazują na **przekształcenie globalizacji**, określane jako „slowbalizacja” lub fragmentacja: wojny handlowe i rosnące cła (napięcia na linii USA–Chiny), polityka bezpieczeństwa gospodarczego, **nearshoring** i **friend-shoring** (przenoszenie produkcji bliżej lub do państw sojuszniczych), kontrola eksportu zaawansowanych technologii (półprzewodniki, AI), a jednocześnie **globalizacja cyfrowa** – dynamiczny wzrost handlu usługami cyfrowymi i przepływów danych.",
   "Dla **Polski** globalizacja i integracja z UE okazały się korzystne: napływ BIZ, rozwój eksportu (silne powiązanie z niemieckimi łańcuchami dostaw), rozwój centrów usług biznesowych i sektora IT. Nearshoring może być szansą, ponieważ Polska jest atrakcyjną lokalizacją w obrębie UE. Wyzwaniem pozostaje przejście od konkurowania niskimi kosztami do konkurowania **innowacyjnością i wartością dodaną**."
  ]
 },
 "O14": {
  "title": "Ocena członkostwa w Unii Europejskiej w wymiarze ekonomicznym i społecznym",
  "paragraphs": [
   "Polska jest członkiem Unii Europejskiej od **1 maja 2004 r.** Członkostwo oznacza udział w **jednolitym rynku** opartym na czterech swobodach – przepływu towarów, usług, kapitału i osób – a także w unii celnej, wspólnych politykach (m.in. spójności, rolnej, handlowej) oraz w strefie Schengen (od 2007 r.). Ocena akcesji po ponad dwudziestu latach jest w przeważającej mierze pozytywna, choć nie pozbawiona kosztów i wyzwań.",
   "**Wymiar ekonomiczny – korzyści**:",
   "• **konwergencja** – PKB per capita według PPS wzrósł z ok. 50% do ok. 80% średniej UE; Polska należy do najszybciej rozwijających się gospodarek Unii;",
   "• **fundusze europejskie** – Polska jest największym beneficjentem polityki spójności; w perspektywie 2021–2027 przypada jej ok. 76 mld euro z polityki spójności oraz środki **Krajowego Planu Odbudowy** (ok. 60 mld euro dotacji i pożyczek). Środki te sfinansowały autostrady, koleje, infrastrukturę cyfrową i komunalną, modernizację rolnictwa oraz projekty badawczo-rozwojowe;",
   "• **handel** – swobodny dostęp do rynku ok. 450 mln konsumentów; eksport wzrósł kilkukrotnie, a ok. trzy czwarte polskiego eksportu trafia do państw UE;",
   "• **napływ inwestycji zagranicznych**, transfer technologii, wzrost wiarygodności kraju i niższe koszty finansowania;",
   "• **dopłaty bezpośrednie** dla rolników i wzrost dochodów na wsi.",
   "**Wymiar ekonomiczny – koszty i wyzwania**: składka do budżetu UE (przy czym Polska od akcesji pozostaje **beneficjentem netto** – otrzymuje znacznie więcej, niż wpłaca), konieczność dostosowania prawa i standardów, silniejsza konkurencja dla słabszych przedsiębiorstw, obciążenia regulacyjne (np. koszty polityki klimatycznej – system EU ETS i ceny energii), spory dotyczące warunkowości wypłaty środków, a także odpływ części wykwalifikowanej siły roboczej.",
   "**Wymiar społeczny – korzyści**: **swoboda przemieszczania się i podejmowania pracy** w innych państwach, programy edukacyjne (**Erasmus+**), wzrost wynagrodzeń i poziomu życia, ochrona praw konsumentów (np. zniesienie opłat roamingowych w 2017 r., RODO), wyższe standardy ochrony środowiska, bezpieczeństwa żywności i praw pracowniczych, wzmocnienie pozycji geopolitycznej i bezpieczeństwa (wraz z członkostwem w NATO) oraz poczucie przynależności do wspólnoty europejskiej – poparcie społeczne dla członkostwa utrzymuje się na wysokim poziomie.",
   "**Wymiar społeczny – koszty**: **emigracja poakcesyjna** (według szacunków GUS w szczytowym okresie, ok. 2017 r., czasowo za granicą przebywało ponad 2,5 mln Polaków), drenaż kadr (np. lekarzy), rozłąka rodzin i pogłębienie problemów demograficznych; kontrowersje wokół podziału kompetencji między UE a państwami członkowskimi i sporów o praworządność; nierówny rozkład korzyści między regionami i grupami społecznymi.",
   "Bilans członkostwa pozostaje wyraźnie dodatni – akcesja przyspieszyła modernizację Polski i jej konwergencję z Europą Zachodnią. Wyzwaniami na przyszłość są: efektywne wykorzystanie funduszy, zmiana modelu rozwoju w kierunku innowacyjności, transformacja energetyczna oraz decyzja w sprawie przyjęcia euro."
  ]
 },
 "O15": {
  "title": "Rynek pracy – uwarunkowania, problemy, tendencje",
  "paragraphs": [
   "Uwaga: to zagadnienie jest w wykazie identyczne z pytaniem 10 (najpewniej zostało powtórzone omyłkowo).",
   "Pełna odpowiedź – patrz pytanie 10. Poniżej ujęcie uzupełniające, przydatne, gdyby komisja oczekiwała innej perspektywy: rynek pracy z punktu widzenia absolwenta informatyki.",
   "Rynek pracy w sektorze IT dobrze ilustruje ogólne tendencje. Po okresie bardzo dynamicznego wzrostu zatrudnienia w latach 2020–2022, napędzanego przyspieszoną cyfryzacją w czasie pandemii, nastąpiła **korekta**: firmy technologiczne ograniczyły rekrutacje, a najtrudniejsza stała się sytuacja **osób początkujących (juniorów)**, dla których liczba ofert wyraźnie spadła przy rosnącej liczbie kandydatów – absolwentów studiów, kursów i osób zmieniających zawód.",
   "**Uwarunkowania**: koniunktura i dostęp do finansowania (poziom stóp procentowych), globalizacja usług (przy pracy zdalnej konkurencja o stanowiska ma zasięg międzynarodowy), a przede wszystkim **generatywna sztuczna inteligencja**, która automatyzuje część prostych zadań programistycznych, testowych i dokumentacyjnych, zmieniając profil oczekiwanych kompetencji.",
   "**Problemy**: rozwarstwienie rynku (niedobór doświadczonych specjalistów przy nadpodaży kandydatów bez doświadczenia), luka między programami kształcenia a potrzebami pracodawców, niepewność formy zatrudnienia (popularność kontraktów B2B, pozbawiających części ochrony wynikającej z prawa pracy).",
   "**Tendencje**: rosnący popyt na specjalistów od **cyberbezpieczeństwa** (wzmocniony regulacjami NIS2/KSC i DORA), **danych i AI/ML**, **chmury obliczeniowej**, **DevOps** i architektury systemów; znaczenie kompetencji łączących technologię z wiedzą biznesową i dziedzinową; praca hybrydowa jako standard; konieczność ciągłego uczenia się i zdobywania certyfikatów; większa przejrzystość wynagrodzeń.",
   "Wniosek: we współczesnej gospodarce przewagę na rynku pracy daje nie sam dyplom, lecz **zdolność adaptacji i uczenia się przez całe życie** – co szczególnie dotyczy informatyków, których narzędzia pracy zmieniają się najszybciej."
  ]
 },
 "K1": {
  "title": "Zarządzanie projektem informatycznym – istota, etapy, zadania",
  "paragraphs": [
   "**Projekt** to tymczasowe przedsięwzięcie podejmowane w celu wytworzenia unikalnego produktu, usługi lub rezultatu (definicja PMI – Project Management Institute). Ma określony początek i koniec, cel, budżet i zasoby. **Projekt informatyczny** dotyczy wytworzenia, wdrożenia lub modernizacji systemu informatycznego, oprogramowania bądź infrastruktury IT. **Zarządzanie projektem** to zastosowanie wiedzy, umiejętności, narzędzi i technik do działań projektowych w celu spełnienia jego wymagań.",
   "**Specyfika projektów IT**: niematerialny charakter produktu, trudność precyzyjnego określenia wymagań na początku i ich częsta zmienność, szybkie starzenie się technologii, wysoka złożoność i liczne zależności między komponentami, trudność szacowania pracochłonności oraz duża rola komunikacji między IT a biznesem. Skutkiem jest wysoki odsetek projektów przekraczających budżet lub harmonogram – raporty Standish Group (CHAOS) od lat wskazują, że pełnym sukcesem kończy się jedynie mniejszość projektów IT (ok. jedna trzecia).",
   "Centralnym pojęciem jest **trójkąt ograniczeń** (tzw. żelazny trójkąt): **zakres – czas – koszt**, z jakością pośrodku; zmiana jednego parametru wpływa na pozostałe.",
   "**Etapy (grupy procesów) zarządzania projektem** według PMI:",
   "1. **Inicjowanie** – identyfikacja potrzeby, studium wykonalności, uzasadnienie biznesowe (business case), karta projektu, identyfikacja interesariuszy, wyznaczenie kierownika projektu.",
   "2. **Planowanie** – określenie zakresu i struktury podziału prac (**WBS**), harmonogram (wykres Gantta, metoda ścieżki krytycznej **CPM**, **PERT**), budżet, plany zarządzania ryzykiem, jakością, komunikacją, zasobami i zamówieniami.",
   "3. **Realizacja** – wykonywanie prac (analiza, projektowanie, programowanie, testowanie, wdrożenie), kierowanie zespołem, komunikacja.",
   "4. **Monitorowanie i kontrola** – śledzenie postępów względem planu (np. metoda wartości wypracowanej – **EVM**), kontrola zmian, jakości i ryzyka, raportowanie.",
   "5. **Zamknięcie** – odbiór produktu, przekazanie do eksploatacji, rozliczenie, archiwizacja dokumentacji, zebranie doświadczeń (**lessons learned**).",
   "W projektach IT etapy te przeplatają się z **cyklem życia oprogramowania (SDLC)**: analiza wymagań → projektowanie → implementacja → testowanie → wdrożenie → utrzymanie.",
   "**Zadania kierownika projektu**: definiowanie celów i zakresu, planowanie i szacowanie, budowa i motywowanie zespołu, zarządzanie zasobami i budżetem, **zarządzanie ryzykiem** (identyfikacja, analiza, reakcja), komunikacja z interesariuszami, zarządzanie zmianą i jakością, rozwiązywanie konfliktów oraz raportowanie do sponsora i komitetu sterującego. Tradycyjnie wyróżnia się dziesięć obszarów wiedzy (PMBOK Guide): zarządzanie integracją, zakresem, harmonogramem, kosztami, jakością, zasobami, komunikacją, ryzykiem, zamówieniami i interesariuszami.",
   "Podsumowując, sukces projektu informatycznego zależy nie tylko od technologii, ale przede wszystkim od jasno określonych celów, zaangażowania interesariuszy, realistycznego planu, świadomego zarządzania ryzykiem i zmianą oraz właściwie dobranej metodyki."
  ]
 },
 "K2": {
  "title": "Czynniki wyboru systemu informatycznego",
  "paragraphs": [
   "Wybór systemu informatycznego – np. klasy **ERP** (planowanie zasobów przedsiębiorstwa), **CRM**, **WMS** czy systemu BI – jest decyzją strategiczną: dotyczy wieloletniej inwestycji, wpływa na procesy całej organizacji i jest kosztowny do odwrócenia (ryzyko uzależnienia od dostawcy – vendor lock-in). Decyzja powinna wynikać ze **strategii biznesowej i strategii informatyzacji**, a nie z mody technologicznej.",
   "**Grupy czynników wyboru**:",
   "• **funkcjonalne** – stopień pokrycia wymagań i procesów biznesowych (analiza dopasowania fit-gap), specyfika branżowa, możliwość parametryzacji i rozbudowy (modułowość), obsługa polskich regulacji (np. KSeF, JPK, kadry i płace), wielojęzyczność i wielowalutowość;",
   "• **techniczne** – architektura (on-premise, chmura w modelu SaaS/PaaS/IaaS, rozwiązania hybrydowe), skalowalność i wydajność, niezawodność i dostępność, **możliwości integracji** (API, standardy wymiany danych), bezpieczeństwo (uwierzytelnianie, szyfrowanie, rejestrowanie zdarzeń), zgodność z istniejącą infrastrukturą, dostęp mobilny;",
   "• **ekonomiczne** – nie tylko cena licencji, lecz **całkowity koszt posiadania (TCO)**: licencje lub subskrypcje, wdrożenie, sprzęt, szkolenia, utrzymanie, aktualizacje, rozwój oraz koszty ewentualnego wyjścia; ocena opłacalności (ROI, NPV, okres zwrotu); model rozliczeń (nakłady inwestycyjne – CAPEX lub operacyjne – OPEX);",
   "• **dotyczące dostawcy** – stabilność finansowa i pozycja rynkowa, referencje i doświadczenie branżowe, dostępność partnerów wdrożeniowych i wsparcia lokalnego, gwarantowane parametry usług (**SLA**), plan rozwoju produktu (roadmapa);",
   "• **organizacyjne i użytkowe** – ergonomia i łatwość obsługi, gotowość organizacji do zmiany, kompetencje pracowników, czas wdrożenia, wpływ na procesy (dopasowanie systemu do firmy albo firmy do najlepszych praktyk zawartych w systemie);",
   "• **prawne i regulacyjne** – zgodność z RODO (lokalizacja danych, umowa powierzenia przetwarzania), wymagania sektorowe (np. KSC/NIS2, DORA w sektorze finansowym), warunki licencji, prawa do danych i ich przenoszalność, możliwość audytu.",
   "**Proces wyboru** obejmuje zwykle: analizę przedwdrożeniową i spisanie wymagań, rozpoznanie rynku (**RFI** – zapytanie o informację), zapytanie ofertowe (**RFP**), wyłonienie krótkiej listy dostawców, prezentacje scenariuszowe i ewentualnie **proof of concept**, ocenę wielokryterialną oraz negocjacje umowy. Do porównania ofert stosuje się **metody wielokryterialne** – najczęściej **metodę punktową z wagami** (scoring) lub **AHP** (analityczny proces hierarchiczny T. Saaty'ego), które pozwalają zobiektywizować decyzję.",
   "Podsumowując: najlepszy system to nie najtańszy ani najbardziej rozbudowany, lecz ten, który zapewnia najlepsze dopasowanie do potrzeb organizacji przy akceptowalnym koszcie całkowitym i ryzyku."
  ]
 },
 "K3": {
  "title": "Interesariusze i ograniczenia w projektach informatycznych",
  "paragraphs": [
   "**Interesariusz** (stakeholder) to osoba, grupa lub organizacja, która może wpływać na projekt, na którą projekt może wpływać lub która tak postrzega swoją sytuację. Właściwe zarządzanie interesariuszami jest jednym z kluczowych czynników sukcesu – wiele projektów IT kończy się niepowodzeniem nie z przyczyn technicznych, lecz wskutek braku zaangażowania lub oporu ważnych grup.",
   "**Interesariusze wewnętrzni**: **sponsor projektu** (finansuje go i odpowiada za uzasadnienie biznesowe), **komitet sterujący**, **kierownik projektu**, **zespół projektowy** (analitycy, architekci, programiści, testerzy, administratorzy), **właściciel produktu**, **użytkownicy końcowi** i kierownicy działów, dział IT odpowiedzialny za utrzymanie, a także działy bezpieczeństwa, prawny i zakupów.",
   "**Interesariusze zewnętrzni**: klient lub zamawiający, dostawcy i podwykonawcy, partnerzy wdrożeniowi, regulatorzy i organy nadzoru (np. UODO, KNF, zespoły CSIRT), klienci firmy, akcjonariusze, a niekiedy społeczność lokalna i media.",
   "**Zarządzanie interesariuszami** obejmuje: identyfikację (rejestr interesariuszy), analizę ich wpływu, zainteresowania i postaw, planowanie zaangażowania i komunikacji oraz monitorowanie relacji. Stosuje się narzędzia takie jak **siatka władzy i zainteresowania** (macierz Mendelowa): osoby o dużej władzy i dużym zainteresowaniu należy ściśle angażować, o dużej władzy i małym zainteresowaniu – utrzymywać ich satysfakcję, o małej władzy i dużym zainteresowaniu – informować, a o małej władzy i małym zainteresowaniu – monitorować. Role i odpowiedzialności porządkuje **macierz RACI** (Responsible – wykonuje, Accountable – odpowiada, Consulted – konsultowany, Informed – informowany).",
   "**Ograniczenia projektu** to czynniki zawężające swobodę działania zespołu. Klasyczny **trójkąt ograniczeń** obejmuje **zakres, czas i koszt**, a nowsze ujęcia rozszerzają go o **jakość, zasoby i ryzyko**. W projektach IT istotne są ponadto ograniczenia:",
   "• **technologiczne** – istniejąca architektura i systemy dziedziczone (legacy), wymagania integracyjne i wydajnościowe;",
   "• **kadrowe** – dostępność specjalistów i ich kompetencje;",
   "• **prawne i regulacyjne** – RODO, ustawa o KSC (NIS2), AI Act, prawo zamówień publicznych, warunki licencji;",
   "• **organizacyjne** – kultura organizacyjna, opór wobec zmian, długie procesy decyzyjne;",
   "• **zewnętrzne** – terminy narzucone przepisami (np. obowiązkowy KSeF), zależności od dostawców.",
   "Ograniczenia pozostają ze sobą w relacji wymiany: skrócenie czasu przy stałym zakresie zwykle wymaga zwiększenia kosztów (kompresja harmonogramu: crashing, fast tracking), a cięcie budżetu – zawężenia zakresu lub akceptacji niższej jakości. Metodyki zwinne „odwracają” trójkąt: **czas i koszt są stałe, a zakres zmienny** – ustalany przez priorytetyzację backlogu (np. metodą MoSCoW).",
   "Podsumowując, świadome zarządzanie interesariuszami i ograniczeniami pozwala uzgodnić oczekiwania, ograniczyć ryzyko konfliktów i zapewnić, że projekt dostarczy wartość rzeczywiście potrzebną organizacji."
  ]
 },
 "K4": {
  "title": "Metodyki zarządzania projektem informatycznym",
  "paragraphs": [
   "**Metodyka** to uporządkowany zestaw zasad, procesów, ról, technik i produktów, który określa, jak prowadzić projekt. Metodyki zarządzania projektami IT dzieli się zasadniczo na **tradycyjne (kaskadowe, predykcyjne)**, **zwinne (agile, adaptacyjne)** oraz **hybrydowe**.",
   "**Metodyki tradycyjne**:",
   "• **model kaskadowy (Waterfall)** – sekwencyjne etapy (wymagania → projekt → implementacja → testy → wdrożenie → utrzymanie), z których każdy kończy się przed rozpoczęciem następnego. Zalety: przewidywalność, pełna dokumentacja, łatwa kontrola budżetu; wady: mała elastyczność, późne wykrywanie błędów, klient widzi produkt dopiero na końcu. Sprawdza się przy stabilnych, dobrze zdefiniowanych wymaganiach (np. projekty regulowane, zamówienia publiczne);",
   "• **model V** – rozwinięcie kaskady, w którym każdemu etapowi projektowania odpowiada poziom testów (np. wymagania ↔ testy akceptacyjne);",
   "• **PRINCE2** (PRojects IN Controlled Environments) – brytyjska metodyka procesowa oparta na **7 pryncypiach** (m.in. ciągłe uzasadnienie biznesowe, zarządzanie etapami, zarządzanie przez wyjątki, koncentracja na produktach, dostosowanie do projektu), **7 praktykach/tematach** (uzasadnienie biznesowe, organizacja, plany, jakość, ryzyko, zagadnienia i zmiany, postęp) oraz **7 procesach**;",
   "• **PMBOK Guide** (PMI) – zbiór dobrych praktyk i standard, a nie metodyka w ścisłym sensie; opisuje procesy i obszary wiedzy, a nowsze wydania akcentują zasady i dostarczanie wartości niezależnie od przyjętego podejścia.",
   "**Metodyki zwinne** wyrastają z **Manifestu Agile (2001)**, który przedkłada ludzi i interakcje nad procesy i narzędzia, działające oprogramowanie nad obszerną dokumentację, współpracę z klientem nad negocjacje umów oraz reagowanie na zmiany nad realizację planu. Opierają się na pracy **iteracyjno-przyrostowej**:",
   "• **Scrum** – praca w **sprintach** (1–4 tygodnie); role: **Product Owner** (maksymalizuje wartość produktu, zarządza backlogiem), **Scrum Master** (dba o proces, usuwa przeszkody), **Developers**; wydarzenia: planowanie sprintu, codzienny Scrum (daily), przegląd sprintu, retrospektywa; artefakty: backlog produktu, backlog sprintu, przyrost (spełniający Definition of Done);",
   "• **Kanban** – wizualizacja przepływu pracy na tablicy, **limity pracy w toku (WIP)**, ciągły przepływ i skracanie czasu realizacji;",
   "• **Extreme Programming (XP)** – praktyki inżynierskie: programowanie w parach, TDD, ciągła integracja, refaktoryzacja;",
   "• metodyki skalowane – **SAFe**, LeSS, Nexus – dla wielu współpracujących zespołów.",
   "Zalety podejścia zwinnego: szybkie dostarczanie wartości, elastyczność wobec zmian, stały kontakt z klientem, wczesne wykrywanie problemów; wady: trudność w ustaleniu stałej ceny i terminu, wymóg dojrzałości zespołu i zaangażowania klienta, ryzyko niedostatecznej dokumentacji.",
   "**Podejścia hybrydowe** łączą oba światy – np. **PRINCE2 Agile**, **AgilePM (DSDM)** lub model, w którym ramy budżetowe i etapowe są tradycyjne, a wytwarzanie odbywa się w sprintach. Uzupełnieniem jest **DevOps** – kultura i praktyki łączące wytwarzanie z utrzymaniem (ciągła integracja i dostarczanie – CI/CD, automatyzacja).",
   "**Dobór metodyki** zależy od stabilności wymagań, wielkości i złożoności projektu, dostępności klienta, kultury organizacji, wymogów formalnych (np. umowa o stałej cenie) i doświadczenia zespołu. Nie istnieje metodyka uniwersalna – dojrzałe organizacje dopasowują podejście do projektu (tailoring)."
  ]
 },
 "K5": {
  "title": "Znaczenie baz i hurtowni danych dla podejmowania decyzji",
  "paragraphs": [
   "Współczesne przedsiębiorstwo podejmuje decyzje w warunkach nadmiaru danych i niedoboru informacji.",
   "Zgodnie z **piramidą DIKW** (dane → informacja → wiedza → mądrość) wartość dla decydenta mają nie surowe dane, lecz dane uporządkowane, zintegrowane i zinterpretowane w kontekście. Kluczową rolę w tym procesie odgrywają **bazy danych** oraz **hurtownie danych**.",
   "**Operacyjne bazy danych (systemy OLTP** – On-Line Transaction Processing) obsługują bieżącą działalność: rejestrację zamówień, faktur, płatności, stanów magazynowych. Są zoptymalizowane pod kątem szybkich, krótkich transakcji, znormalizowane i przechowują dane aktualne. Wspierają głównie **decyzje operacyjne** (np. czy towar jest dostępny, czy klient ma zaległości). Nie nadają się jednak do złożonych analiz – zapytania analityczne obciążałyby system produkcyjny, a dane są rozproszone w wielu systemach i niespójne.",
   "**Hurtownia danych** (data warehouse) to – według klasycznej definicji W. H. Inmona – **tematycznie zorientowany, zintegrowany, zmienny w czasie (historyczny) i nieulotny** zbiór danych wspierający proces podejmowania decyzji kierowniczych. Dane są zasilane z systemów źródłowych (ERP, CRM, źródeł zewnętrznych) w procesie **ETL** (Extract – Transform – Load) lub **ELT**, w trakcie którego są oczyszczane, ujednolicane i integrowane. Hurtownia wspiera przetwarzanie analityczne **OLAP** (On-Line Analytical Processing) – dane organizuje się w modelu wielowymiarowym (**schemat gwiazdy** lub **płatka śniegu**: tabela faktów, np. sprzedaż, oraz tabele wymiarów – czas, produkt, klient, region). Tematyczne wycinki hurtowni dla poszczególnych działów to **składnice danych (data marts)**. R. Kimball proponował podejście oddolne (hurtownia jako suma wymiarowych składnic), Inmon – odgórne (centralna, znormalizowana hurtownia korporacyjna).",
   "**Cecha Baza operacyjna (OLTP) Hurtownia danych (OLAP)** Cel obsługa bieżących transakcji analiza i wspomaganie decyzji Dane aktualne, szczegółowe historyczne, zagregowane i szczegółowe Operacje krótkie zapisy i odczyty złożone zapytania odczytowe Model znormalizowany wymiarowy (gwiazda, płatek śniegu) Użytkownicy pracownicy operacyjni analitycy, kadra zarządzająca **Znaczenie hurtowni danych dla podejmowania decyzji**:",
   "• **jedno źródło prawdy** (single source of truth) – spójne definicje wskaźników w całej organizacji;",
   "• **perspektywa historyczna** – analiza trendów, sezonowości, porównania rok do roku;",
   "• **integracja danych** z wielu systemów i źródeł zewnętrznych;",
   "• odciążenie systemów transakcyjnych i szybkie wykonywanie zapytań analitycznych;",
   "• fundament dla **Business Intelligence**, raportowania zarządczego, kokpitów menedżerskich (KPI), eksploracji danych i modeli predykcyjnych – wsparcie decyzji **taktycznych i strategicznych** (np. wybór rynków, polityka cenowa, optymalizacja asortymentu);",
   "• poprawa jakości danych oraz audytowalność.",
   "**Współczesne rozwiązania** rozszerzają klasyczną koncepcję: **jeziora danych** (data lake) przechowują dane surowe, także nieustrukturyzowane (logi, obrazy, dane IoT), architektura **lakehouse** łączy elastyczność jeziora z uporządkowaniem hurtowni, a hurtownie chmurowe (Snowflake, Google BigQuery, Amazon Redshift, Microsoft Fabric, Databricks) zapewniają niemal nieograniczoną skalowalność. Rośnie też znaczenie **ładu danych** (data governance) i przetwarzania w czasie zbliżonym do rzeczywistego.",
   "Podsumowując: bazy operacyjne mówią, **co dzieje się teraz**, a hurtownie danych pozwalają zrozumieć, **dlaczego tak się dzieje i co może się wydarzyć** – przekształcając firmę w organizację zarządzaną w oparciu o dane (data-driven)."
  ]
 },
 "K6": {
  "title": "Funkcje raportowania, analizy i eksploracji danych",
  "paragraphs": [
   "Raportowanie, analiza i eksploracja danych to trzy uzupełniające się funkcje systemów analitycznych (Business Intelligence), różniące się stopniem zaawansowania, interaktywności i rodzajem udzielanych odpowiedzi. Można je uporządkować według modelu dojrzałości analitycznej Gartnera: **analityka opisowa** (co się stało?), **diagnostyczna** (dlaczego się stało?), **predykcyjna** (co się stanie?) i **preskryptywna** (co powinniśmy zrobić?). **1. Raportowanie** – funkcja podstawowa, dostarczająca informacji o stanie organizacji w ustalonej formie.",
   "Obejmuje:",
   "• **raporty standardowe (cykliczne)** – np. miesięczne zestawienie sprzedaży, raporty dla zarządu;",
   "• **raporty ad hoc** – tworzone doraźnie przez użytkownika;",
   "• **raporty wyjątków (alertowe)** – informujące o przekroczeniu progów (np. spadek marży poniżej założonego poziomu);",
   "• **kokpity menedżerskie (dashboardy)** – wizualizacja kluczowych wskaźników efektywności (**KPI**), często w czasie zbliżonym do rzeczywistego, np. w ramach **zrównoważonej karty wyników** (Balanced Scorecard).",
   "Raportowanie odpowiada na pytanie „co się stało?” i wspiera kontrolę oraz monitorowanie działalności. **2. Analiza danych (OLAP)** – interaktywne badanie danych w wielowymiarowych kostkach. Podstawowe operacje:",
   "• **drill-down / roll-up** – zagłębianie się w szczegóły (rok → kwartał → miesiąc) lub agregowanie danych;",
   "• **slice** i **dice** – wybór wycinka kostki według jednego lub wielu wymiarów;",
   "• **pivot** – obrót kostki, czyli zmiana perspektywy (np. produkty w wierszach zamiast regionów);",
   "• **drill-through** – przejście do danych źródłowych.",
   "Uzupełniają je analizy statystyczne, analiza trendów oraz analiza scenariuszowa „co-jeśli” (what-if). Analiza odpowiada na pytanie „dlaczego?” – pozwala np. ustalić, że spadek sprzedaży dotyczy jednego regionu i jednej grupy produktów. **3. Eksploracja danych (data mining)** – proces **automatycznego odkrywania nieznanych wcześniej, nietrywialnych i potencjalnie użytecznych wzorców** w dużych zbiorach danych; stanowi kluczowy etap procesu **odkrywania wiedzy w bazach danych (KDD)**. Wykorzystuje metody statystyki, uczenia maszynowego i sztucznej inteligencji. Główne zadania:",
   "• **klasyfikacja** – przypisanie obiektu do klasy (np. scoring kredytowy, wykrywanie oszustw);",
   "• **regresja i prognozowanie** – przewidywanie wartości liczbowych (np. popytu);",
   "• **grupowanie (klasteryzacja)** – segmentacja klientów bez wcześniej zdefiniowanych klas;",
   "• **odkrywanie reguł asocjacyjnych** – **analiza koszykowa** (np. algorytm Apriori: klienci kupujący produkt X często kupują też Y);",
   "• **wykrywanie anomalii** i **analiza sekwencji**;",
   "• **eksploracja tekstu i sieci** (text mining, web mining) – np. analiza sentymentu opinii klientów.",
   "Standardową metodyką projektów eksploracji danych jest **CRISP-DM**: zrozumienie biznesu → zrozumienie danych → przygotowanie danych → modelowanie → ewaluacja → wdrożenie.",
   "Różnica jest zasadnicza: raportowanie i OLAP służą **weryfikacji hipotez stawianych przez użytkownika** (podejście weryfikacyjne), natomiast eksploracja danych **sama generuje hipotezy**, odkrywając wzorce, których analityk nie przewidział (podejście odkrywcze). Łącznie te trzy funkcje przekształcają dane w wiedzę użyteczną w procesie decyzyjnym."
  ]
 },
 "K7": {
  "title": "Narzędzia, metody wykorzystywane w obszarze Business Intelligence",
  "paragraphs": [
   "**Business Intelligence (BI)** to zestaw koncepcji, metod, procesów i narzędzi informatycznych służących do przekształcania danych w informację, a informacji w wiedzę wykorzystywaną do podejmowania lepszych decyzji biznesowych. Termin pojawił się już u H. P. Luhna (IBM, 1958), a spopularyzował go H. Dresner z firmy Gartner (1989). Architektura systemu BI obejmuje warstwy: **źródeł danych** → **integracji (ETL/ELT)** → **przechowywania (hurtownia, jezioro danych)** → **analityczną (OLAP, modele)** → **prezentacji (raporty, dashboardy)**.",
   "**Metody wykorzystywane w BI**:",
   "• **integracja danych (ETL/ELT)** – ekstrakcja, czyszczenie, transformacja i ładowanie danych; zapewnienie jakości danych (data quality) i zarządzanie danymi podstawowymi (**MDM**);",
   "• **modelowanie wielowymiarowe** – schemat gwiazdy i płatka śniegu, kostki OLAP (MOLAP, ROLAP, HOLAP);",
   "• **raportowanie i wizualizacja danych** – kokpity menedżerskie, KPI, **zrównoważona karta wyników**;",
   "• **analiza OLAP** – drill-down, roll-up, slice and dice, pivot;",
   "• **eksploracja danych i uczenie maszynowe** – klasyfikacja, klasteryzacja, reguły asocjacyjne, prognozowanie, wykrywanie anomalii (**analityka predykcyjna**);",
   "• **analityka preskryptywna** – optymalizacja, symulacje, analiza scenariuszowa „co-jeśli”;",
   "• **analiza tekstu i sentymentu**, **eksploracja procesów** (process mining), analityka geoprzestrzenna, analiza big data i strumieni danych w czasie rzeczywistym;",
   "• **self-service BI** – samodzielne tworzenie analiz przez użytkowników biznesowych, oraz **analityka rozszerzona** (augmented analytics) – wykorzystanie AI do automatycznego wyszukiwania wniosków, zadawania pytań w języku naturalnym i generowania raportów (np. asystenci typu Copilot).",
   "**Narzędzia BI**:",
   "• **platformy analityczno-wizualizacyjne**: **Microsoft Power BI**, **Tableau**, **Qlik Sense**, **Looker** (Google), SAP Analytics Cloud, Oracle Analytics, IBM Cognos, a także rozwiązania open source (Apache Superset, Metabase);",
   "• **narzędzia ETL i integracji**: SQL Server Integration Services (SSIS), Informatica, Talend, Azure Data Factory, Apache Airflow, **dbt** (transformacje w modelu ELT);",
   "• **hurtownie i platformy danych**: Microsoft SQL Server, **Microsoft Fabric** (Azure Synapse), **Snowflake**, **Google BigQuery**, Amazon Redshift, **Databricks**, Oracle;",
   "• **narzędzia analityczne i data science**: język **SQL**, **Python** (pandas, scikit-learn), **R**, KNIME, RapidMiner, SAS;",
   "• **arkusz kalkulacyjny** (Excel z dodatkami Power Query i Power Pivot) – wciąż najpowszechniejsze narzędzie analityczne, zwłaszcza w mniejszych firmach.",
   "**Zastosowania**: analiza sprzedaży i rentowności, segmentacja klientów i analiza ich odejść (churn), controlling i budżetowanie, optymalizacja łańcucha dostaw, ocena efektywności działań marketingowych, analityka personalna (HR analytics), wykrywanie nadużyć.",
   "Wdrożenie BI przynosi korzyści tylko wtedy, gdy towarzyszą mu **kultura organizacyjna oparta na danych**, dobra jakość danych i jasno zdefiniowane wskaźniki – samo narzędzie nie gwarantuje lepszych decyzji."
  ]
 },
 "K8": {
  "title": "Zagrożenia i metody ochrony informacji i infrastruktury w przedsiębiorstwie",
  "paragraphs": [
   "Informacja i infrastruktura teleinformatyczna (serwery, sieci, stacje robocze, urządzenia mobilne, usługi chmurowe, systemy sterowania przemysłowego – OT) stanowią krytyczne zasoby przedsiębiorstwa.",
   "**Zagrożenie** to potencjalna przyczyna niepożądanego incydentu, który może spowodować szkodę; urzeczywistnia się ono poprzez wykorzystanie **podatności**, czyli słabości zasobu lub zabezpieczenia.",
   "**Klasyfikacja zagrożeń**:",
   "• **ze względu na źródło**: **wewnętrzne** (nieuczciwi lub nieostrożni pracownicy – insider threat, błędy administratorów) i **zewnętrzne** (cyberprzestępcy, nieuczciwa konkurencja, haktywiści, grupy sponsorowane przez państwa – APT);",
   "• **ze względu na intencję**: **celowe** (ataki, kradzież, sabotaż, szpiegostwo gospodarcze) i **przypadkowe** (pomyłki, zgubienie laptopa, błędna konfiguracja);",
   "• **ze względu na charakter**: – **ludzkie i socjotechniczne** – phishing, manipulacja, wyłudzanie danych; – **techniczne (programowe)** – złośliwe oprogramowanie (ransomware, trojany), wykorzystanie podatności, ataki DDoS, przejęcie kont, ataki na łańcuch dostaw; – **sprzętowe** – awarie dysków, serwerów, zasilania; – **fizyczne i środowiskowe** – pożar, zalanie, przepięcia, kradzież sprzętu, klęski żywiołowe; – **organizacyjne i prawne** – brak procedur, niejasny podział odpowiedzialności, niezgodność z RODO czy KSC, uzależnienie od jednego dostawcy.",
   "**Metody ochrony** opierają się na zasadzie **obrony w głąb** (wielowarstwowej):",
   "1. **Organizacyjne** – polityka bezpieczeństwa i SZBI (ISO/IEC 27001), analiza ryzyka, klasyfikacja informacji, zarządzanie uprawnieniami, **szkolenia i budowanie świadomości** (np. symulacje phishingu), procedury obsługi incydentów, zarządzanie dostawcami, plany ciągłości działania (**BCP**) i odtwarzania po awarii (**DRP**) z określonymi parametrami **RPO** (maksymalna akceptowalna utrata danych) i **RTO** (maksymalny czas przywrócenia działania).",
   "2. **Fizyczne i środowiskowe** – strefy bezpieczeństwa, kontrola dostępu (karty, biometria), monitoring wizyjny, zasilanie awaryjne (UPS, agregaty), klimatyzacja i stałe urządzenia gaśnicze w serwerowni, bezpieczne niszczenie nośników, zasada czystego biurka i ekranu.",
   "3. **Techniczne (logiczne)**: – ochrona sieci: **zapory sieciowe nowej generacji (NGFW)**, systemy **IDS/IPS**, **segmentacja sieci**, VPN, ochrona poczty (filtry antyspamowe, SPF, DKIM, DMARC); – ochrona stacji i serwerów: systemy **EDR/XDR**, zarządzanie poprawkami (**patch management**), utwardzanie konfiguracji (hardening), szyfrowanie dysków; – **zarządzanie tożsamością i dostępem (IAM)** – **uwierzytelnianie wieloskładnikowe (MFA)**, zarządzanie kontami uprzywilejowanymi (PAM), model **zero trust**; – **szyfrowanie** danych w spoczynku i w transmisji, systemy **DLP** zapobiegające wyciekom; – **kopie zapasowe** według reguły 3-2-1 (z kopią offline lub niezmienialną, chroniącą przed ransomware); – **monitorowanie**: systemy **SIEM**, centrum operacji bezpieczeństwa (**SOC**), analiza logów.",
   "4. **Prawne** – umowy o zachowaniu poufności (NDA), klauzule bezpieczeństwa w umowach z dostawcami, umowy powierzenia przetwarzania danych, zgodność z RODO, ustawą o KSC i przepisami sektorowymi (np. DORA).",
   "Bezpieczeństwo jest tak silne, jak jego najsłabsze ogniwo – którym często okazuje się człowiek. Dlatego skuteczna ochrona wymaga równowagi między środkami technicznymi, organizacyjnymi i edukacją pracowników, a dobór zabezpieczeń powinien wynikać z analizy ryzyka."
  ]
 },
 "K9": {
  "title": "Bezpieczeństwo informatyczne i identyfikacja zagrożeń w przedsiębiorstwie",
  "paragraphs": [
   "**Bezpieczeństwo informatyczne** (teleinformatyczne, cyberbezpieczeństwo) to stan, w którym systemy informatyczne, sieci i przetwarzane w nich dane są chronione przed nieuprawnionym dostępem, modyfikacją, zniszczeniem lub zakłóceniem działania – zgodnie z triadą **poufności, integralności i dostępności**. Ustawa o krajowym systemie cyberbezpieczeństwa definiuje cyberbezpieczeństwo jako odporność systemów informacyjnych na działania naruszające poufność, integralność, dostępność i autentyczność przetwarzanych danych lub związanych z nimi usług.",
   "Punktem wyjścia do ochrony jest **identyfikacja zagrożeń** – nie można skutecznie bronić się przed czymś, czego się nie zna. Należy rozróżnić trzy pojęcia: **zagrożenie** (potencjalna przyczyna incydentu, np. atak ransomware), **podatność** (słabość, którą zagrożenie może wykorzystać, np. niezałatany serwer) oraz **ryzyko** – kombinację prawdopodobieństwa wystąpienia zdarzenia i jego skutków (**ryzyko = prawdopodobieństwo × skutek**).",
   "**Proces identyfikacji zagrożeń i zarządzania ryzykiem** (np. według ISO/IEC 27005 i ISO 31000):",
   "1. **Inwentaryzacja aktywów** – sprzęt, oprogramowanie, dane, usługi, ludzie; określenie ich wartości i właścicieli.",
   "2. **Identyfikacja zagrożeń i podatności** dla poszczególnych aktywów.",
   "3. **Analiza i ocena ryzyka** – metodami jakościowymi (macierz ryzyka) lub ilościowymi (np. oczekiwana roczna strata – ALE).",
   "4. **Postępowanie z ryzykiem** – redukcja (zabezpieczenia), transfer (ubezpieczenie, outsourcing), unikanie lub świadoma akceptacja ryzyka szczątkowego.",
   "5. **Monitorowanie i przegląd** – ryzyko zmienia się w czasie, więc ocenę trzeba cyklicznie powtarzać.",
   "**Metody i narzędzia identyfikacji zagrożeń**:",
   "• **skanowanie podatności** (np. Nessus, OpenVAS, Qualys) i ocena ich krytyczności w skali **CVSS**, korzystanie z bazy **CVE** oraz katalogów aktywnie wykorzystywanych podatności;",
   "• **testy penetracyjne** (black-box, grey-box, white-box) i ćwiczenia **red team** – symulacja rzeczywistego ataku;",
   "• **modelowanie zagrożeń** już na etapie projektowania, np. metodą **STRIDE** (podszywanie się, manipulacja danymi, wypieranie się działań, ujawnienie informacji, odmowa usługi, podniesienie uprawnień);",
   "• **monitorowanie i detekcja** – systemy **SIEM**, **IDS/IPS**, **EDR/XDR**, analiza logów i ruchu sieciowego, centra **SOC**, wykrywanie anomalii z użyciem uczenia maszynowego;",
   "• **analiza zagrożeń (threat intelligence)** – komunikaty CERT Polska, sektorowych zespołów CSIRT i agencji ENISA, baza wiedzy **MITRE ATT&CK** opisująca taktyki i techniki atakujących;",
   "• **audyty bezpieczeństwa**, przeglądy konfiguracji, testy socjotechniczne (symulowany phishing);",
   "• **honeypoty** – pułapki wabiące atakujących i ujawniające ich metody.",
   "Zidentyfikowane zdarzenia obsługuje się w ramach **procesu zarządzania incydentami**: wykrycie → klasyfikacja → ograniczenie skutków → usunięcie przyczyny → przywrócenie działania → wnioski na przyszłość. Znowelizowana ustawa o KSC (obowiązująca od 3 kwietnia 2026 r., wdrażająca dyrektywę NIS2) nakłada na podmioty kluczowe i ważne obowiązek systematycznego zarządzania ryzykiem, szybkiego zgłaszania poważnych incydentów (wczesne ostrzeżenie w ciągu 24 godzin) i wprowadza osobistą odpowiedzialność kierownictwa.",
   "Bezpieczeństwo informatyczne jest procesem ciągłym – krajobraz zagrożeń stale się zmienia, dlatego identyfikacja zagrożeń musi być prowadzona systematycznie, a nie jednorazowo."
  ]
 },
 "K10": {
  "title": "System zarządzania bezpieczeństwem",
  "paragraphs": [
   "**System zarządzania bezpieczeństwem informacji** (**SZBI**, ang. ISMS – Information Security Management System) to część ogólnego systemu zarządzania organizacją, oparta na podejściu wynikającym z analizy ryzyka, służąca do ustanowienia, wdrożenia, eksploatacji, monitorowania, przeglądu, utrzymania i doskonalenia bezpieczeństwa informacji. Jego istotą jest to, że bezpieczeństwo przestaje być zbiorem przypadkowych zabezpieczeń technicznych, a staje się **systematycznym procesem zarządczym**, za który odpowiada najwyższe kierownictwo.",
   "**Podstawą normatywną** jest międzynarodowa norma **ISO/IEC 27001** (aktualne wydanie z 2022 r., w Polsce jako PN-EN ISO/IEC 27001), która określa wymagania wobec SZBI i może być podstawą **certyfikacji** przez akredytowaną jednostkę. Uzupełniają ją m.in.: **ISO/IEC 27002** (wytyczne dotyczące zabezpieczeń), **ISO/IEC 27005** (zarządzanie ryzykiem), **ISO 22301** (ciągłość działania) i **ISO/IEC 27701** (ochrona prywatności). W Polsce podmioty publiczne mają obowiązek opracowania i utrzymywania SZBI na podstawie rozporządzenia w sprawie **Krajowych Ram Interoperacyjności**, a znowelizowana ustawa o KSC wymaga od podmiotów kluczowych i ważnych wdrożenia systemu zarządzania bezpieczeństwem obejmującego m.in. zarządzanie ryzykiem i incydentami.",
   "**Cykl PDCA (Deminga)** stanowi fundament działania systemu:",
   "• **Plan (planuj)** – określenie kontekstu organizacji i zakresu SZBI, polityki bezpieczeństwa i celów, przeprowadzenie **szacowania ryzyka**, wybór zabezpieczeń, przygotowanie **Deklaracji Stosowania** (SoA) i planu postępowania z ryzykiem;",
   "• **Do (wykonaj)** – wdrożenie zabezpieczeń i procedur, szkolenia, zapewnienie zasobów;",
   "• **Check (sprawdź)** – monitorowanie, pomiar skuteczności, **audyty wewnętrzne**, **przegląd zarządzania**;",
   "• **Act (działaj)** – działania korygujące i doskonalące.",
   "**Kluczowe elementy SZBI** według ISO/IEC 27001:2022:",
   "• **kontekst organizacji** i potrzeby stron zainteresowanych;",
   "• **przywództwo** – zaangażowanie kierownictwa, polityka, role i odpowiedzialności;",
   "• **planowanie** – szacowanie ryzyka i postępowanie z nim, cele bezpieczeństwa;",
   "• **wsparcie** – zasoby, kompetencje, świadomość, komunikacja, udokumentowane informacje;",
   "• **działania operacyjne**, **ocena efektów** i **doskonalenie**;",
   "• **załącznik A** – 93 zabezpieczenia w czterech grupach: organizacyjne (37), osobowe (8), fizyczne (14) i technologiczne (34), m.in. zarządzanie aktywami, kontrola dostępu, kryptografia, bezpieczeństwo eksploatacji, zarządzanie incydentami, ciągłość działania i zgodność; wydanie z 2022 r. dodało nowe obszary, np. analizę zagrożeń (threat intelligence), bezpieczeństwo usług chmurowych i maskowanie danych.",
   "**Korzyści** z wdrożenia SZBI: systematyczne ograniczanie ryzyka i liczby incydentów, zgodność z przepisami (RODO, KSC/NIS2, DORA), wzrost zaufania klientów i przewaga konkurencyjna (certyfikat bywa wymogiem w przetargach), jasny podział odpowiedzialności, ciągłość działania i racjonalne wydatkowanie budżetu na bezpieczeństwo. **Bariery** to koszty, ryzyko biurokratyzacji, opór pracowników i zagrożenie „papierowym” systemem, który istnieje tylko w dokumentacji.",
   "Pojęcie „system zarządzania bezpieczeństwem” może obejmować także szersze rozwiązania – np. system zarządzania bezpieczeństwem i higieną pracy (**ISO 45001**) czy ciągłością działania – jednak wspólnym mianownikiem pozostaje podejście procesowe, oparte na ryzyku i ciągłym doskonaleniu."
  ]
 },
 "K11": {
  "title": "Na czym polega złożoność obliczeniowa algorytmów",
  "paragraphs": [
   "**Złożoność obliczeniowa** algorytmu to miara ilości zasobów potrzebnych do jego wykonania w zależności od **rozmiaru danych wejściowych** n. Wyróżnia się:",
   "• **złożoność czasową** – liczbę operacji dominujących (np. porównań, przypisań), a nie czas w sekundach, który zależy od sprzętu;",
   "• **złożoność pamięciową** – ilość dodatkowej pamięci potrzebnej do wykonania algorytmu.",
   "Analiza złożoności pozwala porównywać algorytmy niezależnie od sprzętu, języka programowania i implementacji oraz przewidzieć, jak algorytm zachowa się dla dużych danych (**skalowalność**).",
   "Rozróżnia się złożoność **pesymistyczną** (najgorszy przypadek), **oczekiwaną (średnią)** i **optymistyczną**.",
   "Przykładowo sortowanie szybkie (quicksort) ma złożoność średnią O(n log n), ale pesymistyczną O(n ).",
   "**Notacja asymptotyczna**:",
   "• **O (duże O)** – ograniczenie górne: funkcja rośnie nie szybciej niż podana;",
   "• **Ω (omega)** – ograniczenie dolne;",
   "• **Θ (theta)** – dokładne tempo wzrostu (ograniczenie z obu stron). 2 2 Pomija się stałe i składniki niższego rzędu, np. 3n + 5n + 7 = O(n ).",
   "**Podstawowe klasy złożoności** (od najkorzystniejszej):",
   "**Klasa Nazwa Przykład** O(1) stała dostęp do elementu tablicy po indeksie, odczyt z tablicy mieszającej (średnio) O(log n) logarytmiczna wyszukiwanie binarne, operacje na zrównoważonym drzewie BST O(n) liniowa wyszukiwanie liniowe, suma elementów O(n log n) liniowo-logarytmiczna sortowanie przez scalanie, heapsort, quicksort (średnio) O(n ) kwadratowa sortowanie bąbelkowe, przez wstawianie; dwie zagnieżdżone pętle O(n ) sześcienna klasyczne mnożenie macierzy n O(2 ) wykładnicza przegląd wszystkich podzbiorów, naiwna rekurencja Fibonacciego O(n!) silniowa przegląd wszystkich permutacji (np. pełne przeszukiwanie w problemie komiwojażera) Znaczenie praktyczne ilustruje przykład: dla n = 1 000 000 algorytm O(n log n) wykona ok. 20 mln operacji, a 2 12 algorytm O(n ) – 10 operacji. Przy miliardzie operacji na sekundę oznacza to ok. 0,02 s wobec ok. 17 minut. n Dla algorytmu O(2 ) już przy n = 100 czas obliczeń wielokrotnie przekroczyłby wiek Wszechświata – żaden postęp sprzętowy tego nie zmieni. Znana jest również **dolna granica** Ω(n log n) dla sortowania opartego na porównaniach.",
   "**Teoria złożoności** klasyfikuje także **problemy obliczeniowe**:",
   "• **klasa P** – problemy rozwiązywalne w czasie wielomianowym przez deterministyczną maszynę Turinga (uważane za praktycznie rozwiązywalne), np. sortowanie, wyznaczanie najkrótszej ścieżki (algorytm Dijkstry);",
   "• **klasa NP** – problemy, których rozwiązanie można **zweryfikować** w czasie wielomianowym;",
   "• **problemy NP-zupełne** – najtrudniejsze w klasie NP, np. problem spełnialności formuł logicznych (**SAT** – pierwszy problem, którego NP-zupełność wykazano; twierdzenie Cooka, 1971), decyzyjna wersja **problemu komiwojażera**, problem plecakowy, kolorowanie grafu. W praktyce dla problemów NP-trudnych stosuje się **heurystyki i metaheurystyki** (algorytmy genetyczne, symulowane wyżarzanie) oraz algorytmy aproksymacyjne.",
   "Pytanie, czy **P = NP**, należy do siedmiu **problemów milenijnych** Instytutu Claya. Od jego rozstrzygnięcia zależy wiele – m.in. bezpieczeństwo współczesnej kryptografii, która opiera się na trudności obliczeniowej pewnych problemów (np. faktoryzacji dużych liczb w algorytmie RSA).",
   "Wniosek: analiza złożoności to podstawowe narzędzie inżyniera oprogramowania – wybór lepszego algorytmu daje zwykle znacznie większy zysk niż szybszy sprzęt."
  ]
 },
 "K12": {
  "title": "Charakterystyka baz danych – cechy, przykłady",
  "paragraphs": [
   "**Baza danych** to uporządkowany zbiór powiązanych ze sobą danych, przechowywanych zgodnie z określonym modelem i zarządzanych przez **system zarządzania bazą danych** (**SZBD**, ang. DBMS). SZBD to oprogramowanie umożliwiające definiowanie struktur danych, ich wprowadzanie, modyfikację, wyszukiwanie i ochronę oraz zapewniające współdzielenie danych przez wielu użytkowników.",
   "**Cechy baz danych** (wymagania stawiane SZBD):",
   "• **trwałość** – dane przetrwają zakończenie programu i awarię systemu;",
   "• **integralność i spójność** – dane są poprawne i zgodne z regułami (ograniczenia, klucze, więzy integralności referencyjnej);",
   "• **współbieżność** – jednoczesny dostęp wielu użytkowników bez utraty spójności (blokady, wielowersyjność – MVCC);",
   "• **transakcyjność** – właściwości **ACID**: atomowość (wszystko albo nic), spójność, izolacja (transakcje nie wpływają na siebie nawzajem), trwałość (zatwierdzone zmiany są zachowane);",
   "• **bezpieczeństwo** – uwierzytelnianie, kontrola uprawnień, szyfrowanie, audyt;",
   "• **niezależność danych** – logiczna i fizyczna (zmiana sposobu przechowywania nie wymaga zmiany aplikacji; trójpoziomowa architektura ANSI/SPARC);",
   "• **minimalna redundancja** – eliminowana poprzez **normalizację** (1NF, 2NF, 3NF, BCNF);",
   "• **wydajność** – indeksy, optymalizator zapytań; **skalowalność** i **wysoka dostępność** (replikacja, klastry);",
   "• **deklaratywny język zapytań** – **SQL** z podjęzykami DDL, DML, DCL i TCL.",
   "**Modele baz danych** i przykłady:",
   "• **hierarchiczny** (struktura drzewa; IBM IMS) i **sieciowy** (model CODASYL) – historyczne;",
   "• **relacyjny** – zaproponowany przez **E. F. Codda (1970)**; dane w tabelach (relacjach) powiązanych kluczami; najczęściej stosowany w systemach biznesowych. Przykłady: **Oracle Database**, **Microsoft SQL Server**, **PostgreSQL**, **MySQL/MariaDB**, IBM Db2, **SQLite** (baza wbudowana, np. w aplikacjach mobilnych);",
   "• **obiektowy i obiektowo-relacyjny** (np. PostgreSQL łączy cechy obu);",
   "• **NoSQL** – dla dużych wolumenów danych, rozproszenia i elastycznych schematów: – klucz–wartość: **Redis**, Amazon DynamoDB; – dokumentowe (JSON/BSON): **MongoDB**, Couchbase; – kolumnowe (szerokich kolumn): **Apache Cassandra**, HBase; – grafowe: **Neo4j** – relacje jako obiekty pierwszej kategorii (sieci społecznościowe, wykrywanie oszustw);",
   "• **NewSQL** (np. Google Spanner, CockroachDB) – skalowalność typowa dla NoSQL z gwarancjami ACID;",
   "• **wektorowe bazy danych** (np. Pinecone, Milvus, rozszerzenie pgvector) – przechowują reprezentacje wektorowe (embeddingi) na potrzeby wyszukiwania semantycznego i systemów AI (RAG);",
   "• bazy **analityczne/kolumnowe** (ClickHouse, Snowflake), **in-memory** (SAP HANA) oraz **szeregów czasowych** (InfluxDB – m.in. dla IoT).",
   "Systemy rozproszone opisuje **twierdzenie CAP** (E. Brewer): w razie podziału sieci system musi wybrać między spójnością a dostępnością. Bazy NoSQL często przyjmują model **BASE** (Basically Available, Soft state, Eventual consistency) zamiast ścisłego ACID.",
   "**Inne podziały**: bazy **operacyjne (OLTP)** i **analityczne (OLAP)**; **scentralizowane** i **rozproszone**; wdrażane lokalnie (**on-premise**) i **chmurowe** (DBaaS, np. Amazon RDS, Azure SQL Database).",
   "Wybór bazy zależy od charakteru danych, wymagań co do spójności, skali i wzorców dostępu – coraz częściej stosuje się **architekturę poliglotyczną** (polyglot persistence), wykorzystując różne bazy do różnych zadań w ramach jednego systemu."
  ]
 },
 "K13": {
  "title": "Obiekty bazodanowe, pojęcie klucza, typy danych (przykłady)",
  "paragraphs": [
   "**Obiekty bazodanowe** to elementy tworzące strukturę bazy danych, definiowane za pomocą instrukcji języka **DDL** (CREATE, ALTER, DROP):",
   "• **tabela** – podstawowy obiekt przechowujący dane w wierszach (rekordach, krotkach) i kolumnach (atrybutach);",
   "• **widok (view)** – wirtualna tabela oparta na zapytaniu; upraszcza dostęp do danych i ogranicza zakres danych widocznych dla użytkownika; **widok zmaterializowany** fizycznie przechowuje wynik zapytania;",
   "• **indeks** – struktura (najczęściej drzewo B+) przyspieszająca wyszukiwanie kosztem wolniejszego zapisu i dodatkowej pamięci;",
   "• **ograniczenia (constraints)** – PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, DEFAULT – strzegą integralności danych;",
   "• **procedura składowana** – program zapisany w bazie (np. w PL/SQL, T-SQL, PL/pgSQL) realizujący logikę po stronie serwera;",
   "• **funkcja** – zwraca wartość i może być używana w zapytaniach;",
   "• **wyzwalacz (trigger)** – procedura uruchamiana automatycznie w reakcji na zdarzenie (INSERT, UPDATE, DELETE), np. w celu rejestrowania zmian;",
   "• **sekwencja** – generator kolejnych unikalnych wartości (np. identyfikatorów);",
   "• **schemat** – logiczny kontener grupujący obiekty; ponadto **synonimy** oraz **użytkownicy i role**, którym uprawnienia nadaje się instrukcjami DCL (GRANT, REVOKE).",
   "**Pojęcie klucza.** Klucz to atrybut lub zbiór atrybutów służący do jednoznacznej identyfikacji rekordów lub tworzenia powiązań między tabelami:",
   "• **superklucz** – dowolny zbiór atrybutów jednoznacznie identyfikujący wiersz;",
   "• **klucz kandydujący** – minimalny superklucz (nie można z niego usunąć żadnego atrybutu bez utraty unikalności);",
   "• **klucz główny (primary key)** – wybrany klucz kandydujący; musi być **unikalny i niepusty (NOT NULL)**; w tabeli może być tylko jeden;",
   "• **klucz alternatywny** – klucz kandydujący niewybrany jako główny (zwykle z ograniczeniem UNIQUE);",
   "• **klucz obcy (foreign key)** – atrybut wskazujący na klucz główny innej (lub tej samej) tabeli; realizuje **integralność referencyjną** i relacje 1:1 oraz 1:N, a za pośrednictwem tabeli łączącej – N:M; określa zachowanie przy usunięciu rekordu nadrzędnego (ON DELETE CASCADE / SET NULL / RESTRICT);",
   "• **klucz naturalny** (pochodzi z danych biznesowych, np. PESEL, NIP, ISBN) oraz **klucz sztuczny – surogat** (np. autonumerowany identyfikator, UUID – niezależny od zmian danych biznesowych);",
   "• **klucz złożony** – składa się z kilku kolumn (np. id_zamowienia + id_produktu w tabeli pozycji zamówienia).",
   "**Typy danych** (przykłady według standardu SQL; nazwy różnią się między systemami):",
   "• **liczbowe całkowite**: SMALLINT, INTEGER, BIGINT;",
   "• **liczbowe dokładne**: DECIMAL(p,s) / NUMERIC – np. DECIMAL(10,2) dla kwot pieniężnych (brak błędów zaokrągleń);",
   "• **zmiennoprzecinkowe**: REAL, FLOAT, DOUBLE PRECISION – dla obliczeń naukowych i technicznych;",
   "• **znakowe**: CHAR(n) – stała długość (np. kod kraju „PL”), VARCHAR(n) – zmienna długość, TEXT/CLOB – długie teksty;",
   "• **daty i czasu**: DATE, TIME, TIMESTAMP (także ze strefą czasową), INTERVAL;",
   "• **logiczny**: BOOLEAN (TRUE/FALSE);",
   "• **binarne**: BLOB, VARBINARY/BYTEA – pliki, obrazy;",
   "• **specjalne**: UUID, JSON/JSONB, XML, typy przestrzenne (GEOMETRY), tablice, typy wyliczeniowe (ENUM), a w nowszych systemach także typ wektorowy.",
   "Ważnym pojęciem jest wartość **NULL** – oznacza brak lub nieznaną wartość, a nie zero czy pusty tekst.",
   "**Przykład** (dialekt PostgreSQL):",
   "CREATE TABLE klient ( id_klienta SERIAL PRIMARY KEY, nip CHAR(10) UNIQUE, nazwa VARCHAR(200) NOT NULL, data_rejestr DATE DEFAULT CURRENT_DATE );",
   "CREATE TABLE zamowienie ( id_zamowienia BIGSERIAL PRIMARY KEY, id_klienta INTEGER NOT NULL REFERENCES klient(id_klienta) ON DELETE RESTRICT, kwota DECIMAL(12,2) CHECK (kwota >= 0), zaplacone BOOLEAN DEFAULT FALSE );",
   "CREATE INDEX idx_zam_klient ON zamowienie(id_klienta);",
   "W tym przykładzie id_klienta w tabeli klient jest kluczem głównym (surogatem), nip – kluczem alternatywnym (naturalnym), a id_klienta w tabeli zamowienie – kluczem obcym realizującym relację jeden-do-wielu. Właściwy dobór typów danych i kluczy wpływa na integralność, wydajność i rozmiar bazy – to fundament dobrze zaprojektowanego, znormalizowanego schematu."
  ]
 },
 "K14": {
  "title": "Wykorzystanie systemów wspomagania decyzji w przedsiębiorstwie",
  "paragraphs": [
   "**System wspomagania decyzji** (**SWD**, ang. DSS – Decision Support System) to interaktywny system informatyczny, który pomaga decydentom rozwiązywać **problemy półstrukturalne i niestrukturalne** poprzez wykorzystanie danych, modeli analitycznych i wiedzy. Istotne jest, że SWD **wspiera, a nie zastępuje** decydenta – ostateczna decyzja i odpowiedzialność pozostają po stronie człowieka. Koncepcję rozwinęli w latach 70. XX w. m.in. G. A. Gorry i M. S. Scott Morton.",
   "**Kontekst decyzyjny.** H. Simon opisał proces decyzyjny jako ciąg faz: **rozpoznanie** (identyfikacja problemu) → **projektowanie** (tworzenie wariantów rozwiązań) → **wybór**; później dodano fazę **wdrożenia i kontroli**.",
   "Decyzje dzieli się na **strukturalne** (rutynowe, dające się zalgorytmizować – obsługiwane przez systemy transakcyjne), **półstrukturalne** i **niestrukturalne** (unikatowe, strategiczne). SWD koncentrują się na dwóch ostatnich kategoriach.",
   "**Budowa klasycznego SWD**:",
   "• **podsystem danych** – baza lub hurtownia danych wewnętrznych i zewnętrznych;",
   "• **podsystem modeli (baza modeli)** – modele statystyczne, prognostyczne, optymalizacyjne (np. programowanie liniowe), symulacyjne i finansowe;",
   "• **podsystem dialogowy (interfejs użytkownika)** – umożliwia interakcję, analizy „co-jeśli” i wizualizację wyników;",
   "• opcjonalnie **podsystem wiedzy** – reguły eksperckie lub modele uczenia maszynowego (tzw. inteligentne SWD).",
   "**Rodzaje SWD** (klasyfikacja D. Powera): sterowane **danymi** (data-driven – np. OLAP, BI), **modelami** (model-driven – optymalizacja, symulacja), **wiedzą** (knowledge-driven – systemy ekspertowe), **dokumentami** (document-driven) oraz **komunikacją** (communication-driven – np. grupowe systemy wspomagania decyzji, GDSS). Pokrewne są **systemy informowania kierownictwa (EIS)** oraz współczesne systemy **Business Intelligence** i **analityki preskryptywnej**.",
   "**Wykorzystanie w przedsiębiorstwie** – przykłady:",
   "• **finanse** – planowanie budżetu, ocena opłacalności inwestycji, analiza ryzyka kredytowego (scoring), zarządzanie płynnością, wykrywanie nadużyć;",
   "• **produkcja i logistyka** – planowanie produkcji (MRP, APS), harmonogramowanie, **optymalizacja tras dostaw**, zarządzanie zapasami, wybór lokalizacji magazynów;",
   "• **marketing i sprzedaż** – prognozowanie popytu, **dynamiczne ustalanie cen**, segmentacja klientów, systemy rekomendacyjne, planowanie kampanii;",
   "• **zarządzanie zasobami ludzkimi** – planowanie obsady, analiza rotacji, wspomaganie rekrutacji (z zachowaniem ostrożności etycznej i prawnej);",
   "• **zarządzanie strategiczne** – analiza scenariuszowa, symulacje rynkowe, zrównoważona karta wyników;",
   "• **sektory specjalistyczne** – medycyna (wspomaganie diagnozy), energetyka (prognozowanie zapotrzebowania), rolnictwo precyzyjne.",
   "**Korzyści**: szybsze i lepiej uzasadnione decyzje, możliwość analizy wielu wariantów, ograniczenie wpływu intuicji i błędów poznawczych, lepsze wykorzystanie danych, przewaga konkurencyjna. **Ograniczenia**: zależność od jakości danych i poprawności modeli, koszty wdrożenia, ryzyko nadmiernego zaufania do wyników, brak przejrzystości modeli opartych na AI oraz wymogi regulacyjne – np. AI Act i art. 22 RODO (prawo do niepodlegania decyzji opartej wyłącznie na zautomatyzowanym przetwarzaniu).",
   "Współcześnie SWD ewoluują w kierunku rozwiązań wykorzystujących **sztuczną inteligencję** – uczenie maszynowe i duże modele językowe – co znacząco zwiększa ich możliwości, ale wymaga zachowania **nadzoru człowieka** nad kluczowymi decyzjami."
  ]
 },
 "K15": {
  "title": "Systemy ekspertowe – budowa, znaczenie, wykorzystanie",
  "paragraphs": [
   "**System ekspertowy** to program komputerowy należący do dziedziny sztucznej inteligencji, który wykorzystuje **wiedzę ekspertów** z wąskiej, specjalistycznej dziedziny oraz **mechanizmy wnioskowania** w celu rozwiązywania problemów wymagających zwykle udziału człowieka-eksperta. Naśladuje sposób rozumowania specjalisty i – co go wyróżnia – potrafi **wyjaśnić**, w jaki sposób doszedł do wniosku. Systemy ekspertowe reprezentują tzw. **symboliczną sztuczną inteligencję** i rozwijały się głównie w latach 70. i 80.",
   "XX w.",
   "**Budowa systemu ekspertowego**:",
   "• **baza wiedzy** – zawiera wiedzę dziedzinową, najczęściej w postaci **reguł produkcji** (JEŻELI warunek, TO wniosek lub akcja), a także ram, sieci semantycznych czy ontologii; np. JEŻELI temperatura > 38°C I występuje kaszel, TO możliwa infekcja dróg oddechowych;",
   "• **baza faktów** (pamięć robocza) – dane dotyczące konkretnego rozwiązywanego przypadku;",
   "• **mechanizm wnioskowania (maszyna wnioskująca)** – na podstawie faktów i reguł wyprowadza nowe fakty; stosuje **wnioskowanie w przód** (od faktów do wniosków – sterowane danymi) lub **wnioskowanie wstecz** (od hipotezy do potwierdzających ją faktów – sterowane celem) oraz strategie rozstrzygania konfliktów między regułami;",
   "• **moduł objaśniający** – wyjaśnia użytkownikowi, dlaczego zadano pytanie i jak uzyskano wynik, co buduje zaufanie do systemu;",
   "• **moduł pozyskiwania wiedzy** – umożliwia rozbudowę i aktualizację bazy wiedzy;",
   "• **interfejs użytkownika**.",
   "Kluczową rolę odgrywa **inżynier wiedzy**, który pozyskuje wiedzę od ekspertów i ją formalizuje. Etap **pozyskiwania wiedzy** uchodzi za najtrudniejszy (tzw. wąskie gardło akwizycji wiedzy). Do reprezentowania niepewności stosuje się **współczynniki pewności**, **logikę rozmytą** czy **sieci bayesowskie**. Systemy buduje się z użyciem języków i narzędzi takich jak **Prolog**, **LISP**, **CLIPS**, **Drools** lub gotowych **systemów szkieletowych** (shell) – „pustych” systemów ekspertowych, które wypełnia się wiedzą dziedzinową.",
   "**Klasyczne przykłady**: **MYCIN** (Uniwersytet Stanforda, lata 70.) – diagnozowanie bakteryjnych infekcji krwi i dobór antybiotyków; **DENDRAL** – ustalanie struktury związków chemicznych; **XCON (R1)** – konfigurowanie komputerów VAX w firmie DEC, przynoszące znaczące oszczędności; **PROSPECTOR** – wspomaganie poszukiwań złóż mineralnych.",
   "**Znaczenie**: systemy ekspertowe pozwalają **utrwalić i powielić rzadką wiedzę ekspercką** (chroniąc ją przed utratą, np. wraz z odejściem specjalisty), zapewniają spójność i szybkość decyzji, działają bez przerwy i w wielu miejscach jednocześnie, a dzięki modułowi objaśniającemu – są przejrzyste. Ich wady to trudność pozyskania i aktualizacji wiedzy, wąski zakres działania (brak „zdrowego rozsądku”), zawodność w sytuacjach nietypowych oraz brak zdolności samodzielnego uczenia się.",
   "**Wykorzystanie**: diagnostyka medyczna i techniczna (awarie maszyn, pojazdów, sieci), bankowość i ubezpieczenia (ocena wniosków kredytowych, likwidacja szkód, wykrywanie oszustw), doradztwo prawne i podatkowe, konfiguratory produktów, sterowanie procesami przemysłowymi, rolnictwo, systemy help desk oraz systemy zarządzania regułami biznesowymi (**BRMS**) w dużych organizacjach.",
   "Obecnie klasyczne systemy ekspertowe ustępują miejsca uczeniu maszynowemu i dużym modelom językowym, jednak ich idea przetrwała – w silnikach reguł biznesowych oraz w podejściu **neurosymbolicznym**, łączącym sieci neuronowe z jawną, weryfikowalną wiedzą. Zaletą systemów regułowych pozostaje **wyjaśnialność**, coraz ważniejsza w świetle wymogów AI Act."
  ]
 },
 "K16": {
  "title": "Internet rzeczy – istota działania, zalety, wady, wykorzystanie",
  "paragraphs": [
   "**Internet rzeczy** (IoT – Internet of Things) to koncepcja, zgodnie z którą fizyczne przedmioty – urządzenia, maszyny, pojazdy, budynki – wyposażone w **czujniki, elementy wykonawcze (aktuatory), mikroprocesory i moduły komunikacyjne** łączą się z siecią, zbierają i wymieniają dane oraz mogą autonomicznie reagować na zmiany otoczenia. Termin wprowadził w 1999 r. **Kevin Ashton**. Liczbę podłączonych urządzeń IoT na świecie szacuje się obecnie na około 20 miliardów.",
   "**Istota działania – architektura warstwowa**:",
   "1. **Warstwa percepcji (urządzeń)** – czujniki mierzą parametry (temperaturę, ruch, wilgotność, położenie GPS, drgania), a aktuatory wykonują działania (otwierają zawór, przełączają przekaźnik, uruchamiają silnik); identyfikacja obiektów odbywa się m.in. za pomocą RFID i NFC.",
   "2. **Warstwa sieciowa (komunikacji)** – przesyła dane za pomocą technologii krótkiego zasięgu (**Wi-Fi, Bluetooth Low Energy, Zigbee, Z-Wave, Thread/Matter**), dalekiego zasięgu o niskim poborze mocy (**LPWAN: LoRaWAN, NB-IoT, LTE-M**) oraz **5G**, z użyciem lekkich protokołów aplikacyjnych, takich jak **MQTT** (model publikuj–subskrybuj) i **CoAP**.",
   "3. **Warstwa przetwarzania** – dane są analizowane w **chmurze** (np. platformy AWS IoT, Azure IoT) lub bliżej źródła – w modelu **przetwarzania brzegowego (edge computing)** i mgłowego (fog computing), co zmniejsza opóźnienia i obciążenie sieci.",
   "4. **Warstwa aplikacji** – usługi dla użytkownika: panele, alerty, automatyzacja, analityka, **cyfrowe bliźniaki** (digital twins).",
   "Cykl działania można opisać sekwencją: **pomiar → transmisja → analiza → decyzja → działanie**.",
   "**Zalety**: automatyzacja procesów i oszczędność czasu; monitorowanie w czasie rzeczywistym; **optymalizacja zużycia zasobów** (energii, wody, paliwa); **konserwacja predykcyjna** – wykrywanie awarii, zanim nastąpią; lepsze dane do podejmowania decyzji; nowe modele biznesowe (produkt jako usługa); poprawa komfortu, bezpieczeństwa i jakości życia (np. teleopieka nad osobami starszymi).",
   "**Wady i wyzwania**: **bezpieczeństwo** (wiele urządzeń ma słabe zabezpieczenia i staje się celem ataków), **prywatność** (gromadzenie wrażliwych danych o zachowaniach użytkowników), **brak standaryzacji i interoperacyjności** (częściowo rozwiązywany przez standard Matter), zależność od łączności i od dostawcy (np. wyłączenie usługi chmurowej unieruchamia urządzenie), koszty wdrożenia i utrzymania, zarządzanie ogromną liczbą urządzeń i danych, zużycie energii i elektroodpady, ograniczone zasoby obliczeniowe urządzeń.",
   "**Wykorzystanie**:",
   "• **inteligentny dom** (smart home) – oświetlenie, ogrzewanie, zamki, czujniki dymu, asystenci głosowi;",
   "• **przemysł (IIoT, Przemysł 4.0)** – monitorowanie maszyn, konserwacja predykcyjna, śledzenie produkcji;",
   "• **inteligentne miasta** – sterowanie ruchem, systemy parkingowe, oświetlenie uliczne, monitoring jakości powietrza, gospodarka odpadami;",
   "• **energetyka** – inteligentne liczniki (smart metering), sieci smart grid;",
   "• **logistyka i transport** – śledzenie przesyłek i flot, monitorowanie łańcucha chłodniczego, pojazdy połączone z siecią;",
   "• **ochrona zdrowia** (IoMT) – urządzenia ubieralne (wearables), zdalne monitorowanie pacjentów;",
   "• **rolnictwo precyzyjne** – czujniki wilgotności gleby, automatyczne nawadnianie, monitoring zwierząt;",
   "• **handel** – zarządzanie zapasami, inteligentne półki sklepowe.",
   "Internet rzeczy jest jednym z filarów transformacji cyfrowej – jego pełny potencjał ujawnia się w połączeniu z **analityką big data, sztuczną inteligencją i sieciami 5G**, pod warunkiem zapewnienia odpowiedniego poziomu bezpieczeństwa."
  ]
 },
 "K17": {
  "title": "Zagrożenia w systemach Internetu rzeczy",
  "paragraphs": [
   "Systemy IoT są szczególnie narażone na ataki ze względu na **ogromną liczbę i różnorodność urządzeń**, ich **ograniczone zasoby** obliczeniowe i energetyczne (utrudniające stosowanie silnej kryptografii), długi cykl życia bez aktualizacji, fizyczną dostępność dla atakującego oraz presję producentów na niski koszt i szybkie wprowadzenie produktu na rynek – często kosztem bezpieczeństwa. Każde podłączone urządzenie rozszerza **powierzchnię ataku** organizacji.",
   "**Główne zagrożenia** (m.in. według zestawienia OWASP IoT Top 10):",
   "• **słabe, domyślne lub zaszyte na stałe hasła** – najczęstsza przyczyna przejęć; przykładem jest **botnet Mirai (2016)**, który przejął setki tysięcy kamer i routerów, logując się domyślnymi hasłami, i przeprowadził jeden z największych ataków **DDoS** (m.in. na dostawcę usług DNS – firmę Dyn, co zakłóciło dostęp do wielu popularnych serwisów);",
   "• **brak lub niebezpieczny mechanizm aktualizacji** – niezałatane podatności oprogramowania układowego (firmware), aktualizacje bez weryfikacji podpisu cyfrowego;",
   "• **niezabezpieczone usługi sieciowe i interfejsy** – otwarte porty (np. Telnet), podatne interfejsy webowe, API i aplikacje mobilne sterujące urządzeniem;",
   "• **brak szyfrowania komunikacji** – podsłuch, ataki typu **man-in-the-middle**, podszywanie się pod urządzenie;",
   "• **niebezpieczne przechowywanie danych** i **naruszenia prywatności** – kamery, asystenci głosowi, urządzenia medyczne i ubieralne gromadzą dane wrażliwe;",
   "• **ataki fizyczne** – dostęp do portów serwisowych (JTAG, UART), odczyt pamięci, klonowanie urządzeń;",
   "• **zagrożenia łańcucha dostaw** – podatne komponenty i biblioteki firm trzecich, złośliwe modyfikacje na etapie produkcji;",
   "• **ataki na protokoły radiowe** (Zigbee, BLE) – zagłuszanie (jamming), ataki powtórzeniowe (replay);",
   "• **wykorzystanie urządzenia jako punktu wejścia** do sieci firmowej i dalszego przemieszczania się w niej – opisywano np. przypadek, w którym przestępcy dostali się do sieci kasyna przez podłączony do Internetu termometr w akwarium;",
   "• **zagrożenia dla systemów przemysłowych (OT, IIoT)** – sabotaż procesów fizycznych (przykładem jest robak **Stuxnet**), z potencjalnym zagrożeniem dla życia i zdrowia;",
   "• **brak zarządzania urządzeniami** – niezinwentaryzowane urządzenia (tzw. shadow IoT), brak monitorowania i procedur bezpiecznego wycofania z eksploatacji.",
   "**Skutki**: przejęcie kontroli nad urządzeniem, włączenie go do botnetu, kradzież danych, szpiegowanie użytkowników, zakłócenie procesów przemysłowych, a nawet zagrożenie bezpieczeństwa fizycznego ludzi (np. w medycynie, transporcie, energetyce).",
   "**Metody ochrony**: zmiana haseł domyślnych i unikalne poświadczenia dla każdego urządzenia, **segmentacja sieci** (odrębne sieci VLAN dla IoT), regularne i podpisane cyfrowo aktualizacje (OTA), **bezpieczny rozruch** (secure boot) i sprzętowe moduły bezpieczeństwa (TPM, secure element), szyfrowanie komunikacji (TLS/DTLS) i uwierzytelnianie oparte na certyfikatach, wyłączanie zbędnych usług, inwentaryzacja i monitorowanie urządzeń (wykrywanie anomalii w ruchu sieciowym), zasada **security by design**.",
   "W sferze regulacyjnej istotne są: norma **ETSI EN 303 645** (bezpieczeństwo konsumenckiego IoT), unijne wymagania cyberbezpieczeństwa dla urządzeń radiowych (akt delegowany do dyrektywy RED, stosowany od sierpnia 2025 r.) oraz **Cyber Resilience Act** (rozporządzenie UE 2024/2847), który wprowadza obowiązkowe wymagania bezpieczeństwa dla produktów z elementami cyfrowymi – z obowiązkiem zgłaszania aktywnie wykorzystywanych podatności od września 2026 r. i pełnym stosowaniem od grudnia 2027 r."
  ]
 },
 "K18": {
  "title": "Uczenie maszynowe – analiza pojęcia, działanie, wykorzystanie",
  "paragraphs": [
   "**Uczenie maszynowe** (ML – Machine Learning) to dziedzina sztucznej inteligencji zajmująca się tworzeniem algorytmów, które **uczą się na podstawie danych** i poprawiają swoje działanie wraz z doświadczeniem, zamiast wykonywać reguły jawnie zaprogramowane przez człowieka. W klasycznym ujęciu A. Samuela (1959) jest to dziedzina dająca komputerom zdolność uczenia się bez konieczności ich jawnego programowania. Bardziej formalną definicję podał T. Mitchell (1997): program uczy się z doświadczenia E w odniesieniu do zadania T i miary jakości P, jeżeli jego skuteczność w zadaniu T, mierzona miarą P, rośnie wraz z doświadczeniem E. Przykładowo filtr antyspamowy (zadanie T – klasyfikacja wiadomości) uczy się na oznaczonych e-mailach (doświadczenie E), a miarą jakości jest odsetek poprawnych klasyfikacji (P).",
   "**Relacja pojęć**: sztuczna inteligencja (AI) jest pojęciem najszerszym; uczenie maszynowe to jej poddziedzina, a **głębokie uczenie** (deep learning), oparte na wielowarstwowych sieciach neuronowych, jest z kolei poddziedziną uczenia maszynowego. Na głębokim uczeniu opierają się współczesne **duże modele językowe (LLM)** i generatywna AI.",
   "**Istota zmiany paradygmatu**: w programowaniu klasycznym człowiek dostarcza **dane i reguły**, a komputer zwraca wyniki; w uczeniu maszynowym człowiek dostarcza **dane i oczekiwane wyniki (przykłady)**, a komputer sam wyznacza reguły – czyli model.",
   "**Działanie – cykl życia modelu uczenia maszynowego**:",
   "1. **Zdefiniowanie problemu** i miary sukcesu.",
   "2. **Pozyskanie i przygotowanie danych** – czyszczenie, uzupełnianie braków, normalizacja, kodowanie zmiennych, **inżynieria cech** (feature engineering); etap ten często pochłania większość czasu projektu.",
   "3. **Podział danych** na zbiór **treningowy**, **walidacyjny** i **testowy** (lub walidacja krzyżowa).",
   "4. **Wybór algorytmu i trening** – parametry modelu (np. wagi) są dopasowywane tak, by **minimalizować funkcję straty** (błąd między predykcją a rzeczywistością), najczęściej metodą **spadku gradientu**; dobiera się także **hiperparametry**.",
   "5. **Ewaluacja** – na danych testowych, niewidzianych podczas treningu, z użyciem metryk: dokładność, precyzja, czułość (recall), miara F1, AUC (klasyfikacja) lub MAE, RMSE (regresja).",
   "6. **Wdrożenie i monitorowanie** – model działa produkcyjnie (inferencja), jego jakość jest monitorowana, a sam model okresowo douczany (praktyki **MLOps**).",
   "Celem uczenia jest **generalizacja** – poprawne działanie na nowych, nieznanych danych, a nie zapamiętanie przykładów treningowych.",
   "**Wykorzystanie**:",
   "• **biznes i marketing** – systemy rekomendacyjne (e-commerce, serwisy streamingowe), segmentacja klientów, przewidywanie odejść (churn), dynamiczne ustalanie cen;",
   "• **finanse** – wykrywanie oszustw kartowych, scoring kredytowy, handel algorytmiczny, przeciwdziałanie praniu pieniędzy;",
   "• **medycyna** – analiza obrazów medycznych (RTG, tomografia, MRI), wspomaganie diagnozy, projektowanie leków;",
   "• **przemysł** – konserwacja predykcyjna, kontrola jakości z wykorzystaniem wizji komputerowej, optymalizacja procesów;",
   "• **przetwarzanie języka naturalnego** – tłumaczenie maszynowe, chatboty i asystenci AI, analiza sentymentu, rozpoznawanie mowy;",
   "• **transport** – pojazdy autonomiczne, optymalizacja logistyki;",
   "• **cyberbezpieczeństwo** – wykrywanie anomalii i złośliwego oprogramowania, filtrowanie spamu i phishingu;",
   "• **informatyka** – asystenci programistyczni generujący i analizujący kod.",
   "Uczenie maszynowe stało się technologią ogólnego przeznaczenia – jego wartość zależy jednak od jakości danych, rzetelnej ewaluacji i odpowiedzialnego stosowania, które w Unii Europejskiej reguluje **AI Act** (rozporządzenie 2024/1689)."
  ]
 },
 "K19": {
  "title": "Ograniczenia i problemy w uczeniu maszynowym",
  "paragraphs": [
   "Mimo spektakularnych sukcesów uczenie maszynowe ma istotne ograniczenia, których zrozumienie jest warunkiem jego odpowiedzialnego stosowania. Można je pogrupować w kilka kategorii. **1. Problemy związane z danymi**:",
   "• **jakość danych** – zasada **GIGO** (garbage in, garbage out): błędy, braki, szum i nieaktualność danych przekładają się na błędne modele;",
   "• **ilość danych** – szczególnie głębokie uczenie wymaga ogromnych zbiorów, których oznaczanie (etykietowanie) bywa kosztowne;",
   "• **niereprezentatywność i stronniczość (bias)** – model odtwarza uprzedzenia obecne w danych historycznych; znany jest przypadek eksperymentalnego systemu rekrutacyjnego dużej firmy technologicznej, który dyskryminował kobiety, ponieważ uczył się na decyzjach z okresu, w którym zatrudniano głównie mężczyzn;",
   "• **niezbalansowane klasy** – np. oszustwa stanowią ułamek procenta transakcji, więc model zawsze odpowiadający „brak oszustwa” ma wysoką dokładność, ale jest bezużyteczny;",
   "• **wyciek danych (data leakage)** – informacje ze zbioru testowego lub „z przyszłości” trafiające do treningu i zawyżające ocenę modelu;",
   "• **klątwa wymiarowości** – przy bardzo dużej liczbie cech dane stają się rzadkie, a modele gorzej uogólniają. **2. Problemy związane z modelem i procesem uczenia**:",
   "• **przeuczenie (overfitting)** – model „zapamiętuje” dane treningowe wraz z szumem i słabo generalizuje; przeciwdziała się mu m.in. regularyzacją, walidacją krzyżową, techniką dropout, wczesnym zatrzymaniem uczenia i zwiększeniem ilości danych;",
   "• **niedouczenie (underfitting)** – model zbyt prosty, by uchwycić zależności;",
   "• **kompromis między obciążeniem a wariancją** (bias–variance trade-off);",
   "• **dryf danych i dryf koncepcji** – zmiana rozkładu danych w czasie (np. zmiana zachowań klientów po pandemii) powoduje degradację modelu, stąd konieczność monitorowania i douczania;",
   "• **korelacja a przyczynowość** – modele wychwytują korelacje, które nie muszą oznaczać związków przyczynowych;",
   "• **halucynacje** modeli generatywnych – wytwarzanie przekonująco brzmiących, lecz nieprawdziwych treści. **3. Wyjaśnialność i zaufanie**: złożone modele (głębokie sieci neuronowe, zespoły drzew) działają jak **czarne skrzynki** – trudno wyjaśnić, dlaczego podjęły daną decyzję. Jest to istotny problem w medycynie, bankowości czy HR, gdzie decyzje muszą być uzasadnione. Odpowiedzią jest dziedzina **wyjaśnialnej sztucznej inteligencji (XAI)** – metody takie jak SHAP, LIME czy mapy istotności. **4. Bezpieczeństwo**: **ataki adwersarialne** (niewielkie, niezauważalne dla człowieka zmiany danych wejściowych – np. naklejki na znaku drogowym – zmieniają decyzję modelu), **zatruwanie danych treningowych** (data poisoning), kradzież modelu, ataki na prywatność (odtwarzanie danych treningowych, ustalanie, czy dany rekord był w zbiorze treningowym), a w przypadku modeli językowych – **wstrzykiwanie poleceń** (prompt injection). **5. Koszty i zasoby**: trening dużych modeli wymaga ogromnej mocy obliczeniowej (GPU), energii i wody do chłodzenia centrów danych, co rodzi koszty finansowe i środowiskowe oraz sprzyja koncentracji możliwości w rękach największych firm; brakuje również specjalistów. **6. Aspekty prawne i etyczne**: ochrona danych osobowych (**RODO** – zasada minimalizacji danych, art. 22 dotyczący zautomatyzowanego podejmowania decyzji), prawa autorskie do danych treningowych, odpowiedzialność za błędy modelu, dyskryminacja algorytmiczna, dezinformacja i deepfake. Unijny **AI Act** (rozporządzenie 2024/1689) wprowadza podejście oparte na ryzyku – zakazuje niektórych praktyk (np. scoringu społecznego) i nakłada wymogi na systemy wysokiego ryzyka (jakość danych, dokumentacja, nadzór człowieka, przejrzystość).",
   "Podsumowując, uczenie maszynowe nie jest „magiczną skrzynką”: jego skuteczność zależy od danych, rzetelnej walidacji i ciągłego nadzoru, a wdrożenie wymaga uwzględnienia aspektów technicznych, etycznych i prawnych."
  ]
 },
 "K20": {
  "title": "Metody uczenia maszynowego",
  "paragraphs": [
   "Metody uczenia maszynowego klasyfikuje się przede wszystkim według **sposobu uczenia**, tj. rodzaju informacji zwrotnej, jaką otrzymuje algorytm. Wyróżnia się cztery podstawowe paradygmaty. **1. Uczenie nadzorowane (z nauczycielem, supervised learning)** – model uczy się na danych **oznaczonych (etykietowanych)**, czyli na parach: dane wejściowe → poprawna odpowiedź. Celem jest nauczenie się funkcji odwzorowującej wejście na wyjście. Dwa główne zadania to:",
   "• **klasyfikacja** – przewidywanie kategorii (spam / nie-spam, rozpoznanie cyfry, diagnoza choroby);",
   "• **regresja** – przewidywanie wartości ciągłej (cena mieszkania, prognoza sprzedaży).",
   "Typowe algorytmy: **regresja liniowa** i **logistyczna**, **k najbliższych sąsiadów (k-NN)**, **naiwny klasyfikator Bayesa**, **drzewa decyzyjne** (np. CART, C4.5 – łatwe w interpretacji), **maszyny wektorów nośnych (SVM)**, **lasy losowe**, **gradient boosting** (XGBoost, LightGBM – bardzo skuteczne na danych tabelarycznych) oraz **sieci neuronowe**. **2. Uczenie nienadzorowane (bez nauczyciela, unsupervised learning)** – dane **nie mają etykiet**; algorytm samodzielnie odkrywa ich strukturę:",
   "• **grupowanie (klasteryzacja)** – metoda **k-średnich** (k-means), grupowanie hierarchiczne, **DBSCAN** (oparte na gęstości); np. segmentacja klientów;",
   "• **redukcja wymiarowości** – **analiza głównych składowych (PCA)**, t-SNE, UMAP – kompresja i wizualizacja danych;",
   "• **reguły asocjacyjne** – algorytmy **Apriori** i FP-Growth (analiza koszykowa);",
   "• **wykrywanie anomalii** – np. Isolation Forest, autoenkodery. **3. Uczenie ze wzmocnieniem (reinforcement learning)** – **agent** uczy się, wchodząc w interakcję ze **środowiskiem**: wykonuje **akcje**, obserwuje **stan** i otrzymuje **nagrody lub kary**. Jego celem jest znalezienie strategii (polityki) maksymalizującej skumulowaną nagrodę, przy równoważeniu eksploracji i eksploatacji.",
   "Algorytmy: **Q-learning**, Deep Q-Network (DQN), metody gradientu polityki (np. PPO). Zastosowania: gry (**AlphaGo** pokonał w 2016 r. jednego z najlepszych graczy w go na świecie), robotyka, sterowanie, optymalizacja zasobów, a także dostrajanie modeli językowych na podstawie ocen ludzi (**RLHF**). **4. Uczenie częściowo nadzorowane (semi-supervised) i samonadzorowane (self-supervised)** – pierwsze łączy niewielki zbiór danych oznaczonych z dużym zbiorem nieoznaczonych (bo etykietowanie jest kosztowne); drugie generuje etykiety z samych danych – np. model językowy uczy się przewidywać kolejne lub ukryte słowa w tekście. Uczenie samonadzorowane jest podstawą **wstępnego trenowania** (pre-training) dużych modeli językowych i tzw. modeli bazowych (foundation models).",
   "**Głębokie uczenie** (deep learning) to rodzina metod wykorzystujących **wielowarstwowe sieci neuronowe**, uczone algorytmem **propagacji wstecznej błędu**, stosowana w każdym z powyższych paradygmatów:",
   "• **sieci konwolucyjne (CNN)** – obrazy, wizja komputerowa;",
   "• **sieci rekurencyjne (RNN, LSTM)** – sekwencje, szeregi czasowe;",
   "• **transformery** (2017, mechanizm uwagi – attention) – podstawa współczesnych modeli językowych (np.",
   "GPT, Claude, BERT) i modeli multimodalnych;",
   "• **modele generatywne** – sieci GAN, autoenkodery wariacyjne, modele dyfuzyjne (generowanie obrazów).",
   "**Techniki przekrojowe**: **uczenie zespołowe** (ensemble learning) – **bagging** (np. las losowy) i **boosting** – czyli łączenie wielu słabszych modeli w jeden silniejszy; **uczenie transferowe** (transfer learning) – wykorzystanie modelu wytrenowanego na jednym zadaniu do rozwiązania innego (dostrajanie, fine-tuning); **uczenie federacyjne** – trening na rozproszonych danych bez ich centralizacji, chroniący prywatność.",
   "**Dobór metody** zależy od rodzaju problemu (klasyfikacja, regresja, grupowanie, sterowanie), dostępności etykiet, ilości i typu danych (tabelaryczne, obrazy, tekst), wymagań dotyczących **interpretowalności**, zasobów obliczeniowych oraz oczekiwanej dokładności. Dobrą praktyką jest rozpoczynanie od prostych modeli bazowych i stopniowe zwiększanie złożoności."
  ]
 },
 "K21": {
  "title": "Charakterystyka, bezpieczeństwo aplikacji internetowych i mobilnych",
  "paragraphs": [
   "**Aplikacja internetowa (webowa)** to program działający w architekturze **klient–serwer**, uruchamiany w przeglądarce i komunikujący się z serwerem za pomocą protokołu **HTTP/HTTPS**. Nie wymaga instalacji, jest dostępna z dowolnego urządzenia, a aktualizacje wdraża się centralnie. Wyróżnia się tradycyjne aplikacje wielostronicowe (MPA), aplikacje jednostronicowe (**SPA**, np. klient poczty w przeglądarce), **progresywne aplikacje webowe (PWA)** – działające także offline i instalowane podobnie jak aplikacje natywne – oraz usługi w modelu **SaaS**.",
   "**Aplikacja mobilna** to oprogramowanie przeznaczone dla urządzeń mobilnych (Android, iOS), dystrybuowane zwykle przez sklepy z aplikacjami (Google Play, App Store). Rodzaje:",
   "• **natywne** – tworzone dla jednej platformy (Kotlin/Java dla Androida, Swift dla iOS): najwyższa wydajność i pełny dostęp do funkcji urządzenia (aparat, GPS, biometria, powiadomienia), ale wyższy koszt wytworzenia;",
   "• **wieloplatformowe (cross-platform)** – jeden kod dla wielu systemów (**Flutter**, **React Native**, Kotlin Multiplatform, .NET MAUI);",
   "• **hybrydowe** – aplikacja webowa osadzona w natywnej „otoczce” (np. Ionic, Capacitor).",
   "Cechy aplikacji mobilnych: działanie na urządzeniu użytkownika (część danych przechowywana lokalnie), ograniczone zasoby, praca offline, wykorzystanie lokalizacji i czujników, system uprawnień.",
   "**Bezpieczeństwo aplikacji internetowych.** Punktem odniesienia jest lista **OWASP Top 10** (edycja 2025), obejmująca najpoważniejsze kategorie ryzyk: **naruszenie kontroli dostępu** (np. dostęp do cudzych zasobów przez zmianę identyfikatora w adresie; kategoria ta obejmuje obecnie także SSRF), **błędną konfigurację zabezpieczeń**, **błędy w łańcuchu dostaw oprogramowania** (podatne lub złośliwe biblioteki i zależności), **błędy kryptograficzne**, **wstrzykiwanie** (SQL injection, XSS, wstrzykiwanie poleceń systemowych), **niebezpieczny projekt**, **błędy uwierzytelniania**, **naruszenia integralności oprogramowania i danych**, **niewystarczające rejestrowanie zdarzeń i alertowanie** oraz – nową kategorię – **niewłaściwą obsługę sytuacji wyjątkowych**. Do innych typowych ataków należą CSRF, przejęcie sesji, ataki siłowe (brute force) i credential stuffing.",
   "**Bezpieczeństwo aplikacji mobilnych** opisuje **OWASP Mobile Top 10 (2024)**: niewłaściwe użycie poświadczeń (np. klucze API zaszyte w kodzie), niedostateczne bezpieczeństwo łańcucha dostaw, niebezpieczne uwierzytelnianie i autoryzacja, niewystarczająca walidacja danych wejściowych i wyjściowych, **niebezpieczna komunikacja**, niewystarczająca ochrona prywatności, słaba ochrona kodu binarnego (inżynieria wsteczna, modyfikacja aplikacji), błędna konfiguracja, **niebezpieczne przechowywanie danych** na urządzeniu oraz niewystarczająca kryptografia. Dodatkowe zagrożenia to złośliwe aplikacje podszywające się pod legalne (np. bankowe), nadmierne uprawnienia, urządzenia z odblokowanym systemem (root, jailbreak) oraz trojany bankowe przechwytujące kody autoryzacyjne.",
   "**Metody zabezpieczeń**:",
   "• **bezpieczny cykl wytwarzania oprogramowania** (Secure SDLC, DevSecOps) – modelowanie zagrożeń, przeglądy kodu, testy **SAST** i **DAST**, analiza zależności (SCA), testy penetracyjne; weryfikacja według standardów **OWASP ASVS** (web) i **MASVS** (mobile);",
   "• **walidacja i sanityzacja danych wejściowych**, **zapytania parametryzowane**, kodowanie danych wyjściowych (ochrona przed XSS), nagłówki bezpieczeństwa (**CSP**, **HSTS**);",
   "• **szyfrowanie transmisji** (TLS 1.2/1.3), a w aplikacjach mobilnych także **przypinanie certyfikatów** (certificate pinning);",
   "• **silne uwierzytelnianie** – **MFA**, klucze dostępu (**passkeys**, standard FIDO2/WebAuthn), bezpieczne przechowywanie haseł (funkcje **Argon2** lub **bcrypt** z solą), standardy **OAuth 2.0** i **OpenID Connect**, bezpieczne zarządzanie sesją i tokenami (JWT);",
   "• **autoryzacja po stronie serwera** zgodnie z zasadą minimalnych uprawnień i domyślnej odmowy;",
   "• **bezpieczne przechowywanie danych na urządzeniu** – systemowe magazyny kluczy (**Android Keystore**, **iOS Keychain**), unikanie zapisywania danych wrażliwych w logach i pamięci podręcznej;",
   "• zaciemnianie kodu (obfuskacja), wykrywanie modyfikacji aplikacji i odblokowania systemu;",
   "• zapora aplikacyjna (**WAF**), ograniczanie liczby żądań (rate limiting), monitorowanie i rejestrowanie zdarzeń, szybkie łatanie podatności.",
   "Bezpieczeństwo aplikacji nie może być dodawane na końcu projektu – zgodnie z zasadą **security by design** należy je uwzględniać od etapu wymagań. W Unii Europejskiej wymogi te wzmacniają m.in. RODO oraz Cyber Resilience Act."
  ]
 },
 "K22": {
  "title": "Technologie backendowe i frontendowe – różnice, przykłady",
  "paragraphs": [
   "Współczesne aplikacje internetowe i mobilne budowane są w architekturze warstwowej, w której wyróżnia się dwie zasadnicze części: **frontend** (warstwę prezentacji – to, co widzi użytkownik) i **backend** (warstwę serwerową – to, co dzieje się „za kulisami”). Komunikują się one najczęściej przez **API** (interfejs programistyczny) z wykorzystaniem protokołu HTTP i formatu **JSON**.",
   "**Frontend (warstwa kliencka)** odpowiada za interfejs użytkownika (UI) i doświadczenie użytkownika (UX): wyświetlanie danych, obsługę interakcji, nawigację, wstępną walidację formularzy, responsywność (dostosowanie do różnych ekranów) i dostępność (standard **WCAG**). Kod wykonuje się w **przeglądarce** lub na urządzeniu użytkownika.",
   "• **Technologie podstawowe**: **HTML** (struktura treści), **CSS** (wygląd; preprocesor Sass, frameworki Tailwind CSS i Bootstrap), **JavaScript** i **TypeScript** (logika i interaktywność; TypeScript dodaje statyczne typowanie).",
   "• **Frameworki i biblioteki**: **React**, **Angular**, **Vue.js**, **Svelte**; meta-frameworki z renderowaniem po stronie serwera (SSR): **Next.js**, Nuxt.",
   "• **Narzędzia**: menedżery pakietów (npm), narzędzia budujące (Vite, Webpack), zarządzanie stanem (Redux), testy (Jest, Cypress, Playwright).",
   "• **Frontend mobilny**: Swift/SwiftUI, Kotlin/Jetpack Compose, Flutter, React Native.",
   "**Backend (warstwa serwerowa)** realizuje **logikę biznesową**, przetwarzanie i przechowywanie danych, uwierzytelnianie i autoryzację, integracje z innymi systemami, obsługę płatności, wysyłkę powiadomień i zadania w tle; udostępnia API dla frontendu. Kod działa na **serwerze** lub w chmurze i jest niewidoczny dla użytkownika.",
   "• **Języki i frameworki**: **Java** (Spring Boot), **C#** (.NET, ASP.NET Core), **Python** (Django, FastAPI, Flask), **JavaScript/TypeScript** po stronie serwera (**Node.js** z Express lub NestJS), **PHP** (Laravel, Symfony), **Go**, **Ruby** (Ruby on Rails), Kotlin, Rust.",
   "• **Bazy danych**: relacyjne (PostgreSQL, MySQL, SQL Server, Oracle) i NoSQL (MongoDB, Redis).",
   "• **Style API**: **REST**, **GraphQL**, gRPC, WebSocket (komunikacja w czasie rzeczywistym).",
   "• **Infrastruktura**: serwery WWW (Nginx, Apache), konteneryzacja (**Docker**, **Kubernetes**), chmura (AWS, Azure, Google Cloud), architektury **monolityczne**, **mikroserwisowe** i **bezserwerowe** (serverless), kolejki komunikatów (RabbitMQ, Kafka), ciągła integracja i wdrażanie (CI/CD).",
   "**Kryterium Frontend Backend** Miejsce wykonania przeglądarka, urządzenie użytkownika serwer, chmura Główne zadanie prezentacja danych i interakcja logika biznesowa, dane, integracje Priorytety użyteczność, estetyka, dostępność, szybkość wydajność, skalowalność, niezawodność, renderowania spójność danych Bezpieczeństwo kod jawny, możliwy do modyfikacji przez miejsce kluczowych walidacji i autoryzacji użytkownika Przykłady technologii HTML, CSS, TypeScript, React, Angular, Java/Spring, C#/.NET, Python, Node.js, Vue PHP, Go; SQL Kluczowa zasada bezpieczeństwa wynika z tego porównania: ponieważ kod frontendu jest jawny i może zostać zmodyfikowany, **wszystkie krytyczne walidacje i decyzje autoryzacyjne muszą być wykonywane po stronie backendu**.",
   "Programista łączący obie specjalizacje to **full-stack developer**. Popularne **stosy technologiczne** to np. **LAMP** (Linux, Apache, MySQL, PHP), **MEAN/MERN** (MongoDB, Express, Angular/React, Node.js) czy połączenie React + Spring Boot + PostgreSQL. Granica między warstwami częściowo się zaciera: platformy **BaaS** (np. Firebase, Supabase) dostarczają gotowy backend, a meta-frameworki (Next.js) pozwalają tworzyć kod serwerowy i kliencki w jednym projekcie.",
   "**Przykład działania**: użytkownik klika „Kup” w sklepie internetowym – frontend (React) wysyła żądanie do API; backend (np. Spring Boot) weryfikuje uprawnienia, sprawdza stan magazynu w bazie PostgreSQL, zapisuje zamówienie, inicjuje płatność i zwraca odpowiedź, którą frontend prezentuje użytkownikowi."
  ]
 },
 "K23": {
  "title": "System operacyjny: rola, działanie, budowa, rodzaje",
  "paragraphs": [
   "**System operacyjny (SO)** to podstawowe oprogramowanie komputera, które **zarządza zasobami sprzętowymi** (procesorem, pamięcią, urządzeniami wejścia-wyjścia, pamięcią masową) i stanowi **pośrednika między użytkownikiem i aplikacjami a sprzętem**. Bez systemu operacyjnego każdy program musiałby samodzielnie obsługiwać sprzęt.",
   "**Rola systemu operacyjnego**:",
   "• **zarządca zasobów** – przydziela procesor, pamięć i urządzenia konkurującym procesom w sposób efektywny i sprawiedliwy;",
   "• **maszyna rozszerzona (warstwa abstrakcji)** – ukrywa złożoność sprzętu, udostępniając wygodne pojęcia: plik, proces, gniazdo sieciowe;",
   "• **platforma dla aplikacji** – udostępnia interfejs programistyczny (**wywołania systemowe**, API);",
   "• **strażnik bezpieczeństwa** – izoluje procesy, kontroluje uprawnienia i dostęp użytkowników.",
   "**Działanie – podstawowe funkcje**:",
   "1. **Zarządzanie procesami i wątkami** – tworzenie i kończenie procesów, **planowanie przydziału procesora** (algorytmy: FCFS, SJF, **Round Robin** z kwantem czasu, planowanie priorytetowe, wielopoziomowe kolejki), przełączanie kontekstu, synchronizacja (semafory, muteksy), komunikacja międzyprocesowa, zapobieganie **zakleszczeniom** (deadlock).",
   "2. **Zarządzanie pamięcią** – przydział pamięci operacyjnej, ochrona obszarów pamięci, **pamięć wirtualna** (stronicowanie i segmentacja), zastępowanie stron (algorytmy LRU, FIFO), plik wymiany.",
   "3. **Zarządzanie systemem plików** – organizacja danych w plikach i katalogach, uprawnienia, księgowanie (journaling); przykłady systemów plików: **NTFS** (Windows), **ext4** i Btrfs (Linux), **APFS** (macOS, iOS), FAT32/exFAT (nośniki przenośne).",
   "4. **Obsługa urządzeń wejścia-wyjścia** – za pośrednictwem **sterowników**, mechanizmu **przerwań**, buforowania i bezpośredniego dostępu do pamięci (DMA).",
   "5. **Obsługa sieci**, **bezpieczeństwo i ochrona** (uwierzytelnianie, kontrola dostępu, szyfrowanie) oraz **interfejs użytkownika** – graficzny (GUI) lub tekstowy (CLI).",
   "Procesor pracuje w dwóch trybach: **trybie jądra** (uprzywilejowanym – z pełnym dostępem do sprzętu) i **trybie użytkownika** (ograniczonym). Aplikacje korzystają z usług jądra za pomocą **wywołań systemowych** (np. open, read, fork).",
   "**Budowa systemu operacyjnego**:",
   "• **jądro (kernel)** – rdzeń systemu, odpowiedzialny za zarządzanie procesami, pamięcią i urządzeniami;",
   "• **sterowniki urządzeń**;",
   "• **biblioteki i programy systemowe** (np. biblioteka standardowa języka C, usługi działające w tle);",
   "• **powłoka (shell)** – interpreter poleceń (bash, PowerShell) lub środowisko graficzne;",
   "• **program rozruchowy** (bootloader).",
   "Wyróżnia się architektury jądra: **monolityczną** (całe jądro działa w jednej przestrzeni adresowej – szybkie, ale błąd sterownika może zawiesić cały system; np. **Linux**), **mikrojądro** (w jądrze tylko niezbędne minimum, pozostałe usługi działają w przestrzeni użytkownika – większa stabilność i bezpieczeństwo; np. QNX, MINIX), **hybrydową** (Windows NT, macOS z jądrem XNU) oraz architekturę warstwową i modułową.",
   "**Rodzaje systemów operacyjnych**:",
   "• ze względu na liczbę zadań: **jednozadaniowe** (MS-DOS) i **wielozadaniowe** (współczesne systemy z wywłaszczaniem);",
   "• ze względu na liczbę użytkowników: **jednoużytkownikowe** i **wieloużytkownikowe** (np. Unix, Linux);",
   "• ze względu na sposób przetwarzania: **wsadowe**, **z podziałem czasu** oraz **czasu rzeczywistego (RTOS)** – gwarantujące reakcję w ściśle określonym czasie (np. FreeRTOS, VxWorks, QNX – w motoryzacji, lotnictwie, medycynie);",
   "• ze względu na zastosowanie: **desktopowe** (Windows, macOS, dystrybucje Linuksa, np. Ubuntu, Fedora), **serwerowe** (Windows Server, Red Hat Enterprise Linux, Ubuntu Server), **mobilne** (**Android** – oparty na jądrze Linux, **iOS**), **wbudowane** (IoT, sprzęt AGD, samochody), **rozproszone** i **sieciowe**;",
   "• ze względu na licencję: **komercyjne, zamknięte** (Windows, macOS) i **otwarte** (Linux, FreeBSD).",
   "System operacyjny jest fundamentem każdego systemu komputerowego – od jego efektywności, stabilności i bezpieczeństwa zależy działanie wszystkich uruchamianych aplikacji. Współcześnie jego rolę uzupełniają **wirtualizacja** (hiperwizory, np. VMware ESXi, Hyper-V, KVM) oraz **konteneryzacja** (Docker), stanowiące podstawę chmury obliczeniowej."
  ]
 },
 "K24": {
  "title": "Integracja systemów informatycznych",
  "paragraphs": [
   "**Integracja systemów informatycznych** to proces łączenia odrębnych systemów, aplikacji i źródeł danych w spójną całość tak, aby mogły **wymieniać dane i współdziałać** w realizacji procesów biznesowych. Problem wynika z faktu, że przedsiębiorstwa korzystają z wielu systemów (ERP, CRM, WMS, systemy kadrowo-płacowe, sklep internetowy, bankowość elektroniczna, BI), często pochodzących od różnych dostawców i powstałych w różnym czasie (systemy dziedziczone – legacy). Brak integracji prowadzi do powstania **wysp informacyjnych (silosów)**, wielokrotnego wprowadzania tych samych danych, niespójności, błędów i opóźnień.",
   "**Cele i korzyści**: jednolity obraz danych (np. pełny widok klienta), automatyzacja procesów od początku do końca (np. zamówienie w sklepie internetowym → ERP → magazyn → faktura w KSeF → księgowość), eliminacja redundancji i błędów, szybszy dostęp do informacji i lepsze decyzje, współpraca z partnerami zewnętrznymi w łańcuchu dostaw oraz elastyczność w wymianie poszczególnych komponentów.",
   "**Poziomy integracji**:",
   "• **danych** – wymiana lub konsolidacja danych między bazami (ETL, replikacja, wspólna hurtownia, wirtualizacja danych);",
   "• **aplikacji** – systemy wzajemnie wywołują swoje funkcje (API, oprogramowanie pośredniczące – middleware);",
   "• **procesów biznesowych** – orkiestracja procesów obejmujących wiele systemów (BPM);",
   "• **interfejsu użytkownika (prezentacji)** – wspólny portal lub pulpit agregujący wiele aplikacji.",
   "Integracja może być **wewnętrzna** (w obrębie organizacji – EAI, Enterprise Application Integration) lub **zewnętrzna** (B2B – np. elektroniczna wymiana dokumentów z kontrahentami, integracja z systemami administracji publicznej).",
   "**Architektury (topologie) integracji**:",
   "• **punkt–punkt** – bezpośrednie połączenia między parami systemów; proste przy niewielkiej liczbie systemów, lecz liczba połączeń rośnie w tempie n(n−1)/2, tworząc tzw. **architekturę spaghetti**, trudną w utrzymaniu;",
   "• **hub-and-spoke** – centralny węzeł (broker) pośredniczy w komunikacji;",
   "• **szyna usług (ESB – Enterprise Service Bus)** w ramach **architektury zorientowanej na usługi (SOA)** – wspólna magistrala zapewniająca transformację, trasowanie i orkiestrację komunikatów;",
   "• **mikroserwisy i API** – lekkie usługi komunikujące się przez API (REST, gRPC), udostępniane przez bramę API (**API Gateway**);",
   "• **architektura sterowana zdarzeniami (EDA)** – systemy publikują zdarzenia, a zainteresowane systemy je subskrybują (np. **Apache Kafka**), co zapewnia luźne powiązanie i skalowalność.",
   "**Technologie i standardy**: interfejsy **REST** (JSON) i **SOAP** (XML, WSDL), **GraphQL**, webhooki; **middleware** i kolejki komunikatów (RabbitMQ, IBM MQ, Apache Kafka) umożliwiające komunikację **asynchroniczną**; narzędzia ETL/ELT; **EDI** (standard EDIFACT) w handlu; platformy integracyjne **iPaaS** (MuleSoft, Boomi, Azure Logic Apps, SAP Integration Suite) i narzędzia automatyzacji (Power Automate, Zapier); **RPA** – robotyzacja procesów, stosowana, gdy system nie udostępnia API; standardy branżowe, np.",
   "**HL7/FHIR** w ochronie zdrowia. Wzorcowe rozwiązania opisuje katalog **Enterprise Integration Patterns** (G.",
   "Hohpe, B. Woolf). Przykładami integracji z administracją publiczną w Polsce są m.in. **KSeF**, **JPK**, **ePUAP** i **e-Doręczenia**.",
   "**Wyzwania**: różnorodność technologii i formatów danych, systemy dziedziczone bez API, zapewnienie **spójności danych** i transakcyjności w środowisku rozproszonym, bezpieczeństwo wymiany (uwierzytelnianie, szyfrowanie, kontrola dostępu do API), wydajność, monitorowanie przepływów i obsługa błędów, zarządzanie wersjami interfejsów, koszty oraz ryzyko uzależnienia od dostawcy platformy integracyjnej. Kluczowe znaczenie mają także **wspólne słowniki danych i zarządzanie danymi podstawowymi (MDM)**.",
   "Podsumowując, integracja systemów jest warunkiem funkcjonowania **przedsiębiorstwa cyfrowego** – decyduje o efektywności procesów i jakości informacji zarządczej. Współczesną tendencją jest odchodzenie od ciężkich, scentralizowanych szyn ESB na rzecz podejścia **API-first**, architektury zdarzeniowej i platform chmurowych."
  ]
 },
 "K25": {
  "title": "Wymień i krótko omów wybrane zagrożenia cybernetyczne",
  "paragraphs": [
   "**Zagrożenie cybernetyczne** to potencjalna okoliczność, zdarzenie lub działanie, które może spowodować szkodę, zakłócenie lub inny niekorzystny wpływ na sieci i systemy informatyczne, ich użytkowników oraz inne osoby (ujęcie zbliżone do przyjętego w unijnym akcie o cyberbezpieczeństwie). Według raportów CERT Polska liczba zgłaszanych i obsługiwanych incydentów z roku na rok rośnie, a zdecydowaną większość stanowią **oszustwa komputerowe**, przede wszystkim phishing. Poniżej omówiono najważniejsze zagrożenia.",
   "1. **Złośliwe oprogramowanie (malware)** – programy działające na szkodę użytkownika: **wirusy** (dołączają się do plików), **robaki** (samodzielnie rozprzestrzeniają się w sieci), **konie trojańskie** (podszywają się pod legalne programy), **oprogramowanie szpiegujące** (spyware) i keyloggery, **rootkity** (ukrywają obecność intruza), **botnety** (sieci przejętych urządzeń), **cryptojacking** (wykorzystanie mocy obliczeniowej ofiary do wydobywania kryptowalut) oraz **infostealery** (wykradające hasła i sesje z przeglądarek).",
   "2. **Ransomware** – oprogramowanie szyfrujące dane ofiary i żądające okupu za ich odszyfrowanie; obecnie często w modelu **podwójnego wymuszenia** – przestępcy dodatkowo kradną dane i grożą ich publikacją.",
   "Funkcjonuje jako usługa (**RaaS** – Ransomware-as-a-Service). Przykłady: **WannaCry** i **NotPetya** (2017) – ten drugi sparaliżował m.in. globalne firmy logistyczne i farmaceutyczne.",
   "3. **Phishing i socjotechnika** – podszywanie się pod zaufane instytucje (bank, firmę kurierską, urząd) w celu wyłudzenia danych logowania, danych kart płatniczych lub nakłonienia ofiary do zainstalowania złośliwego oprogramowania. Odmiany: **spear phishing** (ukierunkowany na konkretną osobę), **whaling** (na kadrę kierowniczą), **smishing** (SMS), **vishing** (rozmowa telefoniczna, np. fałszywy konsultant banku), **quishing** (kody QR). Ataki te wykorzystują emocje: pośpiech, strach, ciekawość i autorytet.",
   "4. **Oszustwa typu BEC** (Business Email Compromise) – przejęcie lub podrobienie firmowej skrzynki e-mail i nakłonienie pracownika do przelewu na konto przestępców (np. rzekoma zmiana numeru rachunku kontrahenta lub pilne polecenie prezesa).",
   "5. **Ataki DDoS** (rozproszona odmowa usługi) – zalewanie serwera lub sieci ogromną liczbą żądań z wielu źródeł (botnetów) w celu uniemożliwienia działania usługi; często stosowane przez haktywistów, także przeciwko polskim instytucjom.",
   "6. **Ataki na aplikacje webowe** – m.in. **SQL injection** (wstrzyknięcie złośliwego zapytania do bazy danych), **XSS** (wstrzyknięcie skryptu do strony), przejęcie sesji, wykorzystanie błędów kontroli dostępu.",
   "7. **Ataki na łańcuch dostaw** – kompromitacja zaufanego dostawcy oprogramowania lub usług, przez którą atakujący uzyskuje dostęp do wielu ofiar jednocześnie; przykłady: **SolarWinds** (2020), **3CX** (2023) oraz próba umieszczenia tylnej furtki w bibliotece **XZ Utils** (2024).",
   "8. **Wykorzystanie podatności, w tym zero-day** – ataki na luki nieznane jeszcze producentowi (brak poprawki) lub znane, ale niezałatane w danej organizacji.",
   "9. **Ataki na hasła i tożsamość** – ataki siłowe (**brute force**), **credential stuffing** (wykorzystanie haseł wykradzionych z innych serwisów), przejmowanie kont, obchodzenie uwierzytelniania wieloskładnikowego (np. zasypywanie ofiary powiadomieniami push).",
   "10. **Ataki typu man-in-the-middle** – przechwytywanie i modyfikowanie komunikacji, np. w niezabezpieczonych sieciach Wi-Fi lub przez fałszywe punkty dostępowe.",
   "11. **Zagrożenia wewnętrzne** (insider threats) – celowe (sabotaż, kradzież danych przez nieuczciwego pracownika) lub nieumyślne (błędy, nieostrożność).",
   "12. **Zaawansowane, długotrwałe zagrożenia (APT)** – ukierunkowane kampanie grup powiązanych z państwami, nastawione na szpiegostwo lub sabotaż infrastruktury krytycznej; w związku z wojną w Ukrainie Polska – według raportów branżowych – należy do najczęściej atakowanych państw w Europie.",
   "13. **Zagrożenia wykorzystujące sztuczną inteligencję** – **deepfake** (fałszywe nagrania głosu i obrazu, np. podszywanie się pod prezesa podczas wideokonferencji), automatyzacja i personalizacja phishingu przez modele językowe, **dezinformacja**; a także ataki na same systemy AI (wstrzykiwanie poleceń, zatruwanie danych).",
   "**Przeciwdziałanie** wymaga podejścia wielowarstwowego: edukacji użytkowników, uwierzytelniania wieloskładnikowego, regularnych aktualizacji, kopii zapasowych przechowywanych offline, segmentacji sieci, systemów EDR i SIEM, planów reagowania na incydenty oraz współpracy z zespołami CSIRT (CSIRT NASK – CERT Polska, CSIRT GOV, CSIRT MON). Incydenty można zgłaszać do CERT Polska, a podejrzane wiadomości SMS przekazywać bezpłatnie na numer 8080. Ramy prawne tworzy znowelizowana ustawa o krajowym systemie cyberbezpieczeństwa."
  ]
 }
}
