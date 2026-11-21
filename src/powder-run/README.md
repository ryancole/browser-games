# Powder Run

A 3D snowboarding game for the browser. Race computer rivals or your friends down a winding mountain run, launch off the kickers, and spin, flip and grab in the air for points. Your final score is your trick points plus a time bonus for finishing under par.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. The course, trees and riders are generated in code, and the sound effects and music are made with the Web Audio API. Multiplayer uses [PeerJS](https://peerjs.com/) 1.5.4, which is loaded from jsDelivr only when you host or join a lobby.

## Play

Serve the `src/` folder from any static web server and open `powder-run/`. Opening `index.html` straight from disk also works in most browsers.

## How to play

- Solo, you race three bots: Juniper, Blaze and Nova, from easiest to hardest. Your place is shown in the HUD, and the results screen lists the finishing order, filling in live as other riders cross the line. Riders pass through each other.
- Carve left and right to follow the run. The banks on either side are steep and lined with trees, and hitting a tree wipes you out. Orange safety nets part way up each bank stop you leaving the course: you can't jump over them, and riding into one turns you along it and scrubs off a little speed.
- Tuck to go faster. Brake to skid and turn more sharply.
- Each kicker has an orange lip. Hold jump on the approach to charge an ollie and release it at the lip to get more air. You can also release just after leaving the lip.
- In the air, steer to spin, hold tuck to front flip or brake to back flip, and hold grab to grab the board. Hold tuck or brake as you start a grab for a Tail or Nose grab.
- Spins and flips combine, so you can throw a backflip with a 360 in it.
- Let go of the grab and line your board up with the direction you're travelling before you touch down. Landing sideways, upside down, part way through a flip or while still grabbing is a wipeout. Landing backwards counts, and you ride switch until your next trick.

## Music

The soundtrack is an original eight-bar loop at 122 BPM, played live by a small sequencer in the page rather than from an audio file. The menus get a soft pad and arpeggio. The bass comes in for the countdown and the drums for the race, and the music gets brighter the faster you go. It starts on your first click or key press, because browsers block sound until then.

## Multiplayer

Up to 8 riders can race in a lobby, with the host's choice of 0 to 3 bots filling spare places.

- **Host:** enter a name and choose **Host a lobby**. You get a 5-character code and a **Copy invite link** button. Opening the invite link fills in the code.
- **Join:** enter a name and the code, then choose **Join**. If a race is already on, you join the next one.
- The host starts each race, and only the host can restart. Anyone can leave from the lobby, the results screen, or the **Leave lobby** button during a race. If the host leaves, the lobby closes for everyone.

How it works:

- Browsers connect directly to each other over WebRTC. There's no game server: PeerJS's free public server is only used to find the host by lobby code and set up the connection.
- Each browser runs the physics for its own rider and sends its state about 15 times a second. The host runs the bots and passes every rider's state on to everyone. Other riders are drawn between updates by predicting from their last known speed.
- Each player reports their own finishing time, so lobbies are meant for friends rather than ranked play.
- Some strict networks (some workplaces and mobile carriers) block direct connections. Those players see "Couldn't connect to the lobby" after 15 seconds. Fixing that would need a relay (TURN) server.
- A browser tab in the background slows or pauses its own game, so keep the game tab in front while racing.

## Scoring

| Trick              | Points                                    |
| ------------------ | ----------------------------------------- |
| Spin               | 100 for a 180, 250 for a 360, then more for each extra half turn |
| Grab               | 100 plus up to 600 for holding it longer  |
| Air time           | 60 per second of air                      |
| Flip               | 600 for one, 1500 for a double, 2800 for a triple, 4500 for a quad |
| Combo              | ×1.5 for two of flip, spin and grab; ×2 for all three |
| Taking off switch  | ×1.25                                     |
| Time bonus         | 50 per second under the 70 second par     |

## Controls

| Action                   | Keyboard                       | Touch       |
| ------------------------ | ------------------------------ | ----------- |
| Steer / spin in the air  | `←` `→` or `A` `D`             | ◀ ▶         |
| Tuck / front flip in air | `↑` or `W`                     | TUCK        |
| Brake / back flip in air | `↓` or `S`                     | BRAKE       |
| Hold & release to jump   | `Space` or `K`                 | JUMP        |
| Grab                     | `J`, `X` or `Shift`            | GRAB        |
| Start / ride again       | `Enter`                        | Start button |
| Restart (host only in a lobby) | `R`                      | Restart button |
| Toggle sound             | `M`                            | Sound button |
| Toggle music             | `N`                            | Music button |

## Saved settings

Your best score, the sound and music settings and your multiplayer name are kept in the browser's `localStorage` under the keys `powderrun-best`, `powderrun-muted`, `powderrun-music` and `powderrun-name`.
