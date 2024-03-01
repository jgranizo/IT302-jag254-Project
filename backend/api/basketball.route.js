//Jeremy Granizo
//02/29/2024 IT302-002
//Phase 2 Assignment
//jag254@njit.edu
import express from 'express'
import BasketballsController from './basketball.controller.js'
import BasketballsDAO from '../dao/basketballsDAO.js';

const router = express.Router()

router.route('/').get(BasketballsController.apiGetTeams)


export default router



router.get('/debug/teams', async (req, res) => {
    await BasketballsDAO.debugPrintAllTeams();
    res.send('Check console for output');
});


