const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 உங்கள் encryption logic (even +2, odd +1)
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

// 👉 உங்கள் encrypted password
const storedPassword = "Uskjcsk10166";

// 🔐 LOGIN API
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const encryptedInput = encrypt(password);

    if (username === "admin" && encryptedInput === storedPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// 🚀 Server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});