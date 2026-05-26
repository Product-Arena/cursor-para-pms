# cursor-guia-do-aluno

Guia do aluno — **Cursor na prática** · Product Arena. HTML estático para pré-visualização local e **GitHub Pages**.

Sempre sirva os arquivos por **HTTP**. Abrir `index.html` direto com `file://` pode quebrar assets e alguns comportamentos.

## GitHub Pages (configuração inicial)

O guia fica nesta pasta (`guia-do-aluno/` na raiz de [cursor-para-pms](https://github.com/Product-Arena/cursor-para-pms)). Os **slides** do instrutor (`docs/`) não entram no Git — ficam só na máquina local. O workflow `.github/workflows/deploy-github-pages.yml` publica apenas esta pasta em `/guia-do-aluno/` no GitHub Pages.

1. Abra **Settings** → **Pages** no repositório **cursor-para-pms**.
2. Em **Build and deployment**, defina **Source** como **GitHub Actions**.
3. Faça push na branch `main` (ou rode **Actions** → **Deploy GitHub Pages** → **Run workflow**).
4. Abra a URL do ambiente **github-pages** no resumo da execução.

URL pública do guia:

`https://product-arena.github.io/cursor-para-pms/guia-do-aluno/`

## Vercel

O repositório inclui `vercel.json` na raiz: o build copia esta pasta para `dist/` e publica o guia na **raiz do domínio** do projeto Vercel (ideal para compartilhar um link curto).

1. No [dashboard Vercel](https://vercel.com), conecte o repositório **Product-Arena/cursor-para-pms** (branch `main`).
2. **Root Directory:** deixe em branco (raiz do repo) — o `vercel.json` define o build.
3. Após o deploy, use a URL de produção (ex.: `https://cursor-para-….vercel.app/`).

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
