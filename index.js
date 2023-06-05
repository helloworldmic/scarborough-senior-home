// to handle different ports for frontend and backend
import cors from "cors";

//set up API routes
import routes from "./routes.js";

// set up static files
// app.use(express.static('public'))

// basic
import express from "express"; //must not use 'require'
const app = express();
const port = process.env.PORT || 3000;
var DEFAULT_HOST = "127.0.0.1";
var ipaddress = process.env.IP;
app.use(cors());

if (typeof ipaddress === "undefined") {
  //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
  //  allows us to run/test the app locally.
  console.warn("No process.env.IP var, using default: " + DEFAULT_HOST);
  ipaddress = DEFAULT_HOST;
}

if (typeof port === "") {
  console.warn("No process.env.PORT var, using default port: " + DEFAULT_PORT);
  port = DEFAULT_PORT;
}
// for post requests
import bodyParser from "body-parser";
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// handle services and controllers (continue to handle API routes)
app.use("/", routes);

//db.js
import mongoose from "mongoose"; //must not use 'require'

const url =
  process.env.MONGODB_URI ||
  `mongodb+srv://patientCareAppFlutter:uN26XSkoOItk45Mz@cluster0.jevvjq4.mongodb.net/?retryWrites=true&w=majority`;
//`mongodb+srv://patientApp2:A22V57hwc4esGKxp@cluster1.usoqe5e.mongodb.net/?retryWrites=true&w=majority`;
//"mongodb://127.0.0.1/patientCareAppFlutter";
//`mongodb+srv://michmongocloud:5p5AXiuu8RmHAgAG@patientcareapp-flutter.km9yei0.mongodb.net/test`;
// no longer use, only for ref of format

const connectionParams = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
