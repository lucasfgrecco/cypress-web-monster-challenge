# Projeto de Testes com Cypress

Este projeto contém uma suíte de testes automatizados para a página inicial de um aplicativo web, usando o framework de testes [Cypress](https://www.cypress.io/). Os testes verificam a funcionalidade de criar, deletar e favoritar monstros na aplicação.

## Requisitos

- Node.js (versão 12 ou superior)
- npm (versão 6 ou superior) ou yarn (versão 1.22 ou superior)

## Instalação

1. Clone este repositório para a sua máquina local:

    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências do projeto:

    ```sh
    npm install
    ```

    ou

    ```sh
    yarn install
    ```

## Estrutura do Projeto

- `cypress/`
  - `e2e/`
    - `home.cy.js` - Contém os testes para a página inicial.
  - `support/`
    - `commands.js` - Contém comandos personalizados do Cypress.
  - `fixtures/` - Contém dados estáticos para usar nos testes, se necessário.
- `cypress.config.js` - Configurações do Cypress.

  ## Execução dos Testes

Para executar os testes, você pode usar os seguintes comandos:

### Executar Cypress em Modo Interativo

Este comando abre a interface gráfica do Cypress para execução interativa dos testes:

```sh
npx cypress open
