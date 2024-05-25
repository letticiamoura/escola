import pgPromise from "pg-promise";

const pgp = require("pg-promise")();
//const join = require("node:path");

const USERNAME = "postgres";
const PASSWORD = "postgres";
const HOST = "localhost";
const PORT = "5432";
const DATABASE = "gerenciamentoAlunos";

const db: any = pgp(`postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`);

module.exports = db;