import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiExternalLink,FiGithub } from "react-icons/fi";


const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <div className="proImg">
        <Card.Img variant="top" src={props.image} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.content}
        </Card.Text>
        
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <FiExternalLink /> &nbsp; View Project
        </Button>
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.gitHubLink}
          target="_blank"
        >
          <FiGithub /> &nbsp; View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;