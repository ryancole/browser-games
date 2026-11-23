# One Kick

A retro first-person rescue game in the style of mid-90s 2.5D shooters, with no guns and no enemies. You play a superhero with exactly one power: any door comes down in a single kick. People are trapped behind locked doors all over a building. Find them, kick your way in, and get to each of them to rescue them.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. Textures, sprites and sound effects are all generated in code.

## Play

Serve the `src/` folder from any static web server and open `one-kick/`. Opening `index.html` straight from disk also works in most browsers. It needs a keyboard and mouse.

| Input | Action |
| ----- | ------ |
| Mouse | Look |
| W A S D, arrow keys | Move and turn |
| Shift | Walk |
| Space | Jump |
| Click, F or E | Kick |
| Esc | Pause |

Trapped people wave and call for help every few seconds; their calls sound muffled until you can see them, so you can follow them through the walls. Walk up to someone to rescue them. Kicked doors fly off their hinges into the room, but always stop short of anyone standing in the way. The level ends when everyone is safe, and shows your time.

## How it works

- **Rendering.** The scene is drawn at 270 pixels tall and scaled up with hard pixel edges. Textures use nearest-neighbour filtering, and each sector has a light level, with distance fog on top.
- **Level.** The level is made of Build-style sectors: 2D polygons, each with its own floor and ceiling height. Where two sectors touch, the difference in height becomes a step, a lintel or a raised edge; a sector inside another is an island, such as a desk, a pillar or a sunken pit. Walls, floors and ceilings are built from the sectors when the page loads.
- **People.** The people you rescue are sprites that always face the camera, drawn from 8 angles (5 drawn, 3 mirrored), in five different looks.
- **Collision.** The player is a circle that slides along wall lines. A line between two sectors only blocks if the step up is too tall or the gap is too low. Closed doors block movement and sight.
