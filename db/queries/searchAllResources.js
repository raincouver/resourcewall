const db = require('../connection');

/// Resources 
const searchAllResources = (searchInput) => {
  // search is case insensitive using ILIKE
  return db
    .query(
      `SELECT resources.title, 
      resources.url, 
      categories.name as category,  
      ROUND(AVG(ratings.rating), 1) as average_rating
      FROM resources
      JOIN ratings ON resources.id = resource_id
      JOIN users ON resources.user_id = users.id
      JOIN categories ON resources.category_id = categories.id
      WHERE resources.title ILIKE $1
      OR resources.url ILIKE $1
      OR users.name ILIKE $1
      OR categories.name ILIKE $1
      GROUP BY resources.title, resources.id, categories.name
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