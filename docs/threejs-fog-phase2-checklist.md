# Three.js Fog Migration — Phase 2 Checklist (Terrain + Overlays)

Objetivo da Fase 2: terrain e overlays usarem o mesmo modelo de fog 3 pontos do sistema (`near/mid/far + strengths`).

## Implementação esperada
- [x] Terrain com material patchado para rampa de fog 3 pontos (shader + uniforms compartilhados).
- [x] Água/overlays compatíveis com fog patchado para rampa de 3 pontos.
- [x] Uniforms de fog atualizados de forma centralizada por frame para layers Three.
- [x] Fallback global antigo mantido (não removido nesta fase).

## Exclusões preservadas
- [x] Grid sem fog.
- [x] Linhas auxiliares/main/sectors sem fog.
- [x] Anchor points sem fog.

## Checklist de paridade visual
- [ ] Terrain com transição suave de fog em near/mid/far.
- [ ] Água respeitando depth/oclusão sem “vazar” através do terreno.
- [ ] Grid e retângulos auxiliares continuam legíveis e sem influência indevida de fog.
- [ ] Sem regressões graves de blend/depth em overlays.

## Validação manual sugerida
1. Carregar mapa com relevo e água visível.
2. Navegar câmera em curto/médio/longo alcance e validar transição de fog no terreno.
3. Confirmar água ocluída corretamente pelo terreno e sem artefatos severos.
4. Confirmar grid/linhas/main/sectors e anchor points sem fog.
5. Conferir logs `[fog_diag]` para terrain/overlays/items/glb.
