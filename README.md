# BBB Winterpunsch – Einladung mit Zu-/Absage 🎄

Die Seite zeigt deine Einladung (`bilder/einladung.jpg`) mit zwei Buttons oben:
**„Ich komme“** / **„Ich komme nicht“**. Der Gast gibt Namen und (bei Zusage) die
Anzahl der Personen an. Danach öffnet sich WhatsApp mit einer fertigen Antwort an
dich, und der Gast muss nur noch auf „Senden“ tippen:

```
✅ KOMME – Anna
Personen: 3
(BBB Winterpunsch, Sa, 5. Dezember)
```

## 1. Deine WhatsApp-Nummer eintragen

In `index.html` unten im Block `CONFIG` bei `telefon` deine Nummer eintragen:
nur Ziffern, international, ohne `+`/`00`/führende `0`
(z. B. 0664 1234567 → `436641234567`).

## 2. Online stellen (kostenlos, GitHub Pages)

GitHub → **Settings → Pages → Branch** diesen Branch und `/ (root)` wählen → **Save**.
Nach ca. einer Minute ist die Seite unter
`https://jaylauda.github.io/EinladungPunschstand/` erreichbar.

## 3. Per WhatsApp verschicken

Bild `bilder/einladung.jpg` schicken und als Text dazuschreiben:

```
Servus! 🎄 Am Samstag, 5. Dezember ab 17 Uhr gibt's wieder den BBB Winterpunsch – wir freuen uns auf dich!
Bitte gib uns kurz Bescheid:

✅ Ich komme: https://jaylauda.github.io/EinladungPunschstand/?antwort=ja
❌ Ich komme nicht: https://jaylauda.github.io/EinladungPunschstand/?antwort=nein
```

Alternativ nur den Link `https://jaylauda.github.io/EinladungPunschstand/` schicken.
WhatsApp zeigt dann das Vorschaubild `bilder/vorschau.jpg` an.

- `?antwort=ja` / `?antwort=nein` wählt die Antwort auf der Seite direkt vor.
- Mit `&name=Anna` ist der Name schon ausgefüllt (z. B. `…/?antwort=ja&name=Anna`).

## Warum muss der Gast noch auf „Senden“ tippen?

WhatsApp lässt aus Sicherheitsgründen keine Nachricht ohne Bestätigung verschicken.
Echte Antwort-Buttons gibt es nur mit der kostenpflichtigen WhatsApp Business API.
