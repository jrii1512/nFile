const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const filepath = './population.db';

function connectToDatabase() {
    if (!fs.existsSync(filepath)) {
        console.error('No database, creating ..');
        const db = new sqlite3.Database(filepath, (error) => {
            if (error) {
                return console.error(error.message);
            }
        });
        createTable(db);
        console.log('Connected to the database successfully');
        return db;
    } else {
        return new sqlite3.Database(filepath)
    }
}

function createTable(db) {
    db.exec(`
    create table if not exists migration
    (
      year_month       VARCHAR(10),
      month_of_release VARCHAR(10),
      passenger_type   VARCHAR(50),
      direction        VARCHAR(20),
      sex              VARCHAR(10),
      age              VARCHAR(50),
      estimate         INT
    )
  `);
}

module.exports = connectToDatabase();
