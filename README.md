## Informações úteis

Este protótipo foi construído usando a lib React, em conjunto com Redux e React Routrer para a persistência dos dados. Além disso, o sistema faz uso do mock API json-server para servir os dados para a aplicação.

Na pasta raiz do projeto, execute:
### `npm start`

O comando acima inicializa as diretivas necessárias para a execução da aplicação, bem como a inicialização do servidor mock API json-server. Vide package.json.

Para disponibilizar os arquivos para produção, execute:
### `npm run build`

A aplicação criará uma pasta build com os arquivos compilados de forma adequada.

## Sobre a aplicação

- A aplicação dispõe de um painel de login, onde o usuário, previamente registrado, consegue fazer a inserção de novos produtos o seu gerenciamento. Dessa forma, é possível vincula-lo a uma promoção, a uma categoria, gênero etc.

- Existe a possibilidade de se cadastrar um novo usuário, caso seja o primeiro acesso à aplicação.

# Nota importante

Essa versão trata-se de um protótipo inicial da aplicação. Portanto, algumas peculiaridades minímas, dispensáveis ao uso do app, foram ignorados a princípio. Por exemplo:
 - Existe uma validação rasa dos dados de entrada nos formulários de login e cadastro, sem qualquer mensagem de feedback. No entanto, a validação existe.
 - No painel de CRUD, todas as funcionalidades previstas estão contidas, como: Criação de novos dados, leitura de registros, atualização dos dados já inseridos e a remoção de registros contidos. Porém, vale ressaltar que o design do painel encontra-se de uma forma rude.