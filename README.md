# Pocket Movie App

## Introduction

Hello everyone!  
In this project, you will build our **Pocket Movie App**, where we can keep track of our favorite movies and set up a "Watch Later" list.  
You will use the ReactJS knowledge you accumulated in previous projects to build the interface and display data from an API.

---

## Read or Watch

To help you build the project, here are some essential resources to read or watch:

- [Vite | docs](https://vitejs.dev/guide/)
- React Hooks
- React Font Awesome
- React Router
- Axios
- ES6
- JWT Authentication

---

## Learning Objectives

- Manage state and props in React components  
- Use React hooks to achieve desired behaviors  
- Implement a design using JSX and CSS (React)  
- Build a frontend app with React  

---

## Requirements

- **Class components are NOT allowed** — use function components only  
- A `README.md` file **must** be present at the root of the project folder  
- Try to use ES6 features (e.g. arrow functions, destructuring, async/await)  

---

## Setting up the Backend

### Installing Docker

Follow the steps to install Docker for your operating system here:  
[Docker Installation Guide](https://docs.docker.com/get-docker/)

### Installing Docker Compose

Official documentation for installing Docker Compose:  
[Docker Compose Installation](https://docs.docker.com/compose/install/)

Make sure Docker is running **before proceeding** to the next step.

### Cloning and Running the Backend Server

1. Clone this repository on your local machine.  
2. Open your terminal, navigate to the cloned folder, and run:  
   ```bash
   docker-compose build --no-cache --force-rm
   docker-compose up
