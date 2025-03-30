# Node MVC Service Repo (Classical Architecture)
## Project Overview

This is a Node.js starter app following the Classical Architecture Pattern with:

- Express.js as the web framework

- Sequelize ORM for MySQL database interactions

- Layered structure (Controller → Service → Repository → Model)

- Middleware for authentication using JWT

## Folder Structure

```bash
/starter-app
├── /src
│   ├── /config
│   │   ├── db.js  # Database configuration
│   ├── /helper
│   │   ├── syncDB.js  # Database migration
│   ├── /middlewares
│   │   ├── authMiddleware.js  # Example authentication middleware
│   ├── /models
│   │   ├── userModel.js  # Sequelize User model
│   ├── /repositories
│   │   ├── userRepository.js  # Handles DB queries
│   ├── /services
│   │   ├── userService.js  # Business logic layer
│   ├── /controllers
│   │   ├── userController.js  # Handles API requests
│   ├── /routes
│   │   ├── userRoutes.js  # API route definitions
│   ├── app.js  # Main Express app
├── package.json
└── package-lock.json
└── README.md
└── .env
└── .gitignore
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-repo/starter-app.git
cd starter-app
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a .env file in the root directory and add: (follow env.example strongly)

```bash
PORT=3000
SERVER_TYPE=local

MY_DB=MY_DB
DB_USER=root
DB_PASS=
DB_HOST=127.0.0.1

```

### Run Database Migrations

```bash
npm run migrate
```

### Start the Server

```bash
npm run dev  # or nodemon ./src/app.js
npm run start  # or node ./src/app.js
```

## Tech Stack

- Node.js + Express.js

- MySQL with Sequelize ORM

- JWT Authentication (if implemented)

- MVC + Service/Repository Pattern

