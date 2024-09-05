const express = require("express");
const app = express();

/*
app.use((req, res, next)=>{
    console.log("Hi, I am middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("Hi, I am 2nd middelware");
    next();
})
*/


// Logger  // Utility middleware
/*
app.use((req, res, next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.hostname, req.path, req.time);
    next();
})
*/

/*

app.get("/", (req, res)=>{
    res.send("I am root!")
});

app.use((req, res)=>{
    res.status(404).send("Page not found!");
})

*/

// API token as query string
/*
app.use("/api", (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!")
});

app.get("/api", (req, res)=>{
    res.send("Our Data");
});
*/

// Multiple middlewares

let checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("ACCESS DENIED!")
};

app.get("/api", checkToken, (req, res)=>{
    res.send("Our Data");
});

app.listen(8888, ()=>{
    console.log("Server is running");
    
})
