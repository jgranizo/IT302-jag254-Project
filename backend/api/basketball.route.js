//Jeremy Granizo
//02/29/2024 IT302-002
//Phase 2 Assignment
//jag254@njit.edu
import express from 'express'
import BasketballsController from './basketball.controller.js'
import FeedbackController from './feedback.controller.js'

const router = express.Router()

router.route('/').get(BasketballsController.apiGetTeams)
router
.route("/feedback")
.post(FeedbackController.apiPostFeedback)
.put(FeedbackController.apiUpdateFeedback)    
.delete(FeedbackController.apiDeleteFeedback)
export default router






