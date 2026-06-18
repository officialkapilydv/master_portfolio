<h2 align="center">
  Kapil Yadav — Portfolio Website
</h2>

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-brightgreen)](https://officialkapilydv.github.io/master_portfolio)
[![React](https://img.shields.io/badge/React-17-blue?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

<h3 align="center">
  <a href="https://github.com/officialkapilydv/my-portfolio/issues">Report Bug</a> &nbsp;|&nbsp;
  <a href="https://github.com/officialkapilydv/my-portfolio/issues">Request Feature</a>
</h3>

---

## About

Personal portfolio website for **Kapil Yadav**, a Full-Stack Software Engineer based in Haryana, India. Currently working at BusyWizzy Technology Solutions, specialising in React.js, Laravel, Drupal, and PHP. This site showcases skills, projects, and resume in an interactive, animated single-page experience.

---

## Features

- **Multi-Page Layout** — Home, About, Projects, and Resume sections
- **Animated Hero** — Typewriter effect with particle background
- **Parallax Avatar Tilt** — Interactive avatar using react-parallax-tilt
- **GitHub Activity Calendar** — Live contribution graph
- **Resume Viewer** — Embedded PDF resume with download option
- **Fully Responsive** — Mobile-first design using React-Bootstrap
- **Particle Backgrounds** — Animated canvas particles on key sections
- **Social Links** — GitHub, LinkedIn, Twitter, Gmail

---

## Tech Stack

| Category    | Technologies                                      |
|-------------|---------------------------------------------------|
| Frontend    | React 17, React-Bootstrap 5, CSS3                 |
| Styling     | Bootstrap 5, Tailwind CSS, custom CSS variables   |
| Animation   | react-tsparticles, react-parallax-tilt, typewriter-effect |
| Routing     | React Router DOM v6                               |
| Icons       | react-icons (devicons, simple-icons, ant-design)  |
| PDF         | @react-pdf/renderer, react-pdf                    |
| Deployment  | GitHub Pages (gh-pages)                           |

---

## Projects Showcased

| Project | Tech | Description |
|---------|------|-------------|
| **RiseSmart CMS** | Drupal 11, PHP 8.3, MySQL, Docker | Enterprise CMS for a global career coaching platform (Randstad company). 20+ custom modules: JWT SSO, Smartling TMS integration, AI article summarisation, async PDF/image queues. |
| **Wizen** | React 19, Laravel 12, REST API | Headless CMS + corporate website with a full admin panel managing services, blogs, case studies, pricing, and navigation — versioned REST API (/api/v1/). |
| **Gurgaon Car Rental** | React, Google Maps API, Google Sheets | Production cab booking platform with outstation/self-drive modules, real-time fare calculation, WhatsApp Business API confirmations, and GitHub Pages CI/CD. |
| **Taxnomist** | Laravel 8, Bootstrap 5, jQuery | Tax compliance app for Indian CAs — Form 15CB/15CA generation, XML e-filing export, Excel import pipeline, PDF generation, RBAC, and Spatie audit trail. |
| **PayRoll Management System** | Python | Automates employee salary calculations, deductions, tax computation, and payslip generation. |
| **DHRUVA 2.0** | HTML, CSS, JavaScript | Corporate website for BAOIAM Pvt Ltd — dynamic, user-centric platform. |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/officialkapilydv/master_portfolio.git

# Navigate to the project directory
cd master_portfolio

# Install dependencies
npm install

# Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Project Structure

```
src/
├── Assets/
│   ├── Projects/       # Project screenshots
│   └── KAPIL_CV.pdf    # Resume PDF
├── components/
│   ├── Home/           # Hero section & introduction
│   ├── About/          # AboutCard, Techstack, Toolstack
│   ├── Projects/       # Project cards grid
│   ├── Resume/         # PDF resume viewer
│   ├── Navbar.js
│   ├── Footer.js
│   ├── Particle.js     # Particle background
│   └── Pre.js          # Preloader
└── App.js
```

---

## Customisation

Navigate to `src/components/` and edit the relevant component:

- **Personal info & bio** — `About/AboutCard.js`
- **Skills** — `About/Techstack.js`, `About/Toolstack.js`
- **Projects** — `Projects/Projects.js`
- **Social links** — `Home/Home2.js`
- **Resume PDF** — replace `Assets/KAPIL_CV.pdf`

---

## Connect

[![GitHub](https://img.shields.io/badge/GitHub-officialkapilydv-black?logo=github)](https://github.com/officialkapilydv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Kapil%20Yadav-blue?logo=linkedin)](https://www.linkedin.com/in/kapil-yadav-10118924a/)
[![Twitter](https://img.shields.io/badge/Twitter-kapilyadav-1DA1F2?logo=twitter)](https://twitter.com/kapilyadav)
[![Gmail](https://img.shields.io/badge/Gmail-kapilyadav2625-D14836?logo=gmail&logoColor=white)](mailto:kapilyadav2625@gmail.com)

---

> Feel free to fork this repo and use it as a template. Please give credit by linking back to [Kapil Yadav](https://github.com/officialkapilydv). If you find it useful, give it a star!
