require('dotenv').config();
const { Pool } = require('pg');
const PORT = process.env.PORT || 3000;
const { dbUser, dbHost, db, dbPassword } = process.env;

const pool = new Pool({
  user: dbUser,
  host: dbHost,
  database: db,
  password: dbPassword,
  port: '5432'
});

module.exports = {
  // get requests
  getScore: function getScore() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT username, round FROM score ORDER BY round DESC;`
      , (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    });
  },
  postScore: function postScore(username, round) {
    return pool.query(`INSERT INTO score (username, round) VALUES ('${username}', '${round}');`)
      .catch((err) => console.log(err, 'err posting score'))
  },
};