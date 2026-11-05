# Raushan Kumar — Portfolio

Live site: https://raushan-shrma.github.io/raushan_portfolio/

The React, TypeScript, Vite, and Tailwind CSS application source is in [`source/`](./source/).
The repository root contains the static files served by GitHub Pages.

## Run the application locally

```powershell
Set-Location source
npm install
npm run dev
```

## Build and publish an update

```powershell
Set-Location source
npm install
npm run build
Copy-Item .\dist\* ..\ -Recurse -Force
```

Commit and push the updated root build to the `main` branch to publish it.
