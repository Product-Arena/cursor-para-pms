# Exercício 05: Instalação Automática (Modo Agent)

**Objetivo:** Deixar o Cursor agir no seu sistema para instalar e configurar ferramentas.

---

## 📝 Passo a Passo

1.  Utilize o **Chat (`Cmd + L`)**. Não é necessário ativar nenhum modo especial, apenas autorize os comandos quando solicitado.
2.  Com o contexto da pasta `skills` ainda ativo (ou referenciado), digite:
    ```text
    "Quero que você instale esses skills no meu workspace para eu poder usá-los."
    ```
3.  O Cursor vai analisar o `README.md` ou os arquivos de configuração do repositório para entender como instalar.
4.  Ele provavelmente sugerirá rodar um script ou copiar arquivos.
5.  **Aprove** a execução dos comandos quando solicitado.

---

## ❓ Dúvidas e Erros Comuns

**Ele perguntou se pode rodar um comando. Devo aceitar?**
Sim, para este exercício. Sempre leia o comando antes (ex: `cp -r ...`, `npm install ...`). Se parecer seguro, clique em "Run" ou "Allow".

**Nada aconteceu**
Às vezes o repositório requer uma configuração manual específica (ex: variáveis de ambiente). O Cursor deve te avisar. Pergunte: "Faltou algum passo manual?"
