import express from "express";
const app = express();
import log from './src/logger/index';
const port = 8000;
app.get('/', (req, res) => {
    res.status(501).send(`hello ${req.body.name}`);
});
app.listen(port, log.info("Listening on port:", port));
//# sourceMappingURL=index.js.map