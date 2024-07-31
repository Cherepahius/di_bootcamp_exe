const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      username TEXT NOT NULL UNIQUE,
      first_name TEXT,
      last_name TEXT
    )
  `);

  db.run(`
    CREATE TABLE hashpwd (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL,
      FOREIGN KEY (username) REFERENCES users(username)
    )
  `);
});

module.exports = db;
