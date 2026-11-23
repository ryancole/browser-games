# Browser Games

A collection of small games for the browser. Each game is a self-contained folder under `src/` that runs as-is: open its `index.html`, no build needed. Most have no dependencies at all; Powder Run loads Three.js from a CDN.

When the site is published to GitHub Pages, each page is minified first to make it smaller to download. To build the minified copy locally, into `dist/`:

```
npm install
npm run build
```

Play them at https://rycole.com/browser-games/.

## Games

| Game | Description |
| ---- | ----------- |
| [Catch It](src/catch-it/) | Catch the green blocks, dodge the red ones. |
| [Brick Breaker](src/brick-breaker/) | Bounce the ball off your paddle and smash every brick. |
| [Sky Hop](src/sky-hop/) | Tap to flap through the gaps between the pillars. |
| [Powder Run](src/powder-run/) | Snowboard down five 3D courses, from a neon city at night to an icy gorge and a wide-open glacier bowl, spinning and grabbing off kickers, cliffs and rooftops. |
| [Footbag Jam](src/footbag-jam/) | Keep the footbag in the air on an 8-bit beach with heads, knees, toes and back kicks. |
