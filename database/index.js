require('dotenv').config();
const { Pool } = require('pg');

const user = process.env.NODE_ENV === 'production' ? process.env.DB_USER : process.env.LOCAL_USER;
const password = process.env.NODE_ENV === 'production' ? process.env.DB_PASSWORD : process.env.LOCAL_PASSWORD;
const host = process.env.NODE_ENV === 'production' ? process.env.DB_HOST : process.env.LOCAL_HOST;
const database = process.env.NODE_ENV === 'production' ? process.env.DB_DATABASE : process.env.LOCAL_DATABASE;

let pool;

if (process.env.NODE_ENV !== 'production') {
  pool = new Pool({
    user,
    host,
    database,
    password,
    port: 5432,
  });
} else {
  const connectionString = 'postgresql://rei:batman123@descriptions.clhbsbchnbnz.us-east-2.rds.amazonaws.com:5432/descriptions';
  pool = new Pool({
    connectionString,
  });
}

const getDescriptions = (cb) => {
  pool.query('SELECT * FROM descriptionData WHERE name = \'La Sportiva Tarantulace Climbing Shoes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0]);
    }
  });
};

const getMensSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'mensSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

const getWomensSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'womensSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

const getEuSizes = (cb) => {
  pool.query('SELECT * FROM shoeSizes WHERE name = \'euSizes\'', (error, results) => {
    if (error) {
      throw error;
    } else {
      cb(error, results.rows[0].sizes);
    }
  });
};

module.exports = {
  getDescriptions,
  pool,
  getMensSizes,
  getWomensSizes,
  getEuSizes,
};
