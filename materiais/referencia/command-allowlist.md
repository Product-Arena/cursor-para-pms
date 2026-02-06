# Command Allowlist: Referência de Segurança

Este documento lista comandos comuns que podem ser adicionados à sua **Allowlist** no Cursor (Settings > General > Command Allowlist). Permitir estes comandos facilita o uso do modo Agent sem comprometer a segurança, pois são operações padrão de desenvolvimento.

---

## 📂 Navegação e Arquivos (Essenciais)

Estes comandos permitem que a IA entenda onde está e manipule arquivos básicos.

| Comando | O que faz | Por que é seguro? |
| :--- | :--- | :--- |
| `ls` | Lista arquivos na pasta. | Apenas leitura. Essencial para o Cursor "ver" o projeto. |
| `cd` | Muda de pasta. | Navegação básica. |
| `pwd` | Mostra a pasta atual. | Apenas leitura. |
| `mkdir` | Cria novas pastas. | Criação de estrutura de projeto. |
| `cp` | Copia arquivos. | Operação local de duplicação. |
| `mv` | Move ou renomeia arquivos. | Organização de arquivos. |
| `rmdir` | Remove pastas vazias. | Limpeza básica (menos perigoso que `rm -rf`). |
| `cat` | Lê o conteúdo de um arquivo. | Apenas leitura. |
| `echo` | Imprime texto na tela. | Inofensivo, usado para testes ou criar arquivos simples. |
| `touch` | Cria arquivo vazio. | Inofensivo. |
| `find` | Busca arquivos. | Apenas leitura/busca. |
| `tree` | Mostra árvore de diretórios. | Apenas leitura. |
| `open` | Abre arquivo/pasta (Mac). | Ação de interface do usuário. |

---

## 🐙 Git (Controle de Versão)

Permitir o Git é fundamental para que o Cursor possa baixar códigos, criar branches e salvar seu trabalho.

| Comando | O que faz | Por que é seguro? |
| :--- | :--- | :--- |
| `git status` | Mostra arquivos alterados. | Apenas leitura. |
| `git log` | Mostra histórico de commits. | Apenas leitura. |
| `git diff` | Mostra diferenças no código. | Apenas leitura. |
| `git fetch` | Baixa atualizações (sem aplicar). | Apenas baixa dados. |
| `git pull` | Baixa e aplica atualizações. | Operação padrão de sincronização. |
| `git clone` | Baixa um repositório novo. | Cria uma cópia local de um projeto. |
| `git add` | Prepara arquivos para salvar. | Etapa do fluxo de versionamento. |
| `git branch` | Lista ou cria branches. | Gestão de versões. |
| `git show` | Mostra detalhes de um commit. | Apenas leitura. |
| `git stash` | Guarda mudanças temporariamente. | Gestão de código local. |
| `git ls-files`| Lista arquivos versionados. | Apenas leitura. |

---

## 🐍 Python & Node (Execução de Código)

Necessários para rodar os projetos e instalar bibliotecas.

| Comando | O que faz | Por que é seguro? |
| :--- | :--- | :--- |
| `python` / `python3` | Executa scripts Python. | Necessário para rodar o que você constrói. |
| `pip3` | Instala pacotes Python. | Baixa bibliotecas oficiais. |
| `node` | Executa scripts JavaScript. | Runtime padrão para Web/JS. |
| `npm install` | Instala pacotes Node. | Baixa dependências do projeto (`package.json`). |
| `npm run` | Roda scripts do projeto. | Executa tarefas definidas no `package.json` (test, dev). |

---

## 🛠️ Utilitários de Sistema

Ferramentas auxiliares para scripts e diagnósticos.

| Comando | O que faz | Por que é seguro? |
| :--- | :--- | :--- |
| `curl` | Baixa dados da internet. | Usado para testar APIs ou baixar scripts de setup. |
| `grep` | Busca texto dentro de arquivos. | Apenas leitura. Poderoso para encontrar código. |
| `date` | Mostra data/hora. | Inofensivo. |
| `head` / `tail` | Lê início/fim de arquivo. | Apenas leitura. |
| `sort` | Ordena linhas de texto. | Processamento de texto local. |
| `wc` | Conta linhas/palavras. | Apenas leitura. |
| `diff` | Compara dois arquivos. | Apenas leitura. |
| `which` | Localiza onde um programa está. | Apenas leitura. |
| `ps` | Lista processos rodando. | Diagnóstico. |
| `kill` / `pkill` | Encerra processos. | Útil para parar servidores travados (ex: `localhost`). |

---

## ⚠️ Como adicionar ao seu Cursor?

1. Abra **Settings** (clique na engrenagem ⚙️ ou `Cmd + ,`).
2. Vá em **General** > **Command Allowlist**.
3. Você pode adicionar manualmente ou copiar a lista abaixo e pedir para o próprio Cursor (no Chat):

> "Adicione estes comandos à minha configuração de allowlist, se possível, ou me mostre como fazer isso em massa."

*(Nota: O Cursor pode não permitir edição direta das configurações por segurança, exigindo que você cole manualmente na interface).*
