  
INSERT INTO department (department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');


INSERT INTO employeeRole (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Sales Person', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2);
    ('Accountant', 125000, 3);
    ('Legal Team Lead', 80000, 4);
    ('Lawyer', 80000, 4);

INSERT INTO employee (first_name, last_name, employeeRole_id, manager_id)
VALUES
    ("John", "Doe", 1, 3);
    ("Mike", "Chan", 2, 1);
    ("Ashley", "Rodriguez", 3, null);
    ("Kevin", "Tupik", 4, 3);
    ("Malia", "Brown", 5, null);
    ("Sarah", "Lourd", 6, null);
    ("Tom", "Allen", 7, 6);
    ("Tanmer", "Galal", 4, 4);


