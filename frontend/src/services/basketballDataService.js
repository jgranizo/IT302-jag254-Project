//Jeremy Granizo
//04/22/2024 IT302-002
//Phase 5 Assignment
//jag254@njit.edu
import axios from "axios";
class BasketballDataService {
    getAll(){
        return axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs`);
        }
        
    find(query, by = "name", page = 0) {
            return axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs?${by}=${query}&pageNumber=${page}`
            )
          }
        
     get(id){
        return axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs/id/${id}`
          )
     }   
     createFeedback(data){
      return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs/feedback`,data)
     }
     updateFeedback(data){
      return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs/feedback`,data)
     }
     deleteFeedback(id,userId){
      return axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/jag254/basketballs/feedback`,
      {data:{feedback_id: id, user_id: userId } }
    )
     }
    }

    export default new BasketballDataService();
