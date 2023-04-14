
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

const registerNewUser = (data) => {

    return db.query(`
              INSERT INTO users (name, email, password, profile_picture_path)
              VALUES ($1, $2, $3, $4)
              RETURNING id;`, [data.name, data.email, data.password, data.avatar])
    .then(data => {
      console.log(data.rows);
      console.log(`registered ${data.name} successfully`)
      return data.rows;
    });
  
};

module.exports = { getUserByEmail, registerNewUser };
