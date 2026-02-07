# Exercício 14: Protótipo funcional em localhost

**Objetivo:** Construir um protótipo funcional que rode na sua máquina (localhost), usando Cursor, e entender as opções para compartilhar ou evoluir o projeto.

---

## Contexto

Durante o Bloco 3 (Arena Voting System) você vai criar um produto do planejamento ao código. O resultado inicial será um app que **roda em localhost** — ou seja, só você (e quem estiver na sua rede/computador) consegue acessar.

- **Localhost** = servidor rodando na sua máquina (`python3 -m http.server`, `npm run dev`, etc.). Simples, sem deploy.
- **Link público** = qualquer pessoa acessa pela internet. Exige servidor, domínio, configurações de rede/deploy (Vercel, Railway, etc.).

---

## Passo a Passo

1. **Siga o fluxo do Bloco 3:** PRD → design → histórias → código (code-review, editor visual).
2. **Rode o protótipo em localhost** na sua máquina (ex.: `npm run dev` ou servidor HTTP simples — o material do curso traz exemplos).
3. **Teste no navegador** em `http://localhost:3000` (ou a porta indicada).
4. **Opcional:** Se quiser um link que qualquer um acesse, consulte o material do curso sobre alternativas (deploy, Lovable + GitHub + Cursor — veja o slide de disclaimer).

---

## Alternativa: Lovable → GitHub → Cursor

Se você preferir começar com uma ferramenta que já gera um link público (ex.: Lovable), pode:

1. Criar o protótipo no Lovable e obter o link compartilhável.
2. Fazer sync do projeto com o GitHub.
3. Clonar no Cursor e continuar evoluindo no Cursor.

**Vantagens de trazer para o Cursor:** não ficar limitado aos créditos do Lovable, usar modelos mais potentes, usar Skills e Rules, e ter mais pessoas trabalhando no mesmo repo (Git).

---

## Dúvidas e Erros Comuns

**"Não consigo acessar de outro celular"**  
Em localhost, o app só roda no seu computador. Para acesso remoto ou público, é preciso deploy (ver slide de disclaimer).

**"Qual comando uso para subir o servidor?"**  
Depende do projeto: React/Vite costuma ser `npm run dev`; HTML estático pode ser `python3 -m http.server 8080`. O Cursor pode sugerir o comando certo se você pedir no chat.
