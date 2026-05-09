# Exercício 02: Preparando o Terreno (Modo Plan)

**Objetivo:** Usar o raciocínio do Cursor para mapear dependências antes de executar uma ação técnica (Git).

---

## 📝 Passo a Passo

1.  Se você acabou de fazer o Exercício 01 (modo Ask), **troque o modo para `Plan`** agora.
2.  Mude o modo do chat para **Plan** (se disponível) ou apenas inicie seu prompt com a palavra "Plan".
    *   *Nota: O objetivo é fazer o Cursor "pensar" antes de responder. Se não houver um botão específico, basta pedir explicitamente: "Crie um plano detalhado para..."*
    *   **Neste exercício, usaremos o Chat (`Cmd + L`).**
3.  Digite o seguinte prompt:
    ```text
    "Eu já tenho uma conta no GitHub. O que preciso ter instalado ou configurado na minha máquina para clonar um repositório aqui?"
    ```
4.  Leia a resposta. O Cursor deve listar requisitos como Git instalado, permissões no terminal, e como autenticar no GitHub (normalmente via HTTPS).

---

## 🖼️ Referência visual — login no GitHub (HTTPS)

Quando você usa HTTPS, o GitHub pode abrir uma janela do navegador para autenticação.

1. **Dashboard:** entre em `github.com` e faça login.
   ![Dashboard do GitHub](../apresentacao/assets/github-dashboard.png)

2. **Dica:** se aparecer "Authentication failed", peça ao Cursor: **"Me ajude a autenticar no GitHub usando HTTPS; posso usar gh auth login?"**

---

## ❓ Dúvidas e Erros Comuns

**Erro "xcrun: error: invalid active developer path" (Mac)**
Isso é clássico em Macs novos. Significa que faltam as ferramentas básicas de desenvolvimento (Xcode Command Line Tools).
*Solução:* Peça ao Cursor: "Como instalo o Xcode Command Line Tools?". Geralmente basta rodar `xcode-select --install` no terminal.

**O Cursor sugeriu instalar "Homebrew" (brew)**
Homebrew é um "gerenciador de pacotes" para Mac (pense nele como uma App Store para ferramentas de desenvolvedor). É seguro e muito comum. Se o Cursor sugerir, pode aceitar — ele vai facilitar a instalação do Git.

**Sugeriu usar `gh` em vez de `git`?**
O `gh` (GitHub CLI) é uma ferramenta oficial do GitHub que facilita o login no GitHub. Se o plano sugerir `gh auth login`, pode seguir que é bem simples.

**O Cursor diz que não tenho acesso ao terminal**
Neste passo, ele está apenas listando informações. Se ele tentar rodar comandos e falhar, é porque não demos permissão ainda (veremos no próximo exercício).

**Não entendi por que deu erro de permissão**
Pode perguntar de volta no chat: "Me explique esse erro e como resolver usando HTTPS".
