const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getFortune, getMisfortune, createMakefor } = require("./controller");

//app.get("/api/main", mainjs)

app.get("/api/fortune", getFortune);
app.get("/api/misfortune", getMisfortune);
app.post("/api/makefor", createMakefor)
app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + "/index.html")
})

app.listen(4000, () => console.log("Server running on 4000"));