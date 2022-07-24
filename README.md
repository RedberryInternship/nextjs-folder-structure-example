# Redberry knights cup
... REST OF README

# Project structure

```sh
.env.example
.eslintrc.json
.gitignore
.prettierrc.json
components
   |-- folder-with-page-name #[camelCase]
   |   |-- component-folder #[PascalCase]
   |   |   |-- component-jsx-file.tsx #[PascalCase]
   |   |   |-- index.ts
   |   |   |-- helpers.ts #[OPTIONAL]
   |   |   |-- types.d.ts #[OPTIONAL]
   |   |   |-- component-hook-file.tsx #[camelCase]
   |-- index.ts
   |-- shared
   |   |-- component-folder #[PascalCase]
   |   |   |-- component-jsx-file.tsx #[PascalCase]
   |   |   |-- index.ts
   |   |   |-- helpers.ts #[OPTIONAL]
   |   |   |-- types.d.ts #[OPTIONAL]
   |   |   |-- component-hook-file.tsx #[camelCase]
   |   |-- index.ts
   |-- icons
   |   |-- index.ts
   |   |-- icon-name.tsx
helpers
   |-- [helper-file-name].ts
   |-- index.ts
next-env.d.ts
next.config.js
package-lock.json
package.json
pages
   |-- _app.tsx
   |-- page-name.tsx
postcss.config.js
public
   |-- assets
   |   |-- file.{anything}
   |-- favicon.ico
   |-- vercel.svg
schemas
   |-- file-name.ts
   |-- index.ts
services
   |-- axios.ts
   |-- index.ts
styles
   |-- globals.css
tailwind.config.js
tsconfig.json
types
   |-- index.ts
   |-- module-file.d.ts

```