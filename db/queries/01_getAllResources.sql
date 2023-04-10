  SELECT resources.title, avg(ratings.rating) as average_rating
  FROM resources
  JOIN ratings ON resources.id = resource_id
  JOIN users ON resources.user_id = users.id
  GROUP BY resources.title; 