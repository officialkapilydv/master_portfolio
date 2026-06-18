import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EPMS from "../../Assets/Projects/EPMS.png";
import baoim from "../../Assets/Projects/baoim.png";
import wizen from "../../Assets/Projects/wizen.png";
import gts from "../../Assets/Projects/gts.png";
import risesmart from "../../Assets/Projects/risesmart.png";
import tax from "../../Assets/Projects/tax.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={risesmart}
              isBlog={false}
              title="RiseSmart CMS — Enterprise Drupal 11"
              description="Enterprise Content Management System built on Drupal 8/11 for RiseSmart (a Randstad company), serving as the backend CMS for a global career coaching and outplacement platform. Developed 20+ custom Drupal modules covering: JWT-based SSO authentication (HS512 & RS256), multilingual content export/import pipeline integrated with Smartling TMS via REST API, async queue workers for PDF generation and image processing, AI-powered article summarization via JWT-secured microservice, and role-based content governance with content freeze workflows. Tech: PHP 8.3, MySQL, Jenkins CI/CD, Docker."
              demoLink="https://login.risesmart.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wizen}
              isBlog={false}
              title="Wizen — IT Services Corporate Website & CMS"
              description="A full-stack headless CMS and public-facing corporate website for an IT services company. Built with React 19 (SPA) and Laravel 12 (REST API + admin panel), featuring a custom admin panel for managing services, industries, solutions, blogs, case studies, pricing, gallery, and navigation menus — all exposed through a versioned REST API (/api/v1/). Includes scroll-spy navigation, Swiper.js hero sliders, React Helmet SEO management, slug-based routing, and 20+ database migrations."
              demoLink="https://wizen.busywizzy.com/frontend/dist/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gts}
              isBlog={false}
              title="Gurgaon Car Rental — Full-Stack Booking Platform"
              description="A production-deployed cab booking platform with two rental modules: outstation/local/airport bookings and a self-drive hourly rental system. Integrates Google Maps Distance Matrix API with a 3-tier fallback strategy for real-time fare calculation. Uses Google Sheets + Apps Script as a serverless backend. Features React.lazy() code splitting across 15+ pages, a localStorage-based rental lifecycle (pending → approved → active → completed), WhatsApp Business API for booking confirmations, and CI/CD deployment to GitHub Pages."
              demoLink="https://gurgaontaxiservice.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tax}
              isBlog={false}
              title="Taxnomist — Tax Compliance Web App"
              description="A domain-specific tax compliance application for Indian chartered accountants to manage, generate, and export Form 15CB and Form 15CA Part C — official Income Tax Act documents for cross-border remittances. Built with Laravel 8, Bootstrap 5, and jQuery. Features include: PDF generation via wkhtmltopdf/dompdf, XML export for e-filing portal submission, multi-step Excel import pipeline, bulk ZIP download, RBAC with custom middleware, Spatie ActivityLog audit trail, and a normalized 15+ table relational schema."
              demoLink="https://github.com/officialkapilydv"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EPMS}
              isBlog={false}
              title="PayRoll-Management-System"
              description="The Payroll Management System in Python automates employee salary calculations. It manages payroll by storing employee data, computing salaries with deductions and taxes, and generating payslips. The system ensures accuracy, reduces manual effort, and provides an intuitive interface for efficient payroll processing and record-keeping."
              demoLink="https://github.com/officialkapilydv/PayRoll-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baoim}
              isBlog={false}
              title="DHRUVA 2.O"
              description="Project Dhruva is a groundbreaking initiative by BAOIAM PVT LTD aimed at redefining our digital presence through the development of a state-of-the-art company website. This project is not just about creating an online space but about establishing a dynamic, interactive, and user-centric platform that embodies our brand’s ethos and drives engagement, growth, and customer satisfaction."
              demoLink="https://baoiam-web.github.io/Baioam_web/index.html"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
