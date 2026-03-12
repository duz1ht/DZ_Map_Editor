# Three.js migration checklist (Phase 0 baseline)

Use this checklist at the end of each migration phase to confirm parity and reduce regressions.

## Runtime and backend control
- [ ] Editor boots normally with default backend `hybrid`.
- [ ] `renderBackend=three-only` query param is accepted on startup.
- [ ] Backend can be changed at runtime via `window.DZMapEditor.setRenderBackend('hybrid' | 'three-only')`.
- [ ] Switching backend does not break editing flow.

## Terrain parity
- [ ] Terrain loads from MIS/TRN and appears in the expected location.
- [ ] Colormap/heightmap/delta view modes still work as expected.
- [ ] Fog behavior remains visually acceptable (near/mid/far ramp).
- [ ] Culling and draw distance still feel correct while flying the camera.

## Items parity
- [ ] Anchor points are visible (when enabled) and aligned to item positions.
- [ ] Selected, waypoint, and normal items are visually distinguishable.
- [ ] Paste preview markers render and move correctly.

## Overlays parity
- [ ] Grid visibility toggle works and overlay alignment is correct.
- [ ] Water plane height and transparency look correct.
- [ ] Debug rectangles/lines (where applicable) remain aligned to terrain sectors.

## GLB / interaction parity
- [ ] GLB instances load and are positioned/rotated/scaled correctly.
- [ ] GLB selection outlines still work.
- [ ] Picking/raycast selection still works for items.

## Diagnostics
- [ ] Logs include backend activation (`[render_backend] ...`).
- [ ] Logs include periodic render diagnostics (`[render_diag] ...`).
- [ ] Debug HUD still updates and includes active render backend.
