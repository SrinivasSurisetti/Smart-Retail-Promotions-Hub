# Deploying to Vercel

This guide will walk you through deploying the frontend of the Smart Retail Promotions Hub to Vercel.

## Vercel Configuration

When you import your project from GitHub into Vercel, Vercel will attempt to automatically configure the project settings. Here are the settings you should ensure are correct for a successful deployment.

1.  **Framework Preset**:

    - Vercel should automatically detect **Vite**. If not, select it from the dropdown menu.

2.  **Root Directory**:

    - Set this to `frontend`. This tells Vercel that your application's source code and configuration files are located in the `frontend` directory within your repository.

3.  **Build and Output Settings**:
    - **Build Command**: Change the default or detected command to `npm run build`. This command will trigger Vite to create an optimized, production-ready build of your application.
    - **Output Directory**: This should be set to `dist`. This is the directory where Vite places the production build files, and Vercel needs to know where to find them.
    - **Install Command**: You can leave this to the Vercel default (e.g., `yarn install`, `pnpm install`, `npm install`, or `bun install`). Vercel will automatically detect your `package.json` and use `npm install`.

## Summary of Settings

| Field                | Value            |
| -------------------- | ---------------- |
| **Framework Preset** | `Vite`           |
| **Root Directory**   | `frontend`       |
| **Build Command**    | `npm run build`  |
| **Output Directory** | `dist`           |
| **Install Command**  | (Vercel Default) |

After confirming these settings, you can click the "Deploy" button, and Vercel will start the build and deployment process.
