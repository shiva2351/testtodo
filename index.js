const express = require("express");
const app = express();
app.use(express.json());
//const { open } = require("sqlite");
//const sqlite3 = require("sqlite3");
const path = require("path");
//const dbpath = path.join(__dirname, "todo.db");
const PORT = process.env.PORT || 3000;
let db = null;
const initilizeDBandServer = async () => {
  try {
    //db = await open({ filename: dbpath, driver: sqlite3.Database });
    app.listen(PORT, () => {
      console.log("Server is running at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB Error : ${e.message}`);
    process.exit(1);
  }
};
initilizeDBandServer();

/*app.get('/tasks', async(req, res) => {
    console.log("get1")
    const getQuery = `SELECT * FROM todo;`;

  const Res = await db.all(getQuery);
  console.log(getQuery,Res);
  //response.send(Res);
  res.send(Res);
    res.json(res);
}); */

app.get('/tasks', async(req, res) => {
    console.log("gettest")

  
  
  //response.send(Res);
  
    res.json("res");
}









