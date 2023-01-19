-- lab 3 
-- 1. 
SELECT * FROM products WHERE price != sale_price  ORDER BY sale_price DESC LIMIT 1;
-- 2. 
SELECT * FROM products WHERE price != sale_price AND price BETWEEN 25 AND 50 AND remaining_quantity > 0 ORDER BY price DESC LIMIT 1;
-- 3.
 SELECT * FROM products WHERE sale_price != price AND remaining_quantity > 0 ORDER BY price DESC, name asc;
-- 4.
SELECT * FROM products WHERE sale_price != price AND remaining_quantity > 0 ORDER BY price DESC, name ASC OFFSET 20 LIMIT 20;
-- 5.
 SELECT AVG(price) AS average_price FROM products;
-- 6.
SELECT AVG(sale_price) AS average_sale_price FROM products;
-- 7.
SELECT AVG(sale_price) AS average_sale_price FROM products WHERE remaining_quantity > 0;
-- 8.
UPDATE products SET remaining_quantity = 0 WHERE name ILIKE '%paper%';
--9.
UPDATE products SET remaining_quantity=floor(random()*(25-5)+10) WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
-- 10. 
SELECT * FROM products WHERE remaining_quantity > 0 ORDER BY price DESC LIMIT 10;
-- 11.
SELECT COUNT(*) AS product_count,SUM(remaining_quantity) AS remaining_quantity, sale_price FROM products GROUP BY sale_price; 
-- 12.
