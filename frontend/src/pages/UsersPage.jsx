import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/UserCard'; // Import UserCard component

const users = [
  { id: 1, name: 'Jing Rong', bankValue: 100 },
  { id: 2, name: 'KELIX', bankValue: 200 },
  { id: 3, name: 'Shane', bankValue: 300 },
];

const UsersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEditUser = (user) => {
    navigate('/edit-user', { state: { user } });
  };

  const handleAddUser = () => {
    navigate('/add-user');
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <TextField
        fullWidth
        label="Search Users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddUser} sx={{ marginBottom: '20px' }}>
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Bank Value</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} onEdit={handleEditUser} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
