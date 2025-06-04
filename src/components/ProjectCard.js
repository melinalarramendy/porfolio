import { Col, Card, Button } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, demoUrl }) => {
  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <Card className="h-100 project-card">
        <div className="card-image-container">
          <Card.Img
            variant="top"
            src={imgUrl}
            alt={title}
            className="card-image"
          />
          <div className="card-overlay">
            {githubUrl && (
              <Button
                as="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                className="overlay-btn"
              >
                <FiGithub className="me-2" /> Código
              </Button>
            )}
          </div>
        </div>


        <Card.Body className="d-flex flex-column px-4 py-3">
          <Card.Title className="fw-bold mb-3 text-center"
            style={{
              color: 'var(--background)'
            }}>{title}</Card.Title>
          <Card.Text className="flex-grow-1 text-start" style={{
            color: 'var(--background)'
          }}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};