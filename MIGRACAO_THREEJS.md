# Migração de WebGL legado para Three.js

Este documento define o plano para remover o pipeline WebGL manual e manter um único pipeline de renderização com Three.js.

## Estado atual (híbrido)

Hoje o editor usa:

- **WebGL manual** para terreno, pontos de itens, grid e overlays de linhas.
- **Three.js** para GLB, raycast 3D e recursos de cena/câmera para objetos 3D.

No `renderFrame`, ambos são chamados no mesmo frame (terreno/itens legados + GLB via Three.js).

## Objetivo final

- Um único `THREE.WebGLRenderer`.
- Terreno, itens, overlays e GLBs no mesmo grafo de cena.
- Picking e seleção unificados por raycaster.
- Remoção completa de shaders/programas/buffers WebGL manuais.

## Estratégia em fases

### Fase 1 — Estrutura de renderer único (sem quebrar visual)

1. Criar um módulo/namespace `state.threeWorld` com sub-cenas:
   - `terrainScene`
   - `overlayScene`
   - `itemsScene`
2. Centralizar câmera em `THREE.PerspectiveCamera` como fonte única.
3. Manter um adaptador temporário para dados legados de câmera (`cam` e matrizes atuais).

**Critério de saída:** Three.js controla câmera e frame loop sem regressões visuais.

### Fase 2 — Terreno em Three.js

1. Converter cada malha de setor/Lod para `THREE.BufferGeometry`.
2. Material inicial simples:
   - `THREE.MeshBasicMaterial` para garantir paridade sem iluminação.
3. Reaproveitar texturas atuais (`colormap`, `heightmap`, `detailmap`) via `THREE.DataTexture`/`THREE.CanvasTexture`.
4. Implementar culling/Lod usando:
   - frustum culling nativo + `THREE.LOD` quando necessário.

**Critério de saída:** `drawTerrain` legado deixa de ser chamado por padrão.

### Fase 3 — Pontos/itens auxiliares e gizmos

1. Migrar `drawItems` para:
   - `THREE.Points` + `THREE.PointsMaterial` (ou `ShaderMaterial` se precisar de estilo idêntico).
2. Migrar grade/retângulos de setor para:
   - `THREE.LineSegments`.
3. Garantir os estados de seleção/multi-seleção com objetos dedicados por camada.

**Critério de saída:** `itemProg`, `lineProg`, `gridProg` legados removidos.

### Fase 4 — Picking unificado

1. Trocar seleção 2D/legada por raycast Three.js em camadas:
   - terreno
   - itens de ancoragem
   - GLB
2. Definir prioridade de hit por tipo de objeto.
3. Manter fallback legado somente durante transição controlada por flag.

**Critério de saída:** `pickItemAtCanvas` não depende mais de picking legado.

### Fase 5 — Limpeza final

1. Remover:
   - criação/uso de programas WebGL manuais
   - upload de VBO/IBO manuais
   - rotinas de reset de estado GL para convivência com Three.js
2. Consolidar métricas de performance com `renderer.info`.

**Critério de saída:** nenhum draw call WebGL direto restante no caminho principal.

## Riscos e mitigação

- **Diferença visual** (fog, gamma, tonemap):
  - Fixar pipeline de cor (`SRGBColorSpace`) e comparar por checklist visual.
- **Performance de terreno grande:**
  - Migrar por setor + LOD incremental.
- **Regressão de picking:**
  - Introduzir testes manuais guiados (seleção simples, multi-seleção, waypoint).

## Ordem recomendada de implementação (prática)

1. Terreno estático em Three.js (sem overlays).
2. Pontos de itens.
3. Grid/retângulos de setor.
4. Picking unificado.
5. Remoção do legado.

## Checklist de validação por fase

- Carrega `.trn` e `.mis` sem erro.
- Navegação de câmera idêntica.
- Seleção de item visível e confiável.
- FPS estável em mapas grandes.
- Exportação/edição MIS sem regressão funcional.
