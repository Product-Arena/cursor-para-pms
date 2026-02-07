# Exercício 15: Subir o projeto no GitHub pessoal

**Objetivo:** Publicar o projeto Arena Voting System no seu repositório pessoal do GitHub, versionando o código e os documentos.

---

## Pré-requisitos

- Conta no GitHub com repositório pessoal criado (ou criar um novo, vazio).
- Projeto Arena Voting System criado (via `/start-a-business` e passos seguintes).
- Git configurado (chave SSH ou `gh auth` — você já fez no exercício 02/03).

---

## 📝 Passo a Passo

### 1. Criar um repositório novo no GitHub

1. Acesse [github.com](https://github.com) e faça login.
2. Clique em **New repository** (ou **+** → **New repository**).
3. Nome sugerido: `arena-voting-system` (ou outro nome de sua escolha).
4. Deixe o repositório **público**.
5. **Não** marque "Add a README file" — crie o repo vazio.
6. Clique em **Create repository**.

### 2. Inicializar Git no projeto (se ainda não estiver)

No Cursor, abra o terminal (`Ctrl + ~` ou `Cmd + ~`) e navegue até a pasta do projeto:

```bash
cd projects/arena-voting-system
```

Se a pasta ainda não for um repositório Git:

```bash
git init
git add .
git commit -m "chore: initial commit — Arena Voting System"
```

### 3. Conectar ao repositório remoto e fazer push

Substitua `SEU-USUARIO` pelo seu usuário do GitHub:

```bash
git remote add origin https://github.com/SEU-USUARIO/arena-voting-system.git
git branch -M main
git push -u origin main
```

Se usar SSH:

```bash
git remote add origin git@github.com:SEU-USUARIO/arena-voting-system.git
git branch -M main
git push -u origin main
```

### 4. Conferir

Abra o link do repositório no navegador e confira se documentos e código foram enviados.

---

## ❓ Dúvidas e Erros Comuns

**Erro "remote origin already exists"**  
O projeto já tem um remote. Verifique com `git remote -v`. Para trocar: `git remote set-url origin https://github.com/SEU-USUARIO/arena-voting-system.git`

**Erro "Permission denied" ou "Authentication failed"**  
Verifique se a chave SSH está configurada ou faça login com `gh auth login` (GitHub CLI).

**Onde fica a pasta do meu projeto?**  
O `/start-a-business` cria em `projects/arena-voting-system/` dentro do workspace. Se você abriu o repo do curso como workspace, a pasta está em `projects/arena-voting-system`.

**Quero usar o Cursor para rodar os comandos**  
Use o modo Agent ou Plan e peça: "Preciso fazer push do projeto em `projects/arena-voting-system` para meu GitHub em https://github.com/SEU-USUARIO/arena-voting-system. Monte os passos."
