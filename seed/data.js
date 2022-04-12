import db from "../db/connection.js"
import Playstation from "../models/playstation.js"
import playstations from "./playstations.json" assert {type: "json"}

const insertData = async () => {
  //reset database
  await db.dropDatabase();

  // insert playstation data
  await Playstation.insertMany(playstations)

  // close db connection
  db.close()
}

insertData()
