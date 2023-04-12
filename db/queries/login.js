
const db = require('../connection');

const getUserByEmail = (email) => {

  return db.query(`
                  SELECT id, email, password
                  FROM users 
                  WHERE email = $1;`, [email])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};


module.exports = { getUserByEmail };
