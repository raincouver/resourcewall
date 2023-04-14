const db = require('../connection');

const querygetResourceById = `
                        SELECT title, url, description, categories.name, categories.id as category_id
                        FROM resources
                        JOIN categories on resources.category_id = categories.id
                        WHERE resources.id = $1;
                        `;

const querygetCommentsById = `
                        SELECT message
                        FROM comments
                        WHERE resource_id = $1;
                          `;


const insertComment = `
                        INSERT INTO comments (user_id, resource_id, message)
                        Values ($1, $2, $3)
                        RETURNING *;
                          `;


const getResourceById = (id) => {
  return db.query(querygetResourceById, [id])
    .then(resource => {
      return resource.rows;
    });
};

const getCommentsById = (id) => {
  return db.query(querygetCommentsById, [id])
    .then(comments => {
      return comments.rows;
    });
};

const addComment = function(user_id = 1, resource_id, message) {
  return db.query(insertComment, [user_id, resource_id, message])
    .then((res) => {
      console.log('Coment added to databse', res.rows[0]);
      return res.rows[0];
    }).catch((error) => {
      console.log(error);
    });
};

const addRating = (data) => {

  console.log(data);
  return db.query(`
            INSERT INTO ratings (user_id, resource_id, rating)
            VALUES ($1, $2, $3);`, [data.user_id, data.resource_id, data.rating])
  .then(
    console.log('rated the resource successfully')
  );

};
module.exports = { getResourceById, getCommentsById, addComment, addRating };
