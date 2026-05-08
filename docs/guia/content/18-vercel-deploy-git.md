# 🚀 Deploy no Vercel via Git

Exercício prático para publicar seu projeto na internet usando Git e Vercel.

---

## 🎯 Objetivo

Aprender o fluxo completo: código local → Git → GitHub → Vercel → link público. O mesmo fluxo usado em projetos profissionais.

---

## 📚 O que é o Vercel?

### Em uma frase
> Vercel é uma plataforma que pega seu código do GitHub e coloca na internet automaticamente.

### Por que usar?

| Alternativa | Problema | Vercel |
|-------------|----------|--------|
| Só localhost | ❌ Ninguém mais consegue ver | ✅ Link público |
| FTP manual | ❌ Upload toda vez que muda | ✅ Deploy automático |
| AWS/GCP | ❌ Configuração complexa | ✅ Zero config |
| Heroku | ❌ Sleep após inatividade | ✅ Sempre online |

### O modelo mental

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Seu código │ ──► │   GitHub    │ ──► │   Vercel    │
│   (local)   │     │   (repo)    │     │  (deploy)   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                  │                    │
    git push         webhook            seu-app.vercel.app
                    automático
```

**Fluxo:**
1. Você faz `git push` para o GitHub
2. GitHub avisa o Vercel automaticamente
3. Vercel faz o deploy em segundos
4. Seu app está no ar

---

## 🛠️ Pré-requisitos

- [ ] Conta no GitHub (já tem do início do curso)
- [ ] Conta no Vercel (criar agora se não tiver)
- [ ] Projeto funcionando em localhost

---

## 📋 Exercício — Publicar seu projeto

### Parte 1 — Preparar o repositório (5 min)

Se ainda não tem um repo para seu projeto:

```markdown
# Criar repositório no GitHub

1. Vá em github.com/new
2. Nome: meu-projeto-arena (ou o nome do seu projeto)
3. Público (para facilitar o deploy)
4. Não inicialize com README (já temos arquivos)
5. Create repository

Copie os comandos que o GitHub mostra para 
"push an existing repository from the command line"
```

**Ou peça ao Cursor:**

```markdown
Me ajude a criar um repositório no GitHub para meu projeto
e subir o código atual. O nome do projeto é [SEU_PROJETO].
```

### Parte 2 — Conectar ao Vercel (10 min)

#### Opção A — Interface web (recomendado para iniciantes)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em **Add New... → Project**
3. Selecione o repositório do seu projeto
4. Vercel detecta automaticamente as configurações
5. Clique em **Deploy**

#### Opção B — Via Cursor com MCP (avançado)

```markdown
# Deploy no Vercel

Preciso fazer deploy do meu projeto no Vercel.
O repositório está em: github.com/[SEU_USUARIO]/[SEU_REPO]

Use o MCP do Vercel para:
1. Importar o projeto do GitHub
2. Configurar o deploy
3. Me passar o link quando estiver pronto
```

### Parte 3 — Verificar e compartilhar (5 min)

Após o deploy:

1. ✅ Acesse o link que a Vercel gerou (ex: `meu-projeto.vercel.app`)
2. ✅ Teste se está funcionando
3. ✅ Compartilhe o link no grupo do curso!

---

## 🔄 O ciclo de desenvolvimento

Depois do primeiro deploy, o fluxo fica automático:

```
1. Faça alterações no código
          │
          ▼
2. git add . && git commit -m "mensagem"
          │
          ▼
3. git push
          │
          ▼
4. Vercel detecta e faz deploy automático
          │
          ▼
5. Em ~30 segundos, mudanças estão no ar ✨
```

---

## 💡 Dicas importantes

### Variáveis de ambiente

Se seu projeto usa `.env`:

1. Vá em **Settings → Environment Variables** no Vercel
2. Adicione cada variável (nome e valor)
3. Faça um redeploy

**Nunca** comite `.env` no GitHub (segurança).

### Domínio customizado (opcional)

O Vercel permite conectar seu próprio domínio:

1. **Settings → Domains**
2. Adicione `seusite.com.br`
3. Configure o DNS conforme instruções

### Preview de PRs

Cada Pull Request ganha um link de preview automático. Útil para testar antes de mandar para produção.

---

## 🎓 O que você pratica neste exercício

| Habilidade | Como pratica |
|------------|--------------|
| 🔀 Git | Push, commits, sincronização |
| 🚀 Deploy | Publicar aplicação real |
| 🔗 CI/CD | Deploy automático via webhook |
| 🌐 Infraestrutura | Entender o fluxo código → produção |

---

## ❓ Troubleshooting

### "Build failed"

1. Verifique os logs no Vercel (Build Logs)
2. Geralmente é dependência faltando ou erro de código
3. Corrija localmente, commit e push novamente

### "Funciona local mas não no Vercel"

1. Verifique se todas as dependências estão no `package.json`
2. Verifique variáveis de ambiente
3. Verifique se não tem paths absolutos no código

### "Deploy demora muito"

1. Normal para primeiro deploy (baixa dependências)
2. Deploys seguintes são mais rápidos (cache)

---

## 🔗 Referências

- [Vercel Docs](https://vercel.com/docs) — Documentação oficial
- [Vercel MCP](https://github.com/vercel/vercel-mcp) — Integração com Cursor
- [Projeto Stephania Neves](../../projects/stephanianeves/) — Exemplo de projeto com deploy Vercel
