import express from "express";

const app = express();
const port = 4500;

app.get("/", (req, res) => {
    res.send("Hello, this is faisal");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
