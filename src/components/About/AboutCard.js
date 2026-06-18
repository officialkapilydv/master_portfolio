import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I'm <span className="purple">Kapil Yadav</span>, a
            software developer based in <span className="purple">Haryana, India.</span>
            <br />
            I currently work as a <span className="purple">Software Developer</span> at BusyWizzy Technology Solutions Pvt. Ltd., where I build full-stack products end to end.
            <br />
            I hold a Master of Computer Application (MCA) from SGT University, Gurgaon.
            <br />
            <br />
            I specialize in designing and delivering <span className="purple">scalable full-stack web applications</span> — spanning headless CMS platforms, JWT-secured REST APIs, and enterprise-grade Drupal systems. My recent work brings together React + Laravel, Drupal 11, and production-deployed React apps with seamless third-party API integrations.
            <br />
            <br />
            Beyond writing code, here are a few things I genuinely enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Errors are not in the art but in the artificers!"{" "}
          </p>
          <footer className="blockquote-footer">Isaac Newton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
