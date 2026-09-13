# HDFC Life Advisor Portal

A Next.js 14 web application built as an Advisor Portal for managing policies, viewing claims, filing new claims, and accessing a protected Advisor Desk.

The project demonstrates Next.js Pages Router concepts including Static Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), Catch-All Routes, Optional Catch-All Routes, API Routes, Middleware, NextAuth.js authentication, Formik, and Yup validation.

---

## 🚀 Tech Stack

- Next.js 14
- React
- JavaScript
- Tailwind CSS
- NextAuth.js v4
- Formik
- Yup
- Node.js
- JSON seed data
- Git & GitHub

---

## 📋 Features

### Policy Management

- View all available policies
- Static Generation using `getStaticProps`
- ISR with a 60-second revalidation period
- Dynamic policy detail pages
- Static paths using `getStaticPaths`
- Dynamic category filtering
- Catch-All Routes

### Claims Management

- View all claims
- Server-Side Rendering using `getServerSideProps`
- File a new claim
- Formik form handling
- Yup validation
- Field-level validation errors
- No network API required for claim submission

### Authentication

- NextAuth.js v4
- Credentials authentication
- Google authentication
- JWT-based session strategy
- Protected Advisor Desk
- Middleware-based route protection
- Logout functionality

### Revalidation

- Custom Next.js API route for on-demand ISR revalidation
- Secret-based authorization

---

## 📁 Project Structure

hdfc-life-advisor-portal/
│
├── data/
│   ├── policies.json
│   └── claims.json
│
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth].js
│   │   └── revalidate.js
│   │
│   ├── auth/
│   │   └── signin.js
│   │
│   ├── claims/
│   │   ├── index.js
│   │   └── new.js
│   │
│   ├── desk/
│   │   └── index.js
│   │
│   ├── docs/
│   │   └── [[...slug]].js
│   │
│   ├── policies/
│   │   ├── category/
│   │   │   └── [...slug].js
│   │   ├── [id].js
│   │   └── index.js
│   │
│   ├── _app.js
│   ├── _document.js
│   └── index.js
│
├── public/
│
├── styles/
│   └── globals.css
│
├── middleware.js
├── .env.local.example
├── .gitignore
├── package.json
└── README.md

## To run project
# npm run dev
