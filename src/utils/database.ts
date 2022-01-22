import { Pool } from "pg";
let connect: any;

if (!connect) {
  connect = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "taskdb",
  });
}

export { connect };
