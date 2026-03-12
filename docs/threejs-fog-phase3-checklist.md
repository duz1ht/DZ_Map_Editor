# Three.js Fog Migration — Phase 3 Checklist (Remoção do caminho legado 2 pontos)

Objetivo da Fase 3: eliminar o caminho legado de fog near/far e consolidar o fluxo em um único helper de fog 3 pontos (`near/mid/far + strengths`).

## Implementação concluída
- [x] Removido o caminho ativo de fog 2 pontos baseado em `scene.fog` para layers Three.
- [x] Sincronização de fog centralizada via `syncThreePointFogUniforms` + `sanitizeThreePointFogRender`.
- [x] Terrain, overlays, items e GLB consumindo o mesmo objeto de fog sanitizado.
- [x] Estado/diagnóstico adicionado para fallback único por escopo (`fogFallbackByScope`).
- [x] Logs de fallback melhorados (`[fog_fallback]`) para parâmetros inválidos/sanitizados.

## Exclusões preservadas
- [x] Grid sem fog.
- [x] Linhas auxiliares/main/sectors sem fog.
- [x] Anchor points sem fog.

## Validação manual objetiva
1. Carregar um mapa com água e relevo.
2. Alternar presets de fog e navegar câmera em curto/médio/longo alcance.
3. Verificar logs `[fog_diag]` para terrain/overlays/items/glb.
4. Verificar ausência de regressão visual crítica no editor (seleção, gizmos e overlays).
5. Forçar valores inválidos no painel de debug (quando possível) e confirmar logs `[fog_fallback]` sem spam contínuo.
