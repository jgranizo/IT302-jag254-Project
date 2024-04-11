//Jeremy Granizo
//04/11/2024 IT302-002
//Phase 4 Assignment
//jag254@njit.edu

import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import basketballDataService from '../services/basketballDataService.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Basketball = (user) => {
  
  const [basketball, setBasketball] = useState({
    id:null,
    team: "",
    feedback:[]
  })
  
  let {id} = useParams();

  const getBasketball = id => {
    basketballDataService.get(id).then(response => {
      setBasketball(response.data)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e);
    })
  }
  useEffect(() => {
    getBasketball(id)
  },[id])
  return (
    <div>
      
<Container>
<Row>
<Col>
<Image src={basketball.image} fluid />
</Col>
<Col>
<Card>
<Card.Header as="h5">{basketball.full_name}</Card.Header>
<Card.Body>
<Card.Text>Division: <br></br>
{  basketball.division}
</Card.Text>
{user &&
<Link to={"/basketballs/" + id + "/feedback"}>
Add feedback
</Link>}
</Card.Body>
</Card>
</Col>
</Row>
</Container>

    </div>
  );
}

export default Basketball;
