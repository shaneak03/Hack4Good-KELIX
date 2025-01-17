import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// The ProfilePage component
const ProfilePage = () => {
    const navigate = useNavigate();

    // An array of active tasks
    const activeTasks = [
        { id: 1, task: 'Suvery for Cookhouse', status: 'In Progress' },
        { id: 2, task: 'Write a Reflection', status: 'Pending' },
        { id: 3, task: 'Memorise a Subject Topic', status: 'Completed' },
        { id: 4, task: 'Mural Design Competition', status: 'In Progress' },
        { id: 5, task: 'Financial Literacy Lecture', status: 'Pending' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'In Progress':
                return 'yellow';
            case 'Pending':
                return 'orange';
            case 'Completed':
                return 'green';
            default:
                return 'white';
        }
    };

    return (
        <Box>
            <Box p={2} sx={{height: 'calc(20vh)'}}>
                <Typography variant="h5" gutterBottom>Profile</Typography>
                <Box display="flex" justifyContent="space-between" sx={{height: '90%', border: '1px solid #ccc'}}>
                    <Box p={2} flex={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Avatar src="https://shorturl.at/P3IPZ" alt="Profile" sx={{height: "calc(15vh)", width: "calc(15vh)"}} />
                    </Box>
                    <Box p={2} flex={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}>Goh Ee Chern</Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}>Student</Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.5rem', sm: '0.75rem', md: '1rem' } }}>500 Points</Typography>
                    </Box>
                    <Box p={2} flex={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Button variant="contained" color="primary" onClick={() => navigate('/change-password')}>Change Password</Button>
                    </Box>
                </Box>
            </Box>
            <Box p={2} sx={{ height: 'calc(65vh)' }}>
                {/* Typography component from Material-UI, used for text */}
                <Typography variant="h5" gutterBottom>Active Tasks</Typography>
                {/* TableContainer component from Material-UI, used to contain the table */}
                <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                    {/* Table component from Material-UI, used to create a table */}
                    <Table stickyHeader>
                        {/* TableHead component from Material-UI, used for the table header */}
                        <TableHead>
                            <TableRow>
                                {/* TableCell component from Material-UI, used for table cells */}
                                <TableCell>ID</TableCell>
                                <TableCell>Task</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* TableBody component from Material-UI, used for the table body */}
                        <TableBody>
                            {/* Mapping through the activeTasks array to create table rows */}
                            {activeTasks.map(task => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.id}</TableCell>
                                    <TableCell>{task.task}</TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                width: 16,
                                                height: 16,
                                                borderRadius: '50%',
                                                backgroundColor: getStatusColor(task.status),
                                                display: 'inline-block',
                                                marginRight: 1,
                                            }}
                                        />
                                        {task.status}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default ProfilePage;