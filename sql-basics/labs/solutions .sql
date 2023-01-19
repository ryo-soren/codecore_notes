-- 1.1
SELECT line_items.order_id, AVG(line_items.price * line_items.quantity) AS average_price
 FROM orders
 INNER JOIN line_items ON orders.id = line_items.order_id
 WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on < '2016-02-01'
 GROUP BY line_items.order_id
 ORDER BY line_items.order_id;

--  or

SELECT order_id,
       completed_on,
       average_price
FROM (
       SELECT line_items.order_id,
              orders.completed_on, 
              AVG(line_items.quantity * line_items.price) AS average_price
       FROM line_items
       INNER JOIN orders ON line_items.order_id = orders.id
       GROUP BY line_items.order_id, orders.completed_on
     ) AS product_average_price
WHERE completed_on BETWEEN '2016-01-01' AND '2016-02-01';

-- 1.2
 SELECT line_items.order_id, line_items.price, orders.completed_on 
 FROM line_items 
 INNER JOIN orders ON orders.id = line_items.order_id 
 GROUP BY orders.completed_on, line_items.price, line_items.order_id 
 ORDER BY orders.completed_on;
-- gives orderID, price, date

-- solution
SELECT products.name, products.price, MIN(line_items.price)as lowest_price
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on < '2021-03-01'
GROUP BY products.id;
