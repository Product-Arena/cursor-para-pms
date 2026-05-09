# Exercício 09: PRD do novo onboarding (Arena Cash)

**Objetivo:** Criar o PRD do novo fluxo de onboarding com apoio de um subagent Product Manager.

---

## 📝 Passo a passo

1. No chat do Cursor, rode o comando:
   ```text
   /create-subagent
   ```
2. Use este prompt em português:
   ```text
   Me ajude a criar um subagent para atuar como Product Manager da Arena Cash.
   ```
3. Valide o resultado esperado no projeto:
   - pasta `AGENTS/` na raiz
   - arquivo `AGENTS/product-manager.md`
4. Com o contexto do caso aberto (memo, organograma e análises), peça ao subagent Product Manager:
   ```text
   Atue como Product Manager da Arena Cash e crie um PRD para o novo fluxo de onboarding, com foco em aumentar ativação em 30 dias e reduzir churn inicial. Inclua: problema, objetivo, hipóteses, escopo, não-escopo, métricas de sucesso e riscos.
   ```
5. Salve o entregável como:
   ```text
   documents/prd-onboarding-arena-cash.md
   ```

---

## ❓ Dúvidas e erros comuns

**O subagent foi criado, mas não está seguindo o contexto da Arena Cash**  
Anexe ao chat os arquivos do caso (memo, organograma, dados e síntese da análise) antes de pedir o PRD.

**Ele só conversa e não escreve arquivo**  
Peça explicitamente para salvar em `documents/prd-onboarding-arena-cash.md` e aplique a alteração sugerida.
