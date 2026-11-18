# Catch It

A small arcade game for the browser. Move the paddle to catch the green blocks and dodge the red ones. The game speeds up as your score climbs.

It's a single HTML file with no dependencies, build step or asset files. The graphics are drawn on a `<canvas>` and the sound effects are made in code with the Web Audio API.

## Play

Open `src/index.html` in any modern browser.

## How to play

- **Green blocks** are worth 1 point each. Missing one costs nothing.
- **Red blocks** cost a life if you catch them, so let them fall.
- You start with **3 lives**. The game ends when you run out.
- Blocks fall faster and appear more often as your score goes up.

## Controls

| Action      | Keyboard              | Mouse / touch               |
| ----------- | --------------------- | --------------------------- |
| Move        | `←` `→` or `A` `D`    | Drag (mouse) or touch/drag  |
| Start       | `Space` or `Enter`    | Click/tap the board or Start |
| Toggle sound| `M`                   | "Sound" button              |

## Saved settings

Your best score and the sound setting are kept in the browser's `localStorage` under the keys `catchit-best` and `catchit-muted`. If storage isn't available, the game still runs but won't remember them.

## Project layout

```
src/
  index.html   # the whole game: markup, styles and script
```
