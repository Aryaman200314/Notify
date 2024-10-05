require("dotenv").config();

const config =  require("./config.json");
const mongoose = require("mongoose");
mongoose.connect(config.connectionString);

const User = require("./models/user.model");
const Note = require("./models/note.model");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken} = require("./utilities");

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

app.get("/", (req, res) => {
    res.json({data: "hello world"});
});

app.post("/create-account", async (req, res) => {
    const {fullName, email, password} = req.body;
    if(!fullName){
        return res
        .status(400)
        .json({error: true, message: "Full Name is requried"});
    }

    if(!email){
        return res 
        .status(400)
        .json({error: true, message: "Email is requried"});
    }
    if(!password){
        return res
        .status(400)
        .json({error: true, message: "Password is requried"});
    }

    const isUser = await User.findOne({email: email});

    if(isUser){
        return res.json({
            error: true,
            message: "User already exists"
        });
    }

    const user = new User({
        fullName,
        email,
        password,
    });

    await user.save();
    const accessToken = jwt.sign({ user 
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "36000m",
    });

    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registered Successfully", 
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if(!email){
        return res
        .status(400)
        .json({error: true, message: "Email is requried"});
    }
    if(!password){
        return res 
        .status(400)
        .json({error: true, message: "Password is requried"});
    }
    const userInfo = await User.findOne({email: email});
    if(!userInfo) {
        return res
        .status(400)
        .json({message: "User not found"})
    }

    if(userInfo.email == email && userInfo.password == password) {
        const user = {user: userInfo};
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "36000m",
        });

        return res.json({
            error: false,
            message: "Login Seccessfull",
            email,
            accessToken,
        });
    }
    else {
        return res.status(400).json({
            error:  true,
            message: "Invalid Credentials",
        })
    }
})

// Add notes DATABASE

app.post("/add-notes", authenticateToken, async (req, res) => {
    const { title, content, tags } = req.body;
    const { user } = req.user;

    if(!title) {
        return res
        .status(400)
        .json({error: true, message: "Title is requried"});
    }

    if(!content) {
        return res
        .status(400)
        .json({error: true, message: "Content is requried"});
    }

    try {
        const note = new Note({
            title,
            content,
            tags: tags || [],
            userId: user._id,
        });

        await note.save();

        return res.json({

            error: false,
            note,
            message: "Note added successfully",
        });
    }
    catch (error){
        return res.status(500)
        .json({error: true, message: "Internal Server Error"});
    }
});


// Edit Notes DATABASE

app.post("/edit-notes/:noteId", authenticateToken, async (req, res) => {
    
})

app.listen(8000);

module.exports = app;

