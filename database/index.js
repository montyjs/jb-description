const { Pool } = require('pg');
const seed = require('./seed.js');


const pool = new Pool({
  user: 'rei',
  host: 'localhost',
  database: 'descriptions',
  password: 'rei-dev',
  port: 5432,
});

const getDescriptions = (cb) => {
  pool.query('SELECT * FROM testtable', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(results.rows[0].name);
    }
  });
};

const seedDescriptions = (cb) => {
  seed.dummyData.forEach((doc) => {
    pool.query('INSERT INTO descriptions (name_, best_use, climbing_show_type, last_, upper_, lining_, outsole_, footwear_closure, resole_, gender_, weight_) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', doc, (error, results) => {
      if (error) {
        throw error;
      }
      cb('Descriptions added')
    });
  });
};

module.exports = {
  getDescriptions,
  seedDescriptions,
};
