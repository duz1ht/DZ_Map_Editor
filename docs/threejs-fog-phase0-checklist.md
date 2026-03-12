# Three.js Fog Migration — Phase 0 Checklist

Objetivo da Fase 0: mapear e centralizar o estado de fog (3 pontos) sem alterar o resultado visual final.

## Escopo mapeado
- Terrain: fog aplicado via cena Three.js do terreno.
- Overlays: fog aplicado via cena Three.js dos overlays (água mantém comportamento atual).
- GLB: fog com uniforms de rampa (near/mid/far + strengths) e fallback de cena para compatibilidade atual.
- Items (anchor points): permanecem sem fog por decisão de UX/paridade.

## Fonte única de parâmetros
- Função central de parâmetros:
  - `getRenderFogSettings()`
  - `normalizeFogRamp(fogDistance, fogType)`
- Estrutura canônica de rampa:
  - `near`, `mid`, `far`
  - `nearStrength`, `midStrength`

## Diagnóstico (logs)
- Logs periódicos por layer:
  - `[fog_diag] layer=terrain ...`
  - `[fog_diag] layer=overlays ...`
  - `[fog_diag] layer=glb ...`
  - `[fog_diag] layer=items ... anchors_no_fog=yes`
- Campos mínimos:
  - `active`
  - `near`, `mid`, `far`
  - `near_strength`, `mid_strength`

## Checklist de paridade visual
- [ ] Terrain mantém aparência de fog equivalente ao baseline anterior.
- [ ] Overlays continuam com comportamento visual esperado (água/grid/linhas sem regressão visível grave).
- [ ] GLBs mantêm transição de fog consistente (perto/médio/longe).
- [ ] Anchor points continuam legíveis e sem aplicação indevida de fog.
- [ ] Sem queda perceptível de FPS em cenário comum de edição.

## Validação manual sugerida
1. Carregar mapa conhecido e alternar câmera entre curto/médio/longo alcance.
2. Verificar HUD/logs para confirmar emissão de `[fog_diag]` por layer.
3. Confirmar que mudanças de preset (`fog_type`) atualizam distâncias e strengths nos logs.
4. Confirmar que pontos âncora continuam sem fog.
