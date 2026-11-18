# Sky Hop

A one-button game for the browser. Flap to keep the bird in the air and steer it through the gaps between the pillars. Each pillar you pass is worth a point, and the game speeds up and the gaps shrink as your score climbs.

It's a single HTML file with no dependencies, build step or asset files. The graphics are drawn on a `<canvas>` and the sound effects are made in code with the Web Audio API.

## Play

Open `index.html` in any modern browser.

## How to play

- Each flap gives the bird an upward kick, and gravity pulls it back down.
- Touching a pillar or the ground ends the game. The top of the screen is safe.

## Controls

| Action       | Keyboard                 | Mouse / touch               |
| ------------ | ------------------------ | --------------------------- |
| Flap / start | `Space`, `↑`, `W` or `Enter` | Click/tap the board         |
| Toggle sound | `M`                      | "Sound" button              |

## Saved settings

Your best score and the sound setting are kept in the browser's `localStorage` under the keys `skyhop-best` and `skyhop-muted`.
