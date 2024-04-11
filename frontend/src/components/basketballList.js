//Jeremy Granizo
//04/11/2024 IT302-002
//Phase 4 Assignment
//jag254@njit.edu
import React, { useState, useEffect } from 'react'
import BasketballDataService from "../services/basketballDataService.js"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';



const BasketballList = () => {
  const [basketballs, setBasketballs] = useState([]);
  const [searchTeam, setSearchTeam] = useState("");


useEffect(()=>{
  retrieveBasketballs();

},[]);


const retrieveBasketballs = () => {
  BasketballDataService.getAll().then((response) => {
    console.log(response.data);
    setBasketballs(response.data.teams);
  })
  .catch((e)=>{
    console.log(e);
  });
};

const find = (query, by) => {
  BasketballDataService.find(query, by)
    .then(response => {
      console.log(response.data)
      setBasketballs(response.data.teams)
    })
    .catch(e => {
      console.log(e)
    })
}
const findByTeam =
    () => {
      find(searchTeam, "name")
    }


const onChangeSearchTeam = (e) => {
  const searchTeam = e.target.value
  setSearchTeam(searchTeam);
};return (
  <div className="App">
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search by team"
                value={searchTeam}
                onChange={onChangeSearchTeam}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={findByTeam}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {basketballs.map((team) => {
          return (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img src={team.image} />
                <Card.Body>
                  <Card.Title>{team.full_name}</Card.Title>
                 
                  <Card.Text>Division: {team.division}</Card.Text>
                  <Link to={"/jag254_basketballs/" + team._id} >View feedback</Link>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  </div>
);
}
export default BasketballList;
