import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography, Avatar, Button } from '@mui/material';

// The ProfilePage component
const ProfilePage = () => {
    // An array of active tasks
    const activeTasks = [
        { id: 1, task: 'Task 1', status: 'In Progress' },
        { id: 2, task: 'Task 2', status: 'Pending' },
        { id: 3, task: 'Task 3', status: 'Completed' },
        { id: 4, task: 'Task 4', status: 'In Progress' },
        { id: 5, task: 'Task 5', status: 'Pending' },
        { id: 6, task: 'Task 6', status: 'Completed' },
        { id: 7, task: 'Task 7', status: 'In Progress' },
        { id: 8, task: 'Task 8', status: 'Pending' },
        { id: 9, task: 'Task 9', status: 'Completed' },
        { id: 10, task: 'Task 10', status: 'In Progress' },
        { id: 11, task: 'Task 11', status: 'In Progress' },
        { id: 12, task: 'Task 12', status: 'Pending' },
        { id: 13, task: 'Task 13', status: 'Completed' },
        { id: 14, task: 'Task 14', status: 'In Progress' },
        { id: 15, task: 'Task 15', status: 'Pending' },
        { id: 16, task: 'Task 16', status: 'Completed' },
        { id: 17, task: 'Task 17', status: 'In Progress' },
        { id: 18, task: 'Task 18', status: 'Pending' },
        { id: 19, task: 'Task 19', status: 'Completed' },
        { id: 20, task: 'Task 20', status: 'In Progress' },
    ];

    return (
        <Box>
            <Box p={2} sx={{height: 'calc(20vh)'}}>
                <Typography variant="h5" gutterBottom>Profile</Typography>
                <Box display="flex" justifyContent="space-between" sx={{height: '90%', border: '1px solid #ccc'}}>
                    <Box p={2} flex={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Avatar src="https://shorturl.at/P3IPZ" alt="Profile" sx={{height: "calc(15vh)", width: "calc(15vh)"}} />
                    </Box>
                    <Box p={2} flex={5} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography variant="h6" align="center" sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }}>Random Student with last name</Typography>
                        <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', sm: '1rem', md: '1.25rem' } }}>Student</Typography>
                        <Typography variant="body2" sx={{ fontSize: { xs: '0.5rem', sm: '0.75rem', md: '1rem' } }}>999 Points</Typography>
                    </Box>
                    <Box p={2} flex={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Button variant="contained" color="primary" sx={{ mb: 2 }}>Change Username</Button>
                        <Button variant="contained" color="primary">Change Password</Button>
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
                                    <TableCell>{task.status}</TableCell>
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