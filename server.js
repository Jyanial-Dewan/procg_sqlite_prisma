const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3001;
const allowedOrigins = [
    "http://129.146.85.244:3001",
    "http://localhost:3001",
    "http://129.146.85.244:3000",
    "http://localhost:5173"
  ];
  const options = {
    origin: allowedOrigins,
  };
app.use(express.json());
app.use(cors(options));
app.use(require("./Routes/index"))

app.listen(PORT, () => console.log(`Server is running ${PORT}.`));
