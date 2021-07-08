use employees;


INSERT INTO department
    (name)
VALUES
('HR'),
('Shipping'),
('Receiving'),
('Sales'),
('Engineering');


INSERT INTO role
    (title, salary, department_id)
VALUES
('Manager', 125000, 1),
('Assistang Manager', 100000, 2),
('Employee', 90000, 3),
('Intern', 40000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Simon', 'Rennocks', 1, 0),
('Mark', 'Messier', 2, 1),
('Tie', 'Domi', 3, 2),
('Al', 'Robinson', 4, 3);
