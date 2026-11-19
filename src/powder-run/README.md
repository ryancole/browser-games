# Powder Run

A 3D snowboarding game for the browser. Race down a winding mountain run, launch off the kickers, and spin and grab in the air for points. Your final score is your trick points plus a time bonus for finishing under par.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. The course, trees and rider are generated in code, and the sound effects are made with the Web Audio API.

## Play

Serve the `src/` folder from any static web server and open `powder-run/`. Opening `index.html` straight from disk also works in most browsers.

## How to play

- Carve left and right to follow the run. The banks on either side are steep and lined with trees, and hitting a tree wipes you out.
- Tuck to go faster. Brake to skid and turn more sharply.
- Each kicker has an orange lip. Hold jump on the approach to charge an ollie and release it at the lip to get more air. You can also release just after leaving the lip.
- In the air, steer to spin and hold grab to grab the board. Hold tuck or brake as you start a grab for a Tail or Nose grab.
- Let go of the grab and line your board up with the direction you're travelling before you touch down. Landing sideways or while still grabbing is a wipeout. Landing backwards counts, and you ride switch until your next trick.

## Scoring

| Trick              | Points                                    |
| ------------------ | ----------------------------------------- |
| Spin               | 100 for a 180, 250 for a 360, then more for each extra half turn |
| Grab               | 100 plus up to 600 for holding it longer  |
| Air time           | 60 per second of air                      |
| Spin + grab combo  | ×1.5                                      |
| Taking off switch  | ×1.25                                     |
| Time bonus         | 50 per second under the 70 second par     |

## Controls

| Action                   | Keyboard                       | Touch       |
| ------------------------ | ------------------------------ | ----------- |
| Steer / spin in the air  | `←` `→` or `A` `D`             | ◀ ▶         |
| Tuck                     | `↓` or `S`                     | TUCK        |
| Brake / skid             | `↑` or `W`                     | –           |
| Hold & release to jump   | `Space` or `K`                 | JUMP        |
| Grab                     | `J`, `X` or `Shift`            | GRAB        |
| Start / ride again       | `Enter`                        | Start button |
| Restart                  | `R`                            | Restart button |
| Toggle sound             | `M`                            | Sound button |

## Saved settings

Your best score and the sound setting are kept in the browser's `localStorage` under the keys `powderrun-best` and `powderrun-muted`.
