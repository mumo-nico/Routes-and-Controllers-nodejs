import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/usersRoute.js"
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

app.use('/', userRoutes)
app.get('/', (req, res) => {
    res.send('Hello From Express')
})
app.all('*', (req, res) => {
    res.send('Route doesnt exist')
})

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`)
})