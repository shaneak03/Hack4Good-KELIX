import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import bcrypt from 'bcryptjs';

const ChangePassword = () => {
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Fetch the user by username
        const { data: users, error } = await supabase
            .from('Personnel')
            .select('*')
            .eq('User_Name', username);

        if (error || users.length === 0) {
            console.error('Error fetching user:', error);
            return;
        }

        const user = users[0];

        // Compare the entered current password with the hashed password
        // await bcrypt.compare(currentPassword, user.Password)
        const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.Password);
        if (!isCurrentPasswordValid) {
            console.error('Invalid current password');
            return;
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        const { error: updateError } = await supabase
            .from('Personnel')
            .update({ Password: hashedPassword })
            .eq('User_Name', username);

        if (updateError) {
            console.error('Error updating password:', updateError);
            return;
        }

        // Log the user in and navigate to home
        // onLogin();
        navigate('/');

        alert('Password changed successfully!');
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
                    Change Password
                </Typography>
                <form onSubmit={handleSubmit}>
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
                        label="Current Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
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
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Change Password
                    </Button>
                </form>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    Remembered your password? <Link to="/login">Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default ChangePassword;
