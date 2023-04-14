const db = require('../connection');

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


const changeUserName = (data) => {

  return db.query(`
                  UPDATE users 
                  SET name = $1 
                  WHERE id = $2`, [data.newName, data.user_id])

};

const changePwd = (data) => {

  return db.query(`
                  UPDATE users 
                  SET password = $1 
                  WHERE id = $2`, [data.newPwd, data.user_id])

};

const newRandomAvatar = (data) => {

  return db.query(`
                  UPDATE users 
                  SET profile_picture_path = $1 
                  WHERE id = $2`, [data.newAvatarPath, data.user_id])

};

// const deleteAccount = (id) => {

//   return db.query(`
//                   UPDATE users 
//                   SET profile_picture_path = $1 
//                   WHERE id = $2`, [data.newAvatarPath, data.user_id])

// };

module.exports = { changePwd, changeUserName, newRandomAvatar, 
                   deleteResource, dislikeResource, 
                   likeResource, rateResource, checkIfLiked, checkIfRated 
                  };