const db = require('../connection');

// const changePassword = (id) => {
//   const querychangePassword  = `
//                                 Update users
//                                 SET password = hash(newPassword)
//                                 WHERE id = ${id};
//                                 `;
// };

const deleteResource = (id) => {

  return db.query(`
                  UPDATE resources 
                  SET user_id = null 
                  WHERE id = $1`, [id])

};

const dislikeResource = (id) => {

  return db.query(`
                  DELETE FROM likes
                  WHERE id = $1;`, [id])

};

const likeResource = (data) => {

  console.log(data);
  return db.query(`
            INSERT INTO likes (user_id,resource_id)
            VALUES ($1, $2);`, [data.user_id, data.resource_id])
  .then(
    console.log('Liked the resource successfully')
  );

};

const rateResource = (data) => {

  console.log(data);
  return db.query(`
            INSERT INTO likes (user_id, resource_id, rating)
            VALUES ($1, $2, $3);`, [data.user_id, data.resource_id, data.rating])
  .then(
    console.log('rated the resource successfully')
  );

};

const checkIfLiked = (data) => {

  console.log(data);
  return db.query(`
            SELECT id as likes_id
            FROM likes
            WHERE user_id = $1 
            AND resource_id = $2;`, [data.user_id, data.resource_id])
  .then(data => {
      console.log(data.rows);
      return data.rows;
  });

};

const checkIfRated = (data) => {

  console.log(data);
  return db.query(`
            SELECT id as ratings_id
            FROM ratings
            WHERE user_id = $1 
            AND resource_id = $2;`, [data.user_id, data.resource_id])
  .then(data => {
      console.log(data.rows);
      return data.rows;
  });

};

module.exports = { 
  // changePassword, 
  deleteResource, dislikeResource, likeResource, rateResource, checkIfLiked, checkIfRated };