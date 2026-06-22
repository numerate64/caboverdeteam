# Cabo Verde World Cup 2026 Kiosk

A fullscreen, zero-build kiosk showcasing all 26 players named in Cabo Verde's official 2026 FIFA World Cup squad.

## Features

- Automatically rotates to the next player every 3 seconds
- Configurable 1–15 second timing, saved in the browser
- URL configuration with `?interval=5`
- Full roster browser with every player's photo and position
- Fullscreen mode and keyboard controls
- Responsive layouts for kiosk displays, tablets, and phones
- No framework or build process required

## Controls

- `←` / `→`: previous or next player
- `Space`: pause or resume
- `F`: fullscreen
- `R`: roster
- `S`: timing settings

## Run locally

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Sources

- Squad announcement: [Federação Cabo-verdiana de Futebol](https://fcf.cv/convocados-para-o-mundial-2026/)
- Squad details and player portraits: [FotMob — Cabo Verde squad](https://www.fotmob.com/teams/5888/squad/cape-verde)
- Tournament confirmation: [FIFA — Cabo Verde squad](https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/cabo-verde/squad)

Player portraits remain the property of their respective rights holders and are used here for identification in this non-commercial squad display.
