import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"d8b10770",
//  password: process.env.DB_KEY,
  database:"blog"
})