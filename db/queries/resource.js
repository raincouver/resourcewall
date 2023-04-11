const db = require('../connection');

const queryInsertResource   = `
                        SELECT id, email, profile_picture_path 
                        FROM users 
                        WHERE id = 1;
                        `;




const getInsertResource = () => {
  return db.query(queryInsertResource)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getInsertResource };
