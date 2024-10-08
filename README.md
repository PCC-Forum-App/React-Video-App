# React + TypeScript + Vite

Knowledge Nexus Example Output

<img src="https://github.com/czLad/czLad/assets/111596851/d36dc586-56e2-4ee8-b6d8-275896d427a4" alt="Knowledge Nexus" width="640" height="360"/>

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [TypeScript Configuration](#typescript-configuration)
- [Linting and Formatting](#linting-and-formatting)
- [Building for Production](#building-for-production)
- [License](#license)

## Installation

To get started with this project, ensure you have [Node.js](https://nodejs.org/) installed. Then, clone the repository and install the dependencies:

```bash
git clone https://github.com/PCC-Forum-App/React-Video-App.git
cd your-repository
npm install
```
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
