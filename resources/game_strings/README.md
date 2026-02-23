# game_strings

Coloque nesta pasta os arquivos de texto usados para resolver `stringkeys` do editor oficial.

## Formatos aceitos

Cada linha pode estar em qualquer um dos formatos abaixo:

- `string_key = Texto visível`
- `string_key: Texto visível`
- `string_key<TAB>Texto visível`
- `string_key Texto visível`

Linhas iniciadas com `#`, `;` ou `//` são ignoradas.

## Índice opcional

Se existir um arquivo `index.txt` (ou `strings_index.txt`/`manifest.txt`) nesta pasta,
o editor tentará carregar os arquivos listados nele (um por linha).

Exemplo de `index.txt`:

```txt
weapons.txt
objects.txt
missions.txt
```
