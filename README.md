# Concetto'26 — IIT (ISM) Dhanbad

<p align="center">
  <strong>Official Website of Concetto, IIT (ISM) Dhanbad</strong>
</p>

<p align="center">
  A modern, responsive web platform for one of the premier technical festivals of IIT (ISM) Dhanbad.
</p>

---

## About

**Concetto** is the annual technical festival of **IIT (ISM) Dhanbad**, bringing together students, developers, innovators, and technology enthusiasts through a wide range of technical, competitive, and engaging events.

This repository contains the source code for the **Concetto website**, designed to provide participants with information about the fest, events, schedule, teams, sponsors, and other important updates.

## Features

* Modern and responsive UI
* Event discovery and information
* Event schedules
* Team and organizer information
* Sponsors section
* Fest updates and announcements
* Responsive navigation
* Reusable React components
* Optimized Next.js application
* Mobile, tablet, and desktop support

## Tech Stack

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| **Next.js**    | React framework and application architecture |
| **JavaScript** | Application logic                            |
| **Vercel**     | Deployment                                   |

## Project Structure

```text
Concetto/
├── app/                  # Next.js app routes and pages
├── components/           # Reusable UI components
├── data/                 # Static/event-related data
├── public/               # Images, icons and other static assets
├── styles/               # Global and custom styles
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── eslint.config.mjs     # ESLint configuration
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 18+
* npm

### 1. Clone the repository

```bash
git clone https://github.com/UtkarshBajpai-1929/Concetto.git
cd Concetto
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The website will be available at:

```text
http://localhost:3000
```

The application uses Next.js development mode, so changes made to the source code are automatically reflected during development.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs ESLint to check the codebase for potential issues.

## Development

Most application pages and routes are located inside the `app/` directory, while reusable UI elements are maintained inside `components/`.

For static assets such as images, icons, and other public resources, use the `public/` directory.

When adding a new feature:

1. Create or update the appropriate route inside `app/`.
2. Create reusable UI components inside `components/`.
3. Keep static data inside `data/`.
4. Add required assets to `public/`.
5. Follow the existing styling and component patterns.
6. Run linting and build checks before submitting changes.

## Production Build

To create a production build:

```bash
npm run build
```

Then start the application:

```bash
npm run start
```

## Deployment

The project can be deployed using **Vercel**, which provides native support for Next.js applications.

### Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Select the project.
4. Configure environment variables if required.
5. Deploy.

The application is currently associated with a Vercel deployment:

**Live Website:** [Link](https://concetto-ashen.vercel.app/)


## License

This project is maintained for the Concetto technical festival of IIT (ISM) Dhanbad.

---

<p align="center">
  Built for <strong>Concetto'26 — IIT (ISM) Dhanbad</strong>
</p>
