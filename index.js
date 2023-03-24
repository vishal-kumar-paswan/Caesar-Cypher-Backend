const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8000 || process.env.PORT;

// importing routes
const caesarCypherRoutes = require("./routes/caesar-cyper");

// using body-parser and cors
app.use(bodyParser.json());
app.use(cors());

app.use("/", caesarCypherRoutes);

app.listen(PORT, () => {
    console.log(`app is live on port ${PORT}`);
})
