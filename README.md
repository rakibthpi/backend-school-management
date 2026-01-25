# School Management System - Backend

A comprehensive backend system for managing students, faculty, administrators, and academic semesters. Built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Key Features

- **User Management**: Unified user system with roles (Student, Faculty, Admin).
- **Student Module**: Complete student profile management including academic history and guardian details.
- **Faculty & Admin Modules**: Role-specific management and permissions.
- **Academic Management**:
  - Academic Semesters (Autumn, Summer, Fall) with year/code validation.
  - Academic Departments.
  - Admission Semesters.
- **Authentication**: Secure JWT-based authentication and role-based access control.
- **Validation**: Robust data validation using Zod schemas.
- **Transaction & Rollback**: Safe database operations using Mongoose transactions.

## 🛠 Technology Stack

- **Core**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Security**: [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) & [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- **Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (Local or Atlas)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## ⚙️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd first
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/school-management
   DEFAULT_PASS=password123
   BCRYPT_SALT_ROUNDS=12
   JWT_ACCESS_SECRET=your_access_secret
   JWT_REFRESH_SECRET=your_refresh_secret
   JWT_ACCESS_EXPIRES_IN=1d
   JWT_REFRESH_EXPIRES_IN=30d
   ```

4. **Start the development server**:
   ```bash
   npm run start:dev
   ```

## 🛣 API Endpoints Reference

Base URL: `http://localhost:5000/api/v1`

### Authentication

| Method | Endpoint                | Description                  |
| :----- | :---------------------- | :--------------------------- |
| POST   | `/auth/login`           | Login and receive JWT tokens |
| POST   | `/auth/change-password` | Change user password         |
| POST   | `/auth/refresh-token`   | Get new access token         |

### Users (Admin Only)

| Method | Endpoint                | Description                 |
| :----- | :---------------------- | :-------------------------- |
| POST   | `/users/create-student` | Create a new student        |
| POST   | `/users/create-faculty` | Create a new faculty member |
| POST   | `/users/create-admin`   | Create a new admin          |

### Students

| Method | Endpoint        | Description                     |
| :----- | :-------------- | :------------------------------ |
| GET    | `/students`     | Get all students (with filters) |
| GET    | `/students/:id` | Get single student by ID        |
| PATCH  | `/students/:id` | Update student profile          |
| DELETE | `/students/:id` | Soft delete student             |

### Academic Management

| Module          | GET (All)               | POST (Create)                                      |
| :-------------- | :---------------------- | :------------------------------------------------- |
| **Semesters**   | `/academic-semesters`   | `/academic-semesters/create-academic-semester`     |
| **Departments** | `/academic-departments` | `/academic-departments/create-academic-department` |
| **Admissions**  | `/admission-semesters`  | `/admission-semesters/create-admission-semester`   |

---

## 🏗 Project Structure

```text
src/
├── app/
│   ├── config/             # Environment configurations
│   ├── modules/            # Feature modules (Student, User, etc.)
│   │   ├── student/        # Component-based logic
│   │   ├── ...
│   ├── middlewares/        # Custom Express middlewares
│   ├── routes/             # Unified route registration
│   ├── utils/              # Helper functions (sendResponse, etc.)
│   └── app.ts              # Express application setup
├── server.ts               # Server entry point
└── ...
```

## 📜 Available Scripts

- `npm run start:dev`: Run development server using `tsx`.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm run lint`: Run linting and formatting.
- `npm run format`: Format code using Prettier.
