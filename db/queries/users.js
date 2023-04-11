
const db = require('../connection');

const queryUserInfo   = `
                        SELECT id, email, profile_picture_path 
                        FROM users 
                        WHERE id = 1;
                        `;

const queryMyUrls     = `
                        SELECT title as my_urls_titles
                        FROM resources
                        WHERE user_id = 1;
                        `;

const queryLikedUrls  = `
                        SELECT resources.title as liked_urls_titles
                        FROM users 
                        INNER JOIN likes ON users.id = likes.user_id
                        INNER JOIN resources ON likes.resource_id = resources.id
                        WHERE users.id = 1;
                        `;


const getUserInfo = () => {
  return db.query(queryUserInfo)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const getUserMyUrls = () => {
  return db.query(queryMyUrls)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const getUserLikedUrls = () => {
  return db.query(queryLikedUrls)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};




module.exports = { getUserInfo, getUserLikedUrls, getUserMyUrls };

