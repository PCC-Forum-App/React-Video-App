# React + TypeScript + Vite

Knowledge Nexus Example Output

<img src="https://github.com/czLad/czLad/assets/111596851/d36dc586-56e2-4ee8-b6d8-275896d427a4" alt="Knowledge Nexus" width="640" height="360"/>

This project is a React application configured with TypeScript and built using Vite, providing a fast development environment and modern module resolution. The project follows strict TypeScript rules and includes bundling optimizations for production.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [TypeScript Configuration](#typescript-configuration)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/PCC-Forum-App/React-Video-App.git
   ```
2. Navigate to the project directory:

   ```bash
   cd PCC-Forum-App/React-Video-App.git
   ```
3. Install the project dependencies:

   ```bash
   npm install
   ```
This will install all required dependencies listed in package.json, including Vite, TypeScript, React, and others.

## Scripts
Here are the most commonly used scripts for this project:

- Start Development Server:

```bash
npm run dev
```
Starts the Vite development server. The application will be available at http://localhost:5173.

- Build for Production:

```bash
npm run build
```
Bundles and optimizes the application for production. The output will be in the dist/ directory.

- Preview Production Build:

```bash
npm run preview
```
Serves the production build locally to test before deploying.

## Project Structure
Here’s the general structure of the project:

```graphql
.
├── public/                 # Static assets (e.g., favicon, images)
├── src/                    # Main source code
│   ├── assets/             # Additional images, styles, etc.
│   ├── components/         # React components
│   ├── App.tsx             # Main app component
│   └── main.tsx            # React entry point
├── tsconfig.json           # TypeScript configuration for the project
├── tsconfig.node.json      # TypeScript configuration for Vite
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```
Key Files:
- tsconfig.json: Main TypeScript configuration for compiling the code.
- vite.config.ts: Vite configuration, defining build settings and plugins.
- tsconfig.node.json: TypeScript configuration specifically for Vite’s vite.config.ts.
- package.json: Project's dependencies and scripts.
## TypeScript Configuration
The project uses the following tsconfig.json settings:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
- Target Environment: ES2020 with support for modern JavaScript and JSX (for React).
- Strict Mode: TypeScript's strict mode is enabled, enforcing strong typing and catching common bugs early.
- Module Resolution: Vite's bundler mode is used for efficient module loading and modern bundling.

Vite TypeScript Config
The tsconfig.node.json is used for Vite’s internal TypeScript needs:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

## Running the Project
After installing the dependencies, you can run the development server by using:

```bash
npm run dev
```
The development server will start, and your application will be available at http://localhost:5173. Any changes made to the source files will automatically reload the page.

## Building for Production
To build the project for production, run:
```bash
npm run build
```
This will create an optimized version of your application in the dist/ directory. The production build is minified and includes all necessary optimizations to be deployed on a web server.

## License
This project is licensed under the MIT License.
