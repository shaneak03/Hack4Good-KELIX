import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // Fetch the user by username
        const { data: users, error } = await supabase
            .from('Personnel')
            .select('*')
            .eq('User_Name', username);

        if (error || users.length === 0) {
            console.error('Error fetching user:', error);
            alert('Invalid username');
            return;
        }

        const user = users[0];

        // Compare the entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.Password);
        if (!isPasswordValid) {
            console.error('Invalid password');
            alert('Invalid password');
            return;
        }

        // Fetch the Admin value
        const isAdmin = user.Admin;
        const id = user.ID;
        console.log('isAdmin in Login:', isAdmin);

        onLogin(isAdmin, id);
        Cookies.set('isAdmin', isAdmin, { expires: 7 });
        Cookies.set('userId', id, { expires: 7 });
        console.log('Cookies after login:', { isAdmin: Cookies.get('isAdmin'), userId: Cookies.get('userId') });
        navigate('/');
    };

    return (
        <Container maxWidth="xs">
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                height="100vh"
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </form>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Forgot your password? <Link to="/change-password">Change Password</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Login;
