const express = require("express")
const app = express()
const routes = require("./routes/routes");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.jason())

app.get("/", (req,res) => {
    res.send("Welcome to the application.");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something is wrong...");
});

// Start Sever
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});