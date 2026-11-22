# Powder Run

A 3D snowboarding game for the browser. Race computer rivals or your friends down a winding run, launch off the kickers, and spin, flip and grab in the air for points. Your final score is your trick points plus a time bonus for finishing under par.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. The courses, scenery and riders are generated in code, and the sound effects and music are made with the Web Audio API. Multiplayer uses [PeerJS](https://peerjs.com/) 1.5.4, which is loaded from jsDelivr only when you host or join a lobby.

## Play

Serve the `src/` folder from any static web server and open `powder-run/`. Opening `index.html` straight from disk also works in most browsers.

The game opens on a title screen: your rider, in your outfit for this visit, hangs in a slow-motion grab high against a blue sky, shot from below with snow spraying off the board. Press any key, or tap, to go to the main menu. Invite links skip the title screen and go straight to the menu.

## Courses

Pick a course on the main menu. Picking one builds it straight away behind the menu, and the game remembers your choice. All five are the same length with the same par time, but each has its own bends, kicker layout, obstacles and scenery.

| Course | What it's like |
| ------ | -------------- |
| **Snowy Peak** | A snowy, overcast day on the mountain. Snow falls around you, powder blows across the slope, fog hides the far end of the run, and the banks are lined with snowy pines. |
| **Neon Nights** | A snowy street run through a city at night. Towers full of lit windows climb the banks on both sides, with neon signs facing the run and a skyline of blinking rooftop lights beyond. Street lamps along the edges throw pools of warm light on the snow, and hitting one wipes you out. The banks have small pines wrapped in coloured lights, and a light snow falls under a starry sky and a low moon. |
| **Lakeside Valley** | A clear, sunny spring day. Green grass shows through the snow on the banks, which are lined with pines and leafy trees. Ahead, the run looks down over a green valley with fields, rolling hills and a lake, with a lakeside village and snow-capped mountains beyond. |
| **Frozen Gorge** | A technical, route-heavy run through a rocky gorge at dusk, under an orange sky. See below. |
| **Glacier Bowl** | A huge open bowl above the treeline on a bright, clear day, more than twice as wide as the other courses. See below. |

### Frozen Gorge

A hand-built course that keeps asking you to pick a line:

- **Tight turns** at the top that straighten out as the gorge opens up.
- **Raised ledges** along one side of the run. Ride the ramp up to stay high, then drop off the end back onto the run, or stay low beside the rock wall.
- **Bridges over ravines.** Stay on the bridge to keep your speed. Miss it and you drop into the ravine and have to ride out up the far side, slowly.
- **An ice cave** cut through a block of rock on one side, with ice slabs overhead and icicles hanging down. The open side has moguls instead.
- **A gap jump**: a kicker that launches you across a ravine, or a narrow bridge round the side.
- **The narrows**, where rock walls close in from both sides.
- **A log cabin built across the run** near the finish. Ride straight through the doorway, or go round either side.

### Glacier Bowl

A freeride course with no single right line:

- A **small drop** off the start, then a **crevasse** to jump.
- **Huge cliff drops** staggered across the bowl, on the left, right and middle, up to 18 m high. Each has a long shelf leading up to it, so you reach the edge at speed.
- **Stone pillars** standing all over the bowl to weave between.
- **Tree glades**, **moguls** and **rollers**.
- An **ice half-pipe** down the right side for part of the way. Carve up its walls to launch.

Walls and roofs are solid on both courses. Riding into a rock face or the side of a ledge pushes you along it, and you wipe out if you hit it hard. You can't fly up through the cave's ceiling or the cabin's roof.

### Terrain features

Between the built kickers, every course has natural and built terrain to ride and launch off. Each course mixes these differently:

| Feature | What it is | Where |
| ------- | ---------- | ----- |
| **Moguls** | A field of staggered bumps. At speed you skip from crest to crest. | All courses (snow piles in the city) |
| **Rollers** | Big humps across the whole run. Fast riders take off from the crests. | All courses (snow banks in the city) |
| **Cliff drops** | A shelf across one side of the run that ends in a sheer drop, with boulders at the foot. The other side stays a normal slope, so you choose the drop or the way round. | Snowy Peak, Lakeside Valley (a concrete ledge with a hazard stripe in the city) |
| **Logs and barriers** | Fallen logs, or concrete barriers in the city, lying across part of the run. Hit one at speed for a little pop. | All courses |
| **Rooftop jumps** | A building half-buried in snow: ride the snow ramp up onto the roof and jump off the far end. The walls are solid, so don't ride into the side. | A ski patrol hut on Snowy Peak, a parked bus in the city, a log cabin in the valley |
| **Rock kickers** | A snowdrift banked against rocks: a natural kicker with no built lip. The boulders either side are solid. | Snowy Peak, Lakeside Valley |
| **Tree islands** | A raised island of trees down the middle that splits the run into two lines, with moguls on one side and logs or barriers on the other. | All courses (trees in planters in the city) |

Any of them can give you air. Pop an ollie at the top of a bump for more height. If you leave the ground off a bump or drop without an ollie, a turn or tuck you were already holding doesn't spin or flip you until you let go and press it again, so you can ride through moguls or off a cliff holding a tuck. After an ollie, everything you hold counts straight away, as before.

## How to play

- Solo, you race three bots: Juniper, Blaze and Nova, from easiest to hardest. Your place is shown on the race screen, and the results screen lists the finishing order, filling in live as other riders cross the line. Riders pass through each other.
- Carve left and right to follow the run. The banks on either side are steep and lined with trees (and lamp posts in the city), and hitting one wipes you out, as does hitting a tree on an island, a boulder or the wall of a building. Safety nets part way up each bank stop you leaving the course: you can't jump over them, and riding into one turns you along it and scrubs off a little speed.
- Tuck to go faster. Brake to skid and turn more sharply.
- Each kicker has a bright lip (orange on most courses, neon pink in the city). Hold jump on the approach to charge an ollie and release it at the lip to get more air. You can also release just after leaving the lip.
- In the air, steer to spin, hold tuck to front flip or brake to back flip, and hold grab to grab the board. Hold tuck or brake as you start a grab for a Tail or Nose grab.
- Spins and flips combine, so you can throw a backflip with a 360 in it.
- Let go of the grab and line your board up with the direction you're travelling before you touch down. Landing sideways, upside down, part way through a flip or while still grabbing is a wipeout. Landing backwards counts, and you ride switch until your next trick.

## Race screen

While you race, the screen shows:

- **Top left:** your race time, in minutes, seconds and hundredths (0'17"29), with your trick points underneath.
- **Top right:** your speed in km/h.
- **Bottom right:** your place (1st, 2nd and so on) above a map of the course. The map is a line from S (start) at the bottom to G (goal) at the top, following the course's bends. You're the orange marker with your place in it, and the other riders are dots in their name-tag colours.

The sound, music, voice and restart buttons sit in the bottom left, or down the right-hand side on touch screens.

## Riders' gear

Every rider wears snowboarding gear: boots strapped into bindings, warm pants, a jacket and gloves, goggles, and a helmet or one of three beanies (pom-pom, cuffed or slouchy). Some riders also get a scarf, a hood, a longer jacket, baggy pants, knee patches or two-tone shoulders. The jacket colour comes from your slot in the race, so riders stay easy to tell apart, and everything else is picked at random from a seed. You and the bots get a new outfit each time the page loads. In a lobby each player's seed is shared, so everyone sees the same outfits.

Scarves, beanie pom-poms and tails, and jacket hems flap in the wind. They aren't physics objects: each one points along the air rushing past the rider (your speed plus the weather's wind) and gravity, and ripples faster the faster you go.

## Music

Every song is an original eight-bar loop, played live by a small sequencer in the page rather than from audio files. The guitars are synthesized too: sawtooth power chords driven through a distortion curve and a speaker-like filter.

| Where | Style |
| ----- | ----- |
| **Title screen and menus** | Fast skate punk in E minor at 182 BPM: a palm-muted verse riff, then a chorus with a polka beat and a lead guitar line. |
| **Snowy Peak** | The original synth loop at 122 BPM: pads, an arpeggio, a sawtooth bass and a steady beat. |
| **Neon Nights** | Night-drive synthwave in A minor at 104 BPM: a pulsing octave bass, a sparkling arpeggio, big snares and a lead hook. |
| **Lakeside Valley** | Sunny indie folk in G major at 132 BPM: strummed plucks, a bouncy bass, a glockenspiel tune and a shaker. |
| **Frozen Gorge** | Dark and driving in D minor at 140 BPM: a pulsing sixteenth-note bass, a cold pad, sparse bells and tom-heavy drums. |
| **Glacier Bowl** | Big, open anthem rock in D major at 150 BPM: ringing power chords, a soaring lead and crashing drums. |

On a course, the countdown and the results screen get a lighter mix, and the drums come in once the race starts. The music sounds muffled when you're slow and gets brighter the faster you go. The menu theme always plays at full brightness. Sound starts on your first click or key press, because browsers block it until then.

## Announcer

An announcer calls out your tricks as you land them ("Backflip, backside three-sixty! Clean!"), with extra hype for big scores, and reacts when you wipe out. It uses the browser's built-in text-to-speech, so there are no audio files. The voice depends on your browser and operating system: Edge and Chrome often have natural-sounding online voices, while others may sound more robotic. The announcer only calls out your own tricks, not other riders'. Turn it off with the **Voice** button or `V`.

## Multiplayer

Up to 8 riders can race in a lobby, with the host's choice of 0 to 3 bots filling spare places.

- **Host:** enter a name and choose **Host a lobby**. You get a 5-character code and a **Copy invite link** button. Opening the invite link fills in the code.
- **Join:** enter a name and the code, then choose **Join**. If a race is already on, you join the next one.
- The host picks the course in the lobby, and everyone races on it.
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
| Toggle announcer         | `V`                            | Voice button |

## High scores

Each time you finish a race, solo or in a lobby, the run is saved to your high scores. **High scores** on the main menu lists your 10 best across all courses, each with its score, time, finishing place, whether it was in a lobby, the course, and the date and time you set it. The results screen tells you when a run makes the list. Each course also keeps its own best score, which the course picker shows. **Clear history** empties the list and every course's best after a second click to confirm.

High scores are stored only in this browser, so they don't follow you to other browsers or devices, and clearing the site's data removes them.

## Saved settings

Your high scores, best scores, chosen course, the sound, music and announcer settings and your multiplayer name are kept in the browser's `localStorage` under the keys `powderrun-scores`, `powderrun-best` (Snowy Peak), `powderrun-best-city`, `powderrun-best-valley`, `powderrun-best-gorge`, `powderrun-best-bowl`, `powderrun-level`, `powderrun-muted`, `powderrun-music`, `powderrun-voice` and `powderrun-name`.
