# Customer Editing Guide — emerald-nikah

This template is an Islamic Nikah and Walima banquet invitation featuring emerald & gold luxury styling, Arabic verses (Basmala, Dua, Surah Ar-Rum), couple profiles, countdown timer, event itinerary, venue details with interactive map, and ambient audio player.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/emerald-nikah/editable/wedding-data.js)

### Couple & Family Details
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `firstName` & `lastName`: First and family name (e.g. `"Zayan"`, `"Abdul Rahman"`)
- `name`: Full display name
- `parents`: Parents/family lineage string (e.g. `"Son of Janab Abdul Rahman & Muhtarma Zubaida"`)
- `role`: Role title (e.g. `"The Groom"`, `"The Bride"`)
- `note`: Personal biographical note
- `photo`: Path to profile picture (e.g. `"./editable/assets/groom.jpg"`)

### Wedding Date & Countdown
Edit `wedding` in `editable/wedding-data.js`:
- `dateISO`: Event timestamp in ISO 8601 format (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Directly drives the live countdown timer and `.ics` calendar file.
- `dateBadge`: Formatted short date badge (e.g. `"Saturday · 12 December 2026"`)
- `dateFormatted`: Long formatted date string
- `timeFormatted`: Time label (e.g. `"06:30 PM onwards"`)
- `eventTitle`: Invitation title (e.g. `"Nikah Ceremony & Walima Banquet"`)
- `inviteLine` & `hostLine`: Hero invitation copy lines
- `countdownEyebrow` & `countdownTitle`: Countdown section headings

### Religious Texts & Verses
Edit `religious` in `editable/wedding-data.js`:
- `bismillah`: Arabic Basmala calligraphy string
- `duaArabic` & `duaTranslation`: Arabic wedding blessing and English translation
- `verseArabic`, `verseTranslation`, `verseRef`: Quranic ayah and reference (e.g. Surah Ar-Rum 30:21)

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (e.g. `"Falaknuma Gardens"`)
- `badge`: Short venue label for hero badge
- `address`: Detailed street address
- `fullAddress`: Full address string used for calendar download and copying to clipboard
- `notes`: Parking / transit directions note
- `mapImage`: Map preview image path
- `mapsUrl`: Google Maps directions link

### Event Itinerary
Edit `itinerary` array in `editable/wedding-data.js`:
- Modify each event's `time`, `title`, `subtitle`, and `description`. Additional events will automatically inherit gold theme icons.

### Closing & Socials
Edit `closing` in `editable/wedding-data.js`:
- `blessing`: Final closing prayer/quote
- `coupleNames`: Footer couple signature
- `duasLine`: Invitation sign-off
- `instagram` & `instagramUrl`: Instagram handle and URL

### Photos & Media Assets
Replace files directly in `editable/assets/` or update paths in `images`:
- Groom photo: `editable/assets/groom.jpg`
- Bride photo: `editable/assets/bride.jpg`
- Venue map: `editable/assets/map.jpg`
- Floral & background accents: `hero-bg.jpg`, `roses.png`, `daisies.png`, `mandala.png`, `divider.png`

---

## Rules for Future Agents

1. Make all standard content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless structural alterations are requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
