# 🛒 Piattaforma E-commerce Universale

Piattaforma client responsive configurabile tramite file CSV.  
Funziona su qualsiasi hosting statico (GitHub Pages, Netlify, ecc.) senza backend.

---

## 📁 File del progetto

| File | Descrizione |
|------|-------------|
| `ini.html` | **Punto di partenza** — configurazione negozio e caricamento CSV |
| `index.html` | Catalogo prodotti (griglia + ricerca) |
| `product.html` | Pagina dettaglio prodotto |
| `cart.html` | Carrello della spesa + generazione PDF |
| `style.css` | Stile condiviso (colori, layout, responsive) |
| `prodotti.csv` | CSV di esempio con 8 prodotti tech |

---

## 🚀 Come si usa

1. **Apri `ini.html`** nel browser
2. Inserisci il nome del negozio e scegli il colore principale
3. (Opzionale) aggiungi l'URL del tuo logo
4. Carica il file `.csv` oppure incollane il contenuto
5. Clicca **"Salva e apri il negozio"** → si apre il catalogo

---

## 📋 Formato del file CSV

La prima riga deve essere l'intestazione con almeno queste 5 colonne:

```
marca,modello,descrizione,immagine,prezzo
Nike,Air Max 90,Scarpa sportiva classica,https://...,89.99
```

- `marca` — produttore / brand
- `modello` — nome del prodotto
- `descrizione` — testo descrittivo (usa le virgolette se contiene virgole)
- `immagine` — URL dell'immagine (JPG/PNG, anche placeholder)
- `prezzo` — numero decimale con punto (es. `29.99`)

**Puoi aggiungere colonne extra** (es. `colore`, `taglia`, `sku`): verranno mostrate automaticamente nella pagina prodotto.

---

## 🌐 Pubblicare su GitHub Pages

1. Crea un repository GitHub e carica tutti i file
2. Vai in **Settings → Pages → Source → main branch**
3. Il sito sarà disponibile su `https://tuonome.github.io/tuo-repo/ini.html`

---

## 📄 Generazione PDF

Il carrello include un pulsante **"Stampa ordine PDF"** che genera un documento con:
- Nome del negozio e data/ora
- Tabella con tutti gli articoli, quantità e prezzi
- Totale complessivo

Utilizza la libreria [jsPDF](https://github.com/parallax/jsPDF) caricata da CDN.

---

## 🔧 Personalizzazione CSS

I colori principali sono gestiti tramite variabili CSS in `style.css`:

```css
:root {
  --primary: #2563eb;   /* colore principale (override da ini.html) */
  --bg: #f1f5f9;        /* sfondo pagina */
  --card-bg: #ffffff;   /* sfondo card */
  --radius: 12px;       /* bordi arrotondati */
}
```

Il colore `--primary` viene sovrascritto dinamicamente dalla configurazione in `ini.html`.
