//Jeremy Granizo
//04/11/2024 IT302-002
//Phase 4 Assignment
//jag254@njit.edu
import express from 'express'
import BasketballsController from './basketball.controller.js'
import FeedbackController from './feedback.controller.js'

const router = express.Router()

router.route('/').get(BasketballsController.apiGetTeams)
router.route("/id/:id").get(BasketballsController.apiGetTeamById)
router
.route("/feedback")
.post(FeedbackController.apiPostFeedback)
.put(FeedbackController.apiUpdateFeedback)    
.delete(FeedbackController.apiDeleteFeedback)
export default router






