# Node Complete Project

Projeto de exemplo em Node.js com TypeScript e um conjunto amplo de dependências.

## Visão geral

Este projeto contém:

- Um servidor web básico utilizando `Express`
- Configuração de TypeScript para compilação para `dist/`
- Scripts de desenvolvimento e produção
- Integração com variáveis de ambiente via `dotenv`

## Estrutura do projeto

- `package.json` — dependências, devDependencies e scripts.
- `tsconfig.json` — configuração do compilador TypeScript.
- `src/index.ts` — entrada do servidor Express.
- `.env` — configuração de ambiente local.
- `dist/` — saída gerada pelo build TypeScript.
- `.gitignore` — exclusões recomendadas como `node_modules/` e `dist/`.

## Instalação

1. Abra o terminal no diretório do projeto:
   ```bash
   cd c:\dev\mp4\nodeUtil\nodeUtil\Arquivos\node-complete-project
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Executando em desenvolvimento

Use o modo de desenvolvimento para hot reload:

```bash
npm run dev
```

Após iniciar, abra no navegador:

```text
http://localhost:3000
```

### Rotas disponíveis

- `GET /` — retorna um JSON com mensagem de boas-vindas
- `GET /uuid` — retorna um UUID gerado dinamicamente

## Build para produção

Compile o TypeScript para JavaScript:

```bash
npm run build
```

Inicie o servidor compilado:

```bash
npm start
```

## Configuração de ambiente

O arquivo `.env` contém variáveis de ambiente usadas pelo projeto:

```env
PORT=3000
NODE_ENV=development
```

## Scripts úteis

- `npm install` — instala dependências
- `npm run dev` — inicia o servidor em modo desenvolvimento
- `npm run build` — compila TypeScript para `dist/`
- `npm start` — executa a aplicação compilada
- `npm run clean` — remove a pasta `dist/`

## Dependências principais

O projeto já inclui várias dependências úteis para diferentes casos de uso:

- `express`, `cors`, `body-parser`
- `dotenv`, `uuid`, `axios`
- `mysql2`, `sequelize`, `ioredis`
- `nodemailer`, `pdfkit`, `pdf-lib`
- `amqplib`, `node-cron`, `formidable`, `xml2js`

## Observações

- A dependência `canvas` foi removida do `package.json` porque exige ferramentas de compilação nativas no Windows.
- Há algumas dependências e tipos adicionados para suportar desenvolvimento TypeScript e automação.

## Próximos passos

Você pode estender o projeto adicionando:

- rotas REST adicionais
- conexão com banco de dados MySQL
- envio de e-mail com `nodemailer`
- geração de PDF com `pdfkit` ou `pdf-lib`
- fila de mensagens com RabbitMQ (`amqplib`)
- agendamento de tarefas com `node-cron`
