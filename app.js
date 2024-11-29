const express = require("express");

const authRouter = require("./route/authRoute.js")
const app = express();

// creating a route to check
app.get("/", (req, res) =>{
    res.status(200).json({
        status: "success",
        message: "REST APIs are working"
    });
});

// all router will be here
app.use("/api/v1/auth", authRouter);

app.listen(3000, () => {
    console.log(`Server running on port 3000.`);
});