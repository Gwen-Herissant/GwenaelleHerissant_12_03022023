# SportSee — Sports Analytics Dashboard (Frontend)

A sports analytics dashboard featuring advanced data visualizations built with React, as part of a front-end development training program.

> This is the **frontend** repository. It must be run alongside the [backend repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).

## Project Overview

This project was completed as part of a structured front-end development curriculum. The goal was to build a user profile dashboard for a sports coaching app, integrating data fetched from a REST API and displaying it through interactive charts and diagrams.

A key requirement of the project was **code documentation** — writing JSDoc comments, defining PropTypes, and maintaining a clear README to ensure the codebase is understandable and team-ready.

## Objectives

- Build a data-driven dashboard with React
- Integrate advanced charts and diagrams using a JavaScript charting library
- Fetch and handle data from a REST API with Axios/Fetch
- Document the codebase with JSDoc and PropTypes

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

## Key Features

- **User profile page** — personalized dashboard displaying activity, sessions, performance and daily score
- **Data visualizations** — bar chart, line chart, radar chart and radial chart built with Recharts
- **API integration** — data fetched from a local REST API
- **Responsive layout** — optimized for screens 1024x780 and larger
- **Code documentation** — JSDoc, PropTypes

## What I Learned

- Building a complex, data-driven UI with React
- Creating custom charts with Recharts
- Managing HTTP requests and handling API responses
- Documenting a React codebase with JSDoc and PropTypes

## Context

This project is part of the **OpenClassrooms Front-End Developer** curriculum. It builds on React fundamentals by introducing API integration, data visualization, and professional code documentation practices.

---

## Getting Started

### Prerequisites

- NodeJS (version 12.18)
- Yarn or npm
- The [backend repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) must be running first

> If you manage multiple Node versions, [nvm](https://github.com/nvm-sh/nvm) is recommended.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
cd P9-front-end-dashboard
npm install
```

Start the app:

```bash
npm start
```

The app is available at: `http://localhost:3000`

> If port 3000 is already in use, press `Enter` when prompted to use another port.

## Viewing the Dashboard

The index page will return an error — navigate directly to a user profile:

- `http://localhost:3000/user/12`
- `http://localhost:3000/user/18`

> Only users with IDs **12** and **18** are available in the mocked API.

## Responsive

The page is responsive for screens **1024x780 and larger**. Part of the responsive layout is handled via JavaScript — reload the page after resizing your browser to see the updated layout.
