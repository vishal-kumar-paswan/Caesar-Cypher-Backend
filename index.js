const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8000 || process.env.PORT;

// importing routes
const caesarCypherRoutes = require("./routes/caesar-cyper");

// using body-parser
app.use(bodyParser.json());

app.use("/", caesarCypherRoutes);

app.listen(PORT, () => {
    console.log(`app is live on port ${PORT}`);
})
