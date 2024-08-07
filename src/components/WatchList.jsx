import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../features/watchListSlice";

const WatchList = () => {
  //access global state from redux
  // useSelector lets us access our global state from the redux store
  // need to pass a function in order to access state
  // the state you select is based on the reducers you've set up in store.js
  const { watchList } = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
     dispatch(deleteItem(id))
  }

  return (
    <Container>
      <NavBar />
      <Row className="p-3">
        {watchList.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4}>
            <Card style={{width: "18rem"}}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{movie.original_title} </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Link className="btn btn-danger mt-3"
                onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WatchList;
