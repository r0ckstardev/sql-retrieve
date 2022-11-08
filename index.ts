const express = require("express")
const app = express()
import log from './src/logger/index'
const cors = require("cors")
const port = 8000

const logger = log.log;

app.use(cors())
app.use(express.json())

app.get('/', (req: any, res: any) => {
    res.status(200 ).json({ name: "hello feng" })
})

logger.error("hello");

app.listen(port,  logger.info("Listening on port:", port))