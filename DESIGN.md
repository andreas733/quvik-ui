---
name: Quvik Portal
description: Internt operativt arbeidsverktøy for Quvik AS — rolig, presist, navy.
colors:
  # --- @quvik/ui-tokens (tokens.css --color-* + Tailwind-preset). Navn = token-navn. ---
  navy: "#1e264c"        # --color-navy / preset navy
  mid: "#2c3871"         # --color-mid / preset mid
  accent: "#3b4b95"      # --color-accent / preset accent
  night: "#101427"       # --color-night / preset night
  border: "#e6e6e6"      # --color-border / preset border
  bg: "#f9f9f9"          # --color-bg / preset bg
  qviktext: "#1a1f3a"    # --color-qviktext / preset qviktext
  muted: "#6b7280"       # --color-muted / preset muted
  offwhite: "#f7f6f3"    # --color-offwhite / preset offwhite
  warmgray: "#e8e6e1"    # --color-warmgray / preset warmgray
  surface: "#ffffff"     # --color-surface / preset surface
  # --- Status-tokens (@quvik/ui; verdiene matcher Tailwind-paletten) ---
  positive: "#15803d"    # --color-positive / preset positive  (green-700)
  positive-bg: "#f0fdf4" # --color-positive-bg / preset positive-bg  (green-50)
  warning: "#92400e"     # --color-warning / preset warning  (amber-800)
  warning-bg: "#fffbeb"  # --color-warning-bg / preset warning-bg  (amber-50)
  danger: "#dc2626"      # --color-danger / preset danger  (red-600)
  danger-bg: "#fef2f2"   # --color-danger-bg / preset danger-bg  (red-50)
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Sora, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "28px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "#2d3a7a"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  button-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.qviktext}"
    rounded: "{rounded.xl}"
    padding: "20px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.qviktext}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  kpi-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.xl}"
    padding: "20px"
  nav-item-active:
    backgroundColor: "rgba(255,255,255,0.12)"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  table:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.qviktext}"
    rounded: "{rounded.xl}"
  table-header:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  table-cell:
    textColor: "{colors.qviktext}"
    padding: "12px 16px"
  prose-panel:
    backgroundColor: "{colors.offwhite}"
    textColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
---

# Design System: Quvik Portal

## 1. Overview

**Creative North Star: "The Quiet Control Room"**

Quvik-portalen er et dypt navy arbeidsrom der operativ data ligger stille til en
ansatt trenger den. Det er et internt verktøy, ikke en utstilling: en mørk,
rammende sidebar holder navigasjonen samlet i utkanten, mens selve arbeidet skjer
på rolige hvite flater i et lyst lerret (`#f9f9f9`). Systemet snakker med
inneluftstemme. Det skriker aldri, men hver tilstand, hvert tall og hver status er
utvetydig når du ser etter den.

Tettheten er behersket. Informasjon presenteres med rikelig hvitrom, hårfine
borders og ett enkelt blått aksent fremfor bokser inni bokser eller fargekoding
overalt. Presisjon bærer tilliten: nøkkeltall settes i display-vekt med
`tabular-nums` slik at sifre står på linje, og statusfarger (grønn/gul/rød) brukes
sparsomt og alltid med tekst ved siden av, aldri farge alene.

Systemet avviser eksplisitt den generiske SaaS-dashbord-estetikken (gradient-kort,
hero-metric-maler, endeløse identiske ikon-kort), det overlastede adminpanelet
(for mange knapper og paneler på én skjerm), den forbruker-lekne appen (maskoter,
knallfarger), og AI-slop-tells (tracket uppercase-eyebrows over hver seksjon,
glassmorphism, gradient-tekst, side-stripe-borders).

**Key Characteristics:**
- Navy ramme, hvite arbeidsflater, lyst lerret.
- Én skriftfamilie (Sora) i 300/400/500; hierarki via størrelse og vekt.
- Behersket tetthet, hårfine borders, ett blått aksent.
- Tall i display-vekt med `tabular-nums`.
- Status kommuniseres med tekst + farge, aldri farge alene.

## 2. Colors

En nøktern, kjølig palett bygget rundt dyp navy og ett blått aksent, satt mot
nær-nøytrale grå og en lys, nesten hvit bakgrunn.

**Token-kilder.** Hele paletten er `@quvik/ui`-tokens med likt navn i
`tokens.css` (`--color-*`) og Tailwind-presetet: `navy`, `mid`, `accent`,
`night`, `border`, `bg`, `qviktext`, `muted`, `offwhite`, `warmgray`, `surface`
og statusfargene `positive`/`positive-bg`, `warning`/`warning-bg`,
`danger`/`danger-bg`. Navnet er det samme begge steder — f.eks. heter `#2c3871`
`mid` (`--color-mid`) og `#101427` `night` (`--color-night`). Statusfargene har
samme verdier som Tailwinds standardpalett (green/amber/red), men brukes som
navngitte `@quvik/ui`-tokens.

### Primary
- **Deep Navy** — token `navy` (#1e264c): Bærer sidebar, innloggingsskjerm, mørke avatar-/badge-flater og display-tall (`text-navy`). Systemets identitetsfarge og dominerende mørke flate.
- **Signal Blue** — token `accent` (#3b4b95): Det ene aksentet. Primærknapper, fokus-ring, aktive lenker, fremdriftsindikatorer og diskrete fremhevinger (`bg-accent/[0.08]`). Sjeldenheten er poenget.

### Secondary
- **Midnight Blue** — token `mid` (#2c3871): Hover-tilstand på navy-flater og mellomtone mellom navy og aksent. Samme navn begge steder (`--color-mid` / preset `mid`); samme verdi nås også via den Deneb-lokale `navy-mid` (`app/tailwind.config.ts`).
- **Night** — token `night` (#101427): Dypeste navy for overlegg og ekstra kontrast. Samme navn begge steder: `--color-night` i `tokens.css` og `night` i presetet.

### Neutral
- **Ink** — token `qviktext` (#1a1f3a): Primær brødtekst og overskrifter på lyse flater. Det mørke endepunktet — bruk denne, ikke lys grå, for lesbarhet.
- **Muted Gray** — token `muted` (#6b7280): Sekundærtekst, hint og labels på lyse flater. Aldri til lengre brødtekst.
- **Hairline** — token `border` (#e6e6e6): Standard border på kort, inputs og skillelinjer.
- **Canvas** — token `bg` (#f9f9f9): Sidens grunnlerret bak de hvite kortene.
- **Surface** — token `surface` (#ffffff): Kort, paneler, inputs. Ren hvit for arbeidsflater over lerretet.
- **Warm Offwhite / Warm Gray** — tokene `offwhite` (#f7f6f3) / `warmgray` (#e8e6e1): Varmere nøytral-par til markdown-/lesepaneler og mykere borders i innholdstunge flater.

### Tertiary (status)
`@quvik/ui`-statustokens, brukt via klasser som `text-positive` / `bg-positive-bg`.
Verdiene matcher Tailwinds standardpalett (green/amber/red):
- **Positive Green** — tokene `positive` / `positive-bg` (#15803d på #f0fdf4, = green-700/green-50): «live», godkjent, suksess.
- **Warning Amber** — tokene `warning` / `warning-bg` (#92400e på #fffbeb, = amber-800/amber-50): venter, advarsel, oppmerksomhet.
- **Danger Red** — tokene `danger` / `danger-bg` (#dc2626 på #fef2f2, = red-600/red-50): feil, avvist, destruktivt.

### Named Rules
**The One Accent Rule.** Det finnes nøyaktig ett aksent: Signal Blue (#3b4b95).
Den bærer primærhandling, fokus og aktiv tilstand — ikke mer. Trenger du «enda en
farge», bruk en tone av navy eller en transparens av aksentet, ikke en ny hue.

**The Text-Not-Color Rule.** Status formidles alltid med ord (og evt. ikon) i
tillegg til farge. En grønn prikk uten etikett er forbudt — fargeblinde og
skjermlesere må få samme beskjed.

## 3. Typography

**Display Font:** Sora (med `sans-serif` fallback)
**Body Font:** Sora (med `sans-serif` fallback)
**Label/Mono Font:** Sora for labels; nettleserens `ui-monospace` for kode/ID-er.

**Character:** Ett geometrisk-humanistisk grotesk, Sora, gjør hele jobben i vekt
300/400/500. Merk: `font-serif`-klassen i dette systemet peker også til Sora — den
markerer display- og tallbruk (større størrelse, `font-normal`, `tabular-nums`),
ikke en faktisk serif. Hierarki kommer fra størrelse og vekt, ikke fra flere
skrifter.

### Hierarchy
- **Display** (400, 1.875–3rem `text-3xl`, line-height ~1.15, `tabular-nums`): KPI-tall og store nøkkeltall. Settes med `font-serif`-klassen (= Sora) for optisk ro.
- **Headline** (400, 1.25rem `text-xl`, line-height ~1.25): Seksjons- og sideoverskrifter på lyse flater (`text-qviktext`).
- **Title** (500, 0.875rem `text-sm`, line-height ~1.4): Kort-titler, knappetekst, navigasjonslenker.
- **Body** (400, 0.875rem `text-sm`, line-height ~1.6): Brødtekst og beskrivelser i `text-qviktext` eller `text-muted`. Hold leselengde 65–75ch.
- **Label** (600, 0.6875rem `text-[11px]`, letter-spacing 0.06em, ofte uppercase): Korte etiketter — KPI-label, «Portal»-merket, Rigel-seksjonsmerke. Reservert for ≤4 ord.

### Named Rules
**The One Family Rule.** Sora bærer alt. Ikke introduser en ny skriftfamilie for
«variasjon» — hent hierarki fra vekt (300/400/500) og størrelse i stedet.

**The Tabular Number Rule.** Alle tall som kan sammenlignes eller stables (KPI-er,
beløp, datoer i kolonne) settes med `tabular-nums` slik at sifrene står på linje.

## 4. Elevation

Systemet er flatt med en myk hvile-skygge. Kort hviler nesten flatt på lerretet
med `shadow-sm`, der en hårfin border (#e6e6e6) gjør mesteparten av separasjonen.
Dybde er en respons på tilstand, ikke en konstant: ved hover løftes interaktive
kort til `shadow-md` (ofte med `hover:border-accent`). Tunge skygger (`shadow-xl`)
er reservert for ekte overlegg som flytende toast/varsler.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)` — `shadow-sm`): Standard hvile-skygge på kort og paneler.
- **Hover lift** (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)` — `shadow-md`): Interaktive kort/rader ved hover.
- **Overlay** (`shadow-xl`): Flytende elementer over innholdet (toast, festet handling).

### Named Rules
**The Border-First Rule.** Separasjon kommer primært fra den hårfine borderen, ikke
fra skygge. Hviler et kort, er skyggen knapt synlig; en tung skygge i hvile er en
feil.

**The Lift-On-Intent Rule.** Skygge øker bare som svar på interaksjon (hover,
fokus, løft). Statisk dyp skygge er forbudt.

## 5. Components

### Buttons
- **Shape:** Mykt avrundet (`rounded-lg`, 10px; mindre handlinger `rounded-[7px]`).
- **Primary:** Signal Blue flate, hvit tekst, `px-4 py-2`, `text-sm font-medium` (`bg-accent text-white`). Hover mørkner til #2d3a7a / `bg-accent/90`. Disabled: `opacity-50`.
- **Secondary / Avbryt:** Hvit flate, navy tekst, `border border-[#e6e6e6]`; hover gir en hårfin `shadow-sm`.
- **Positive (bekreft/sett live):** `bg-green-600 text-white`, hover `bg-green-700`. Reservert for bekreftende, irreversible handlinger.
- **Navy chip-knapp:** `bg-navy text-white rounded-[7px] px-3.5 py-1.5 text-xs`, hover `bg-navy-mid` — kompakte sekundærhandlinger.
- **Hover / Focus:** `transition` på farge/skygge; synlig fokus er påkrevd (fokus-ring i aksent).

### Cards / Containers
- **Corner Style:** `rounded-xl` (12px).
- **Background:** Hvit (#ffffff) på lerret #f9f9f9; varme lesepaneler bruker `bg-offwhite` + `border-warmgray`.
- **Shadow Strategy:** `shadow-sm` i hvile, `hover:shadow-md` for interaktive kort (se Elevation).
- **Border:** `border border-[#e6e6e6]` (eller `border-warmgray` i varme flater). Tomtilstander bruker `border-dashed`.
- **Internal Padding:** `p-4` til `p-5` (16–20px); romsligere innholdsflater `px-8 py-7`.

### KPI Card (signaturkomponent)
Hvitt kort (`rounded-xl border bg-white p-5 shadow-sm`) med en liten uppercase
label (`text-[11px] font-semibold uppercase tracking-[0.06em] text-muted`), et stort
display-tall (`font-serif text-3xl font-normal text-navy tabular-nums`) og et lavmælt
hint (`text-xs text-muted`). Dette er den kanoniske måten å vise nøkkeltall på.

### Inputs / Fields
- **Style:** `rounded-lg`, hvit flate, `border border-[#e6e6e6]` (fremhevede felt `border-[1.5px] border-warmgray`), `px-3 py-2`, `text-qviktext`. Tekstområder er `resize-y`.
- **Focus:** Enten `focus:ring-2 focus:ring-[#3b4b95]` eller `focus:border-accent` (med `outline-none`). Hold én av de to konsekvent per skjerm.
- **Placeholder:** `placeholder:text-muted` — må holde 4.5:1; aldri lysere grå.
- **På navy:** `bg-white/[0.08] border-0 text-white placeholder:text-white/30 focus:ring-1 focus:ring-accent`.

### Navigation (sidebar)
- **Style:** Fast navy sidebar (`bg-navy`), 280px (240px på små skjermer), full høyde, scrollbar.
- **Items:** `text-[13px] font-medium rounded-lg px-3 py-2`. Default `text-white/55`; hover `bg-white/[0.06] text-white/90`; aktiv `bg-white/[0.12] text-white`.
- **Gruppemerke:** Liten uppercase label (`text-[10px] tracking-widest text-white/30`) skiller seksjoner (f.eks. «Rigel»), med en hårfin `border-white/[0.08]` delelinje.
- **Skillelinjer:** `border-white/[0.06]`–`/[0.08]` mot navy.

### Badges / Status pills
- **Style:** `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold`.
- **Positive:** `bg-green-50 text-green-700`. **Warning:** `bg-amber-50 text-amber-800`. **Danger:** `bg-red-50 text-red-800`.
- **Neutral:** `bg-navy text-white rounded-full px-2 py-0.5 text-xs`.
- Alltid med tekst — aldri bare en farget prikk.

### Data Tables
Brukt i kostnader, inntekt og status. Tabellen er en rolig lese-rute, ikke et
rutenett av bokser.
- **Wrapper:** `overflow-x-auto rounded-xl border border-[#e6e6e6] bg-white shadow-sm`. Wrapperen eier border, hjørner og hvile-skygge; selve `<table>` er rammeløs inni.
- **Table:** `w-full border-collapse text-left text-sm`. Sett `min-w-[640px]`–`min-w-[720px]` på tabeller med mange kolonner så de scroller horisontalt på smale skjermer i stedet for å klemmes.
- **Header (kanonisk):** rad med `border-b border-[#e6e6e6]`, celler i label-stil `text-[11px] font-semibold uppercase tracking-[0.06em] text-muted`, `px-4 py-3`. Tallkolonner får `tabular-nums` allerede i `<th>`.
- **Header (tonet variant):** `bg-[#f9f9f9]` med mørkere `text-qviktext`-celler — bruk når tabellen står alene uten kort-kontekst rundt seg. Velg én av de to per skjerm; ikke bland.
- **Rows:** `border-b border-[#e6e6e6]` (eller `/80` for hårfinere linje). Celler `px-4 py-3` (kompakt `px-3 py-2.5`). Første kolonne ofte `font-medium text-qviktext`; tallkolonner alltid `tabular-nums`, i `text-qviktext` for primærverdier og `text-muted` for sekundære.
- **Sum-/totalrad:** skill med `border-t border-[#e6e6e6] pt-4` og `font-semibold text-qviktext`.
- **Tall og ID-er:** Sora med `tabular-nums` — ingen egen monofont. (Status-siden bruker i dag `font-mono` på ID-kolonnen; det er et avvik, ikke mønsteret.)

### Markdown / Prose
Profil-dokumenter og annet lengre innhold (`components/profiler/ProfilMarkdown.tsx`).
Settes i et varmt lesepanel som skiller seg rolig fra de hvite arbeidskortene.
- **Container:** `overflow-x-auto rounded-lg border border-warmgray bg-offwhite px-4 py-3.5`. Det varme paret (offwhite-flate, warmgray-border) signaliserer «lesetekst», ikke «kontroll».
- **Prose-skala:** `prose prose-sm max-w-none` (Tailwind Typography). `max-w-none` fordi panelet selv styrer bredden; hold likevel leselengden mot 65–75ch i brede paneler.
- **Overskrifter:** `prose-headings:font-serif prose-headings:text-qviktext` — `font-serif`-klassen er Sora (display-bruken), ikke en faktisk serif.
- **Brødtekst og lister:** `prose-p:text-muted prose-li:text-muted`; uthevet tekst `prose-strong:text-qviktext`; lenker `prose-a:text-accent`.
- **Kode-chips:** `prose-code:text-qviktext prose-code:bg-warmgray/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded`; kodeblokker `prose-pre:bg-navy/5 prose-pre:border prose-pre:border-warmgray`. Behandles som tonede chips i Sora — ingen monofont innføres i systemet.
- **Tabeller i prose:** `prose-table:text-[13px]` for å holde tette datatabeller lesbare inni dokumentet.

## 6. Do's and Don'ts

### Do:
- **Do** bygg på `@quvik/ui`-tokens og de eksisterende mønstrene (navy sidebar, hvite `rounded-xl`-kort, Sora) før du finner opp nye.
- **Do** bruk Signal Blue (#3b4b95) som det ene aksentet for primærhandling, fokus og aktiv tilstand.
- **Do** sett nøkkeltall i display (`font-serif text-3xl text-navy tabular-nums`) slik at sifre står på linje.
- **Do** la den hårfine borderen (#e6e6e6) bære separasjonen; hold `shadow-sm` i hvile, `shadow-md` ved hover.
- **Do** kommuniser status med tekst + farge sammen, og hold brødtekst i `text-qviktext` for ≥4.5:1 kontrast.
- **Do** gi hver skjerm én tydelig primærhandling og underordne resten.
- **Do** la datatabell-wrapperen (`overflow-x-auto rounded-xl border bg-white shadow-sm`) eie border, hjørner og skygge, og bruk `min-w-[…]` + `tabular-nums` så brede tabeller scroller i stedet for å klemmes.
- **Do** sett lengre lesetekst i det varme prose-panelet (`bg-offwhite border-warmgray`) for å skille dokumenter fra de hvite arbeidskortene.

### Don't:
- **Don't** lag et generisk SaaS-dashbord: ingen gradient-kort, hero-metric-maler eller endeløse identiske ikon+overskrift-kortrutenett.
- **Don't** overlast skjermen som et adminpanel — ikke stable for mange knapper, tabeller og paneler samtidig.
- **Don't** gjør det til en forbruker-/leken app: ingen maskoter, knallfarger eller lekent språk.
- **Don't** ta i bruk AI-slop-tells: tracket uppercase-eyebrows over *hver* seksjon, glassmorphism, gradient-tekst (`background-clip: text`).
- **Don't** bruk `border-left`/`border-right` over 1px som farget stripe på kort, lister eller varsler.
- **Don't** introduser en ny skriftfamilie eller en ny aksent-hue «for variasjon» — bruk vekt, størrelse og toner av navy.
- **Don't** ta i bruk en monofont til tall, ID-er eller kode — Sora med `tabular-nums` er svaret (status-sidens `font-mono` er et avvik som ikke skal spres).
- **Don't** bruk lys grå til brødtekst, eller formidle status med farge alene.
- **Don't** legg dyp skygge på hvilende flater.
- **Don't** legg border/skygge direkte på `<table>` — wrapperen eier rammen; tabellen er rammeløs inni.
