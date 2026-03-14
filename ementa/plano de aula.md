---
Descrição: Este arquivo nunca deverá ser commitado. Ele é de uso restrito do autor e nunca poderá ser acessado por terceiros.
---

# Plano de aula

## Bloco 1 — Manhã

### 1. Introduções

- Começamos com as introduções, vou contar sobre minha trajetória com PM e como virei a chave para me tornar o que hoje considero como Builder.
- **Nota:** 1 min por participante se apresentar (antes de mim). A turma deve ter 25 pessoas.
- Preciso tanto do meu nome e meu avatar Apple; aqui precisamos incluir as notinhas de cada um como do meu lado: mineiro, mergulhador e com uma quase travessia do Atlântico (lembra do exemplo de apresentação que te passei?). Adicionar meu cargo de GPM no iFood e fazer uma chamada do Ailo, como o logo do iFood e Ailo, o logo de algumas empresas em que já trabalhei. O mesmo serve para o Arthur, que será o outro instrutor.

### 2. Como vai funcionar o curso

- Explicar para quem o curso é feito.
  - Disclaimer: pra quem gosta de construir e entende que a ferramenta deve ser um copiloto, não um piloto automático.
- O que as pessoas podem esperar aprender durante o dia.
  - Pode ser usado para: Automate your workflow, Answering technical questions, Data analysis and reporting, Building prototypes.
- Qual a diferença entre Cursor, n8n, ChatGPT, Lovable, Manus e todas as outras ferramentas de vibe coding.
- Relembrar os pré-requisitos e garantir que estamos todos prontos: Cursor baixado, conta criada com plano Pro ativado, conta GitHub, Obsidian (opcional), entrar no grupo de WhatsApp, nos adicionar no LinkedIn. (aqui preciso de um slide de checklist)

### 3. Wow Moment

- Primeira demonstração do Cursor com meu case "Start my day".
- Podemos fazer brincadeiras e alusões com o Jarvis, do Homem de Ferro.

### 4. Setup

- Com a galera sabendo o que podem esperar, vamos para o setup.
- Ensinar a criar o workspace e dar dicas de onde colocá-lo no computador.
- **Pro-tip:** File-Deletion Protection — ativar nas configurações do Cursor.
- Como nos exemplos do [Lenny](https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense): precisamos de imagens. Deixar sempre como placeholder onde eu disser que tem imagem, para eu poder incluir depois.
- Aqui preciso de um slide para explicar que o Cursor está com acesso à minha máquina. Como um IDE, assim como é o terminal, eu consigo navegar nos arquivos do meu computador. (isso faz sentido?)

### 5. Conhecendo o Cursor

**Nota (Arthur):** Ser muito didático. Maioria dos participantes não teve contato prévio com o Cursor — precisa ser baby steps.

- **Exercício Ask:** Começar com uma interação simples perguntando ao Cursor o que ele é capaz de fazer. Ideia: familiaridade com o que já conhecem (ChatGPT).
- **Abrindo parênteses — GitHub:** Explicar o que é o GitHub. Slide: bullets à esquerda, imagem de repositório à direita.
- **Adicionar callout para:** Clone (aka: copiar do GitHub) | repo (aka: diretório ou pasta) — em português.
- **Exercício Plan:** "Eu já tenho uma conta no GitHub, o que preciso para clonar um repositório aqui?" — mapear dependências de cada aluno e deixá-los prontos para o git clone.
- **Slide especial — Presente da Arena** (antes do clone): explicar que todo material estará disponível no repo do curso, com recursos otimizados por nós. Depois eles vão clonar esse repo.
- **Exercício Plan:** "Monte um plano para eu clonar o repositório do curso: https://github.com/Product-Arena/cursor-para-pms" — usar o modo "Build" gerado pelo plano.
- **Abrindo parênteses — Allowlist (antes de clonar):** Explicar como funciona allowlist e como definir o que usar e não usar. Dica: criar novo agent em modo Ask, usar o recurso de fixar agente e perguntar cada comando. Ex: "O que o comando cp faz?" **Pro-tip:** Evitar liberar `rm` e `git commit` sem revisão.
- **Exercício Ask:** Mostrar como usar o contexto do workspace. Voltar ao modo Ask. Eles arrastam a pasta do repo do curso recém-clonada e perguntam "o que ela faz" (**arrasta e solta**).
- **Abrindo parênteses — Modo Agent:** Explicar o modo Agent. Slide: bullets à esquerda, imagem à direita.
- **Exercício Agent:** Garantir acesso aos Rules e Commands do curso (ou instalar skills conforme necessário).
- **Abrindo parênteses:** Escolhas de modelos, janelas de contexto. **Pro-tip:** Composer-1 para MCPs e tool calls; Gemini 3 Pro para frontend.
- Gancho para explicar o que são Skills. Slide: mesmo formato (bullets + imagem).
- Ajudar a configurar as rules e commands do curso (.cursor mínimo na raiz; stacks completas em stack/Lucas e stack/Arthur para copiar o que quiserem).
- Explicar o que são Commands e Rules (slide para cada).

**Fim da manhã:** Setup completo e principais funcionalidades cobertas.

---

## Bloco 2 — Tarde: Utilizando o Cursor no ciclo de produto (60–90 min)

**Objetivo:** Aprofundar em rules, commands e workflows usando o ferramental para construir produtos juntos. Primeiro produto: OS pessoal — plano para o dia a dia de uma pessoa de produto. Casos práticos: notas de reunião, PRD, análises de dados, Jira cards e apresentações. **Slide de abertura do bloco:** subtítulo reforça o fluxo do PM (notas → PRD → dados → Jira → entregas).

**Nota:** Reforçar que vou mostrar exemplos na minha stack, mas incentivá-los a explorar como adaptar à realidade de onde trabalham.

- Como vamos voltar do almoço, ter tido uma pausa, vamos começar fazendo um recap e abrindo espaço para perguntas (preciso de um slide para isso).

### Notas de reunião e organização de agenda

- Case do Arthur com a organização das mentorias.

### Entendimento do problema

- Mostrar o ponto de PRD. (deixar claro que vamos ter o exercício em breve para praticar, mostrar o que podem esperar, mas não aprofundar)

### Analisando dados

- Aqui eu vou mostrar de forma prática como fizemos isso, que foi analisando os dados de respostas gerados pelo formulário que os alunos responderam antes do curso. E vou mostrar o resultado do expectations-analysis. Para isso preciso de uma slide com um "fluxo" com ícones de cada ferramenta, com o passo a passo que realizei:
  1. Coletamos os dados através do Google Forms (logo do Forms) e recebemos os dados no Google Sheets.
  2. Utilizei o modo Plan do Cursor (logo do Cursor) para preparar uma forma de consumir os dados, já utilizando o MCP do Google.
  3. No meu plano pedi para ele construir um dashboard para eu acompanhar as respostas e entender os padrões.

- No slide seguinte, quero ter um bloco de código, se necessário com scroll, com o prompt que utilizei (abaixo). Aqui quero deixar tipo um callout abaixo do prompt com uma nota de dica para utilizar Markdown, para explicar a importância disso. Basicamente a importância é que MD é a linguagem das LLMs, dado que são baseados em textos e MD entrega uma forma estruturada. "When you use Markdown, you are essentially coding your knowledge." "In the age of AI, **text is the universal interface**. While traditional software relies on databases (SQL) and strict data structures (JSON/XML), AI agents thrive on natural language mixed with light structure. Markdown is the perfect bridge between human and machine." (aqui cabe a analogia da escrita de carta que aprendemos quando crianças)

```markdown
# Análise do curso com base nas expectativas dos alunos

## Contexto
- Neste documento https://docs.google.com/spreadsheets/d/1MY8gLMTYIoP3pp_cCZk3IJIti3Xo93eUnqwqmNRF5HA/edit?gid=587240834#gid=587240834 temos respostas dos participantes do curso sobre suas expectativas de aprendizado, além de informações valiosas sobre o conhecimento de cada um.
- Eu gostaria de utilizar as informações presentes na planilha para:
  1. Construir uma visão gráfica para analisar as respostas. Note que algumas colunas apresentam respostas padrões (seleção) — para essas podemos ter gráficos de barras para entender a distribuição. Outras perguntas são abertas com campo de texto livre, quero utilizar alguma classificação de texto para entender as preferências.
  2. Quero analisar o que os alunos estão esperando e quais ajustes podemos fazer no material para atender melhor as expectativas.

## Ação
- Faça uma análise completa da planilha para entender o padrão de cada coluna
- Elabore seu plano de execução para as demandas acima
- Garanta que teremos uma página HTML responsiva seguindo os melhores padrões de frontend para visualizar os dados.
```

- Em outro slide, já quero embedar o HTML que construímos do expectations-analysis.

- No slide seguinte eu quero reforçar que esse foi um exemplo simples, utilizando o Google Sheets, conectando o MCP no próprio Cursor e utilizando o modo Plan como meu prompt em Markdown, mas que teriam outros caminhos como por ex:
  - Adicionando como contexto para o Cursor um arquivo .csv da minha máquina (inclusive, lembrando que ele tem acesso à minha máquina, então eu posso pedir para ele buscar nos meus downloads), ou então conectando com Databricks, Snowflake, Supabase (inclusive por MCPs). Nesse slide é legal realmente mostrar os logos de cada para exemplificar o que é possível.

### Criando User Stories conectadas ao Jira

- Exercício para criar a história utilizando a rule de exemplo que temos.

- Aqui vou abrir outro parênteses e explicar sobre MCPs. Para isso preciso de um slide para explicar o que é MCP, como eles funcionam — podemos nos bullets falando que foi criado pela Anthropic para facilitar a comunicação entre agentes, mencionar por alto que há outros protocolos surgindo como A2A (agent to agent). Vou explicar como encontrar um MCP: que o Cursor já tem uma biblioteca de MCPs, algumas empresas disponibilizam seus servidores oficiais (como a Atlassian do Jira/Confluence), mas que há sites como https://www.mcpdirectory.ai/ (preciso incluir o logo no slide) e https://mcpservers.org/ (também incluir o logo do site). Então devo abrir o https://mcpservers.org/ e mostrar buscando por Jira, explicar como encontrar um projeto mais seguro analisando a quantidade de stars, forks, contribuidores e atualização no GitHub.

- Depois de fazer o parênteses, vou sugerir que eles já instalem o MCP do Jira, através do site https://support.atlassian.com/atlassian-rovo-mcp-server/docs/getting-started-with-the-atlassian-remote-mcp-server/. Vamos usar o modo Plan novamente para tal. Eles vão usar o ambiente do curso https://productarena.atlassian.net/jira/for-you com a conta compartilhada: lucas@buildingthefuture.com.br (senha fornecida no material / no dia).

- Então vamos para parte de pedir para criar tarefas no Jira, e vamos ter um exercício. Eles terão que criar uma tarefa utilizando template/rule que iremos disponibilizar. Será um exercício simples, eles vão ter que descrever [concluir descrição].

### Criando apresentações

- Aqui vem o "eat your own dog food": preciso de um slide para enfatizar que o slide foi feito pelo Cursor, algo como "Esse material foi feito com amor :emoji-coração: e Cursor :emoji-robô:"
- Mostrar como faço apresentações, criação de gráficos em HTML com as fontes do iFood.

Então faremos uma pausa para café de 10–20 minutos.

---

## Bloco 3 — Tarde: Criando o produto

Voltando, um recap do que aprendemos até o momento, principalmente a parte de rules, commands, o uso de MCPs.

**Objetivo:** Arena Voting System. Processo completo do planejamento até a construção do produto.

- Para este módulo quero demonstrar como funciona um workflow, ou seja um fluxo integrado com etapas encadeadas (preciso de um slide para explicar isso). No caso, vamos usar o meu exemplo do venture-builder

- **PRD:** Começar com o command `/create-prd`. Eles terão um arquivo de referência — nota da reunião com Arthur Castro (CEO da Arena) demandando o app e passando as expectativas.
- **Design:** Usar a skill do frontend, pedir para usar o browser para tirar print screen e capturar cor, tipografia e logos do site da Arena.
  - Abrindo parênteses: mostrar que poderiam usar o repo do design system no contexto de trabalho. Case da Isabel — antes e depois dos protótipos.
- Quebrar as histórias utilizando o modo Plan (o que precisamos executar).
- Cada um vai criar seu repo pessoal para subir os exercícios e compartilhar com a turma no seu GitHub, um repo público.

### Protótipo funcional em localhost

- **Objetivo para os alunos:** Criar um protótipo funcional que rode em localhost (na máquina deles). Ver exercício [14-prototipo-funcional-localhost.md](../materiais/exercicios/14-prototipo-funcional-localhost.md).
- **Slide de disclaimer:** Explicar que para disponibilizar um link que qualquer um possa acessar exigem mais configurações (servidor, deploy, domínio). Uma alternativa mais simples: começar no Lovable, fazer sync com GitHub e continuar no Cursor. Vantagens: não ficar limitado aos créditos do Lovable, usar modelos mais potentes, utilizar Skills, ter mais pessoas trabalhando no projeto.
- **Slide Plofti:** Mostrar o projeto Plofti (estimativa de reparo de carro) como exemplo de protótipo — usar imagem com mockup de iPhone.

---

## General notes (notas para refinamento do documento e ações do agente)

### Apresentação

- Eu espero que os slides da apresentação sejam bem visuais, um formato meio Notion, então utilizando emojis, uma tipografia simples e de fácil leitura.
- Considere que os slides serão projetados, então é importante que tenham boa leitura para todos que estiverem na sala, com letras grandes e contraste.
- Quando falarmos de callout devemos usar uma estrutura parecida com a Notion.
- Devemos sempre priorizar as cores da Arena (para isso precisamos ter exatamente as cores extraídas daqui https://productarena.io, como por ex: `--accent: #FF5757`)

## Licenças

- Todo o conteúdo irei disponibilizar em um git para os participantes, e devem estar com minha licença padrão. 