
const db = require('../connection');

const getUserInfo = (id) => {

  return db.query(`
                  SELECT id, name, email, profile_picture_path 
                  FROM users 
                  WHERE id = $1;`, [id])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const getUserMyUrls = (id) => {

  return db.query(`
                  SELECT id, title as my_urls_titles
                  FROM resources
                  WHERE user_id = $1;`, [id])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const getUserLikedUrls = (id) => {

  return db.query(`
                  SELECT likes.id as likes_id, resources.id as id, resources.title as liked_urls_titles
                  FROM users 
                  INNER JOIN likes ON users.id = likes.user_id
                  INNER JOIN resources ON likes.resource_id = resources.id
                  WHERE users.id = $1;`, [id])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getUserInfo, getUserLikedUrls, getUserMyUrls };

