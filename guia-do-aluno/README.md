# cursor-guia-do-aluno

Guia do aluno — **Cursor na prática** · Product Arena. HTML estático para pré-visualização local e **GitHub Pages**.

Sempre sirva os arquivos por **HTTP**. Abrir `index.html` direto com `file://` pode quebrar assets e alguns comportamentos.

## GitHub Pages (configuração inicial)

Este repositório publica com **GitHub Actions** (não “Deploy from branch”). O fluxo copia apenas os arquivos públicos (`index.html`, `ementa.html`, `styles.css`, `app.js`, `assets/`) para a raiz do site.

1. Abra **Settings** → **Pages** neste repositório.
2. Em **Build and deployment**, defina **Source** como **GitHub Actions** (não “Deploy from a branch”).
3. Faça push na branch `main` (ou rode o workflow manualmente: **Actions** → **Deploy GitHub Pages** → **Run workflow**).
4. Quando o workflow terminar, abra a URL do ambiente **github-pages** indicada no resumo da execução.

URL pública típica:

`https://product-arena.github.io/cursor-guia-do-aluno/`

Se em Pages aparecer “Get started”, escolha **GitHub Actions** como origem; o arquivo de workflow já está em `.github/workflows/deploy-github-pages.yml`.

### Permissões na organização

Se os workflows falharem por permissão, um administrador da org pode precisar habilitar **GitHub Actions** e **Pages** para este repositório.

## Início rápido (local)

Nesta pasta:

```bash
chmod +x serve-local.sh   # uma vez, se necessário
./serve-local.sh
```

**URL padrão:** [http://127.0.0.1:8844/](http://127.0.0.1:8844/)

- macOS: `./serve-local.sh --open` sobe o servidor e abre o navegador.
- Outra porta: `PORT=9000 ./serve-local.sh`

## Requisitos

- Python 3 (usa `python3 -m http.server` apenas em `127.0.0.1`).

## Solução de problemas

- **Nada carrega:** rode o script primeiro e mantenha o terminal aberto.
- **Porta em uso:** use outra porta, por exemplo `PORT=8845 ./serve-local.sh`.
- **Cursor Simple Browser com localhost:** use Safari, Chrome ou Firefox na URL acima.
