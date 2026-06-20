window.CODE_SNIPPETS = window.CODE_SNIPPETS || {};
window.CODE_SNIPPETS["sql"] = [
`SELECT id, name, email
FROM users
WHERE status = 'active'
ORDER BY name ASC
LIMIT 10;`,
`SELECT DISTINCT country
FROM customers
WHERE country IS NOT NULL
ORDER BY country;`,
`SELECT product_id, price
FROM products
WHERE price BETWEEN 10 AND 50
ORDER BY price DESC;`,
`SELECT name, created_at
FROM accounts
WHERE name LIKE 'a%'
  AND created_at >= '2024-01-01';`,
`SELECT o.id, o.total, c.name
FROM orders AS o
INNER JOIN customers AS c
  ON o.customer_id = c.id
WHERE o.total > 100;`,
`SELECT c.name, o.id
FROM customers AS c
LEFT JOIN orders AS o
  ON o.customer_id = c.id
ORDER BY c.name;`,
`SELECT e.name, m.name AS manager
FROM employees AS e
LEFT JOIN employees AS m
  ON e.manager_id = m.id;`,
`SELECT category_id, COUNT(*) AS total
FROM products
GROUP BY category_id
ORDER BY total DESC;`,
`SELECT customer_id, SUM(total) AS spent
FROM orders
GROUP BY customer_id
HAVING SUM(total) > 500;`,
`SELECT department_id,
       AVG(salary) AS avg_salary,
       MAX(salary) AS top_salary
FROM employees
GROUP BY department_id;`,
`SELECT user_id, COUNT(*) AS logins
FROM sessions
GROUP BY user_id
HAVING COUNT(*) >= 5
ORDER BY logins DESC;`,
`SELECT name
FROM products
WHERE price > (
  SELECT AVG(price)
  FROM products
);`,
`SELECT name
FROM customers
WHERE id IN (
  SELECT customer_id
  FROM orders
  WHERE total > 200
);`,
`SELECT name
FROM employees AS e
WHERE EXISTS (
  SELECT 1
  FROM reports AS r
  WHERE r.author_id = e.id
);`,
`WITH recent_orders AS (
  SELECT customer_id, total
  FROM orders
  WHERE created_at >= '2024-06-01'
)
SELECT customer_id, SUM(total) AS amount
FROM recent_orders
GROUP BY customer_id;`,
`WITH ranked AS (
  SELECT name, salary,
         RANK() OVER (
           ORDER BY salary DESC
         ) AS position
  FROM employees
)
SELECT name, salary
FROM ranked
WHERE position <= 3;`,
`SELECT name, department_id,
       ROW_NUMBER() OVER (
         PARTITION BY department_id
         ORDER BY salary DESC
       ) AS rn
FROM employees;`,
`SELECT order_date, total,
       SUM(total) OVER (
         ORDER BY order_date
       ) AS running_total
FROM orders;`,
`INSERT INTO users (name, email, status)
VALUES ('Ada Lovelace', 'ada@mail.com', 'active');`,
`INSERT INTO products (name, price, category_id)
VALUES
  ('Keyboard', 29.99, 1),
  ('Mouse', 19.99, 1),
  ('Monitor', 149.99, 2);`,
`UPDATE users
SET status = 'inactive'
WHERE last_login < '2023-01-01';`,
`UPDATE products
SET price = price * 1.10
WHERE category_id = 2;`,
`DELETE FROM sessions
WHERE expires_at < '2024-01-01';`,
`DELETE FROM orders
WHERE customer_id IN (
  SELECT id
  FROM customers
  WHERE status = 'closed'
);`,
`CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at DATE DEFAULT CURRENT_DATE
);`,
`CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  total DECIMAL(10, 2) DEFAULT 0,
  FOREIGN KEY (customer_id)
    REFERENCES customers (id)
);`,
`CREATE INDEX idx_orders_customer
  ON orders (customer_id);`,
`SELECT name,
       CASE
         WHEN price < 20 THEN 'cheap'
         WHEN price < 100 THEN 'normal'
         ELSE 'expensive'
       END AS tier
FROM products;`,
`SELECT name, email
FROM customers
UNION
SELECT name, email
FROM suppliers
ORDER BY name;`,
`SELECT id,
       COALESCE(nickname, name, 'unknown')
         AS display_name
FROM users;`
];
