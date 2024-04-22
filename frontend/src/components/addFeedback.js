//Jeremy Granizo
//04/22/2024 IT302-002
//Phase 5 Assignment
//jag254@njit.edu
import React, { useState } from 'react'
import BasketballDataService from "../services/basketballDataService"
import { Link, useParams, useLocation  } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddFeedback = (props) => {
  let editing = false
  let initialFeedbackState = ""
  const location = useLocation();
if (location.state && location.state.currentFeedback) {
  editing = true
  initialFeedbackState = location.state.currentFeedback.feedback
}


const [feedback, setFeedback] = useState(initialFeedbackState)
// keeps track if review is submitted
const [submitted, setSubmitted] = useState(false)

let { id } = useParams();

const onChangeFeedback = e => {
  const feedback = e.target.value
  setFeedback(feedback);
}

const saveFeedback = () => {
  var data = {
    feedback: feedback,
    name: props.user.name,
    user_id: props.user.id,
    team_id: id
  }
  if (editing) {
    // get existing review id
    data.feedback_id = location.state.currentFeedback._id
    BasketballDataService.updateFeedback(data)
      .then(response => {
        setSubmitted(true);
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      })
  } else {

  BasketballDataService.createFeedback(data)
  .then(response => {
    setSubmitted(true)
  }).catch(e => { })
}}

return (
<div>
  {submitted ? (
    <div>
      <h5>Review submitted successfully</h5>
      <Link to={"/jag254_basketballs/" + id}>
        Back to Team
      </Link>
    </div>
) : (
  <Form>
    <Form.Group>
      <Form.Label>{editing ? "Edit" : "Create"} Feedback</Form.Label>
      <Form.Control
        type="text"
        required
        value={feedback}
        onChange={onChangeFeedback}
      />
    </Form.Group>

    <Button variant="primary" onClick={saveFeedback}>
          Submit
        </Button>
      </Form>
    )}
  </div>
)
}

export default AddFeedback;

