import React from 'react';
import { Box, Typography, Container, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const TransactionHistory = ({ user = { transactions: [] } }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Transaction History
        </Typography>
        <Container>
          <Paper sx={{ marginTop: 2, padding: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price per Item</TableCell>
                  <TableCell>Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.transactions.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.name}</TableCell>
                    <TableCell>{transaction.quantity}</TableCell>
                    <TableCell>${transaction.price.toFixed(2)}</TableCell>
                    <TableCell>${(transaction.quantity * transaction.price).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default TransactionHistory;