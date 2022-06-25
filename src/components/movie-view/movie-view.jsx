import React, { Component } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MovieView extends Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <>
        <Container>
          <Row>
            <Col>
              <CardGroup>
                <Card>
                  <Card.Img
                    variant="top"
                    src={movie.ImagePath}
                    alt={movie.Title + ' poster'}
                    height={500}
                    // width={200}
                    crossOrigin="true"
                  />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Subtitle>
                      Genre:
                      <Link to={`/genres/${movie.Genre.Name}`}>
                        <Button
                          varient="link"
                          className="btn btn-link bg-transparent border-0"
                        >
                          {movie.Genre.Name}
                        </Button>
                      </Link>
                    </Card.Subtitle>
                    <Card.Subtitle>
                      Director:
                      <Link to={`/directors/${movie.Director.Name}`}>
                        <Button
                          varient="link"
                          className="btn btn-link bg-transparent border-0"
                        >
                          {movie.Director.Name}
                        </Button>
                      </Link>
                    </Card.Subtitle>
                    <br />
                    <Card.Subtitle>Description:</Card.Subtitle>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button
                      className="btn btn-secondary"
                      onClick={() => {
                        onBackClick();
                      }}
                      varient="secondary"
                    >
                      Back
                    </Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
