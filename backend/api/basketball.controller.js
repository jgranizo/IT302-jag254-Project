//Jeremy Granizo
//03/19/2024 IT302-002
//Phase 3 Assignment
//jag254@njit.edu
import BasketballsDAO from "../dao/basketballsDAO.js";
export default class BasketballsController{
    
    static async apiGetTeams(req, res, next) {
      
        const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage) : 10
        const pageNumber = req.query.pageNumber ? parseInt(req.query.pageNumber) : 0
        let filters = {}
        if(req.query.id){
          filters.id = req.query.id
        } else if(req.query.name){
          filters.name = req.query.name
        }else if(req.query.conference){
            filters.conference = req.query.conference
          }
        const { teamList, totalNumTeams } = await BasketballsDAO.getTeams({
        filters, pageNumber, itemsPerPage})
    
        let response = {
          teams: teamList,
          page: pageNumber,
          filters: filters,
          itemsPerPage_per_page: itemsPerPage,
          total_results: totalNumTeams,
        }
        res.json(response)
}
}