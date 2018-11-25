# Recruitment-task
Recruitment task for the [1innosystems]

### About
UI is based on Photoshop file. Front end is based on Vue.js ( SPA ), while Back end is based on Node.js with Express.js and NoSQL database MongoDB with MVC design pattern. I created REST API for communication between Front end and Back end. Aplication requires MongoDB local server & Node.js. In the same moment you can run 2 applications, because CORS is set and ports are different (8080 and 4000)

### Features
- Responsive website
- Reactive validation for form
- AJAX Http Request for the server by REST API endpoints
- RESP API Back-End
- Responsive slider based on dynamic data
- Saving data to Mongo NoSQL database on localhost server
- Alert component which responds for the AJAX requests ( success & error )

![layout of website](./img/layout.png)

### Used libraries/Technologies:
  - Vue.js 2
  - SCSS
  - Javascript
  - Axios Ajax librabry
  - Vee Validate
  - Vue Carousel
  - Bootstrap Vue
  - Node.js
  - Express.js
  - MongoDB
  - ES6+

## Front End
Node.js is requires to run this application. Basically Website is based on SPA with Vue.js. App has only the one route ('/'). I wrote dynamic form validation by Vee Validate library, Furthermore I used Axios HTTP Ajax library for API Requests. Also I decided to use Vue Carousel component for dynamic data. The whole application is responsive by Bootstrap Vue library.

### Install
```sh
$ cd front-end
$ npm install
```

### Run

```sh
$ npm run serve
```

### Build

```sh
$ npm run build
```

## Back End
Node.js and MongoDB local server is requires to run this application correctly. I tried to write back-end with Javascript ES6/ES7 newest features like Async/Await, arrow functions and etc. There is one model for database ( users model ), one controller for users, and 2 API end points ( POST & GET ). However application is modular, because is based on MVC design pattern, therefore the development of application is simple and logic.

| HTTP method | URI path | Description |
| ----------- | -------- | ----------- |
| POST | /api/users |  Add user to the database |
| GET | /api/users |  Retrieves all users from database |

### Install

```sh
$ cd back-end
$ npm install
```

### Run

```sh
$ npm run dev
```

### Build

```sh
$ npm run build
```

[1innosystems]: http://1innosystems.com/