# Carteira Virtual

## Descrição

Este projeto é uma aplicação de pagamento que utiliza React no frontend e NestJS com Prisma no backend. A aplicação permite aos usuários realizar pagamentos,depósitos, visualizar histórico de movimentações, gerar gráficos, selecionar categorias, e adicionar observações.

## Tecnologias Utilizadas

### Frontend

- **React** (criado com Vite)
- **CSS** puro para estilização

### Backend

- **NestJS** (Framework Node.js)
- **Prisma** (ORM)

## Estrutura do Projeto

### Frontend

O código frontend está localizado na pasta `frontend` e usa React com Vite.

#### Dependências Principais

- React
- React Router DOM

### Backend

O código backend está localizado na pasta `backend` e usa NestJS junto com Prisma.

#### Dependências Principais

- NestJS
- Prisma
- SQLite

## Instalação

### Frontend

1. Navegue até a pasta do frontend:
    ```sh
    cd frontend
    ```

2. Instale as dependências:
    ```sh
    yarn
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    yarn run dev
    ```

### Backend

1. Navegue até a pasta do backend:
    ```sh
    cd backend
    ```

2. Instale as dependências:
    ```sh
    yarn install
    ```

3. Configure o Prisma:

    - Execute a migração do banco de dados:
      ```sh
      npx prisma migrate dev
      ```

      - Execute a geração das tipagens do prisma:
      ```sh
      npx prisma generate
      ```

4. Inicie o servidor NestJS:
    ```sh
    yarn start
    ```

## Utilização

### Frontend

A aplicação frontend permite aos usuários:

- Inserir o valor do pagamento e formatá-lo automaticamente como moeda brasileira (R$).
- Selecionar uma categoria para o pagamento.
- Adicionar uma observação opcional.
- Realizar o pagamento, que é enviado ao backend para processamento.

### Backend

A API backend gerencia as operações de pagamento, incluindo a criação de novos pagamentos e a categorização dos mesmos. 
