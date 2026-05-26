# Cursor na prática — site (GitHub Pages)

Site estático do curso **Cursor na prática** (Product Arena). Esta pasta **`docs/`** contém apenas os **slides** no repositório [Product-Arena/cursor-para-pms](https://github.com/Product-Arena/cursor-para-pms).

O **guia do aluno** fica em `guia-do-aluno/` na raiz do repo (fonte única). O workflow `.github/workflows/deploy-github-pages.yml` monta `docs/` + `guia-do-aluno/` no deploy — sem duplicar o guia dentro de `docs/`.

Configure **Settings → Pages → Source: GitHub Actions**.

## URLs (após o deploy)

- **Slides (HTML):** [product-arena.github.io/cursor-para-pms/](https://product-arena.github.io/cursor-para-pms/)
- **Guia com roteiros embutidos:** [product-arena.github.io/cursor-para-pms/guia/](https://product-arena.github.io/cursor-para-pms/guia/)
- **Guia do aluno (edição 3):** [product-arena.github.io/cursor-para-pms/guia-do-aluno/](https://product-arena.github.io/cursor-para-pms/guia-do-aluno/)

## Assets dos slides

Imagens do deck ficam em `assets/` ao lado de `index.html`. Se após o clone faltar imagem, copie também `docs/assets/` do export completo.
