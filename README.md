# Delivery-APP 
## 📖 Sobre

- A proposta desse projeto era desenvolver uma aplicação delivery de bebidas, utilizando Reactjs, Nodejs, MySQL.<br>
- Os recursos disponíveis são relacionados ao tipo de usuario que efetua login na aplicação.<br>
- São 3 definições de usuários: Customer, Seller e Administrator.
  - customer: pode fazer pedidos adicionando produtos ao carrinho e efetuando checkout.
  - Seller: tem acesso aos pedidos relacionados ao seu nome, podendo editar.
  - Admin: pode adicionar e remover usuários, tanto customers quanto sellers.
- A aplicação conta com um banco relacional(MySQL), para os produtos e usuários<br>
- Para os componentes React foi usada a biblioteca MUI(Material UI)



## 🧰 Tecnologias  

**Fullstack**
<div style="display: inline_block">
 
   
  <img align="center" alt="HTML" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
   &nbsp;&nbsp;
   
  <img align="center" alt="CSS" width="30"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
   &nbsp;&nbsp;
   
  <img align="center" alt="JS" width="30"      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
   &nbsp;&nbsp;

  <img align="center" alt="REACT" width="30"   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />&nbsp;&nbsp;

  <img align="center" alt="MUI" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
   &nbsp;&nbsp;

  <img align="center" alt="NODEJS" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
   &nbsp;&nbsp;

  <img align="center" alt="MYSQL" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
  &nbsp;&nbsp;

  <img align="center" alt ="MYSQL" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  &nbsp;&nbsp;

  <img align="center" alt ="SEQUELIZE" width="30"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />

  &nbsp;&nbsp;
 
</div>

## 👷‍♂️ Desenvolvimento:
- Projeto Final de Front-end realizado na [Trybe](https://www.betrybe.com/)<br>
- Realizado em grupo
- Integrantes do Grupo:<br>
&ensp;[Anderson Zobel](https://github.com/Anderson-Zobel)<br>
&ensp;[Pablo Almeida](https://github.com/pabloalmeidac)<br>
&ensp;[Rodrigo Lima](https://github.com/limarodrigoo)<br>
&ensp;[Lucas Ribeiro](https://github.com/lucaslol69)<br>

## 🏃 Habilidades
 - Criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja

## 💻 Rodando localmente

1. Recomendo uso de Docker para o bando de dados, com docker instalado use o comando abaixo
```
docker container run -d -p 3306:3306 --name mysql --env MYSQL_ROOT_PASSWORD=SuaSenhaAqui mysql
```

2. Instalação de dependências tem que tanto ser feita na pasta raíz quanto nas pastas de front-end e back-end, rode respectivamente o mesmo comando.
```
npm install
```

3. Configurando as variáveis de ambiente, abaixo o que vem no arquivo .env.example, renomeio para .env e configure as suas variáveis para rodar corretamente a aplicação.
back-end
```
  NODE_ENV=development 
  API_PORT=3001
  MYSQL_HOST=localhost
  MYSQL_PORT=3306
  MYSQL_USER=root
  MYSQL_PASSWORD=senhaDoDb
  MYSQL_DB_NAME=delivery-app
  EVAL_ALWAYS_RESTORE_DEV_DB=true
```
front-end
```
#NÃO ALTERAR
ESLINT_NO_DEV_ERRORS=true
SKIP_PREFLIGHT_CHECK=true

#COMUNICAÇÃO COM A API
REACT_APP_HOSTNAME=localhost
REACT_APP_BACKEND_PORT=3001
```

4. Rodando a aplicação terá tela de login, como base já existem alguns usuários cadastrados e seus respectivos privilégios, basta usar algum deles para efetuar login.
```
- Customer - Cliente Zé Birita
  - email: zebirita@email.com senha: $#zebirita#$

- Seller - Fulana Pereira
  - email: fulana@deliveryapp.com senha: fulana@123

- Admin - Delivery App Admin 
  - email: adm@deliveryapp.com senha: --adm2@21!!--
```

<!-- ## 💻 Deploy
 - [Delivery-APP]() -->

<!-- ## 📺 Preview do Projeto
![]() -->
