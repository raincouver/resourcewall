const db = require('../connection');


const addnewCategory = (data) => {

  console.log(data);
  return db.query(`
            INSERT INTO categories (name)
            VALUES ($1);`, [data])
  .then(
    console.log('add to categories successfully')
  );

};

const getCategoryID = (data) => {

  return db.query(`
                  SELECT id
                  FROM categories
                  WHERE name = $1
                  ORDER BY id DESC
                  LIMIT 1;`, [data])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const addnewResource = (data) => {
  
  console.log(data);

  db.query(`
            INSERT INTO resources (url, title, description, user_id, category_id)
            VALUES ($1, $2, $3, $4, $5);
            `, [data.url, data.title, data.description, data.user_id, data.category_id])
    .then(
      console.log('add to recources successfully')
    );
};
module.exports = { addnewResource, addnewCategory, getCategoryID };