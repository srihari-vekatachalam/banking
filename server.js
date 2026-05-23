const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🔐 Encryption function
function encrypt(password) {
    let result = "";

    for (let i = 0; i < password.length; i++) {
        let ascii = password.charCodeAt(i);

        if (i % 2 === 0) {
            result += String.fromCharCode(ascii + 2);
        } else {
            result += String.fromCharCode(ascii + 1);
        }
    }

    return result;
}

// Stored password
const storedPassword = encrypt("Sri2026Abi");

// LOGIN API
app.post("/login", (req, res) => {

    console.log(req.body);

    let { username, password } = req.body;

    username = username.trim().toLowerCase();
    password = password.trim();

    const encryptedInput = encrypt(password);

    console.log("Encrypted Input:", encryptedInput);
    console.log("Stored Password:", storedPassword);

    if (username === "srihari" && encryptedInput === storedPassword) {
        res.json({
            success: true,
            message: "Login Success"
        });
    } else {
        res.json({
            success: false,
            message: "Invalid Username or Password"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});