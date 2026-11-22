# Powder Run

A 3D snowboarding game for the browser. Race computer rivals or your friends down a winding run, launch off the kickers, and spin, flip and grab in the air for points. Your final score is your trick points plus a time bonus for finishing under par.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. The courses, scenery and riders are generated in code, and the sound effects are made with the Web Audio API. The music is played from the artists' YouTube videos. Multiplayer uses [PeerJS](https://peerjs.com/) 1.5.4, which is loaded from jsDelivr only when you host or join a lobby.

## Play

Serve the `src/` folder from any static web server and open `powder-run/`. Opening `index.html` straight from disk also works in most browsers.

The game opens on a title screen: your rider, in your outfit for this visit, hangs in a slow-motion grab high against a blue sky, shot from below with snow spraying off the board. Press any key, or tap, to go to the main menu. Invite links skip the title screen and go straight to the join screen with the code filled in.

The menus are full-screen, with big chrome lettering over the course. Behind them you and the bots ride the picked course on autopilot, and the camera watches you from in front. Courses are picked from a row of lift passes, each showing the course's line and colours, and the highlighted course is built behind the menu as you browse. The main menu offers **Single player**, **Multiplayer** and **High scores**. **Single player** asks which course to race, then starts a race against the bots. **Multiplayer** asks for your name and whether you're hosting or joining: hosting asks which course to use and then creates the lobby, and joining asks for the lobby code. Use the arrow keys (or WASD) to move, **Enter** to pick and **Esc** to go back, or click and tap. In the lobby the host can also use **← →** to change the course and **↑ ↓** to change the number of bots.

## Courses

Pick a course when you start a single-player race or host a lobby. Picking one builds it straight away behind the menu, and the game remembers your choice. All five are the same length with the same par time, but each has its own bends, kicker layout, obstacles and scenery.

| Course | What it's like |
| ------ | -------------- |
| **Snowy Peak** | A snowy, overcast day on the mountain. Snow falls around you, powder blows across the slope, fog hides the far end of the run, and the banks are lined with snowy pines. |
| **Neon Nights** | A snowy street run through a city at night. Towers full of lit windows climb the banks on both sides, with neon signs facing the run and a skyline of blinking rooftop lights beyond. Street lamps along the edges throw pools of warm light on the snow, and hitting one wipes you out. The banks have small pines wrapped in coloured lights, and a light snow falls under a starry sky and a low moon. |
| **Lakeside Valley** | A clear, sunny spring day. Green grass shows through the snow on the banks, which are lined with pines and leafy trees. Ahead, the run looks down over a green valley with fields, rolling hills and a lake, with a lakeside village and snow-capped mountains beyond. |
| **Frozen Gorge** | A technical, route-heavy run through a rocky gorge at dusk, under an orange sky. See below. |
| **Glacier Bowl** | A huge open bowl above the treeline on a bright, clear day, more than twice as wide as the other courses. See below. |

### Frozen Gorge

A hand-built course that keeps asking you to pick a line. It is three times as long as the other courses: the gorge below plays through three times, with the middle stretch mirrored left to right.

- **Tight turns** at the very top that straighten out as the gorge opens up.
- **Raised ledges** along one side of the run. Ride the ramp up to stay high, then drop off the end back onto the run, or stay low beside the rock wall.
- **Bridges over ravines.** Stay on the bridge to keep your speed. Miss it and you drop into the ravine and have to ride out up the far side, slowly.
- **An ice cave** cut through a block of rock on one side, with ice slabs overhead and icicles hanging down. The open side has moguls instead.
- **A gap jump**: a kicker that launches you across a ravine, or a narrow bridge round the side.
- **The narrows**, where rock walls close in from both sides.
- **A fork** after the narrows: a rock spine with pines on top splits the gorge in two. One side is a jump line with two kickers; the other is a long ice tunnel. They join up again just before the cabin.
- **A log cabin built across the run** at the end of each stretch. Ride straight through the doorway, or go round either side.

### Glacier Bowl

A freeride course with no single right line. It is three times as long as the other courses: the bowl below plays through three times, with the middle stretch mirrored left to right.

- A **small drop** at the start of each stretch, then a **crevasse** to jump.
- **Huge cliff drops** staggered across the bowl, on the left, right and middle, up to 18 m high. Each has a long shelf leading up to it, so you reach the edge at speed.
- **Stone pillars** standing all over the bowl to weave between.
- **Tree glades**, **moguls** and **rollers**.
- An **ice half-pipe** down one side for part of the way. Carve up its walls to launch.
- **A fork** near the end of each stretch: a long rib of boulders splits the bowl in two. One side drops off the 18 m cliff; the other has a kicker and moguls.

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
| **Forks** | A long ridge rises out of the middle of the run and splits it in two, with the banks pushed out so each route is close to full width. The routes ride differently, then join up again before the finish. The ridge is steep, and the trees or boulders along its top are solid. | Lakeside Valley (a forested ridge: a jump line on one side, moguls and logs on the other), Frozen Gorge and Glacier Bowl (see above) |

Any of them can give you air. Pop an ollie at the top of a bump for more height. If you leave the ground off a bump or drop without an ollie, a turn or tuck you were already holding doesn't spin or flip you until you let go and press it again, so you can ride through moguls or off a cliff holding a tuck. After an ollie, everything you hold counts straight away, as before.

## How to play

- Solo, you race three bots: Juniper, Blaze and Nova, from easiest to hardest. Your place is shown on the race screen, and the results screen lists the finishing order, filling in live as other riders cross the line. Riders pass through each other.
- Carve left and right to follow the run. The banks on either side are steep and lined with trees (and lamp posts in the city), and hitting one wipes you out, as does hitting a tree on an island, a boulder or the wall of a building. Safety nets part way up each bank stop you leaving the course: you can't jump over them, and riding into one turns you along it and scrubs off a little speed.
- Tuck to go faster. Brake to skid and turn more sharply.
- Each kicker has a bright lip (orange on most courses, neon pink in the city). Hold jump on the approach to charge an ollie and release it at the lip to get more air. You can also release just after leaving the lip.
- In the air, steer to spin, hold tuck to front flip or brake to back flip, and hold grab to grab the board. Hold tuck or brake as you start a grab for a Tail or Nose grab.
- Spins and flips combine, so you can throw a backflip with a 360 in it.
- Each part of a trick is added to a list below your rider the moment you complete it in the air: every half turn of spin (180, 360, 540...), every full flip, and a grab once you've held it long enough. Above the list is what the trick is worth if you land it now, so you can see what you stand to lose. Land it and the list turns green with your points; wipe out and it turns red and is struck out.
- Let go of the grab and line your board up with the direction you're travelling before you touch down. Landing sideways, upside down, part way through a flip or while still grabbing is a wipeout. Landing backwards counts, and you ride switch until your next trick.
- When you wipe out you go limp: your body becomes a ragdoll that tumbles and slides down the hill with the speed you had, bouncing off trees, posts, walls and the nets and knocking the snow off whatever it hits. Your board comes off and slides away on its own. After a couple of seconds you get up, back on your board, wherever your body came to rest.

## Race screen

While you race, the screen shows:

- **Top left:** your race time, in minutes, seconds and hundredths (0'17"29), with your trick points underneath.
- **Top right:** your speed in km/h.
- **Below your rider, in the air:** the trick you're throwing, part by part, under the points it's worth if you land it now.
- **Bottom right:** your place (1st, 2nd and so on) above a map of the course. The map is a line from S (start) at the bottom to G (goal) at the top, following the course's bends. You're the orange marker with your place in it, and the other riders are dots in their name-tag colours.

The sound, music, voice and restart buttons sit in the bottom left, or down the right-hand side on touch screens.

## Riders' gear

Every rider wears snowboarding gear: boots strapped into bindings, warm pants, a jacket and gloves, goggles, and a helmet or one of three beanies (pom-pom, cuffed or slouchy). Some riders also get a scarf, a hood, a longer jacket, baggy pants, knee patches or two-tone shoulders, and some ride with old-school foam headphones over their hat, wired to a cassette player clipped to the front of their jacket. The jacket colour comes from your slot in the race, so riders stay easy to tell apart, and everything else is picked at random from a seed. You and the bots get a new outfit each time the page loads. In a lobby each player's seed is shared, so everyone sees the same outfits.

Scarves, beanie pom-poms and tails, and jacket hems flap in the wind. They aren't physics objects: each one points along the air rushing past the rider (your speed plus the weather's wind) and gravity, and ripples faster the faster you go.

## Snow spray

Boards throw sheets of snow. Carving, skidding or braking scrapes a curtain of snow off the edge that's digging in and throws it out to the side you're sliding towards, with a few loose grains flying off its top. The harder you slide or brake, the bigger and higher the sheet. It arcs out, spreads, falls and fades, shaded blue-grey low down so it stands out against the snow. Landing a jump blows a ring-shaped sheet out from under the board. Riding fast also kicks a fine trail of powder off the tail, and a wipeout sprays snow wherever you slide. Every rider throws snow, bots and other players included.

## Board tracks

Every rider leaves tracks in the snow wherever their board is on the ground. A clean carve leaves a narrow line, and skidding, braking or wiping out leaves a wide smear, because the track is as wide as the board looks from the direction you're moving. Tracks break off when you leave the ground and start again where you land. They last the whole race and clear when a new race starts or you change course. Up to 12,000 pieces of track are kept across all riders, and the oldest are reused first.

## Music

The music is real songs, played from the artists' official YouTube videos so the plays and ads count for them. There's no music built into the game any more.

| Where | Song | Video |
| ----- | ---- | ----- |
| **Title screen and menus** | blink-182 – All The Small Things | [youtube.com/watch?v=9Ht5RZpzPqw](https://www.youtube.com/watch?v=9Ht5RZpzPqw) |
| **Snowy Peak** | Avicii – Levels | [youtube.com/watch?v=_ovdm2yX4MA](https://www.youtube.com/watch?v=_ovdm2yX4MA) |
| **Neon Nights** | Post Malone – Saint-Tropez | [youtube.com/watch?v=MRyLC2M1K2w](https://www.youtube.com/watch?v=MRyLC2M1K2w) |
| **Lakeside Valley** | Dave Matthews Band – Crash Into Me | [youtube.com/watch?v=k7in-9E3ImQ](https://www.youtube.com/watch?v=k7in-9E3ImQ) |
| **Frozen Gorge** | Pendulum – Watercolour | [youtube.com/watch?v=tEPB7uzKuh4](https://www.youtube.com/watch?v=tEPB7uzKuh4) |
| **Glacier Bowl** | Foo Fighters – Everlong | [youtube.com/watch?v=eBG7P-K-r1Y](https://www.youtube.com/watch?v=eBG7P-K-r1Y) |

If a place has no song, it's silent apart from the sound effects.

The video plays by itself in a small player in the bottom left (below the time on touch screens), under a credit with the song, the artist and a **Watch on YouTube** link to the video. A course's song plays during the countdown, the race and the results, and loops while you stay on the course. The menu song plays on the title screen and menus. The **Music** and **Sound** buttons pause and hide it. YouTube's embed rules ask for a visible player at least 200 × 200 pixels, so it isn't hidden or shrunk further. It needs YouTube to be reachable, and the IFrame API is only loaded the first time a song is needed.

Browsers block sound until your first click or key press. When there's a menu song, the first press on the title screen starts it and the next one goes to the menu; with no menu song, the first press goes straight to the menu.

To add a song to a course, give its entry in `LEVELS` a `track: { artist, title, video }`, where `video` is the YouTube video ID. For the title screen and menus, set `MENU_TRACK` to the same shape. Check the video allows embedding first: `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>` returns 200 if it does.

## Announcer

An announcer calls out your tricks as you complete them in the air ("one-eighty", "three-sixty", "Backflip", "Indy Grab"), reacts to your landing, with extra hype for big scores, and reacts when you wipe out. A jump with no tricks called in the air, like a Big Air, is called out in full when you land. It uses the browser's built-in text-to-speech, so there are no audio files. The voice depends on your browser and operating system: Edge and Chrome often have natural-sounding online voices, while others may sound more robotic. The announcer only calls out your own tricks, not other riders'. Turn it off with the **Voice** button or `V`.

## Multiplayer

Up to 8 riders can race in a lobby, with the host's choice of 0 to 3 bots filling spare places.

- **Host:** choose **Multiplayer**, enter a name, choose **Host a lobby** and pick a course, then **Create lobby**. You get a 5-character code and a **Copy invite link** button. Opening the invite link fills in the code.
- **Join:** choose **Multiplayer**, enter a name, choose **Join a lobby**, type the code and choose **Join**. If a race is already on, you join the next one.
- The host's course is the one everyone races on. The host can still change it in the lobby between races.
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
