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
- ✅ **Modern UI/UX** - Clean and intuitive interface
- ✅ **Client & Server Components** - Optimized rendering strategy

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **React 18** - UI library for building components
- **Tailwind CSS** - Utility-first CSS framework
- **React Toastify** - Toast notification library

### Backend

- **Next.js API Routes** - Server-side API endpoints
- **Mongoose** - MongoDB object modeling library
- **Axios** - HTTP client for API requests

### Database

- **MongoDB Atlas** - Cloud NoSQL database

### Development Tools

- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- MongoDB Atlas account
- Git

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/nextjs-todo-app.git
   cd nextjs-todo-app
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

   Replace `your_mongodb_atlas_connection_string` with your actual MongoDB Atlas URI.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
nextjs-todo-app/
├── app/
│   ├── api/
│   │   └── route.js          # API endpoints
│   ├── globals.css           # Global styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page component
├── components/
│   ├── Navbar.jsx           # Navigation component
│   └── Todo.jsx             # Individual todo item component
├── lib/
│   └── config/
│       └── db.js            # Database connection
├── public/                  # Static assets
├── .env.local              # Environment variables
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind configuration
└── README.md               # Project documentation
```

## 🔌 API Endpoints

### Base URL: `/api`

| Method | Endpoint | Description          |
| ------ | -------- | -------------------- |
| GET    | `/api`   | Retrieve all todos   |
| POST   | `/api`   | Create a new todo    |
| PUT    | `/api`   | Update existing todo |
| DELETE | `/api`   | Delete a todo        |

### Request/Response Examples

**POST** `/api` - Create Todo

```json
{
  "title": "Learn Next.js",
  "description": "Complete the Next.js 14 tutorial"
}
```

**Response**

```json
{
  "success": true,
  "message": "Todo created successfully",
  "todo": {
    "_id": "...",
    "title": "Learn Next.js",
    "description": "Complete the Next.js 14 tutorial",
    "status": "pending",
    "createdAt": "..."
  }
}
```

## 💡 Usage

### Adding a Todo

1. Fill in the **Title** field with your task name
2. Add a detailed **Description** in the text area
3. Click the **"Add Todo"** button
4. See success notification and updated todo list

### Managing Todos

- **View**: All todos are displayed in a responsive table
- **Update Status**: Click **"Done"** to mark as completed
- **Delete**: Click **"Delete"** to remove a todo
- **Status Tracking**: Visual indicators for pending/completed tasks

## 🎨 Key Components

### Client Components

- **Todo Form** - Handles user input and form submission
- **Todo List** - Displays todos with interactive buttons
- **Toast Notifications** - Provides user feedback

### Server Components

- **Navbar** - Static navigation (rendered server-side)
- **Layout** - Root application structure
- **Page** - Main application container

## 🔧 Development Features

### State Management

- React hooks (`useState`, `useEffect`) for local state
- Form data handling with controlled components
- Real-time UI updates

### Styling Approach

- **Tailwind CSS** utility classes
- **Responsive design** with mobile-first approach
- **Flexbox layouts** for component positioning
- **Custom styling** for form elements and buttons

### Error Handling

- Try-catch blocks for API calls
- Toast notifications for success/error states
- Form validation and user feedback

## 🌐 Database Schema

### Todo Model

```javascript
{
  title: String (required),
  description: String (required),
  status: String (default: "pending"),
  createdAt: Date (default: Date.now),
  updatedAt: Date
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production

```env
MONGODB_URI=your_production_mongodb_uri
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📚 Learning Resources

This project covers:

- Next.js 14 App Router architecture
- React functional components and hooks
- MongoDB database integration
- RESTful API development
- Modern CSS with Tailwind
- Full-stack JavaScript development

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for hosting and deployment platform
- **MongoDB** for the database solution
- **Tailwind CSS** for the utility-first CSS framework

## 📞 Contact

**Your Name** - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

**Project Link**: [https://github.com/your-username/nextjs-todo-app](https://github.com/your-username/nextjs-todo-app)

**Live Demo**: [https://your-todo-app.vercel.app](https://your-todo-app.vercel.app)

---

⭐ **Star this repository if it helped you learn Next.js full-stack development!**

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📱 Screenshots

_Add your application screenshots here to showcase the UI_

---

Built with ❤️ using **Next.js 14** | Perfect for **interviews** and **portfolio projects**
