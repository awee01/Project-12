DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employeeRole;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  dep_name VARCHAR(30) NOT NULL

);

CREATE TABLE employeeRole (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INTEGER NOT NULL,

  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) 
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employeeRole_id INTEGER NOT NULL,
  manager_id INTEGER,

  CONSTRAINT fk_employeeRole FOREIGN KEY (employeeRole_id) REFERENCES employeeRole(id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);