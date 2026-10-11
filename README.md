# 🛒 Ecommerce-APP

A full-stack e-commerce web application built from scratch with the **MERN stack** (MongoDB, Express.js, React, Node.js). The project uses a decoupled architecture: a REST API backend and a React single-page frontend that communicate over HTTP with a secured CORS configuration.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Libraries Used](#-libraries-used)
- [Project Structure](#-project-structure)
- [CORS Configuration](#-cors-configuration)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Scripts](#-scripts)
- [Author](#-author)

---

## ✨ Features

- **User authentication:** registration, login, and a current-user endpoint, secured with JSON Web Tokens
- **Password security:** passwords hashed with bcryptjs
- **Protected routes:** token verification middleware on the backend
- **Product management:** create, read, update, and delete products through REST endpoints
- **Image uploads:** product images handled with Multer and served statically from `/uploads`
- **Validation:** Joi on the server and joi-browser on the client
- **Global state:** Redux Toolkit slices and services for auth and products
- **Storefront UI:** Home page, product cards, product slider, product detail view, and pagination
- **Dashboard:** dedicated Dashboard screen and Product Form
- **Reusable components:** Button, TextField, Card, Navbar, Footer, Spinner, and a custom 404 page
- **Central error handling:** one error middleware for the whole API

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Redux Toolkit, React Router v6, Axios, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB with Mongoose |
| Authentication | JWT, bcryptjs |
| File uploads | Multer |
| Tooling | Nodemon, Concurrently, Git & GitHub |

---

## 📦 Libraries Used

### Backend

| Package | Purpose |
|---------|---------|
| `express` | Web server and routing |
| `mongoose` | MongoDB object modeling |
| `jsonwebtoken` | Generate and verify JWTs |
| `bcryptjs` | Password hashing |
| `joi` | Request validation |
| `multer` | Multipart form handling for image uploads |
| `cors` | Cross-origin request control |
| `dotenv` | Environment variable loading |
| `body-parser` | Parse JSON and URL-encoded request bodies |
| `express-async-handler` | Async error handling in controllers |
| `uuid` | Unique file names for uploaded images |
| `nodemon` *(dev)* | Auto-restart server during development |
| `concurrently` *(dev)* | Run backend and frontend with one command |

### Frontend

| Package | Purpose |
|---------|---------|
| `react`, `react-dom` | UI library |
| `react-scripts` | Create React App build tooling |
| `@reduxjs/toolkit`, `react-redux` | Global state management |
| `react-router-dom` | Client-side routing |
| `axios` | HTTP requests to the API |
| `joi-browser` | Client-side form validation |
| `react-icons` | Icon set |
| `web-vitals` | Performance metrics |
| `@testing-library/*` | React testing utilities |

---

## 🗂 Project Structure

```
Ecommerce-APP/
├── index.js                        # Express server entry point
├── package.json
├── uploads/                        # Uploaded product images
│
├── backend/
│   ├── config/
│   │   ├── allow_origin.js         # Whitelist of allowed origins
│   │   ├── cors_options.js         # CORS rules
│   │   └── db_connection.js        # MongoDB connection
│   ├── controllers/
│   │   ├── product_handlers.js/    # create, get, update, delete product
│   │   └── user_controllers/       # register, login, current user
│   ├── middlewares/
│   │   ├── credentials.js          # Allows credentials for whitelisted origins
│   │   ├── error.js                # Central error handler
│   │   ├── tokens.js               # Token generation
│   │   └── verifyTokens.js         # Token verification
│   ├── models/                     # product_model, user_model
│   ├── routes/
│   │   ├── auth_routes/            # user_routes
│   │   └── product_routes/         # product_route
│   └── validations/                # user_validations (Joi)
│
└── frontend/
    ├── public/                     # index.html, icons, static images
    └── src/
        ├── axios/                  # Configured Axios instance
        ├── components/             # Reusable UI components
        ├── css/                    # Stylesheets per component/screen
        ├── redux/
        │   ├── features/           # authSlice, productSlice
        │   └── services/           # authService, productService, store
        └── screens/                # Home, Login, Register, Dashboard,
                                    # ProductForm, Pagination
```

---

## 🔒 CORS Configuration

The frontend (`localhost:3000`) and backend (`localhost:4000`) run on different origins, so cross-origin requests are blocked by browsers by default. This project solves it in three layers:

1. **Origin whitelist** (`allow_origin.js`): only approved origins, currently `http://localhost:3000`, are allowed.
2. **CORS options** (`cors_options.js`): the `cors` package checks every request's origin against the whitelist and rejects unknown sites with an error. Preflight requests return status `200`.
3. **Credentials middleware** (`credentials.js`): for whitelisted origins it sets the `Access-Control-Allow-Credentials` header, so credentials can be sent with requests. It runs before the CORS middleware in `index.js`.

On the client, the Axios instance sets `withCredentials: true` to match.

To deploy the app, add your production frontend URL to `allow_origin.js`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/M-Ahmad443/Ecommerce-APP.git
cd Ecommerce-APP

# 2. Install backend dependencies
npm install

# 3. Install frontend dependencies
cd frontend
npm install
cd ..
```

### Run the app

```bash
npm start
```

This starts the backend and the React frontend together.

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

> `PORT` must be `4000` to match the Axios base URL (`http://localhost:4000/api/v1/`). Never commit your `.env` file.

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run backend and frontend together |
| `npm run server` | Run the backend only (Nodemon) |
| `npm run client` | Run the frontend only |

---

## 👤 Author

**M-Ahmad443**
GitHub: [@M-Ahmad443](https://github.com/M-Ahmad443)
