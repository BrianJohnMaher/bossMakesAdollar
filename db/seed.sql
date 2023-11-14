USE employee_tracker;

INSERT INTO departments (name)
VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Lead Design', 180000, 2),
    ('Software Engineer', 130000, 2),
    ('Legal', 250000, 4),
    ('Sales', 80000, 1),
    ('Accountant', 100000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Sonny', 'Koufax', 1, NULL),
    ('Longfellow', 'Deeds', 2, 1),
    ('Bobby', 'Boucher', 5, NULL),
    ('Howard', 'Ratner', 4, 3),
    ('Billy', 'Madison', 5, 3),
    ('Happy', 'Gilmore', 3, NULL),
    ('Danny', 'Maccabee', 3, 6);