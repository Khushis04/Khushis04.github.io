# Khushi Singh — Full-Stack Portfolio

This is my personal full-stack developer portfolio.  
The project includes a React + Vite frontend and a Node.js + Express + MongoDB backend.  
It contains an about section, project listings, a contact form, and basic visitor tracking.

---

## Features

- Responsive UI built with React and Vite  
- Projects section automatically pulled from GitHub  
- Contact form connected to a Node.js backend  
- MongoDB database for storing messages  
- Simple visitor tracking endpoint  
- Modular component-based structure  

---

## Folder Structure

```
Khushis04.github.io/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Navbar, Hero, About, Projects, Contact, Footer
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Backend (Express + MongoDB)
    ├── index.js
    ├── models/
    ├── package.json
    └── .env
```

---

## Requirements

Make sure you have the following installed:

- Node.js (version 18 or above)
- npm
- MongoDB Atlas (or a local MongoDB instance)
- Git

---

## Running the Project Locally

This project has two parts:  
1. Backend server  
2. Frontend client  

They need to be started separately.

---

### 1. Clone the repository

```bash
git clone https://github.com/Khushis04/Khushis04.github.io.git
cd Khushis04.github.io
```

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the server:

```bash
npm start
```

You should see:

```
Server running on port 5000
MongoDB Connected
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

You will get a link similar to:

```
http://localhost:5173/
```

Open it in your browser.

---

## API Endpoints

### POST /api/track
Records a page visit.

### POST /api/contact
Stores contact form data.  
Expected format:

```json
{
  "name": "Example Name",
  "email": "email@example.com",
  "message": "Your message here"
}
```

---

## GitHub Projects Integration

The `Projects` component fetches all public repositories from my GitHub account using:

```
https://api.github.com/users/Khushis04/repos
```

It displays each repo’s:

- name  
- description  
- GitHub link  

If a repo has no description on GitHub, a default message is shown.

---
Build command:

```bash
npm run build
```

The production files will be in:

```
client/dist/
```

Make sure to configure the `MONGO_URI` environment variable.

---


