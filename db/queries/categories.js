const db = require('../connection');


const querygetCategoryInfoById = `SELECT
categories.id,
categories.name,
resources.title,
resources.id,
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
resources.id,
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

const getCategoryNameById = (id) => {
  return db.query(`
                  SELECT name
                  FROM categories
                  WHERE id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
};
module.exports = { getCategoryNameById, getCategoryInfoById };
