RUN PROJECT

1. Download files from https://github.com/vercel/next-learn.git
2. Copy previous downloaded files in the root directory
3. $ git init
4. Inside docker environment (eg: docker): $ pnpm config set store-dir /root/.local/share/pnpm/store
5. docker $ pnpm install
6. docker $ pnpm add -D typescript @types/react @types/node

7.  https://docs.fontawesome.com/v5/web/use-with/react/
8. 
pnpm add @fortawesome/fontawesome-svg-core
pnpm add @fortawesome/free-solid-svg-icons
pnpm add @fortawesome/react-fontawesome

INFO

    "scripts": {
        "build": "next build", // This script compiles your Next.js application for production. It optimizes the code, bundles the files, and prepares everything for deployment
        "dev": "next dev", // This script runs the Next.js development server. It provides features like hot-reloading, allowing you to see changes immediately as you develop; Use `pnpm dev` (or `npm run dev`) to start the development server.
        "start": "next start" // This script runs the production build of your Next.js application. You use this command after running next build to start the server in production mode.
    },

pnpm next dev
