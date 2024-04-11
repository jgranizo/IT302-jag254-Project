//Jeremy Granizo
//04/11/2024 IT302-002
//Phase 4 Assignment
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
    }

    export default new BasketballDataService();
