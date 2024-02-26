export const DaneTydzien1 = {
  zadanieD3: {
    name: "Dzień 3",
    jezyk: "javascript",
    trescZadania: `ZADANIE T1D3 - 05.02.2024 - ZŁODZIEJSKI RZĄD Piszesz program dla
  b0lskiego rządu którego zadaniem jest kupienie dużej ilości
  luksusowych towarów. Tak żeby zmieścic się w budżecie. Jaki to towar?
  Najdroższy, rząd lubi drogie towary bo sam za nie nie płaci. W
  pierwszej kolejności ładuj najdroższy towar i dopchaj koszyk pod korek
  tańszymi produktami. Na dole masz funckje zakupy w której będziesz
  pracować i otrzyma ona parametry: -balansPortfela (typ number)
  zawierający ile pieniędzy jest do wydania; -towary - tablica obiektów
  które zawierają pola: -koszt (number) - cena jednej sztuki przedmiotu;
  -liczbaSztuk (number) - ile jest dostępnych sztuk produktu; -nazwa
  (string) - nazwa produktu Margines błędu to zaokrąglenie więc nie
  musisz sie martwić liczbami po przecinku. Zwróć z funkcji pozostały
  stan portfela po zakupach (domyślnie ta funckja zwraca cały hajs jaki
  dostała). Po uruchomieniu uzyskasz informacje w konsoli czy udało Ci
  się osiągnąć optymalny (zawierający najdroższe produkty) koszt
  koszyka. Twoja funkcja zostanie wywołana 3 razy z różnymi towarami i
  balansem portfela. Aby ukończyć zadanie Twoja funkcja musi przejść
  wszystkie 3 testy pomyślnie. To zadanie testuje sie samodzielnie, po
  uruchomieniu zobaczysz czy Twoja funkcja zdaje testy czy nie.
  Przydatne w którymś miejscu może się tu okazać sortowanie więc tutaj
  mały drogowskaz:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  Pisz kod tylko pomiędzy MIEJSCE NA TWÓJ KOD i KONIEC MIEJSCA NA TWÓJ
  KOD. Sekcja kontroli oszustw znajduje się na samym dole.`,
    rozwiazanie: `function zakupy(balansPortfela, towary) {
    towary.sort((a, b) => {
      if (a.koszt > b.koszt) return -1;
      return 1;
    });
    for (const towar of towary) {
      const ileMoznaKupic =
        towar.liczbaSztuk * towar.koszt < balansPortfela
          ? towar.liczbaSztuk
          : Math.floor(balansPortfela / towar.koszt);
      balansPortfela -= ileMoznaKupic * towar.koszt;
    }
    return balansPortfela;
  }`,
    komentarz:
      "użyłem w tym zadaniu podpowiedzi numer 3 (podpowiedź algorytmu)",
  },
  zadanieD4: {
    name: "Dzień 4",
    jezyk: "javascript",
    trescZadania: ` *** POZIOM 3 (generał GRANATNIK) *** Fala doktorów i inżynierów
    napiera i mogą oni próbować sforsować granicę. Możę się zdażyć
    sytuacja że petenci będą próbowali przekroczyć granicę bez paszportu.
    W takim wypadku niezwłocznie wykonaj i zwróć funckje areszt(). Do tego
    może pojawić się osoba poszukiwana listem gończym - musisz ją
    natychmiast aresztować i zwrócić wynik aresztu areszt(). Do tego
    inżynierowie fałszerze udoskonalili swoje szemrane techniki i są w
    stanie kopiować paszporty. Musisz się upewnić czy ktoś danego dnia nie
    przekroczył już granicy na tym samym paszporcie. W wypadku ponownego
    przekroczenia granicy na tym samym dokumencie tego samego dnia należy
    dokonać aresztowania |areszt()| oraz zwrócić jego wynik z twojej
    funkcji.`,
    rozwiazanie: `const widzianeIDs = new Map();
  
    function kontrola(aktualnyNumerDnia, paszport) {
      const krajeNaBanicji = ["BOŚNIA", "ROSJA", "WATYKAN"];
      const sumaKontrolna = (dzieńWygasniecia, id) => 2137 * dzieńWygasniecia * id;
      if (paszport === undefined) return areszt();
      if (paszport.imie === "Jacek" && paszport.nazwisko === "Jaworek") {
        console.log("dorwano kurwe");
        return areszt();
      }
      if (widzianeIDs.get(\`\${aktualnyNumerDnia}.\${paszport.id}\`) === true)
        return areszt();
    
      if (
        kartoteka(paszport.id) === undefined ||
        kartoteka(paszport.id).imie !== paszport.imie ||
        kartoteka(paszport.id).id !== paszport.id ||
        kartoteka(paszport.id).narodowosc !== paszport.narodowosc ||
        kartoteka(paszport.id).nazwisko !== paszport.nazwisko ||
        kartoteka(paszport.id).wiek !== paszport.wiek ||
        kartoteka(paszport.id).wygasa !== paszport.wygasa ||
        kartoteka(paszport.id).zdjecie !== paszport.zdjecie ||
        sumaKontrolna(paszport.wygasa, paszport.id) !== paszport.sumaKontrolna ||
        Object.keys(kartoteka(paszport.id)).length !== 7 ||
        Object.keys(paszport).length !== 8
      ) {
        return areszt();
      }
    
      if (
        aktualnyNumerDnia >= paszport.wygasa ||
        paszport.wiek < 18 ||
        krajeNaBanicji.includes(paszport.narodowosc)
      ) {
        return false;
      }
      widzianeIDs.set(\`\${aktualnyNumerDnia}.\${paszport.id}\`, true);
      return true;
    }`,
    komentarz: "fajne zadanie",
  },
  zadanieD5: {
    name: "Dzień 5",
    trescZadania: `
    1. Witam Cię koleżanko, napisz tu funckje \`dodawanko\`, co przyjmie dwa argumenty,
      doda je do siebie, zwróci a reszta to już cię je....
    2.  Tak jak Miszor lubię pociągi a do tego jeszcze ciągi.
    Napisz mi funckje \`pociong\` która przyjmie jeden parametr - tablice/ciąg/array
    - jak zwał tak zwał
     i go odwróci jak krzywe logo na podróbie Gucci.
    3. 
    Kopiować muszę bo się uduszę.
    Napisz funckje \`kserokopiarka\` która skopiuje otrzymany jako pierwszy parametr obiekt.
    I zwróci jego kopię, bo mutacje to zjadamy na kolacje.
    4. W urzędzie jest nie małe zamieszanie przez to kopiowanie.
    Napisz funckje \`sprawdzam\` co otrzyma dwa parametry.
    I niech sprawdzi czy te dwa obiekty są takie same.
    Jeśli są takie same niech zwróci prawdę - \`true\` a w przeciwnym wypadku fałsz - \`false\`.
    5.  Od tyłu wszystko najlepiej smakuje dlatego niech i to Twój string poczuje.
    Napisz funkcje \`inzynieriaOdtylcowa\` która odwróci otrzymany jako parametr string.
    Zwróć odwrócony string.
    6. Kompialtor pascala cierpi na demencje, podbudujmy jego potencje.
    Napisz funckje \`pascal\` która przyjmie jeden parametr typu obiekt.
    Niestety nasz kompilator pascala zapomniał co jest w środku.
    Zwróc wartość skrywaną przez nieznany klucz obiektu.
    7.  Chodzą słuchy, że xNzq czyta HTML-a do poduchy.
    Tylko zepsuła mu sie drukarka i poci mu sie marynarka.
    Napisz funkcje \`xNzq\` która przyjmie jako pierwszy parametr tablice ze stronami książki.
    Usuń duplikaty stron z tej tablicy i posortuj strony w zależności od numeru (rosnąco).
    8.  Zadanie sądu ostatecznego się zbliża i Ci naubliża.
    To ostatnie miłe zadanie w tym secie, na kolejnym utkniesz na godziny na klozecie.
    Napisz funkcje \`detektor\` która przyjmie dwa parametry typu string.
    Pierwszy otrzyma długi ciąg znaków.
    Drugi otrzyma wzór.
    Zwróc ile razy string wzór zawiera się w pierwszym ciągu znaków.
    9. Jeśli tu dotarłeś z mej japy nie schodzi facynacja.
      Pora dostać po twarzy finalnego kapcia.
      To już nie przelewki, to zadanie może wymagać nalewki.
      Odkoduj wiadomość zapisaną kodem Morse'a - bo nie zgadza mi się forsa.
      Napisz funkcje \`mors\` która przyjmie jako pierwszy parametr string zawierający wiadomość z kodem Morse'a.
      Zwróć wiadomość jako normalny tekst.
      * \`.\` oznacza kod krótki;
      * \`-\` oznacza kod długi;
      * \`/\` oznacza spacje
      * \` \` to przerwa między znakami w słowie.
    `,
    rozwiazanie: `
    / 1.
    const dodawanko = (a, b) => a + b;
    / 2. 
    const pociong = (tablica) => tablica.reverse();
    / 3. 
    const kserokopiarka = (obiekt) => {
      return { ...obiekt };
    / 4. 
    const sprawdzam = (obiekt1, obiekt2) => JSON.stringify(obiekt1) === JSON.stringify(obiekt2) ? true : false;
    / 5. 
    const inzynieriaOdtylcowa = (string) => string.split("").reverse().join("");
    / 6. 
    const pascal = (obiekt) => {
      const unknownKlucz = Object.keys(obiekt) + "";
      return obiekt[unknownKlucz];
    };
    / 7. 
    const xNzq = (tablica) => {
      const widzianeStrony = [];
      const nowaTablica = tablica.filter((obiekt) => {
        if (widzianeStrony.includes(obiekt.strona) === false) {
          widzianeStrony.push(obiekt.strona);
          return obiekt;
        }
      });
      return nowaTablica.sort((a, b) => a.strona - b.strona);
    };
    / 8.
    const detektor = (string1, string2) => {
      let counter = 0;
      const dlugoscWzoru = string2.length;
      for (let i = 0; i < string1.length; i++) {
        const stringObecnegoIndexu = string1.slice(i, i + dlugoscWzoru);
        if (stringObecnegoIndexu === string2) counter++;
      }
      return counter;
    };
    / 9. 
    const mors = (wiadomosc) => {
      const znakiMorsa = new Map();
      znakiMorsa.set(".-", "A");
      znakiMorsa.set("-...", "B");
      znakiMorsa.set("-.-.", "C");
      znakiMorsa.set("-..", "D");
      znakiMorsa.set(".", "E");
      znakiMorsa.set("..-.", "F");
      znakiMorsa.set("--.", "G");
      znakiMorsa.set("....", "H");
      znakiMorsa.set("..", "I");
      znakiMorsa.set(".---", "J");
      znakiMorsa.set("-.-", "K");
      znakiMorsa.set(".-..", "L");
      znakiMorsa.set("--", "M");
      znakiMorsa.set("-.", "N");
      znakiMorsa.set("---", "O");
      znakiMorsa.set(".--.", "P");
      znakiMorsa.set("--.-", "Q");
      znakiMorsa.set(".-.", "R");
      znakiMorsa.set("...", "S");
      znakiMorsa.set("-", "T");
      znakiMorsa.set("..-", "U");
      znakiMorsa.set("...-", "V");
      znakiMorsa.set(".--", "W");
      znakiMorsa.set("-..-", "X");
      znakiMorsa.set("-.--", "Y");
      znakiMorsa.set("--..", "Z");
      znakiMorsa.set("/", " ");
      let czytnik = "";
      let odszyfrowanaWiadomosc = "";
      for (let i = 0; i < wiadomosc.length + 1; i++) {
        if (wiadomosc[i] === " " || i === wiadomosc.length) {
          odszyfrowanaWiadomosc += znakiMorsa.get(czytnik);
          czytnik = "";
        } else {
          czytnik += wiadomosc[i];
        }
      }
      return odszyfrowanaWiadomosc.toLowerCase();
    };
    `,
    komentarz: "fajne zadanko pan Knur",
  },
  zadanieD6: {
    name: "Dzień 6 (egzamin)",
    trescZadania: `ZADANIE T1D6 - 08.02.2024 - EZdamin
  
    Pora zobaczyć trochę słońca bo pierwszy tydzień dobiega końca.
    Na teoretyczny egzamin knurski nadszedł czas.
  
    Odpowiadaj tylko na jedno pytanie na raz.
    Rób to po kolei.
    Gdy odpowiesz źle otrzymasz link z materiałem do przeczytania.
    Po przeczytaniu spróbuj odpowiedzieć ponownie.
    Lub poszukaj pomocy na naszym knurskim discordzie.
    Gdy odpowiesz dobrze, przejdź do następnego pytania.
  
    Niektóre pytania są zamknięte i odpowiedz na nie literką.
    Niektóre pytania są otwarte, odpowiedz zgodnie z instrukcją.
  
    Ten egzamin jest wymagany aby uzyskać promocję do następnego tygodnia.
  
    Do każdego pytania napisz uzasadnienie swoimi słowami.
    Będzie to przydatne w ocenie Twojego zrozumienia tematu.
  
    Wybierz niżej język w którym chcesz materiały do przeczytania.
    Generalnie materiały po angielsku są bardziej wartościowe.
    Więc jeśli umiesz ten język wybierz angielski.`,
    rozwiazanie: `
    /*
      1.
      Czym są typy danych w języku JavaScript?
  
      Typy są:
      A - sposobem klasyfikowania wartości według ich cech i zachowań
      B - zestawem wbudowanych obiektów, które można używać do tworzenia zmiennych i funkcji
      C - zbiorem znaków, które można łączyć w ciągi tekstowe lub liczby;
      D - rodzajami zmiennych, które można deklarować przy użyciu słów kluczowych var, let lub const
      E - wartościami logicznymi, które mogą być prawdziwe lub fałszywe
  */
  odpowiedź("A");
  uzasadnienie(
    \`Jest to definicja typów danych więc myślę, że to poprawna odpowiedź\`
  );
  
  /*
      2.
      Jakiego słowa kluczowego użyjesz aby stworzyć stałą?
      Wprowadź odpowiedź jako teskt w cudzysłowie.
  */
  odpowiedź("const");
  uzasadnienie(
    \`z angielskiego "constant", gdybym chciał zmienną zmienną to był użył let\`
  );
  
  /*
      3.
      Dane jest wyrażenie:
      \`
          function f(x)
          {
              x.a = 10;
          }
  
          const o = {};
          f(o);
          console.log(f.o);
      \`
      Jaki będzie jego wynik w konsoli?
      Wprowadź odpowiedź jako teskt w cudzysłowie.
  */
  odpowiedź("undefined");
  uzasadnienie(\`funkcja f nie posiada klucza o\`);
  
  /*
      4.
      Pętli w JavaScript używamy aby:
  
      A - tworzyć funkcje
      B - wykonywać powtarzające się czynności
      C - zmieniać wartości zmiennych 
      D - przechowywać dane w tablicach 
      E - obsługiwać błędy
  */
  odpowiedź("B");
  uzasadnienie(
    \`pętlą możemy powtórzyć coś X razy dzięki czemu nie musimy pisać X razy więcej kodu\`
  );
  
  /*
      5.
      Ile razy zostanie wypisane słowo "xNzq" po uruchomieniu tego kodu?
  
      \`
          for(let i = 5; i < 100;i = i * 2)
          {
              console.log("xNzq")
          }
      \`
  
      Odpowiedź wpisz poniżej.
  */
  odpowiedź("5");
  uzasadnienie(\`warnuek funkcji i<100 zostanie spełniony 5 razy\`);
  
  /*
      6.
      Jaki będzie wynik poniższej operacji:
  
      \`
          const a = "10";
          const b = 10;
          console.log(a + b);
      \`
  
      Odpowiedź wpisz poniżej, zachowaj typ danych.
  */
  odpowiedź("1010");
  uzasadnienie(
    \`dodając number do stringa zamieni na stringa (bierze typ od lewej)\`
  );
  
  /*
      7.
      Czy poniższa operacja jest prawidłowa?
  
      \`
          1:      const o = {};
          2:      o.a = 10;
          3:      const b = {...o};
          4:      b = a;
          5.      b.b = 11;
      \`
  
      Wpisz poniżej numer linijki zawerającej błąd lub 0 jeśli kod
          nie zawiera błędu.
  */
  odpowiedź("4");
  uzasadnienie(\`obiekty są niemutowalne, tylko ich zawartość możemy zmieniać\`);
  
  /*
      8.
      Co byś wpisał chcąc wywołać funckje \`knur\` z dwoma parametrami 21 i 37?
  
      Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
  */
  odpowiedź("knur(21,37)");
  uzasadnienie(
    \`knur <- nazwa funkcji (parametr1, parametr2) <- wywołanie funkcji\`
  );
  
  /*
      9.
      Co byś wpisał chcąc odczytać klucz kasztan obiektu drzewo?
  
      Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
  */
  odpowiedź("drzewo.kasztan");
  uzasadnienie(
    \`"drzewo" bo chodzi o obiekt o takiej nazwie, "." ponieważ w ten sposób odnosimy się do klucza obiektu, "kasztan" ponieważ taką nazwę nosi klucz o który pytasz\`
  );
  
  /*
      10.
      Co byś wpisał chcąc odczytać dziesiąty element tablicy kasztany?
  
      Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
  */
  odpowiedź("kasztany[9]");
  uzasadnienie(
    \`"kasztany" ponieważ chodzi o tablicę o takiej nazwie, "[]" ponieważ tak odnosimy się do wartości pod danym indexem, "9" ponieważ chodzi o 10-ty element ale liczymy od 0\`
  );
  
  /*
      11. (* - bonusowe)
      Ile razy zostanie wypisane słowo "xNzq" po uruchomieniu tego kodu?
  
      \
          for(let i = 0; i < 100;i = i * 2)
          {
              console.log("xNzq")
          }
      \`
  
      Odpowiedź wpisz poniżej.
  */
  odpowiedź("Infinity");
  uzasadnienie(
    \`0 razy 2 to 0, więc warunek i<100 będzie spełniony do końca świata, chyba, że JP2 powie inaczej
    :3 
    \`
  );
    `,
    komentarz: "fajny egzamin Pan Knur",
  },
};

export const DaneTydzien2 = {
  zadanieD3: {
    name: "Dzień 3",
    jezyk: "html",
    trescZadania: `**Zadanie T2D3-12.02.2024 - Klocuhy**
    <@&1203108474234609714>
    
    Wykorzystajcie następujące klocki budowlane JS/HTML w kreatywny sposób:
    Postarajcie sie wykorzystać wszystkie klocuchy poniżej.
    
    **JS**
    
    document.createElement
    https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    
    <element>.appendChild
    https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    
    pętla \`for\`
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    
    <element>.addEventListener
    https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    
    funckje setTimeout
    https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    
    albo
    
    funckje setInterval
    https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    
    (* na gwiazdkę/6)
    fetch/xhr
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    albo
    https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest
    
    **HTML**
    Element <img>
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
    
    Element <button>
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
    
    Element <p>
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
    
    Element <input>
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
    
    (* na gwiazdkę/6)
    Komponent <audio>
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio`,
    rozwiazanie: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body style="font-family: 'Comic Sans MS', 'Comic Sans', Sans-Serif">
        <script>
          const obrazki = [
            "https://c.tenor.com/W9b55AsNEwEAAAAM/jasper-czeslav.gif",
            "https://media1.tenor.com/m/VSSqRBXq-HYAAAAd/dawid-jasper-dawid.gif",
            "https://media1.tenor.com/m/Opb10fsw8gIAAAAC/jasper-salut.gif",
            "https://c.tenor.com/kzVZYHkKXYUAAAAM/dawid-jasper-dawid.gif",
            "https://media.tenor.com/ojz1d_2uUKIAAAAM/dawid-dawid-jasper.gif",
          ];
          const cardBack =
            "https://th.bing.com/th/id/R.82abeed73aabdf25366aabc76b6868b1?rik=UovqniWUZNw2yw&pid=ImgRaw&r=0";
          const wrapperNaKarty = document.createElement("div");
          const wrapperNaCytat = document.createElement("div");
          const form = document.createElement("form");
          const inputField = document.createElement("input");
          const opisInputa = document.createElement("p");
          const papaj = document.createElement("img");
          document.body.appendChild(papaj);
          document.body.appendChild(wrapperNaKarty);
          document.body.appendChild(document.createElement("hr"));
          document.body.appendChild(wrapperNaCytat);
          document.body.appendChild(opisInputa);
          document.body.appendChild(form);
          form.appendChild(inputField);
          opisInputa.innerHTML = "kto jest autorem powyższego cytatu?";
          inputField.placeholder = "tu wpisz";
    
          papaj.src = "https://c.tenor.com/k2Ub9GzzyCYAAAAM/jp2gmd-polishpope.gif";
          papaj.style.position = "fixed";
          papaj.style.width = "0";
          papaj.style.opacity = "0";
          const dodajPlayer = (parentElement, plikMp3) => {
            const figure = document.createElement("figure");
            const figcaption = document.createElement("figcaption");
            const audio = document.createElement("audio");
            figure.appendChild(figcaption);
            figure.appendChild(audio);
            parentElement.appendChild(figure);
            audio.controls = "true";
            audio.src = \`\${plikMp3}\`;
          };
    
          for (let i = 0; i < 5; i++) {
            const img = document.createElement("img");
            img.src = cardBack;
            img.height = "250";
            img.style.margin = "10px";
            img.style.cursor = "pointer";
            img.style.maxWidth = "163.63px";
            wrapperNaKarty.appendChild(img);
            img.addEventListener("mouseover", () => {
              img.src = obrazki[i];
            });
          }
          const makeRequestBorzyAndUpdateDOM = () => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                const cytaty = JSON.parse(request.responseText);
                const losowaLiczba = Math.floor(Math.random() * 16);
                const cytatDiv = document.createElement("h1");
                wrapperNaCytat.appendChild(cytatDiv);
                cytatDiv.innerHTML = \`„\${cytaty[losowaLiczba].text}“\`;
                const autor = cytaty[losowaLiczba].author;
                const autorCleaned = autor.slice(0, autor.length - 10);
                let juzOdgadniete = false;
                form.addEventListener("submit", (e) => {
                  e.preventDefault();
                  if (inputField.value === autorCleaned && !juzOdgadniete) {
                    juzOdgadniete = true;
    
                    const komunikat = document.createElement("h2");
                    const komunikat2 = document.createElement("h3");
                    document.body.appendChild(komunikat);
                    document.body.appendChild(komunikat2);
                    komunikat.style.color = "#00B31E";
                    komunikat.innerHTML = "GRATULACJE WLASNIE O TĘ OSOBĘ CHODZIŁO";
                    setTimeout(() => {
                      komunikat2.innerHTML = "W nagrodę posłuchaj sobie barki :3";
                      dodajPlayer(document.body, "./barka.mp3");
                    }, 2000);
                    setTimeout(() => {
                      papaj.classList.add("j");
                    }, 17000);
                  } else if (!juzOdgadniete) {
                    const komunikat = document.createElement("h2");
                    document.body.appendChild(komunikat);
                    komunikat.style.color = "#CC0000";
                    komunikat.innerHTML =
                      "CHODZIŁO O INNĄ OSOBĘ PRÓBUJ DALEJ (podpowiedź w konsoli)";
                    console.log(autorCleaned);
                  }
                  inputField.value = "";
                });
              }
            };
            request.open("GET", "https://type.fit/api/quotes", true);
            request.send();
          };
    
          makeRequestBorzyAndUpdateDOM();
        </script>
        <style>
          .j {
            animation: x 20s ease-in-out 4s infinite alternate;
          }
          @keyframes x {
            0% {
              opacity: 0;
              width: 0;
            }
            50% {
              opacity: 0.85;
              width: 60vw;
            }
            100% {
              opacity: 0;
              width: 0;
            }
          }
        </style>
      </body>
    </html>
    `,
    komentarz: "to je zadanie w HTML",
  },
  zadanieD4D5: {
    name: "Dzień 4 i 5",
    jezyk: "html",
    trescZadania: `**Zadania T2D4-T2D5-13/14.02.2024 Obiecanki cacanki**
    Przeczytaj:
    
    EN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    PL: https://devenv.pl/obietnice-promises-podstawy-jezyka-javascript/
    
    Poniżej masz najprostszy model funkcji asynchronicznej:
    
    \`async function prostak()
    {
        return new Promise((resolve, reject) => resolve());
    }\`
    
    Używając powyższego modelu przygotuj asynchroniczne funkcje:
    
    \`async function spanko(milisekundy) => Promise z rezultatu setTimeout(milisekundy)\`
    
    \`async function malpiFetch(method, url) => Promise z rezultatu XMLHttpRequest\`
    
    Uwaga trudne (bonusowe):
    \`Używając konstruktu funkcji asynchronicznych i Promise stwórz funkcje asynchroniczną której wykonanie można zablokować aż zewnętrzny czynnik pozwoli na jej kontynuacje -> np. zostanie odblokowana po 10 sekundach\``,
    rozwiazanie: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          body {
            width: 100vw;
            height: 100vh;
            color: #efefef;
            font-family: "Comic Sans MS", sans-serif;
            background-color: #223;
          }
          .pending {
            color: yellow;
          }
          .fulfilled {
            color: green;
          }
          p,
          h1 {
            margin: 0;
          }
          p {
            color: #999;
          }
          label p {
            display: inline;
            
          }
          input{
            width: 35px;
            height: 20px;
          }
          label button {
            display: block;
            border: none;
            cursor: pointer;
            
          }
        </style>
      </head>
      <body>
        <div id="promise1">
          <h1>Promise 1</h1>
          <p>promise z setTimeout()</p>
          <h2 class="pending">pending</h2>
        </div>
        <div id="promise2">
          <h1>Promise 2</h1>
          <p>promise użyciem małpiego Fetcha</p>
    
          <h2 class="pending">pending</h2>
        </div>
        <div id="promise3">
          <h1>Promise 3</h1>
          <p>promise z buttonem opóźniającym</p>
          <label id="label">
            <p>Opóźnij wykonwyanie funkcji o (sekundy, max. 10): </p>
            <input type="number" id="input" min="0" max="10"></input>
            <button type="submit" id="startButton" disabled>Start</button>
      
          </label>
          <h2 class="pending">...</h2>
     
        </div>
        <script>
          const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
    
          async function spanko(ms) {
            const promise = new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(() => {
                  document.querySelector("#promise1>h2").classList.add("fulfilled");
                  document.querySelector("#promise1>h2").innerHTML = "fulfilled";
                });
              }, ms);
            });
            return promise;
          }
          async function malpiFetch(method, url) {
            const request = new XMLHttpRequest();
            const promise = new Promise((resolve, reject) => {
              request.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                  resolve(request.responseText);
                  document.querySelector("#promise2>h2").classList.add("fulfilled");
                  document.querySelector("#promise2>h2").innerHTML = "fulfilled";
                }
              };
            });
            request.open(method, url, true);
            request.send();
            return promise;
          }
          async function promise3() {
            const startButton = document.getElementById("startButton");
            const label = document.getElementById("label");
            const input = document.getElementById("input");
            let delay = 0; 
            label.addEventListener('input', ()=>{
              startButton.disabled = false;
              if (input.value > 10)  input.value = 10;
              else if (input.value < 0) input.value = 0;
              delay = input.value;
    
            })
            startButton.addEventListener("click", async () => {
              startButton.disabled = true;
    
              document.querySelector("#promise3>h2").innerHTML = "pending";
              document.querySelector("#promise3>h2").classList.remove("fulfilled");
    
    
              setTimeout(async () => {
                const result = await malpiFetch("GET", \`\${pokeAPI}\${Math.ceil(Math.random()*10)}/\`);
                const gotoweDanePromise3 = await JSON.parse(result);
                document
                  .querySelector("#promise3")
                  .appendChild(document.createElement("img")).src =
                  gotoweDanePromise3.sprites.front_default;
                document.querySelector("#promise3>h2").classList.add("fulfilled");
                document.querySelector("#promise3>h2").innerHTML = "fulfilled";
                startButton.disabled = false;
    
                
              }, delay*1000);
            });
          }
    
          ///  execution:
          (async () => {
            try {const promise1 = await spanko(2000);
            promise1();
            }
            catch {
              console.log('cos poszlo źle z promise 1')
            }
            try {
              const promise2 = await malpiFetch("GET", \`\${pokeAPI}1/\`);
            const gotoweDanePromise2 = await JSON.parse(promise2);
            document
              .querySelector("#promise2")
              .appendChild(document.createElement("img")).src =
              gotoweDanePromise2.sprites.front_default;
              }
            catch {
                console.log('cos poszlo źle z promise 2')
                }
            try{
              promise3()}
            catch{
              console.log('cos poszlo źle z promise 3')
            } 
          })();
          
        </script>
      </body>
    </html>
    `,
    komentarz: "to je zadanie w HTML",
  },
  zadanieD6: {
    name: "Dzień 6 (egzamin)",
    jezyk: "javascript",
    trescZadania: `ZADANIE T2D6 - 15.02.2024 - stykanie sie divami typu egzamin

    Weź diva swojego, puśc rege.
    To przywoła do stykania sie divami kolegę.

    Odpowiadaj tylko na jedno pytanie na raz.
    Rób to po kolei.
    Gdy odpowiesz źle otrzymasz link z materiałem do przeczytania.
    Po przeczytaniu spróbuj odpowiedzieć ponownie.
    Lub poszukaj pomocy na naszym knurskim discordzie.
    Gdy odpowiesz dobrze, przejdź do następnego pytania.

    Niektóre pytania są zamknięte i odpowiedz na nie literką.
    Niektóre pytania są otwarte, odpowiedz zgodnie z instrukcją.

    Ten egzamin jest wymagany aby uzyskać promocję do następnego tygodnia.

    Do każdego pytania napisz uzasadnienie swoimi słowami.
    Będzie to przydatne w ocenie Twojego zrozumienia tematu.

    Wybierz niżej język w którym chcesz materiały do przeczytania.
    Generalnie materiały po angielsku są bardziej wartościowe.
    Więc jeśli umiesz ten język wybierz angielski.`,
    rozwiazanie: `/*
    1.
    Jakiej funkcji użyjesz aby dostać się do elementu w HTML po jego atrybucie id?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("document.getElementById()");
uzasadnienie(
  \`funkcja ta odnosi się do danego elementu HTML na stronie(trzeba podać jego id)\`
);

/*
    2.
    Czy używanie funkcji asynchronicznych przyspiesza działanie kodu?

    A - tak
    B - nie

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("B");
uzasadnienie(
  \`Nie przyśpiesza samo z siebie, ponieważ jest to narzędzie do asynchroniczności a nie do wydajności\`
);

/*
    3.
    Dany jest kod HTML:
    \`
        <div id="test">test</div>
    \`
    oraz kod JS:
    \`
        function start()
        {
            let str = "abc";

            document.getElementById("test").innerHTML = str;

            str = "def";
        }
        addEventListener("DOMContentLoaded", start);
    \`
    Co wyświetli się w przeglądarce po wykonaniu tego kodu?
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("abc");
uzasadnienie(
  \`zmieniamy tekst w środku diva na "abc", późniejsze nadpisanie zmiennej str nie ma tutaj wpływu na rezultat bo dzieje się później\`
);

/*
    4.
    Które stwierdzenia o Promise w JS są prawidłowe?

    A - Promise w języku JavaScript to obiekt reprezentujący wartość, która może być dostępna teraz, w przyszłości lub nigdy.
    B - Jest to mechanizm, który umożliwia wykonywanie operacji asynchronicznych w sposób bardziej czytelny i zarządzalny.
    C - Reprezentuje wartość, która może zostać obliczona asynchronicznie, a następnie zwrócona lub odrzucona w przyszłości. 
    D - Obiekt, który reprezentuje zakończenie (lub nie) asynchronicznej operacji i pozwala na odpowiednie obsługiwanie wyników lub błędów.
    E - Umożliwia łatwe zarządzanie sekwencją asynchronicznych operacji poprzez łańcuchowanie metod then() i catch().

    Oddziel przecinkiem wybrane odpowiedzi.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("A, B, C, D, E");
uzasadnienie(\`myślę, że te stwierdzenia o Promise sa prawidłowe\`);

/*
    5.
    Pod jakim kluczem w JavaScript dostaniesz się do zawartości elementu <input>?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("value");
uzasadnienie(
  \`value to po angielsku zawartość więc ta nazwa mówi sama za siebie\`
);

/*
    6.
    Jakiej funkcji w języku JavaScript 
        użyjesz aby wykonać pewną funckję co stały określony czas?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("setInterval()");
uzasadnienie(
  \`funkcja ta będzie wykonywać funkcję przekazaną jako 1-wszy parametr co liczbę milisekund przekazaną jako 2-gi parametr\`
);

/*
    7.
    Dlaczego musimy korzystać z asynchroniczności przy wymianie danych z serwerem?

    A - przyspiesza to uzyskanie odpowiedzi od servera;
    B - pozwala to na wykonanie innych zadań w międzyczasie;
    C - bo servery również działają asynchronicznie;
    D - pozwala to na sprawne obsłużenie błędów komunikacji;
    E - minimalizuje to ryzyko przeciążenia serwera.
        
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("B");
uzasadnienie(\`taki jest cały sens asynchroniczności\`);

/*
    8.
    Które z poniższych scenariuszy wymagają operacji asynchronicznych:

    A - odczytanie danych z serwera;
    B - wysłanie danych na serwer;
    C - zaktualizowanie tekstu na stronie;
    D - wyświetlenie obrazka na stronie;
    E - obsługa wcisnięcia przycisku przez użytkownika.


    Oddziel przecinkiem wybrane odpowiedzi.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("A, B, E");
uzasadnienie(\`te operacje wymagają asynchroniczności \`);

/*
    9.
    W poniższym kodzie jest luka:

    \`
        const el = document.createElement("div");
        el.innerText = "papaj";
        [LUKA].appendChild(el);
    \`

    Co należy wpisać w polu [LUKA] aby dodać ten element do rodzica <body> na stronie.
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("document.body");
uzasadnienie(\`tak dostajemy się do elementu body w drzewie DOM \`);

/*
    10.
    W poniższym kodzie jest luka:
    
    \`
        const przycisk = document.getElementById("przycisk");
        przycisk.[LUKA]("click", () => alert("klikłeś przycisk"));
    \`

    Co należy wpisać w polu [LUKA] aby po kliknięciu przycisku wyskoczył alert "klikłeś przycisk".
    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("addEventListener");
uzasadnienie(\`tak nazywa się funkcja odpowiedzialna za dodanie eventu\`);

/*
    11. (* - bonusowe)
    Zapytanie do serwera nie udaje się z poziomu twojej strony.
    Gdy wchodzisz pod podany URL serwea z przeglądarki wszystko działa.
    Co jest najczęstszym problem w tym scenariuszu?

    Wpisz rozwiązanie poniżej jako tekst w cudzysłowie.
*/
odpowiedź("CORS");
uzasadnienie(
  \`Może wystąpić wiele różnych problemów z tym mechanizmem, który służy do uwierzetylniania klienta względem serwera \`
);`,
    komentarz: "to był egzamin",
  },
};

export const nobelPrizeWinners = [
  {
    name: "Maria Skłodowska-Curie",
    nationality: "Polish",
    category: "Physics",
    achievements: [
      "Discovered the elements polonium and radium.",
      "Conducted pioneering research on radioactivity.",
    ],
  },
  {
    name: "Henryk Sienkiewicz",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Authored 'Quo Vadis', a historical novel.",
      "His works significantly influenced Polish literature.",
    ],
  },
  {
    name: "Władysław Reymont",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Wrote 'The Peasants', a novel that won him the Nobel Prize.",
      "His works realistically depicted rural life in Poland.",
    ],
  },
  {
    name: "Isidor Isaac Rabi",
    nationality: "American",
    category: "Physics",
    achievements: [
      "Discovered nuclear magnetic resonance.",
      "Used magnetic resonance to develop new methods for measuring nuclear magnetic moments.",
    ],
  },
  {
    name: "Albert Einstein",
    nationality: "German",
    category: "Physics",
    achievements: [
      "Developed the theory of relativity.",
      "Made significant contributions to the development of quantum mechanics.",
    ],
  },
  {
    name: "Lech Wałęsa",
    nationality: "Polish",
    category: "Peace",
    achievements: [
      "Co-founded Solidarity, the Soviet bloc's first independent trade union.",
      "Served as the President of Poland from 1990 to 1995.",
    ],
  },
  {
    name: "Martin Luther King Jr.",
    nationality: "American",
    category: "Peace",
    achievements: [
      "Led the Civil Rights Movement in the United States.",
      "Delivered the famous 'I Have a Dream' speech.",
    ],
  },
  {
    name: "Andrzej Schally",
    nationality: "Polish",
    category: "Medicine",
    achievements: [
      "Conducted significant research on peptide hormones.",
      "His work laid the foundation for many medical treatments.",
    ],
  },
  {
    name: "Olga Tokarczuk",
    nationality: "Polish",
    category: "Literature",
    achievements: [
      "Authored 'Flights', a novel that won her the Nobel Prize.",
      "Her works explore themes of travel and human anatomy.",
    ],
  },
  {
    name: "Ernest O. Lawrence",
    nationality: "American",
    category: "Physics",
    achievements: [
      "Invented the cyclotron, a type of particle accelerator.",
      "His invention led to the discovery of many radioactive isotopes.",
    ],
  },
];
