const db = require('../connection');

const querygetResourceById = `
                        SELECT title, url, description, categories.name
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

const queryGetLikes = `
                        SELECT user_id
                        FROM likes
                        WHERE resource_id = $1
                        LIMIT 1;`;


const getUserLikes = (id) => {
  return db.query(queryGetLikes, [id])
    .then(data => {
      return data.rows;
    });
};

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



module.exports = { getUserLikes, getResourceById, getCommentsById, addComment };
