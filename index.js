const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static( './'));

const { getFortune, getMisfortune, createMakefor, deleteMakefor } = require("./controller");

//app.get("/api/main", mainjs)

app.get("/api/fortune", getFortune);
app.get("/api/misfortune", getMisfortune);
app.post("/api/makefor", createMakefor)
app.delete("/api/deleteMakefor/:index", deleteMakefor)

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile( "/index.html",{root:__dirname})
})


app.listen(4000, () => console.log("Server running on 4000"));