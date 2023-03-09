# chuckinator

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

## Zadání

### Cíl
```
Cílem je vytvořit, dle níže uvedených požadavků, aplikaci (SPA), která na základě
požadavků uživatele zobrazí vtip/moudro Chucka Norrise. Na prvním místě se hodnotí
funkční zpracování, následně design (fantazii a propracování se ovšem meze nekladou:)).
```
### Doporučení
```
Přestože je úkol rozsahem velmi malý, doporučujeme k němu přistupovat, jakoby se jednalo
o velký projekt. Takový pohled by měl mít vliv na adresářovou strukturu vytvářeného
projektu, modularizaci komponent, znovupoužitelnost, rozšiřitelnost kódu a také využití
knihoven, které by se běžně pro realizaci rozsahem malého projektu nezvolily.
Vypracování úkolu by nemělo trvat déle než 12 hodin čistého času. Tento čas by měl sloužit
jako vodítko k míře realizačního detailu.
```
### Uživatelské požadavky
```
-Jako uživatel chci, po příchodu na stránku aplikace, vždy vidět jeden a pouze jeden
Chuckův vtip.
- Jakákoliv interakce vedoucí k získání dalšího vtipu, přepisuje naposledy
zobrazený vtip.
- Jako uživatel chci, podle zadaného řetězce, vyhledat a zobrazit náhodný Chuckův
vtip, obsahující zadaný řetězec.
- Jako uživatel chci být informován, pokud takový neexistuje.
- Jako uživatel chci mít možnost, vybrat si náhodný Chuckův vtip dle jeho kategorie.
- Seznam kategorií se získá a určuje API.
- Jako uživatel chci vědět, že se mi zobrazuje vtip z dané kategorie.
```

### Technické požadavky
```
Předvést schopnost otestovat zvolenou část kódu / funkcionality. Testovací
engine/framework dle vlastní preference.
Vyžadována syntaxe ECMAScript 2015 (ES6) a vyšší. Aplikace by neměla obsahovat errory
ani warningy v devtools konzoli.
Povinné zakomponování (typových) knihoven:
- Vue (pochopitelně :-), pokud možno ve verzi 3.x)
- State management založen na architektuře Flux (Vuex, Redux, Pinia apod.) (např.
pro vtip, vybranou kategorii atd.)
- UI v souladu s Material Design specifikací (Vuetify, Vue Material apod.)
Další knihovny dle vlastních potřeb a uvážení.
Volitelně linter + prettier. Pro vytvoření projektu je možné použít jakýkoliv starter kit (nebo
žádný).
API: https://api.chucknorris.io/
bundler: Webpack*
package manager: Yarn*
* Možno domluvit jiný
Projekt musí být možné spustit lokálně (yarn start).
```

### Odevzdání
```
Řešení zašlete na e-mail jan.blaha@cgi.com jednou z následujících forem:
- odkazem na veřejný repozitář s možností naklonování úkolu (případně URL, kde je
projekt nasazen)
- přílohou sbaleného codebase ve formátu zip
```
