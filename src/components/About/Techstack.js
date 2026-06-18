import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiPhp,
} from "react-icons/di";
import {
  SiDrupal,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiBootstrap,
  SiJquery,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiDrupal />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJquery />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>

    </Row>
  );
}

export default Techstack;