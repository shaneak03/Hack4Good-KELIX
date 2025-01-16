import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient'; 

const UsersPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('Personnel')
      .select('ID, User_Name, Points');

    if (error) {
      console.error('Error fetching users:', error);
    } else {
      setUsers(data);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    navigate('/edit-user', { state: { user } });
  };

  const handleAddUser = () => {
    navigate('/add-user');
  };

  const filteredUsers = users.filter(user =>
    user.User_Name.toLowerCase().includes(searchTerm.toLowerCase())
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
              <TableRow key={user.ID}>
                <TableCell>{user.ID}</TableCell>
                <TableCell>{user.User_Name}</TableCell>
                <TableCell>{user.Points}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleEditUser(user)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersPage;
