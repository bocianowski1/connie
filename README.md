# Labyrintenfinale 2024

Dette repoet er utgangspunkt for caseoppgaven i Labyrintenfinalen 2024. Her kan dere se et eksempel på en enkel frontendapp i React + Vite og en enkel express backend med et api for deltakere.

## Kom i gang

### Førstegangsoppsett

1. Klon dette repoet til din lokale maskin. Åpne terminalen, naviger til mappen du vil ha repoet i og skriv kommandoen `git clone git@github.com:bekk/labyrintenfinale-go-func-urself.git`.
2. Sjekk at du har node og npm installert på din maskin med `npm --version` og `node --version`. Hvis du på en av disse får `command not found`, må du installere det, feks med brew. Spør gjerne en coach om hjelp!
3. Installer `nodemon` med `npm install -g nodemon`

### Kjøre opp backend

1. Naviger inn i backend med `cd backend`.
2. Kjør `npm install` for å installere avhengigheter for backend.
3. Kjør `npm run dev` for å kjøre opp backend. Denne vil da starte opp på port 5174.
4. Åpne en nettleser på `localhost:5174/api/deltakere` for å verifisere at backend kjører.

### Kjøre opp frontend

1. Åpne nytt terminalvindu og naviger til roten av repoet.
2. Kjør `npm install` for å installere avhengigheter for frontend.
3. Kjør `npm run dev`for å kjøre opp frontend. Den vil da starte opp på port 5173.
4. Åpne nettleser på `localhost:5173` for å verifisere at frontend kjører.

## Få ting ut i den store verden

Vi bruker Heroku for å hoste appen: https://go-func-urself-2b827ed4ce8e.herokuapp.com/.

For å dytte ting ut hit trenger dere bare å pushe til git, så fikser heroku pipeline resten. Om dere trenger å gjøre noen endringer i Heroku, kan dere ta kontakt med en av oss coacher!
