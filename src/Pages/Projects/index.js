import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Components/Particle";
import ProjectCard from "../../Components/Project/ProjectCards";
import projects from "../../Data/projects.json";

class Projects extends Component {
  state = {
    projects,
  };

  render() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {this.state.projects.map((project) => (
              <Col md={4} className="project-card">
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  content={project.content}
                  link={project.link}
                  gitHubLink={project.gitHubLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Projects;
