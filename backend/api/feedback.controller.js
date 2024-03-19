//Jeremy Granizo
//03/19/2024 IT302-002
//Phase 3 Assignment
//jag254@njit.edu
import FeedbackDAO from "../dao/feedbackDAO.js";

export default class FeedbackController {

    static async apiPostFeedback(req,res,next) {
      try {
        console.log(req.body);
        const teamId = req.body.team_id
        const feedback = req.body.feedback
        const userInfo = {
          name: req.body.name,
          _id: req.body.user_id
        }
  
        const date = new Date()
  
        const FeedbackResponse = await FeedbackDAO.addFeedback(
          teamId,
          userInfo,
          feedback,
          date
        )
      res.json(FeedbackResponse)
      } catch(e) {
      res.status(500).json({ error: e.message })
      }
    }
    static async apiUpdateFeedback(req,res,next) {
        try {
          const feedbackId = req.body.feedback_id
          const feedback = req.body.feedback
          const date = new Date()
          const FeedbackResponse = await FeedbackDAO.updateFeedback(
            feedbackId,
            req.body.user_id,
            feedback,
            date
          )
      
          var { error } = FeedbackResponse
          if(error) {
            res.status.json({error})
          }
          if(FeedbackResponse.modifiedCount === 0) {
            throw new Error ("unable to update Feedback. User may not be original poster")
          }
          res.json(FeedbackResponse)
        } catch(e) {
          res.status(500).json({ error: e.message})
        }
      }

      static async apiDeleteFeedback(req,res,next) {
        try {
          const feedbackId = req.body.feedback_id
          const userId = req.body.user_id
          const FeedbackResponse = await FeedbackDAO.deleteFeedback(
            feedbackId,
            userId,
          )
          res.json(FeedbackResponse)
        } catch(e) {
          res.status(500).json({ error: e.message})
        }
      }
      
  }