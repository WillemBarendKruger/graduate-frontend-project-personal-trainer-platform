# FitFusion – Personal Trainer Platform

FitFusion is a modern web application built with Next.js and TypeScript that enables personal trainers to manage their clients, create meal plans, and track nutrition. Clients can view their assigned meal plans and interact with their trainers, making fitness management seamless and collaborative.

---

## 🚀 Features

### For Trainers

- **Register/Login** as a trainer
- **Create and manage clients**
- **Create and manage meal plans** for each client
- **Create and manage food items**
- **View all clients and their details**
- **Assign meal plans to clients**

### For Clients

- **Register** (after being added by a trainer)
- **Login** to the platform
- **View meal plans** assigned by their trainer

### General

- **Role-based authentication and authorization**
- **Responsive UI** with Ant Design
- **Secure JWT-based authentication**
- **Pagination, search, and filtering** for large data sets
- **Modern, clean design** (see [Figma Design](https://www.figma.com/design/WncLFz8mFboK0IhJxDjG6B/Frontend--health-trainer?node-id=0-1&t=4CQbTOb0gUGIBNm6-1))

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, React
- **UI:** Ant Design (v5)
- **State Management:** React Context + Reducer
- **HTTP Client:** Axios
- **Authentication:** JWT (JSON Web Token)
- **Styling:** CSS Modules, Ant Design Style

---

## 📦 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/WillemBarendKruger/graduate-frontend-project-personal-trainer-platform.git
cd graduate-frontend-project-personal-trainer-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and add your backend API URL:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api/
```

_(Adjust the URL to match your backend setup.)_

### 4. Run the project locally

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

### 4. Project hosted at:

[https://graduate-frontend-project-personal.vercel.app/]

---

## 📝 Usage Notes

- **Trainer Registration:** Trainers can register directly from the registration page.
- **Client Registration:** Clients must be added by a trainer before they can register.
- **Role-based Access:** Pages are protected using a custom `withAuth` HOC. Only users with the correct role can access certain routes.
- **Session Management:** JWT tokens are stored in `sessionStorage` for secure authentication.
- **Error Handling:** User-friendly error messages are displayed for failed logins, registrations, and API errors.

---

## 🎨 Design

See the [Figma Design](https://www.figma.com/design/WncLFz8mFboK0IhJxDjG6B/Frontend--health-trainer?node-id=0-1&t=4CQbTOb0gUGIBNm6-1) for UI inspiration and layout.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

\*\*FitFusion – Where fitness meets
