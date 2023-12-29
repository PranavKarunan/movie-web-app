const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
dotenv.config();
const PORT = process.env.PORT || 7000;
const DB_LINK = process.env.DB_LINK;



app.use(express.json(), cors());
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
app.get("/", (req, res) => {
    res.json("Server is working");
});


mongoose
    .connect(DB_LINK)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error connecting to mongodb", err));