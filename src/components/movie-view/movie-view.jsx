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
                    variant="right"
                    src={movie.ImagePath}
                    alt={movie.Title + ' poster'}
                    height={300}
                    width={200}
                    crossOrigin="true"
                  />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Subtitle>
                      Genre:
                      <Link to={`/genres/${movie.Genre.Name}`}>
                        <Button varient="link">{movie.Genre.Name}</Button>
                      </Link>
                    </Card.Subtitle>
                    <Card.Subtitle>
                      Director:
                      <Link to={`/directors/${movie.Director.Name}`}>
                        <Button varient="link">{movie.Director.Name}</Button>
                      </Link>
                    </Card.Subtitle>
                    <Card.Subtitle>Description</Card.Subtitle>
                    <Card.Text>{movie.Descrption}</Card.Text>
                    <Button
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
