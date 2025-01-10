# ScreenState Snapshot App

Welcome to the **ScreenState Snapshot App**, a cutting-edge web application designed to capture and render the latest state of your data-driven pages using the power of Next.js and server-side rendering (SSR).

## Overview

The ScreenState Snapshot App leverages the robust capabilities of Next.js to deliver a seamless and efficient experience for generating real-time snapshots of web pages. By utilizing server-side rendering, this application ensures that each page is fully rendered on the server before being sent to the client, providing instant readiness for automated tasks such as Selenium screengrabs.

## Key Features

- **Next.js Framework**: Built on top of Next.js, this application benefits from its powerful features, including automatic code splitting, optimized performance, and a simplified routing system.
- **Server-Side Rendering (SSR)**: By rendering pages on the server, the app delivers fully-formed HTML to the client, ensuring fast load times and improved performance, especially for non-interactive pages.

- **Firebase Integration**: Seamlessly integrates with Firebase Realtime Database to fetch and display the latest data, ensuring that your snapshots are always up-to-date.

- **Modular Component Design**: Utilizes a `WidgetRenderer` component to efficiently render individual data items, promoting code reusability and maintainability.

- **Automated Snapshot Capture**: Designed to work with automated tools like Selenium, enabling easy capture of page states for further processing or display on e-paper screens.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
├── app/
│   ├── screenstate/
│   │   ├── [screenstate]/
│   │   │   └── page.tsx
│   └── layout.tsx (if needed for global layout)
├── firebase.ts (Firebase setup)
├── styles/
├── components/
│   └── WidgetRenderer.tsx (Reusable widgets)
└── utils/ (Optional for utility functions)
    └── helper.ts
