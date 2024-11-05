const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {collection} = require("./mongo.js");
const bcrypt = require("bcrypt"); // For password hashing
const app = express();
const PORT = process.env.PORT || 4000;


// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
    cors({
      origin: "http://localhost:3000",  // Ensure this matches your frontend URL
      credentials: true
    })
);

// Check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// User login route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await collection.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Compare password with hashed password in the database
        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = true;
        if (isMatch) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (e) {
        res.status(500).json({ error: "Login failed" });
    }
});

// User registration route
app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password before saving
        // const hashedPassword = await bcrypt.hash(password, 1);
        // console.log(hashedPassword);
        const newUser = { email: email, password: password };
        console.log(newUser);

        const registeredUser = await collection.insertOne(newUser); // Insert new user into MongoDB
        console.log(registeredUser);
        res.status(201).json({ message: "User registered successfully" });
    } catch (e) {
        res.status(500).json({ error: "Registration failed" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/api/register",async(req,res)=>{
//     const{email,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

// app.listen(4000,()=>{
//     console.log("port connected");
// })

