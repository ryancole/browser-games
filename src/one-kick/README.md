# One Kick

A retro first-person shooter in the style of mid-90s 2.5D shooters. You play a superhero with exactly one power: any door comes down in a single kick. A gang has taken over a building; kick and shoot your way from the back alley up to the roof.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. Textures, sprites and sound effects are all generated in code.

## Play

Serve the `src/` folder from any static web server and open `one-kick/`. Opening `index.html` straight from disk also works in most browsers. It needs a keyboard and mouse.

| Input | Action |
| ----- | ------ |
| Mouse | Look |
| W A S D, arrow keys | Move and turn |
| Shift | Walk |
| Space | Jump |
| F, E or right click | Kick |
| Left click | Shoot |
| 1, 2 or mouse wheel | Switch weapon |
| Esc | Pause |

Kicked doors fly off their hinges and flatten anyone standing behind them. Kicking a gang member knocks them back, and hurts them more if they hit a wall. Reach the roof to finish the level.

## How it works

- **Rendering.** The scene is drawn at 270 pixels tall and scaled up with hard pixel edges. Textures use nearest-neighbour filtering, and each sector has a light level, with distance fog on top.
- **Level.** The level is made of Build-style sectors: 2D polygons, each with its own floor and ceiling height. Where two sectors touch, the difference in height becomes a step, a lintel or a raised edge; a sector inside another is an island, such as a desk, a pillar or a sunken pit. Walls, floors and ceilings are built from the sectors when the page loads.
- **Characters.** Enemies and pickups are sprites that always face the camera. Enemies are drawn from 8 angles (5 drawn, 3 mirrored), so you see which way they're facing.
- **Collision.** The player and enemies are circles that slide along wall lines. A line between two sectors only blocks if the step up is too tall or the gap is too low. Shooting is hitscan, and it can pass over steps and under lintels.
