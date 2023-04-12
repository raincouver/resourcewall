  SELECT resources.title, avg(ratings.rating) as average_rating
  FROM resources
  JOIN ratings ON resources.id = resource_id
  JOIN users ON resources.user_id = users.id
  GROUP BY resources.title;


  SELECT categories.id, categories.name, resources.title, COUNT(likes.*) as likes, ratings.rating as rating
  FROM categories
  JOIN resources on categories.id = resources.category_id
  JOIN likes on likes.resource_id = resources.id
  JOIN ratings on ratings.resource_id = resources.id
  WHERE categories.id = 1
  GROUP BY categories.name, categories.id, resources.title
  ORDER BY resources.title;
