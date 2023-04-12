const db = require('../connection');


const addnewResource = (data) => {

  const queryAddnew   = `
                        INSERT INTO resources (url, title, description, user_id)
                        VALUES (${data.newUrl}, ${data.newTitle}, ${data.newDescription}, ${data.user_id});
                        `;

  return db.query(queryAddnew)
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

const addnewCategory = (data) => {

  const queryGetResourceID   = `
                                SELECT resources.user_id, resources.id
                                FROM resources
                                WHERE resources.title = ${data.newTitle};
                                `;

  return db.query(queryGetResourceID)
    .then(resourceData => {
      const queryAddnew   = `
      INSERT INTO categories (category, user_id, resource_id)
      VALUES (${data.newCategory}, ${resourceData.user_id}, ${resourceData.resource_id});
      `;
      return db.query(queryAddnew)
    });
};
module.exports = { addnewResource, addnewCategory };