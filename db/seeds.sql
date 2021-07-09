INSERT INTO department
    (name)
VALUES
('HR'),
('Shipping');




INSERT INTO roles
    (title, salary, department_id)
VALUES
('HR Manager', 125000, 1),
('HR Assistant Manager', 100000, 1),
('HR Employee', 90000, 1),
('HR Intern', 40000, 1),
('Shipping Manager', 125000, 2),
('Shipping Assistant Manager', 100000, 2),
('Shipping Employee', 90000, 2),
('Shipping Intern', 40000, 2);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Simon', 'Rennocks', 1, NULL),
('Ron', 'Swanson', 5, NULL),
('Mark', 'Messier', 2, 1),
('Tie', 'Domi', 6, 2),
('Al', 'Robinson', 3, 1),
('Blade', 'Vampkill', 7, 2),
('Michael', 'Jordan', 4, 1),
('Scotty', 'Upshall', 8, 2);


