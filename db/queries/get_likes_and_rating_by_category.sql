-- SELECT categories.name, resources.title, COUNT(likes.id) AS likes, AVG(ratings.rating) AS rating
-- FROM categories
-- JOIN resources ON categories.id = resources.category_id
-- JOIN likes ON likes.resource_id = resources.id
-- JOIN ratings ON ratings.resource_id = resources.id
-- WHERE categories.name = 'JustAdded'
-- GROUP BY categories.name, resources.title
-- ORDER BY resources.title;


-- SELECT resources.id, resources.title, resources.url
-- FROM categories
-- INNER JOIN resources ON categories.id = resources.category_id
-- WHERE categories.name = 'JustAdded';

SELECT COUNT(DISTINCT likes.id) AS likes, AVG(ratings.rating) AS rating
FROM resources
INNER JOIN likes ON likes.resource_id = resources.id
INNER JOIN ratings ON ratings.resource_id = resources.id
WHERE resources.id = 1
group by resources.id;