# Einladung zum Punschstand 🎄

Eine kleine Einladungs-Website mit zwei Buttons **„Ich komme“** / **„Ich komme nicht“**.
Nach dem Klick gibt der Gast seinen Namen und (bei Zusage) die Anzahl Personen an –
dann öffnet sich WhatsApp mit einer **fertig ausgefüllten Antwort an dich**. Der Gast
muss nur noch auf „Senden“ tippen.

Beispiel einer Antwort, die bei dir ankommt:

```
✅ KOMME – Anna
Personen: 3
(Punschstand am Samstag, 12. Dezember 2026)

Wir bringen Kekse
```

## 1. Anpassen

In `index.html` ganz unten den Block `CONFIG` bearbeiten:

| Feld        | Bedeutung |
|-------------|-----------|
| `telefon`   | **Deine** WhatsApp-Nummer, nur Ziffern im internationalen Format (0176 1234567 → `491761234567`) |
| `datum`, `uhrzeit`, `ort`, `kartenLink` | Eckdaten |
| `titel`, `gruss`, `text`, `gastgeber` | Texte der Einladung |
| `maxPersonen` | Höchstanzahl beim Personen-Zähler |

Danach die Bilder neu erzeugen (optional, braucht Node + Playwright):

```
node werkzeuge/bilder-erzeugen.js
```

Das erzeugt:
- `bilder/einladung.png` – die gestaltete Einladung als Bild (zum Verschicken)
- `bilder/vorschau.png` – das Vorschaubild, das WhatsApp unter dem Link anzeigt

## 2. Online stellen (kostenlos mit GitHub Pages)

1. Auf GitHub: **Settings → Pages → Build and deployment → Branch** wählen
   (den Branch mit diesen Dateien, Ordner `/ (root)`) → **Save**.
2. Nach ~1 Minute ist die Seite erreichbar unter
   `https://jaylauda.github.io/EinladungPunschstand/`
3. Falls die Adresse anders lautet: in `index.html` die `og:image`-URL oben anpassen.

## 3. Per WhatsApp verschicken

Bild `bilder/einladung.png` schicken und als Bildunterschrift z. B.:

```
Hallo! 🎄 Ich lade dich herzlich zu meinem Punschstand ein.
Sag mir bitte kurz Bescheid:

👉 Ich komme: https://jaylauda.github.io/EinladungPunschstand/?antwort=ja
👉 Ich komme nicht: https://jaylauda.github.io/EinladungPunschstand/?antwort=nein
```

Tipps:
- `?antwort=ja` / `?antwort=nein` wählt die Antwort auf der Seite direkt vor.
- Mit `&name=Anna` wird der Gast persönlich begrüßt und der Name ist schon ausgefüllt,
  z. B. `…/?antwort=ja&name=Anna`.

## Warum nicht „direkt in WhatsApp“?

- Ein Bild in WhatsApp kann keine anklickbaren Buttons enthalten.
- Echte Antwort-Buttons, die **automatisch** zurücksenden, gibt es nur über die
  kostenpflichtige **WhatsApp Business API** (mit Meta-Konto, Vorlagen-Freigabe, Server).
- Aus Sicherheitsgründen darf keine Website/kein Link in WhatsApp eine Nachricht ohne
  Bestätigung verschicken. Der Klick auf „Senden“ durch den Gast ist daher immer nötig.
