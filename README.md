# Desafio Front-end BeTalent

Este projeto é uma solução para o teste técnico de front-end da BeTalent. A aplicação consiste em uma interface responsiva que exibe uma tabela de colaboradores, consome dados de uma API simulada e permite a busca dinâmica pelos registros.

## ✨ Features

-   **Visualização de Colaboradores**: Exibição dos dados em formato de tabela.
-   **Busca Dinâmica**: Filtro em tempo real por Nome, Cargo e Telefone.
-   **Formatação de Dados**: Datas e telefones são formatados no front-end para melhor legibilidade.
-   **Responsividade**: O layout se adapta a dispositivos desktop e mobile (requer implementação de CSS).
-   **Feedback de UI**: Exibe estados de carregamento (loading) e erro.

## 🛠️ Tecnologias Utilizadas

-   **React.js (v18+)**
-   **TypeScript**
-   **CSS Modules** (Recomendado para estilização)
-   **json-server** (Para a API mock)
-   **Yarn** (Gerenciador de pacotes)

## 🏛️ Arquitetura e Decisões de Projeto

O projeto foi estruturado com foco em separação de responsabilidades, manutenibilidade e escalabilidade.

-   **Estrutura de Pastas**: A organização `src` separa `api`, `components`, `hooks`, `pages`, `types` e `utils`, tornando a navegação e manutenção do código mais intuitivas.
-   **Hook Customizado (`useCollaborators`)**: Toda a lógica de estado, busca de dados, filtro e tratamento de erros foi encapsulada neste hook. Isso limpa os componentes de UI, tornando-os mais simples e focados na apresentação, além de facilitar testes unitários da lógica de negócio.
-   **Performance**: O `useMemo` é utilizado para otimizar a filtragem, garantindo que a lista de colaboradores seja recalculada apenas quando necessário.
-   **Tipagem Forte**: O uso de TypeScript desde o início garante segurança de tipo, previne bugs comuns e melhora a experiência de desenvolvimento com autocompletar e clareza nas interfaces dos componentes.

## 🚀 Como Executar o Projeto

**Pré-requisitos:**
* Node.js (v16 ou superior)
* Yarn

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/pbt35/betalent
    cd betalent
    ```

2.  **Instale as dependências do front-end:**
    ```bash
    yarn install
    ```

3.  **Configure e inicie a API simulada:**
    * Clone o repositório do desafio: `git clone https://github.com/pbt35/betalent`
    * Navegue até o diretório e inicie o `json-server`:
    ```bash
    cd betalent
    json-server --watch db.json
    ```
    * A API estará rodando em `http://localhost:3000`.

4.  **Inicie a aplicação React:**
    ```bash
    # No diretório 'betalent'
    yarn start
    ```

5.  Abra seu navegador e acesse `http://localhost:3001` (ou a porta que o React indicar).