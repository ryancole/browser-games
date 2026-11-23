# Powder Run

A 3D snowboarding game for the browser. Race computer rivals or your friends down a winding run, launch off the kickers, and spin, flip and grab in the air for points. Your final score is your trick points plus a time bonus for finishing under par.

It's a single HTML file with no build step or asset files. The 3D graphics use [Three.js](https://threejs.org/) (r170), loaded from the jsDelivr CDN through an import map, so the page needs an internet connection the first time it loads. The courses, scenery and riders are generated in code, and the sound effects are made with the Web Audio API. The music is played from the artists' YouTube videos. Multiplayer uses [PeerJS](https://peerjs.com/) 1.5.4, which is loaded from jsDelivr only when you host or join a lobby.

## Play

Serve the `src/` folder from any static web server and open `powder-run/`. Opening `index.html` straight from disk also works in most browsers.

The game opens on a title screen: your rider, in your outfit for this visit, hangs in a slow-motion grab high against a blue sky, shot from below with snow spraying off the board. Press any key, or tap, to go to the main menu. Invite links skip the title screen and go straight to the join screen with the code filled in.

The menus are full-screen, with big chrome lettering over the course. Behind them you and the bots ride the picked course on autopilot, and the camera cuts between shots every few seconds like a TV broadcast: following you from in front, chasing from behind, a fly-by that sweeps round you, a trackside camera that pans as you race past, one sitting in the snow that you fly over or ride past, and a high aerial. In the lobby, where nobody's moving yet, it holds a view of the start gate. Courses are picked from a row of lift passes, each showing the course's line and colours, and the highlighted course is built behind the menu as you browse. The main menu offers **Single player**, **Multiplayer** and **High scores**. **Single player** asks which course to race, then starts a race against the bots. **Multiplayer** asks for your name and whether you're hosting or joining: hosting asks which course to use and then creates the lobby, and joining asks for the lobby code. Use the arrow keys (or WASD) to move, **Enter** to pick and **Esc** to go back, or click and tap. In the lobby the host can also use **← →** to change the course and **↑ ↓** to change the number of bots.

## Courses

Pick a course when you start a single-player race or host a lobby. Picking one builds it straight away behind the menu, and the game remembers your choice. There are nine, all the same length (4.2 km), and every course has its own bends, kicker layout, obstacles and scenery. No stretch of a course repeats another: the hand-built courses are built stretch by stretch, and on the rest the kickers and features are laid out at random from the course's seed, so they're the same every time you ride it but never repeat down the hill.

| Course | What it's like |
| ------ | -------------- |
| **Snowy Peak** | A snowy, overcast day on the mountain. Snow falls around you, powder blows across the slope, fog hides the far end of the run, and the banks are lined with snowy pines. |
| **Neon Nights** | A snowy street run through a city at night. Towers full of lit windows climb the banks on both sides, with neon signs facing the run and a skyline of blinking rooftop lights beyond. Street lamps along the edges throw pools of warm light on the snow, and hitting one wipes you out. The banks have small pines wrapped in coloured lights, and a light snow falls under a starry sky and a low moon. |
| **Lakeside Valley** | A clear, sunny spring day. Green grass shows through the snow on the banks, which are lined with pines and leafy trees. Ahead, the run looks down over a green valley with fields, rolling hills and a lake, with a lakeside village and snow-capped mountains beyond. |
| **Frozen Gorge** | A technical, route-heavy run through a rocky gorge at dusk, under an orange sky. See below. |
| **Glacier Bowl** | A huge open bowl above the treeline on a bright, clear day, more than twice as wide as the other courses. See below. |
| **Lava Rush** | No snow at all: you surf a river of molten lava down a black basalt valley, with an erupting volcano ahead and a giant ledge near the end. See below. |
| **Everest** | Straight down the side of the world's highest mountain: one long, relentlessly steep face high above the clouds. See below. |
| **Sea of Tranquility** | Snowboarding the Moon, at a sixth of the gravity. See below. |
| **Summit Highway** | A snowed-in highway over a mountain pass, with tunnels, medians, slip roads and road works. See below. |

### Frozen Gorge

A hand-built course that keeps asking you to pick a line, in three stretches that are each built differently.

- **Tight turns** at the very top that straighten out as the gorge opens up.
- **Raised ledges** along one side of the run. Ride the ramp up to stay high, then drop off the end back onto the run, or stay low beside the rock wall.
- **Bridges over ravines.** Stay on the bridge to keep your speed. Miss it and you drop into the ravine and have to ride out up the far side, slowly.
- **Ice caves** cut through blocks of rock, with ice slabs overhead and icicles hanging down: one on each side of the run in the first two stretches, and one right down the middle in the last, with open runs either side.
- **Gap jumps**: kickers that launch you across a ravine, or a bridge round the side (or through the middle).
- **The narrows**, where rock walls close in from both sides, and further down a chicane where a wall juts in from one side and then the other.
- **Three forks**, one per stretch, each a ridge splitting the gorge in two with a jump line of two kickers on one side. The other side is a long ice tunnel in the first and last, and moguls and logs in the middle one.
- **A log cabin built across the run** at the end of the first stretch. Ride straight through the doorway, or go round either side. The course ends with a high ledge dropping you back onto the run for the finish.

### Glacier Bowl

A freeride course with no single right line, in three stretches that are each built differently.

- **Crevasses** to jump: one near the top, a field of them below a drop in the middle stretch (the first one off a kicker), and more lower down.
- **Huge cliff drops** staggered across the bowl, on the left, right and middle, up to 18 m high, and cliff bands right across it. Each has a long shelf leading up to it, so you reach the edge at speed.
- **Stone pillars** standing all over the bowl to weave between.
- **Tree glades**, a **tree island** down the middle, **moguls** and **rollers**.
- **Ice half-pipes**: one down the side in the first stretch, twin pipes either side of a mogul run in the middle one, and one straight down the middle in the last. Carve up the walls to launch.
- **Three forks**, one per stretch, each a long rib of boulders splitting the bowl in two. In the first and last, one side drops off an 18 m cliff and the other has a kicker and moguls; in the middle one, it's a cliff on one side and a half-pipe on the other.

Walls and roofs are solid on both hand-built courses. Riding into a rock face or the side of a ledge pushes you along it, and you wipe out if you hit it hard. You can't fly up through the cave's ceiling or the cabin's roof. The ice slabs over the ice cave and the ice tunnel are solid from above too: land on top and you can ride along them, but they're slippery. Your edges hardly bite on ice, so when you turn you keep sliding the way you were going, and braking barely slows you.

### Lava Rush

The odd one out. The run is a river of glowing lava with plates of dark, cooling crust floating on it, and the glow pulses down the hill as it flows. It rides just like snow. The banks are black basalt and ash with the odd glowing crack, lined with burnt trees and boulders. Straight ahead, a volcano erupts the whole way down: lava streams run down its sides, its crater glows and flickers, it throws out glowing lava bombs, and a column of smoke billows out of the top. Embers float up around you instead of falling snow, dark smoke drifts across the flow, and your board throws up orange lava spray. The course has rollers, moguls, cliff drops into the lava, rock kickers, and islands of burnt trees with charred logs still glowing along their tops. It's three times as long as the short courses.

Near the end, the whole valley drops away: a sheer rock face 350 m high runs right across the run. Ride off it and you fall for about five seconds before the lava flow picks up again far below, plenty of time for a long trick if you can land it. Partway down you drop right past a huge red dragon hovering off to one side of the run, beating its wings, swinging its tail and turning its head to watch you go by. A landing that big doesn't turn into a sudden burst of speed: however far you fall, landing adds at most a little speed along the slope.

### Everest

Snowboarding the side of Everest. The whole course is one long, steep face, about twice as steep as the other courses, so you reach well over 100 km/h without even tucking. The banks barely rise either side, so it's an open mountain face rather than a valley, and the camera stays closer to level so you can see the face drop away ahead. The run is wind-packed snow with patches of blue ice. The banks are snow and grey rock, crossed by a band of yellowish rock like Everest's own Yellow Band. Up here the sky is a deep blue, a sea of cloud lies far below with the rest of the Himalaya poking up through it, two neighbouring giants tower on either side, and strings of prayer flags are slung high across the run. Mountain goats stand about in ones, twos and threes on the slopes just past the nets, and partway down a rope team of five climbers is working its way up the face beside the run, roped together, ice axes out. Three goats have wandered right onto the run: they're solid, so ride into one and you wipe out. At the bottom you finish in base camp, with dome tents in every colour, crates and fuel barrels either side of the last stretch and round the flat runout, under more prayer flags. The tents, crates and barrels inside the nets are solid too. Spindrift blows across the slope and a little snow falls. The course has rollers, cliff drops off rock bands, rock kickers and moguls, and no trees. Its par time is 120 seconds.

### Sea of Tranquility

Snowboarding the Moon. Gravity is a sixth of the usual, so you float: a plain ollie keeps you in the air for three seconds or more, kickers and crater rims throw you sky-high, and there's time for big spins and flips. There's no air either, so nothing slows you down but the ground: you keep building speed down the hill, and the dust your board throws up flies off and arcs slowly back down. The run is grey regolith pocked with craters. Small ones mark the ground everywhere, and bigger ones sit on the run itself, a raised rim round a bowl, so ride over a rim at speed and it launches you. There's no snow, no wind and no weather, just a black sky full of stars with Earth hanging in it, slowly turning. A gold lunar lander stands beside the start with the American flag planted next to it, Apollo-style on a pole with a crossbar along the top, and an Apollo-style lunar rover with gold fenders, two seats and an umbrella-like antenna dish is parked just down the hill. Two astronauts wave you off. Its par time is 190 seconds. Keep an eye out partway down: one little green alien stands beside the run in front of its flying saucer, waving at you as you go past.

### Summit Highway

Snowboarding a divided highway over a mountain pass after the snow plows gave up. Three lanes run each way, snowed over, with slushy wheel ruts down each lane and the lane lines showing through in places. The road is smoother than a ski run, the banks are plowed snow and rock cuttings lined with pines, and snow poles mark the shoulders. Signs line the road (speed limits, chain-up areas, falling rock), cars sit buried in snow on the shoulders, and the pass's peaks rise all around. A light snow falls. It's built by hand in three different stretches, with plowed snow piles out in the lanes to jump. Along the way:

- **Twin-bore tunnels**: three of them, one per stretch, each with a bore for each carriageway, lit inside, under a mountain with a concrete portal and the tunnel's name over each end. You can't jump through the roof.
- **Medians**: a concrete barrier down the middle (clear it with a jump or hit it) or a snow bank with reflector posts that you can ride over.
- **Slip roads** that split off from the highway behind a guardrail, climb onto an embankment or dip into a cutting, then come back down and join the highway again. Take one or stay on.
- **Road works**: lanes closed off by a line of cones, tapering in and out, with a truck parked inside flashing its arrow board. The trucks are solid, but the **cones** aren't: ride into one and it goes flying, tumbling and bouncing down the road, without slowing you down. Near the top of the last stretch, cones that have been knocked all over the road.
- **Overpasses** carrying side roads over the highway, on piers at the shoulders and in the middle. Their decks are solid: jump high enough and you can land on one and ride across it, but fly into the side of it and you wipe out. There are also **sign gantries** over the lanes pointing to the exits.
- **A snow shed**: a concrete roof over the road against the cliffs, open on the valley side between pillars.

### Terrain features

Between the built kickers, every course has natural and built terrain to ride and launch off. Each course mixes these differently:

| Feature | What it is | Where |
| ------- | ---------- | ----- |
| **Moguls** | A field of staggered bumps. At speed you skip from crest to crest. | All courses (snow piles in the city) |
| **Rollers** | Big humps across the whole run. Fast riders take off from the crests. | All courses (snow banks in the city) |
| **Cliff drops** | A shelf across one side of the run that ends in a sheer drop, with boulders at the foot. The other side stays a normal slope, so you choose the drop or the way round. | Snowy Peak, Lakeside Valley, Lava Rush, Everest (a concrete ledge with a hazard stripe in the city) |
| **Logs and barriers** | Fallen logs, or concrete barriers in the city, lying across part of the run. Hit one at speed for a little pop. | All courses |
| **Rooftop jumps** | A building half-buried in snow: ride the snow ramp up onto the roof and jump off the far end. The walls are solid, so don't ride into the side. | A ski patrol hut on Snowy Peak, a parked bus in the city, a log cabin in the valley |
| **Rock kickers** | A snowdrift banked against rocks: a natural kicker with no built lip. The boulders either side are solid. | Snowy Peak, Lakeside Valley, Lava Rush, Everest |
| **Tree islands** | A raised island of trees down the middle that splits the run into two lines, with moguls on one side and logs or barriers on the other. | All courses (trees in planters in the city) |
| **Rails and boxes** | A metal rail or a box with a yellow top, set off to one side of the run with a snow ramp up to it. Ride up the ramp or drop on from the air to grind it (see [Tricks](#tricks)). | All courses |
| **Craters** | A raised rim round a bowl. Ride over the rim at speed and it throws you into the air; drop into the bowl and you ride out the far side. | Sea of Tranquility |
| **Forks** | A long ridge rises out of the middle of the run and splits it in two, with the banks pushed out so each route is close to full width. The routes ride differently, then join up again before the finish. The ridge is steep, and the trees or boulders along its top are solid. | Lakeside Valley (three forested ridges of different sizes: a jump line on one side, moguls and logs on the other, swapping sides each time), Frozen Gorge and Glacier Bowl (see above) |

Any of them can give you air. Pop an ollie at the top of a bump for more height. If you leave the ground off a bump or drop without an ollie, a turn or tuck you were already holding doesn't spin or flip you until you let go and press it again, so you can ride through moguls or off a cliff holding a tuck. After an ollie, a turn you were holding counts straight away. A tuck or brake you were holding eases in instead: nothing for the first quarter of a second, then building up to a full-speed flip, so riding along tucked and popping a small ollie doesn't tip you onto your nose. Let go and press it again for a flip at full speed. Landing a little nose-down is also more forgiving than landing tail-down, as long as you weren't partway through a flip.

## How to play

- Solo, you race three bots: Juniper, Blaze and Nova, from easiest to hardest. Your place is shown on the race screen, and the results screen lists the finishing order, filling in live as other riders cross the line. Riders pass through each other.
- Carve left and right to follow the run. The banks on either side are steep and lined with trees (and lamp posts in the city), and hitting one wipes you out, as does hitting a tree on an island, a boulder or the wall of a building. Safety nets part way up each bank stop you leaving the course: you can't jump over them, and riding into one turns you along it and scrubs off a little speed.
- Tuck to go faster. Brake to skid and turn more sharply.
- Each kicker has a bright lip (orange on most courses, neon pink in the city). Hold jump on the approach to charge an ollie and release it at the lip to get more air. You can also release just after leaving the lip.
- A quick tap of jump is a lunge instead: a push forward that gets you moving again if you stall on a rise. It gives you most when you are slow and only a nudge at speed. Only holding jump makes you leave the ground, so a stray tap never throws you into the air.
- In the air, steer to spin, hold tuck to front flip or brake to back flip, and hold grab to grab the board. Which grab you do depends on the direction you hold as you start it, and on holding jump as well (see [Tricks](#tricks)).
- Spins and flips combine into off-axis inverts with their own names: a backflip with a backside spin is a Cork, with a frontside spin a Rodeo, and so on.
- On the ground, hold grab with ↑ or ↓ to press the nose or tail into the snow, and steer while pressing to butter the board round. Hold grab while carving to drag a hand in the snow.
- Your trick builds up in a list as you complete each part in the air. It starts in the middle under your rider, and as soon as a second part comes in it slides off to the right, just far enough to clear your rider. It keeps one line for each kind of trick, counting up in place: the spin line goes 180, 360, 540..., the flip line goes Backflip, Double Backflip..., and a grab line appears once you've held a grab long enough. The line that just changed is highlighted. Above the list is what the trick is worth if you land it now, so you can see what you stand to lose. Land it and the list turns green with your points; wipe out and it turns red and is struck out.
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
| **Lava Rush** | The Prodigy – Firestarter | [youtube.com/watch?v=wmin5WkOuPw](https://www.youtube.com/watch?v=wmin5WkOuPw) |
| **Everest** | CAKE – The Distance | [youtube.com/watch?v=F_HoMkkRHv8](https://www.youtube.com/watch?v=F_HoMkkRHv8) |
| **Sea of Tranquility** | Kid Cudi – Man On The Moon (The Anthem) | [youtube.com/watch?v=CCPbYJvtywI](https://www.youtube.com/watch?v=CCPbYJvtywI) |
| **Summit Highway** | Fleetwood Mac – Dreams | [youtube.com/watch?v=Y3ywicffOj4](https://www.youtube.com/watch?v=Y3ywicffOj4) |

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

## Tricks

Every trick from the usual list of snowboard trick names that fits a ride down a hill is in, including the rail and box tricks, except a handful that need something the game doesn't have: one-footed tricks, handplants, a stationary tail block and lip slides on a half-pipe's edge. Harder tricks are worth more.

**Grabs.** Hold a direction as you press grab to pick the grab, and hold jump too for the two-handed and harder ones. Hold some for a second and they turn into their tweaked version. The multiplier is the grab's difficulty, which scales its points.

| Hold | Grab | Held 1 s | With jump | With jump, held 1 s |
| ---- | ---- | -------- | --------- | ------------------- |
| nothing | Indy Grab ×1 | Tindy ×0.85 | Truck Driver ×1.4 | |
| ↑ | Tail Grab ×1 | Tailfish ×0.85 | Cannonball ×1.3 | |
| ↓ | Nose Grab ×1 | | Rocket Air ×1.4 | Cross Rocket ×1.7 |
| ← | Method ×1.3 | | Double Stiffy ×1.6 | |
| → | Mute Grab ×1 | Slob ×1.4 | Japan ×1.5 | |
| ↑ ← | Stalefish ×1.3 | | Canadian Bacon ×1.6 | |
| ↑ → | Roastbeef ×1.5 | | Nuclear ×1.6 | |
| ↓ ← | Crail ×1.3 | | Seatbelt ×1.4 | |
| ↓ → | Melon ×1.1 | | Chicken Salad ×1.6 | |

Tindy and Tailfish are the sloppy versions of an Indy and a Tail grab, so they're worth a little less.

**Spins** are named by direction and degrees, Frontside or Backside 180 up to 2160. Taken off switch, a frontside spin is a Cab (a Half Cab for a 180) and a backside one a Switch Backside. Off a half-pipe wall, spinning back toward the wall you left is an Alley-oop (×1.2).

**Flips** are Frontflips and Backflips, doubled, tripled and beyond. A single frontflip popped off the nose (hold ↑ as you pop) is a Tamedog, and a single backflip popped off the tail (hold ↓) is a Wildcat (both ×1.2).

**Inverts.** A flip and a spin together make an off-axis invert, named for which way each goes and scored higher for being harder:

| Flip | Spin | Trick | Multiplier |
| ---- | ---- | ----- | ---------- |
| Back | Frontside | Rodeo (a Rodeo 540 with one flip is a McTwist, ×1.4) | ×1.15 |
| Back | Backside | Cork (Double Cork 1080, Quad Cork 1980...) | ×1.2 |
| Front | Backside | Misty | ×1.25 |
| Front | Frontside | Underflip (a single one with a 360 is a Miller Flip, ×1.3) | ×1.35 |

**Other air tricks.** Twist the board crosswise and back again before you land for a Shifty. A plain ollie earns a little, and a Nollie (popped off the nose) a bit more; switch, it's a Switch Ollie. A long jump with no tricks is Big Air.

**Ground tricks**, all holding grab:

| Trick | How | Points |
| ----- | --- | ------ |
| Nose Press / Tail Press | Grab with ↑ / ↓, held at least 0.6 s | 150 plus up to 300 for holding it |
| Tripod | A tail press held for 2 s | 500 |
| Nose Roll / Tail Roll | Butter half way round on the nose / tail (steer while pressing); you ride away switch | 450 |
| Butter 360, 540... | Butter a whole turn or more | 300 plus 250 per half turn |
| Hand Drag | Grab while carving, at least 0.5 s | 100 plus up to 300 |

**Rail and box tricks.** Every course has a few rails and boxes, set off to one side of the run with a little snow ramp leading up to each. Ride up the ramp lined up with it, or drop onto it from the air, and you lock on and grind: you slide down it, picking up speed, and can't steer off. Ride off the end or pop off with jump. Land on one sideways and you're straight into a boardslide or lipslide. What you hold while you grind picks the trick, and the one you hold longest is what you're scored for:

| Hold | Trick | Multiplier |
| ---- | ----- | ---------- |
| nothing | 50-50 | ×1 |
| ↑ | Nose Press | ×1.3 |
| ↓ | Tail Press | ×1.25 |
| ← | Boardslide | ×1.4 |
| → | Lipslide | ×1.5 |
| ↓ and ← or → | Bluntslide | ×1.8 |

A grind scores 150 plus 250 a second (up to four seconds), times the trick's multiplier, and rails are worth ×1.2 more than boxes. Just tap a rail with the nose (↑) or tail (↓) and pop straight off for a Nose Bonk (250) or Tail Bonk (200).

## Scoring

| Trick              | Points                                    |
| ------------------ | ----------------------------------------- |
| Spin               | 100 for a 180, 250 for a 360, then more for each extra half turn, up to 5,300 for a 2160 |
| Invert             | The spin and flip points times the invert's multiplier (see [Tricks](#tricks)) |
| Grab               | 100 plus up to 600 for holding it longer, times the grab's difficulty |
| Shifty             | 150                                       |
| Ollie / Nollie     | 50 / 75, only when it's the whole trick   |
| Air time           | 60 per second of air                      |
| Flip               | 600 for one, 1500 for a double, 2800 for a triple, 4500 for a quad, then 6500 and 9000 |
| Combo              | ×1.5 for two of flip, spin, grab and shifty; ×2 for three or more |
| Ground tricks      | See [Tricks](#tricks)                     |
| Rail and box tricks | See [Tricks](#tricks)                    |
| Taking off switch  | ×1.25                                     |
| Time bonus         | 50 per second under par: 210 seconds, 190 on Sea of Tranquility, or 120 on Everest |

## Controls

| Action                   | Keyboard                       | Touch       |
| ------------------------ | ------------------------------ | ----------- |
| Steer / spin in the air  | `←` `→` or `A` `D`             | ◀ ▶         |
| Tuck / front flip in air | `↑` or `W`                     | TUCK        |
| Brake / back flip in air | `↓` or `S`                     | BRAKE       |
| Tap to lunge forward     | `Space` or `K`                 | JUMP        |
| Hold & release to jump   | `Space` or `K`                 | JUMP        |
| Grab (hold a direction to pick which; add jump for two-handed) | `J`, `X` or `Shift` | GRAB |
| Nose / tail press, butter (on the ground) | Grab + `↑` / `↓`, then steer | GRAB + TUCK / BRAKE |
| Hand drag (on the ground) | Grab while carving        | GRAB + ◀ ▶ |
| On a rail or box: press / boardslide / lipslide / bluntslide | `↑` `↓` / `←` / `→` / `↓` with `←` or `→` | TUCK BRAKE / ◀ / ▶ / BRAKE with ◀ or ▶ |
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
