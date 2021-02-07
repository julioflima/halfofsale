<p align="center">	
	<h1 align="center">⚓ Platiot 🚀</h1>
  <p align="center">Sistema de Versionamento de Firmwares</p>

</p>
<p align="center">
    <img src="assets/gif/preview.gif" width="fit-content" alt="Logo">
</p>
  

## [DEMO!!!](https://trello-clone-liv-saude.herokuapp.com)

## User Stories:
- Eu, como engenheiro, gostaria de manter (CRUD) *firmware* com **nome do projeto**,
**versão** e **nome da placa compatível**;
- Eu, como engenheiro, gostaria de ter a garantia que somente usuários
autorizados podem fazer upload e download dos arquivos de *firmware*;
- Eu, como engenheiro, gostaria de **garantir a integridade** do arquivo de firmware, a
fim de impedir que alguém não autorizado tenha acesso às informações contidas na
imagem (.bin);
- Eu, como engenheiro, gostaria que ao abrir a plataforma de controle de versão de
firmware, o sistema listasse para mim todos os arquivos (.bin ou .zip) por **projeto** e
**placa compatível**.
## Regras de Negócio:
- O nome do arquivo de firmware deve ser salvo no seguinte formato:
**nome_do_projeto_v0_0_1.bin**;
- O sistema não deve aceitar o upload de um arquivo em formatos diferente de **.bin** ou
**.zip** (ou formatos resultantes de um processo de criptografia);
- A versão do arquivo deve refletir a versão Maior (MAJOR), Menor (MINOR) e de
Correção (PATCH).

## Hosting:
<p align="justify">
  A aplicação encontra-se hospedada no Heroku.
</p>
<p align="justify">
O projeto foi inicialmente pensado como "monorepo", houve alguns conflitos, na hospedagem do Heroku (nada que com mais tempo não pudesse ser resolvido). Desse modo fora criado esse repositório para unificar os diretórios e os diretórios backend e frontend foram dividos em outros dois repositórios. Segue abaixo os respectivos links:
</p>

## Repositories:

Link Repositório Backend: https://github.com/juloko/TrelloClone-Backend

Link Repositório Frontend: https://github.com/juloko/TrelloClone-Frontend

## Deploy

Link Backend: https://trello-clone-liv-saude-backend.herokuapp.com

Link Frontend: https://trello-clone-liv-saude.herokuapp.com

## Back End:
<p align="justify">
Na aplicação não fora utilizado scripts SQL puros, e sim uma tecnologia chamada Query Builder que possibilita por meio de código em JS, fazer uma chamada a scripts de maneira mais natural. A principal vantagem do Query Builder, é na verdade a portabilidade para qualquer banco de dados em SQL, seja ele, Oracle, MySQL ou PostgreSQL. O Query Builder, utilizado fora o Knex. Segue abaixo uma comparação entre as duas tecnologias:
</p>


Driver: `SELECT * FROM users`

Query Builder: `table('users').select('*').where()`

## Banco de Dados:
Fora utilizado o como banco de o PostgreSQL.

## Front End
<p align="justify">
A aplicação fora desenvolvida em React, visando uma utilização em um computador. A responsividade aqui não fora o foco devido ao pouco tempo, (novamente não seria nada complicado a implementação), no entanto o foco aqui foram as funcionalidades básicas.
</p>

### NEXT TS:
<p align="justify">
Acreditando que há uma forte tendência de aplicaçes em Next, sevivo a uma série de tecnologias que garatem performace como o SSG (Static Site Generetion)... Portanto Next fora bastante utilizado, para gerar páginas dinâmicas, sendo elas pre-renderizadas no build.
<p align="justify">
  
### Tradução:
<p align="justify">
O usuário final da aplicação será um engenheiro que possui como língua de trabalho o inglês, em muitos deles o seu computador está configurado em inglês e sendo um projeto em inglês poderão haver estrangeiros trabalhando no projeto sem nenhuma familiaridade com o português.
<p align="justify">
<p align="justify">
Com esse propsito fora utilizada uma biblioteca em next de modo a prover traduções do site, gerada automaticamente durante o processo de build. Cada página será gerada em duas línguas, PT e EN.
<p align="justify">
<p align="justify">
A grande dificuldade aqui fora implementar em Next, a referência utilizada havia muitos erros de Typescript, todos eles corrigidos e enviados PR para o projeto original.
<p align="justify">
<p align="justify">
  Seguem abaixo os links utilizados:
<p align="justify">
  
- [Repositório Original;](https://github.com/BiscuiTech/i18n-typescript-app)
- [I - Pull Request;](https://github.com/BiscuiTech/i18n-typescript-app/pull/2)
- [II - Pull Request;](https://github.com/BiscuiTech/i18n-typescript-app/pull/4)
- [Demonstração - Deployed by Julio Lima;](https://i18n-typescript-app.vercel.app/)
- [Tutorial.](https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih)
