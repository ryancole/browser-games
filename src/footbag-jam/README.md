# Footbag Jam

An 8-bit footbag game for the browser. Stand on the beach at sunset and keep the bag off the sand with headers, knees, toe kicks and back kicks. Mixing up your kicks scores more, and a seagull flies past now and then for a bonus if you can hit it.

It's a single HTML file with no dependencies, build step or asset files. Everything is drawn at 192×144 pixels on a `<canvas>` and scaled up with crisp pixels, and the sound effects and chiptune are made in code with the Web Audio API.

## Play

Open `index.html` in any modern browser.

## How to play

- Each kick only meets the bag in its own spot, so time it as the bag drops past:
  - **Head**: just above your head.
  - **Knee**: in front of you at waist height.
  - **Toe**: in front of you, low down.
  - **Back**: behind you, low down. It flicks the bag over your head so it lands in front of you.
- The bag drifts sideways after each kick, more as your streak grows. Walk under it. Its shadow on the sand shows where it is.
- Letting the bag touch the sand ends the game.

## Scoring

| Move | Points |
| ---- | ------ |
| Toe or knee | 10 |
| Head or back kick | 25 |
| Same kick twice in a row | half points |
| Full Set: use all four kicks (the H K T B letters under the score light up) | +250 |
| Every 10 kicks in a row | +5 per kick in the streak |
| Hit the seagull | +100 |

## Controls

| Action       | Keyboard                         | Touch          |
| ------------ | -------------------------------- | -------------- |
| Move         | `←` `→` or `A` `D`               | ◀ ▶ buttons    |
| Head         | `↑` or `W`                       | HEAD           |
| Knee         | `Z` or `J`                       | KNEE           |
| Toe / start  | `X`, `K`, `Space` or `Enter`     | TOE, or tap the board |
| Back kick    | `C`, `L`, `↓` or `S`             | BACK           |
| Toggle sound | `M`                              | "Sound" button |

The touch buttons appear on touch screens.

## Saved settings

Your best score, most kicks and the sound setting are kept in the browser's `localStorage` under the keys `footbag-best`, `footbag-best-kicks` and `footbag-muted`.
