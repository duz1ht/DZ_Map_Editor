This project ports the map editor from Delta Force: Black Hawk Down, released in 2003 by NovaLogic, into a simple HTML file using Three.js. We can keep it as a web app or later migrate it to something simple like Electron, or another platform that makes it easy to reuse and build on the existing work.

Todo:
- [x] 3D terrain rendering
- [x] Items conversion from .3DI to .GLB
- [x] General Information
- [X] Waypoints
- [X] Layer Names
- [X] Groups
- [ ] 90% - Item Attributes
- [ ] 90% - Area Triggers
- [ ] 60% - Item context menu
- [ ] Canvas context menu
- [ ] Briefing
- [ ] Events
- [ ] Global Replace
- [ ] Weapon Loadouts


I couldn’t get it implemented:
- Fog: I tried implementing “Fullscreen Depth Fog” using 3 points (near, mid, far, which I think is how BHD uses it). But since I don’t technically know how fog works in games, I couldn’t guide the AI in a way that avoided issues like fog color mismatch when applying it to each thing on the canvas, object silhouettes showing through the fog, etc. Every time I fixed one problem, another one showed up. So I decided to remove it and wait for help from other collaborators in the future. I left the Debug Fog button in the canvas, it can be reused in the future to refine the near, mid, and far values, trying to more accurately simulate each fog preset in the .env files used by the game.


## Feedback
If you’ve got any feedback, hit me up on Discord, username duz1ht.

## Contributors so far
biggy, Demonic, dataspiller, Scott (NovaHQ), AngelExalted
