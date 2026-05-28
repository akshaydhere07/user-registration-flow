# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Note:

# User Registration Flow Web Application

## App Overview

This project is a multi-step User Registration Flow Web Application developed using React.js.

The application includes:

* Company Verification
* User Details Submission
* OTP Verification
* Profile Completion
* Interest Selection
* Wellbeing Pillars Selection
* Registration Completion
* Welcome Screen

The project focuses on:

* Clean architecture
* Reusable components
* Responsive UI
* Validation handling
* Async API flow simulation
* Maintainable code structure

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/akshaydhere07/user-registration-flow.git
```

---

## 2. Move To Project Folder

```bash
cd user-registration-flow
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

## 5. Open In Browser

```bash
http://localhost:5173
```

---

# Libraries / Tools Used

| Library / Tool   | Purpose                    |
| ---------------- | -------------------------- |
| React.js         | Frontend Library           |
| React Router DOM | Routing & Navigation       |
| React Hook Form  | Form Validation            |
| Tailwind CSS     | Styling                    |
| Lucide React     | Icons                      |
| Vite             | Build Tool                 |
| Local Storage    | Temporary Data Persistence |
| GitHub           | Version Control            |
| Netlify / Vercel | Deployment                 |

---

# Folder Structure

```bash
src/
│
├── assets/
│   ├── images
│   ├── icons
│   └── videos
│
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Step1.jsx
│   ├── Step2.jsx
│   ├── Step3.jsx
│   ├── Step4.jsx
│   ├── Step5.jsx
│   ├── Step6.jsx
│   ├── Step7.jsx
│   └── Welcome.jsx
│
├── api/
│   └── authApi.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Screenshots of Each Step

## Step 1 — Verify Company Name & Password

---

## Step 2 — Save User Details

---

## Step 3 — OTP Verification

---

## Step 4 — Complete Profile

---

## Step 5 — Interest Selection

---

## Step 6 — Wellbeing Pillars

---

## Step 7 — Registration Completion

---

## Step 8 — Welcome Screen

---

# Deployment Instructions

## Build Project

```bash
npm run build
```

---

## Deploy On Netlify

1. Push code to GitHub
2. Login to Netlify
3. Import GitHub Repository
4. Add Build Settings:

### Build Command

```bash
npm run build
```

### Publish Directory

```bash
dist
```

5. Click Deploy

---

# Assumptions

* Since the provided development APIs returned:

```txt
405 Method Not Allowed
```

and appeared to be routed through AWS S3/CloudFront instead of backend API services, mocked async API flows were implemented temporarily.

* Axios/API integration structure, loading states, validations, and error handling logic were preserved to maintain proper frontend architecture.

* Any 6-digit OTP is accepted for demo purposes.

---

# Timeline Followed

The complete assignment was developed and completed within the provided timeline:


48 Hours

---

# Features Implemented

* Multi-step onboarding flow
* Responsive design
* Form validations
* Password validations
* OTP UI handling
* Auto focus OTP inputs
* Async loading states
* Error handling
* Local storage persistence
* Conditional navigation
* Modern UI design
* Video loader animation
* Mobile responsive layouts

---

# Live Demo

https://userwflow.netlify.app/

---

# GitHub Repository

https://github.com/akshaydhere07/user-registration-flow.git

