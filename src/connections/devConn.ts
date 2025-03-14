import { DataSource } from "typeorm";

export const DevDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "devweb",
    //entities:
})