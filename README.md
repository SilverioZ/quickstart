# Quickstart

A simple one-page React app built with [Create React App](https://create-react-app.dev/), made as a learning project for deploying to [Netlify](https://www.netlify.com/).

## What it is

A single page with:

- A heading and short intro
- An image
- An embedded video
- A short "about" blurb

Nothing fancy — just enough to practice the full workflow: build a React app, push it to GitHub, and deploy it live.

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/quickstart.git
cd quickstart
npm install
```

Run it locally:

```bash
npm start
```

Opens at [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
```

Outputs a static, production-ready build to the `build/` folder.

## Deployment

This app is deployed on **Netlify**.

1. [Import the repo](https://app.netlify.com) as a new site from GitHub
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy

Netlify automatically redeploys on every push to `main`.

## Built with

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [Netlify](https://www.netlify.com/)