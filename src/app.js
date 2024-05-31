import express from "express";
import displayRoutes from "express-routemap";
import userRoutes from "./routes/user.routes.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/user", userRoutes)

app.get("/", (req, res) => {
  res.send(`Bienvenido a mi primer servidor de usuarios!`)
})

app.listen(PORT, () => {
  displayRoutes(app)
  console.log(`Server listening on port ${PORT}`)
})


