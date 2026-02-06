# Guia de Comandos Git Essenciais para PMs

Comandos mais importantes para o dia a dia de Product Managers, focando em agilidade e entendimento do fluxo de trabalho.

---

## 1. Entendendo o status atual

| Comando     | Função                                               | Quando usar                          |
|------------|------------------------------------------------------|--------------------------------------|
| `git status` | Mostra arquivos modificados, adicionados ou não rastreados | Sempre antes de commitar             |
| `git log`  | Lista o histórico de commits                         | Para revisar o que foi feito         |
| `git diff` | Mostra diferenças linha a linha entre versões        | Para ver o que mudou em um arquivo   |

---

## 2. Preparando e registrando alterações

| Comando              | Função                          | Uso                          |
|----------------------|---------------------------------|------------------------------|
| `git add <arquivo>`  | Adiciona arquivos à staging     | Primeiro passo antes de commitar |
| `git commit -m "msg"`| Salva as mudanças com mensagem  | Cria um checkpoint do trabalho |
| `git commit`         | Abre editor para mensagem longa | Mensagens detalhadas         |

---

## 3. Sincronizando com o remoto

| Comando      | Função                                        | Objetivo                |
|--------------|------------------------------------------------|-------------------------|
| `git pull`   | Baixa e mescla alterações do remoto            | Manter código atualizado |
| `git push`   | Envia commits locais para o remoto             | Compartilhar mudanças   |
| `git fetch`  | Baixa alterações sem mesclar                   | Inspecionar antes       |

---

## 4. Branches

| Comando                       | Função                              | Uso                         |
|------------------------------|-------------------------------------|-----------------------------|
| `git branch`                 | Lista branches                      | Ver ambientes de trabalho   |
| `git checkout -b <branch>`   | Cria e muda para novo branch        | Nova feature ou correção    |
| `git checkout <branch>`      | Muda para branch existente          | Navegar entre branches      |
| `git merge <branch>`         | Mescla outro branch no atual        | Unir trabalho concluído     |

---

## 5. Casos de uso práticos

### Começar o dia

```bash
git pull origin main
git status
```

### Fazer e compartilhar uma mudança

```bash
git status
git add arquivo.md
git commit -m "Atualiza documentação do projeto"
git push origin main
```

### Criar branch para documentação

```bash
git checkout -b docs/atualizacao-readme
# ... faça alterações ...
git add .
git commit -m "Atualiza README com novas instruções"
git push origin docs/atualizacao-readme
```

### Consultas rápidas

- **Histórico conciso:** `git log --oneline -10`
- **Desfazer mudança não commitada:** `git checkout -- arquivo.md`
- **Diferenças totais:** `git diff`
- **Diferenças por arquivo:** `git diff arquivo.md`
