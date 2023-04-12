const db = require('../connection');

const changePassword = (id) => {
  const querychangePassword  = `
                                Update users
                                SET password = hash(newPassword)
                                WHERE id = ${id};
                                `;
};

const deleteResource = (id) => {
  const querydeleteResource  = `
                                UPDATE resources 
                                SET user_id = null
                                WHERE id = ${id};
                                `;

  return db.query(querydeleteResource)
    // .then(data => {
    //   console.log(data.rows);
    //   return data.rows;
    // });
};

const dislikeResource = (id) => {

  const querydislikeResource  = `
                                DELETE FROM likes 
                                WHERE id = ${id};
                                `;

  return db.query(querydislikeResource)
    // .then(data => {
    //   console.log(data.rows);
    //   return data.rows;
    // });
};

module.exports = { changePassword, deleteResource, dislikeResource };