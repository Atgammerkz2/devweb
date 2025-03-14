import express = require("express")
import cors = require("cors")
import { DevDataSource } from "./connections/devConn"

DevDataSource.initialize().then()
    console.log("Conexão com o banco de dados realizada com sucesso!")

const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.listen(3333, () => console.log("Servidor rodando na porta 3333."))