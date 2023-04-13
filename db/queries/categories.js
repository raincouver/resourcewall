const db = require('../connection');

const querygetCategoryInfoById = `SELECT
categories.id,
categories.name,
resources.title,
COUNT(likes.id) AS likes,
ratings.rating AS rating
FROM
categories
FULL OUTER JOIN
resources ON categories.id = resources.category_id
FULL OUTER JOIN
likes ON likes.resource_id = resources.id
FULL OUTER JOIN
ratings ON ratings.resource_id = resources.id
WHERE
categories.name = $1
GROUP BY
categories.id,
categories.name,
resources.title,
ratings.rating
ORDER BY
resources.title;`;



const getCategoryInfoById = (id) => {
  return db.query(querygetCategoryInfoById, [id])
    .then(data => {
      return data.rows;
    });
};


module.exports = { getCategoryInfoById };
