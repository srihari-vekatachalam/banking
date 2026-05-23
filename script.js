const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Running");
});