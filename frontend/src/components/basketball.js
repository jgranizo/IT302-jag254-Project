//Jeremy Granizo
//04/22/2024 IT302-002
//Phase 5 Assignment
//jag254@njit.edu

import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import BasketballDataService from '../services/basketballDataService.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';

const Basketball = (props) => {
  
  const [basketball, setBasketball] = useState({
    id:null,
    team: "",
    feedback:[]
  })
  
  let {id} = useParams();

  const getBasketball = id => {
    BasketballDataService.get(id).then(response => {
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


  const deleteFeedback= (feedbackId,index) =>{
    BasketballDataService.deleteFeedback(feedbackId,props.user.id)
    .then(response =>{
      setBasketball((prevState) =>{
    prevState.feedback.splice(index,1)
    return ({...prevState})
  })
}).catch(e =>{console.log(e)})
}
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
{props.user &&
<Link to={"/jag254_basketballs/" + id + "/feedback"}>
Add feedback
</Link>}
</Card.Body>
</Card>
<br></br>
<h2>Feedback</h2><br></br>
{basketball.feedback.map((feedback,index)=>{
  return (
    <Card key = {index}>
      <Card.Body>
        <h5>{feedback.name + " Feedback on " + new Date(Date.parse(feedback.date)).toDateString()}</h5>
        <p>{feedback.feedback}</p>
        {props.user && props.user.id === feedback.user_id && 
        <Row>
          <Col><Link
           to={"/jag254_basketballs/" + id +"/feedback"}
           state={{currentFeedback: feedback}}
           >Edit</Link>
          </Col>
          <Col><Button variant ="link"onClick={() => deleteFeedback(feedback._id,index)}>Delete</Button></Col></Row>}
      </Card.Body>
    </Card>
  )
})}
</Col>
</Row>
</Container>

    </div>
  );
}

export default Basketball;
