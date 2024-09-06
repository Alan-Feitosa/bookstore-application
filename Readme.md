# Bookstore Application

## Overview

This is a comprehensive bookstore application developed using modern technologies and architectural principles. The project leverages **Node.js**, **Express**, **MongoDB**, **JWT** for authentication, **TypeScript**, **Vite**, **React.js** with **TSX**, and **Tailwind CSS** for styling. It is containerized using **Docker** and follows a solid architectural design to ensure scalability and maintainability.

## Technologies Used

- **Backend**: Node.js, Express, MongoDB, TypeScript, JWT
- **Frontend**: React.js, Vite, Tailwind CSS, TSX
- **Docker**: Containerization
- **Architecture**: Solid principles

## Features

- **JWT Authentication**: Secure user authentication and authorization.
- **Dockerized**: Easy deployment and scaling with Docker.
- **TypeScript**: Type safety and better development experience.
- **Vite**: Fast and modern build tool for the frontend.
- **Tailwind CSS**: Utility-first CSS framework for fast styling.
- **Solid Architecture**: Ensures scalability and maintainability.

## Getting Started

### Prerequisites

- Node.js
- Tailwindcss
- Typescript.js
- Vite.js
- Docker
- Docker Compose
- Yarn or NPM

### Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/alan-feitosa/bookstore-application.git
   cd bookstore-application
   ``` 

2. **Create a .env File**

Create a .env file in the root directory with the following content:

MONGO_URI=mongodb://mongo:27017/Books
PORT=5050
REACT_APP_API_URL=http://backend:5050

3. **Build and Run with Docker**


    ```bash
    docker compose up --build -d
    ```

**Directory Structure**
bookstore-application/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.ts
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.tsx
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── .env
└── README.md

## Usage
Backend: The backend server runs on port 5050 and handles API requests, connects to MongoDB, and manages JWT authentication.
Frontend: The frontend application runs on port 5173 and communicates with the backend via the API.

## Configuration
Backend Configuration: Modify server.ts in the backend directory to adjust backend settings and routes.
Frontend Configuration: Modify App.tsx and other files in the frontend directory for UI and component adjustments.

## Contributing
Feel free to contribute to the project by submitting issues, feature requests, or pull requests. Please follow the guidelines and best practices for contributing to ensure a smooth collaboration process.

Author
Alan Feitosa

### Notes:
- **Replace** `https://github.com/yourusername/bookstore-application.git` with the actual URL of your repository.
- **Replace** `https://github.com/Alan-Feitosa` with your actual GitHub profile URL.
- Make sure the directory structure and filenames match your actual project setup.
- Adjust the usage and configuration sections based on your specific implementation details.