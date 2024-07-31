const bcrypt = require('bcryptjs');
const db = require('../config/db');

const register = (req, res) => {
    const { email, username, first_name, last_name, password } = req.body;

    db.serialize(() => {
        db.run('BEGIN TRANSACTION', (err) => {
            if (err) {
                console.error('Transaction Start Error:', err);
                return res.status(500).json({ error: 'Failed to start transaction' });
            }
        });

        db.get('SELECT username FROM users WHERE username = ?', [username], (err, row) => {
            if (err) {
                console.error('Error checking existing user:', err);
                db.run('ROLLBACK', (rollbackErr) => {
                    if (rollbackErr) console.error('Rollback Error:', rollbackErr);
                });
                return res.status(500).json({ error: 'Failed to check existing user' });
            }
            if (row) {
                return res.status(400).json({ error: 'Username already exists' });
            }

            db.run(
                `INSERT INTO users (email, username, first_name, last_name) VALUES (?, ?, ?, ?)`,
                [email, username, first_name, last_name],
                function (err) {
                    if (err) {
                        console.error('Insert User Error:', err);
                        db.run('ROLLBACK', (rollbackErr) => {
                            if (rollbackErr) console.error('Rollback Error:', rollbackErr);
                        });
                        return res.status(500).json({ error: 'Failed to register user' });
                    }

                    bcrypt.hash(password, 10, (err, hashedPassword) => {
                        if (err) {
                            console.error('Hash Password Error:', err);
                            db.run('ROLLBACK', (rollbackErr) => {
                                if (rollbackErr) console.error('Rollback Error:', rollbackErr);
                            });
                            return res.status(500).json({ error: 'Failed to hash password' });
                        }

                        db.run(
                            `INSERT INTO hashpwd (username, password) VALUES (?, ?)`,
                            [username, hashedPassword],
                            function (err) {
                                if (err) {
                                    console.error('Insert Password Error:', err);
                                    db.run('ROLLBACK', (rollbackErr) => {
                                        if (rollbackErr) console.error('Rollback Error:', rollbackErr);
                                    });
                                    return res.status(500).json({ error: 'Failed to save password' });
                                }

                                db.run('COMMIT', (commitErr) => {
                                    if (commitErr) {
                                        console.error('Commit Error:', commitErr);
                                        return res.status(500).json({ error: 'Failed to commit transaction' });
                                    }

                                    res.status(201).json({ message: 'User registered successfully' });
                                });
                            }
                        );
                    });
                }
            );
        });
    });
};


const login = (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT password FROM hashpwd WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error('Error retrieving password:', err);
            return res.status(500).json({ error: 'Failed to retrieve password' });
        }
        if (!row) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        bcrypt.compare(password, row.password, (err, result) => {
            if (err) {
                console.error('Password Comparison Error:', err);
                return res.status(500).json({ error: 'Failed to compare passwords' });
            }

            if (!result) {
                return res.status(400).json({ error: 'Invalid username or password' });
            }

            res.status(200).json({ message: 'Login successful' });
        });
    });
};

const getUsers = (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error('Error retrieving users:', err);
            return res.status(500).json({ error: 'Failed to retrieve users' });
        }

        res.status(200).json(rows);
    });
};

const getUserById = (req, res) => {
    const { id } = req.params;

    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Error retrieving user:', err);
            return res.status(500).json({ error: 'Failed to retrieve user' });
        }
        if (!row) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(row);
    });
};

const updateUserById = (req, res) => {
    const { id } = req.params;
    const { email, first_name, last_name } = req.body;

    db.run(
        'UPDATE users SET email = ?, first_name = ?, last_name = ? WHERE id = ?',
        [email, first_name, last_name, id],
        function (err) {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).json({ error: 'Failed to update user' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json({ message: 'User updated successfully' });
        }
    );
};

module.exports = { register, login, getUsers, getUserById, updateUserById };
