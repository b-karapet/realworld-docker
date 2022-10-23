const express = require("express");
const { port, host } = require("./configuration");
const { connectDB } = require("./helpers/db")
const { User } = require("./models/user")
const app = express();

function startServer() {
    app.listen(port, () => {
        console.log(`API-service is working on ${host}:${port}`);
    })
}

app.get("/", (req, res) => {
    res.send("Hello, world!");
})

app.get("/test", (req, res) => {
    res.send("Server is working correctly");
})

app.get("/users", async (req, res) => {
    try {
        const user = new User({ name: 'Bohdan Karapet', age: 29 });
        await user.save();
        const users = await User.find();
        res.json(users);
    } catch (e) {
        res.send(e.message);
    }
})

connectDB()
    .on("error", console.error.bind(console, 'Connection error: '))
    .once("open", startServer);
