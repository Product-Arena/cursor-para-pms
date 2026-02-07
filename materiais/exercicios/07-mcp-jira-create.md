# Exercício 07: Criando Task no Jira via Cursor

**Objetivo:** Usar a conexão MCP para criar uma user story no Jira, no formato **Como [persona], quero [ação] para [benefício]**.

**Template/rule:** O curso inclui a rule `.cursor/rules/user-story-jira.mdc` — use-a como referência ou mencione no prompt para o Cursor seguir o formato.

---

## 📝 Passo a Passo

1.  Certifique-se de que a luzinha verde ao lado de "jira" nas configurações de MCP está acesa.
2.  Abra o Chat (`Cmd + L`).
3.  Crie uma **user story** no formato do template. Exemplo de prompt:
    ```text
    "Crie uma tarefa no projeto [SEU-PROJETO-KEY] no formato de user story: Como participante do evento, quero votar nos tópicos que quero debater para que os mais votados sejam priorizados na agenda."
    ```
    Ou use um título/descrição seus, seguindo: **Como** [quem], **quero** [o quê], **para** [por quê].
4.  O Cursor deve confirmar os dados antes de executar.
5.  Confirme a execução.
6.  O Cursor retornará o link da tarefa criada. Clique para conferir no navegador.

---

## ❓ Dúvidas e Erros Comuns

**Erro "Project not found"**
Verifique se a KEY do projeto (ex: `PROJ`, `KAN`) está correta. Não é o nome, é a sigla.

**Nada acontece**
Verifique se o servidor MCP está rodando. Vá em Settings > MCP e veja se há erros de log.
