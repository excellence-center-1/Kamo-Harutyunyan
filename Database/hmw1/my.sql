mysql -u root -p
CREATE DATABASE main_db;
CREATE USER 'super_user'@'%' IDENTIFIED BY 'pass%@!123';
CREATE USER 'beginner'@'%' IDENTIFIED BY 'pass%@!123';
GRANT ALL PRIVILEGES ON main_db.* TO 'super_user'@'%';
GRANT SELECT ON my_db.* TO 'user2'@'%';
ALTER USER 'super_user'@'%' IDENTIFIED BY 'New_pass124';
ALTER USER 'beginner'@'%' IDENTIFIED BY 'New_pass424';
