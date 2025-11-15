L31 - Informatica per le aziende digitali

Traccia 7: Sviluppo di una pagina web per il download dei report di sostenibilità di un’impresa del settore secondario

# Dashboard Sostenibilità Ferrero (Project Work Università Pegaso)

Questo repository contiene il **Project Work** sviluppato come elaborato finale del corso di laurea **L-31 Scienze e Tecnologie Informatiche (Università Telematica Pegaso)**.  
Il progetto consiste nella realizzazione di una **dashboard web** per la visualizzazione e il download dei report di sostenibilità di **Ferrero S.p.A.**, con focus sui principali **KPI ESG** (ambientali, sociali e di governance) conformi agli standard **GRI** ed **ESRS**.

---

## Struttura del progetto

- `index.html` → struttura della pagina web (HTML5)  
- `ferrero-style.css` → foglio di stile responsivo (CSS3, mobile-first)  
- `main.js` → logica per il caricamento dinamico dei dati KPI e collegamento ai report  

---

## Funzionalità

- **Selettore anni (2020–2024)** tramite slider interattivo  
- **KPI ESG dinamici**:
  - Ambientali (emissioni CO₂eq, quota energia rinnovabile, rifiuti totali, % riciclo)
  - Sociali (dipendenti, % donne manager, ore formazione, tasso infortuni LTIFR)
  - Governance (presenza femminile CdA)
- **Tooltip esplicativi** per ciascun KPI
- **Archivio report** con link diretti ai documenti ufficiali Ferrero
- Layout **responsive**: 4 colonne su desktop, 2 su tablet, 1 su mobile
- Accessibilità: font Google Montserrat, colori ad alto contrasto e logica accessibile a tastiera

---

## Standard di riferimento

- **GRI (Global Reporting Initiative)** → indicatori ambientali, sociali e di governance
- **ESRS (European Sustainability Reporting Standards)** → E1, S1, G1
- **CSRD (Corporate Sustainability Reporting Directive)** → principi di doppia materialità

---

## Come utilizzare

1. Clona il repository:
git clone https://github.com/tuo-username/ferrero-sostenibilita-pw.git
2. Apri `index.html` con il browser per visualizzare la dashboard.
3. Personalizza i dati in `main.js` e lo stile in `ferrero-style.css` per aggiornarli con futuri report Ferrero.

---

## Demo online

Puoi visionare una demo del progetto su [GitHub Pages](#) *(inserisci qui il link quando pubblicato)*

---

## Note

- I dati e i report sono ricavati dai documenti pubblici Ferrero ([ferrerosustainability.com](https://www.ferrerosustainability.com/)).
- Il progetto è pensato per essere facilmente adattabile ad altre aziende del settore alimentare o industriale che seguano la normativa ESG europea.
