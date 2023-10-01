
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const expressMongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const validator = require("validator");

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressMongoSanitize());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(helmet());
app.use(hpp());
app.use(cors());

module.exports = app;
