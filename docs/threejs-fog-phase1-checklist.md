# Three.js Fog Migration — Phase 1 Checklist (GLB/Materials)

Objetivo da Fase 1: padronizar materiais GLB para o modelo de fog de 3 pontos (`near/mid/far + strengths`) com atualização dinâmica por frame.

## Implementação esperada
- [x] Uniforms de fog compartilhados para GLB: `uFogEnabled`, `uFogNearDist`, `uFogMidDist`, `uFogFarDist`, `uFogNearStrength`, `uFogMidStrength`, `uFogColor`.
- [x] Patch de shader em materiais GLB para aplicar a rampa de 3 pontos no fragment shader.
- [x] Atualização centralizada por frame via helper único (`syncGlbFogState`).
- [x] Fallback global legado mantido (temporário) para compatibilidade com materiais não patchados.

## Critérios de paridade visual
- [ ] GLB próximo: sem névoa indevida.
- [ ] GLB médio: transição suave usando `nearStrength -> midStrength`.
- [ ] GLB distante: aproximação gradual até 100% no `far`.
- [ ] Cor de fog em GLB segue o `fog_rgb`/ambiente ativo.
- [ ] Sem flicker em troca de preset de fog.

## Regressão funcional
- [ ] Seleção de item GLB permanece funcional.
- [ ] Multi-seleção permanece funcional.
- [ ] Highlight/outline de seleção permanece correto.
- [ ] Anchor points e linhas auxiliares permanecem sem fog (comportamento atual).

## Validação manual sugerida
1. Carregar mapa com GLBs em diferentes distâncias da câmera.
2. Alterar preset (`fog_type`) e observar transição de GLBs perto/médio/longe.
3. Validar seleção e destaque visual com fog ativo e inativo.
4. Confirmar logs `[fog_diag] layer=glb` e estabilidade de FPS.
