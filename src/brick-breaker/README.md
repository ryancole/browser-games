# Brick Breaker

Bounce the ball off your paddle to smash every brick on the board. Clear a board to move on to the next level, where the layout changes, the bricks get tougher and the ball gets faster.

It's a single HTML file with no dependencies, build step or asset files. The graphics are drawn on a `<canvas>` and the sound effects are made in code with the Web Audio API.

## Play

Open `index.html` in any modern browser.

## How to play

- Where the ball hits the paddle sets its angle. Hits near the edges send it off at a steep angle.
- Brick colour shows how many hits are left: green 1, yellow 2, orange 3, red 4.
- You start with **3 lives** and lose one when every ball has fallen past the paddle.
- Clearing a level is worth a bonus of 100 × the level number.

### Power-ups

Some bricks drop a power-up when they break. Catch it with the paddle.

| Pill | Effect |
| ---- | ------ |
| **W** (blue)   | Wider paddle for 12 seconds |
| **M** (purple) | Each ball splits into three |
| **S** (teal)   | Slower ball for 8 seconds |
| **+** (pink)   | Extra life |

## Controls

| Action       | Keyboard              | Mouse / touch                  |
| ------------ | --------------------- | ------------------------------ |
| Move         | `←` `→` or `A` `D`    | Move the mouse or drag a finger |
| Launch/start | `Space` or `Enter`    | Click/tap the board or Start   |
| Pause        | `P` or `Esc`          | —                              |
| Toggle sound | `M`                   | "Sound" button                 |

## Saved settings

Your best score and the sound setting are kept in the browser's `localStorage` under the keys `brickbreaker-best` and `brickbreaker-muted`.
