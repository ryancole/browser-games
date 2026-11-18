# Browser Games

A collection of small games for the browser. Each game is a self-contained folder under `src/` with no dependencies or build step.

Play them at https://ryancole.github.io/browser-games/.

## Games

| Game | Description |
| ---- | ----------- |
| [Catch It](src/catch-it/) | Catch the green blocks, dodge the red ones. |

## Running locally

Open `src/index.html` (the game list) or any game's `index.html` in a modern browser.

## Project layout

```
src/
  index.html        # landing page listing the games
  catch-it/
    index.html      # the whole game: markup, styles and script
    README.md       # how to play
```

## Adding a game

1. Create `src/<game-name>/index.html`.
2. Add a link to it in `src/index.html` and a row to the table above.

## Deployment

Every push to `master` publishes `src/` to GitHub Pages via `.github/workflows/pages.yml`.
