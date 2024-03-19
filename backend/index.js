//Jeremy Granizo
//03/19/2024 IT302-002
//Phase 3 Assignment
//jag254@njit.edu
import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import BasketballsDAO from './dao/basketballsDAO.js'
import FeedbackDAO from './dao/feedbackDAO.js'

async function main() {

  dotenv.config()

  const client = new mongodb.MongoClient( process.env.BASKETBALL_DB_URI)

  const port = process.env.PORT || 8000

  try {
    await client.connect()
    await BasketballsDAO.injectDB(client)
    await FeedbackDAO.injectDB(client)
    
    app.listen(port, () => {
      console.log('server is running on port:' + port);
    })

  } catch (e) {
    console.error(e);
    process.exit(1)
  }
}
main().catch(console.error);