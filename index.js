"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const index_1 = __importDefault(require("./src/logger/index"));
const cors = require("cors");
const port = 8000;
const logger = index_1.default.log;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).json({ name: "hello feng" });
});
logger.error("hello");
app.listen(port, logger.info("Listening on port:", port));
