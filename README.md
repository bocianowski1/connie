# Labyrintenfinale 2024

Dette repoet er utgangspunkt for caseoppgaven. Det er satt opp slik at alt som pushes til git automagisk vil legge ut på heroku!

## Kom i gang

### Førstegangsoppsett

1. Klon dette repoet til din lokale maskin. Åpne terminalen, naviger til mappen du vil ha repoet i og skriv kommandoen `git clone git@github.com:bekk/labyrintenfinale-case-2024.git`.
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
