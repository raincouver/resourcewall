const db = require('../connection');

/// Resources 
const searchAllResources = (searchInput) => {
  // search is case insensitive using ILIKE
  return db
    .query(
      `SELECT resources.title, 
      avg(ratings.rating) as average_rating
      FROM resources
      JOIN ratings ON resources.id = resource_id
      JOIN users ON resources.user_id = users.id
      JOIN categories ON resources.category_id = categories.id
      WHERE resources.title ILIKE $1
      OR resources.url ILIKE $1
      OR users.name ILIKE $1
      OR categories.name ILIKE $1
      GROUP BY resources.title
      ORDER BY resources.id;`, [searchInput]
    )
    .then((result) => {
      console.log('Search results: ', result.rows)
        return result.rows; 
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = { searchAllResources }; 