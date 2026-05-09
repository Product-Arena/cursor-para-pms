# Transcrição — Diego Almeida (CTO)
**Contexto:** 1:1 de boas-vindas com o novo PM do Squad Onboarding & Ativação
**Data:** 3 de abril de 2026 | **Duração:** 45 min | **Formato:** café presencial no escritório da Vila Olímpia
**Transcrição editada para remoção de ruído — conteúdo preservado**

---

**Diego:** Desculpa o atraso, eu tava numa chamada de incidente que não acaba nunca. Pede o café que você quiser, hoje é por minha conta.

**PM:** Obrigado. O que aconteceu no incidente?

**Diego:** Nossa integração com a B3 caiu por 18 minutos. Terça passada já tinha caído por 11. É um fornecedor pra quem a gente paga 40 mil por mês e que tá andando mal porque a B3 mudou o protocolo em janeiro e eles não atualizaram direito. A gente tá avaliando migrar. Esse tipo de coisa é o que consome meu dia.

**PM:** Entendi. Queria ouvir seu lado sobre o Q2, já ouvi a Juliana e a Beatriz.

**Diego:** Me conta o que elas te disseram, aí eu corrijo e complemento.

**PM:** *(resume)*

**Diego:** Acertaram em 80% do que falaram. Elas não mentiram em nada. Mas elas também não contaram 3 coisas que são minhas.

Primeira: meu time tá com 38% do tempo de engenharia alocado em débito técnico e incidente. Não em feature. Quando a Beatriz diz "eu quero experimento em 2 semanas" e a Juliana diz "eu quero iniciativa de ativação em 2 meses", eu fico olhando pros 62% de tempo que sobra e rezando pra ninguém pedir mais nada. É por isso que eu sou chato com priorização — não é mania, é sobrevivência.

Segunda: a migração pra reconhecimento facial foi um *trade-off consciente*. A fraude tava em 2,3% dos cadastros e a Compliance tava em pânico. A Daniela (Head de Ops) literalmente disse que se não resolvesse, ia precisar travar novos cadastros até a gente ter solução. A gente escolheu entre fraude zero e ativação ótima, escolheu fraude zero. Fraude voltou pra 0,4%. Ativação pagou o preço. A gente sabia que ia pagar. Agora a gente pode iterar porque não tá mais em fogo.

Terceira: tem uma dívida técnica grande no módulo de onboarding que pouca gente sabe. Quem escreveu aquele código foi um engenheiro que saiu faz 14 meses. Não tem teste automatizado. Cada mudança lá é uma roleta-russa. Se você vier com uma iniciativa de ativação que mexe em onboarding, a gente vai ter que decidir: faz paliativo ou refatora antes. Paliativo vai, mas vai render débito novo. Refatorar antes adiciona 3-4 sprints. É honesto botar isso na mesa.

**PM:** Então se eu viesse com uma iniciativa de ativação no Q2, como você reagiria?

**Diego:** Depende do escopo e do quão cirúrgica ela for.

Se você me trouxer "quero repensar o onboarding inteiro", eu digo não no Q2. É 2 quarters de trabalho e a gente não tem gente.

Se você me trouxer "quero mudar 3 telas específicas e adicionar 2 emails de lifecycle", eu digo sim se a gente conseguir enquadrar em 4 sprints com 1 engenheiro e 1 designer, e se a gente topar conviver com o débito técnico atual (paliativo em cima de paliativo).

Se você me trouxer "quero refatorar o módulo de onboarding antes de mexer", aí eu amo você, mas a Juliana te mata. Porque aí o seu squad não vai entregar ativação no Q2, vai entregar refatoração, e o Q3 que recebe a promessa.

**PM:** Qual caminho você recomenda?

**Diego:** Fica com opção 2. Paliativo inteligente, entregue em 4 sprints. Instrumente bem (quero ver métrica antes e depois). E deixa na PRD um anexo "Débito técnico assumido" listando as coisas que ficaram pro Q3. Eu garanto pra você que essa seção vai ser a mais útil da PRD inteira em 6 meses, quando a gente for refatorar.

**PM:** Capacidade real do meu squad no Q2?

**Diego:** Vamos pelos números. Squad 1 tem 1 tech lead (Sato), 2 sêniors (André e Fernanda), 1 pleno (Thiago). Em sprint de 2 semanas, a gente entrega em média 40 pontos úteis. 10-15 vão pra incidente/bug/manutenção. Sobram 25-30 pro roadmap. No Q2 inteiro (6 sprints) são 150-180 pontos. Uma iniciativa de ativação grande consome uns 60-80. Você tem orçamento pra **uma iniciativa grande + duas médias**, não mais. Se você pedir três iniciativas grandes, o Ricardo (Tech Lead) vai negociar com você.

**PM:** Você tem opinião sobre onde eu deveria atacar primeiro?

**Diego:** Tenho, mas com cuidado, porque a decisão é sua.

Se eu fosse você, eu atacaria verificação de identidade primeiro. Por três motivos: um, tem impacto claro (31% dropam ali, se a gente voltar pra 15% a ativação sobe muito); dois, é solução técnica mais do que UX, então o time consegue estimar bem; três, a Daniela e a Compliance estão no meu time e eu controlo aquele fornecedor — não tem stakeholder externo bloqueando. É o projeto que dá certo mais rápido.

Onboarding guiado (o "caminho dourado" que a Beatriz mencionou) é mais alto risco. Pode ser um ganho grande. Pode ser mais um experimento que não move ponteiro. Precisa de research. Cuidado de prometer ganho de ativação sem teste.

**PM:** Onde você antecipa conflito?

**Diego:** A Beatriz vai querer que você priorize o "caminho dourado" porque é mais sexy. A Juliana vai querer o que der ROI mais rápido. A Ivy vai querer os dois. E eu vou ficar puxando a realidade técnica. Meu conselho: não tenta agradar todo mundo. Escolhe uma iniciativa, explica por que não é as outras, e defende.

**PM:** Última coisa: o que eu não posso pedir pro seu time?

**Diego:** Três coisas.

Um: não me pede feature nova na semana do fechamento de mês. Meu time tá em plantão de liquidação e reconciliação, não vou tirar ninguém.

Dois: não me pede "testa isso em produção em 1 dia". A gente faz fintech. Se a gente subir bug pra produção, órgão regulador pode nos multar. Release bate semanal, com staging, sempre.

Três: não me pede PRD que não tenha resposta pra três perguntas: "o que muda no banco de dados?", "que evento analytics vai disparar?", "qual o rollback se der errado?". Sem essas três, eu não autorizo.

**PM:** Anotado. Obrigado pelo café.

**Diego:** De nada. E olha, uma coisa: se em algum momento você sentir que o Ricardo tá te travando, me chama. Não é porque ele é chato — é porque ele tá protegendo a barra da equipe. Mas às vezes ele exagera. Eu destravo.

---

## Para o thinking partner — perfil comprimido

**Estilo:** técnico mas comunicativo, pragmático, realista sobre capacidade, usa metáfora.

**Preocupações centrais:** capacidade do time (38% em débito/incidente), qualidade do release (fintech = risco regulatório), dívida técnica do módulo de onboarding.

**Métricas que ele cita:** velocity do squad (40 pts/sprint, 25-30 úteis), % tempo em débito (38%), fraude 0,4% (pós reconhecimento facial), drop em verificação (31%, voltou de 12%), release cadence (semanal).

**O que ele apoia:** iniciativas cirúrgicas (1 eng × 4 sprints), PRDs com rollback plan, instrumentação forte, soluções técnicas a UX-heavy.

**O que ele barra:** feature nova no fechamento de mês, releases com urgência artificial, PRDs sem "o que muda no DB/que evento/qual rollback".

**Tensão com outros C-levels:**
- CMO Beatriz: briga sobre solução leve vs. estrutural
- CFO Juliana: ambos querem eficiência, mas Diego prioriza débito técnico, Juliana velocidade
- CEO Ivy: Diego é co-fundador, relação de par

**Fraseado típico:** "é trade-off consciente", "não é mania, é sobrevivência", "paliativo inteligente", "o que muda no banco de dados?", "não tenta agradar todo mundo".
