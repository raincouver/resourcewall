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

module.exports = { 
  // changePassword, 
  deleteResource, dislikeResource };