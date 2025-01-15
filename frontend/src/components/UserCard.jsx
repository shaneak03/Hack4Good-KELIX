import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onEdit }) => {
  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.bankValue}</TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={() => onEdit(user)}>
          Edit
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserCard;
