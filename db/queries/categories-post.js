const db = require('../connection');

const getUrlByCategoryName = (data) => {

  return db.query(`
                  SELECT resources.title as title, resources.id as resource_id, resources.url as url
                  FROM categories
                  INNER JOIN resources ON categories.id = resources.category_id
                  WHERE categories.name = $1;`, [data])
    .then(response => {
      console.log(response.rows);
      return response.rows;
    });
};

const getFeedbacksByResourceID = (data) => {

  return db.query(`
                    SELECT COUNT(DISTINCT likes.id) AS likes, ROUND(AVG(ratings.rating), 1) AS ratings
                    FROM resources
                    INNER JOIN likes ON likes.resource_id = resources.id
                    INNER JOIN ratings ON ratings.resource_id = resources.id
                    WHERE resources.id = $1
                    group by resources.id;`, [data])
    .then(response => {
      console.log(response.rows);
      return response.rows;
    });

};

const checkIfFeedbacks = (data) => {

  return db.query(`
                    SELECT *
                    FROM resources
                    INNER JOIN likes ON likes.resource_id = resources.id
                    INNER JOIN ratings ON ratings.resource_id = resources.id
                    WHERE resources.id = $1;`, [data])
    .then(response => {
      console.log(response.rows);
      return response.rows;
    });

};

module.exports = { checkIfFeedbacks, getUrlByCategoryName, getFeedbacksByResourceID };