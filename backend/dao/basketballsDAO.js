//Jeremy Granizo
//02/29/2024 IT302-002
//Phase 2 Assignment
//jag254@njit.edu
let teams
export default class BasketballsDAO{
    static async injectDB(conn){
        if(teams){
            return
        }
    try{
        teams= await conn.db(process.env.Basketball_NS).collection('basketball_jag254')
        
    }
    catch(e){
        console.error(`unable to connect in BasketballsDAO: ${e}`)
    }
    }
    
    

 

    static async getTeams({
        filters = null,
        pageNumber = 0,
        itemsPerPage = 10,
        } = {}) {
          let query
          if(filters) {
            if("name" in filters) {
              query = { name: filters['name']}}
              if ("conference" in filters) {
                query= {conference: filters['conference']}; // Add this line
            }
            } 

        
        let cursor

        try {
            
          cursor = await teams
            .find(query)
            .limit(itemsPerPage)
            .skip(itemsPerPage * pageNumber)
          const teamList = await cursor.toArray()
          const totalNumTeams = await teams.countDocuments(query)
          return {teamList, totalNumTeams}
        } catch(e) {
          console.error(`Unable to issue find command, ${e}`)
          console.error(e)
          return { teamsList: [], totalNumTeams: 0 }
        }
      }
   
    

}