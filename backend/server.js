//Jeremy Granizo
//03/19/2024 IT302-002
//Phase 3 Assignment
//jag254@njit.edu
import express from 'express'
import cors from 'cors'
import teams from './api/basketball.route.js'
import dotenv from "dotenv"




dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/jag254/basketballs", teams)

app.use('*', (req,res) => {
  res.status(404).json({error: "not found"})
})

export default app