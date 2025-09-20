# 📝 Full Stack Todo App

A modern, full-stack todo application built with **Next.js 14**, **React**, **MongoDB**, and **Tailwind CSS**. This project demonstrates complete CRUD operations, server-side rendering, and modern web development practices.

![Todo App Screenshot](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-blue?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- ✅ **Full Stack Application** - Frontend and Backend in one project
- ✅ **CRUD Operations** - Create, Read, Update, Delete todos
- ✅ **Server-Side Rendering (SSR)** - Powered by Next.js 14 App Router
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Real-time Notifications** - Toast messages for user feedback
- ✅ **MongoDB Integration** - Cloud database with Mongoose ODM
- ✅ **API Routes** - RESTful endpoints built with Next.js

## 🛠️ Tech Stack

**Frontend:** Next.js 14, React 18, Tailwind CSS, React Toastify  
**Backend:** Next.js API Routes, Mongoose, Axios  
**Database:** MongoDB Atlas  
**Tools:** ESLint, PostCSS, Autoprefixer

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Avijit-Das2301/my-nextjs-todo-app.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔌 API Endpoints

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | `/api`   | Retrieve all todos   |
| POST   | `/api`   | Create a new todo    |
| PUT    | `/api`   | Update existing todo |
| DELETE | `/api`   | Delete a todo        |

## 💡 Usage

### Adding a Todo

1. Fill in the **Title** field with your task name
2. Add a detailed **Description** in the text area
3. Click the **"Add Todo"** button
4. See success notification and updated todo list

### Managing Todos

- **View**: All todos displayed in a responsive table
- **Update Status**: Click **"Done"** to mark as completed
- **Delete**: Click **"Delete"** to remove a todo

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## 🔧 Available Scripts

```bash
npm run dev    # Development server
npm run build  # Production build
npm start      # Start production server
npm run lint   # Run linting
```

## 📚 What This Project Demonstrates

- Next.js 14 App Router architecture
- React functional components and hooks
- MongoDB database integration
- RESTful API development
- Modern CSS with Tailwind CSS
- Full-stack JavaScript development
