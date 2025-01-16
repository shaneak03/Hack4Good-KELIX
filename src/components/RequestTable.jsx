import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableContainer = styled(TableContainer)({
  minWidth: 650,
});

function createData(item, qty, points, status, requestId) {
  return { item, qty, points, status, requestId };
}

const rows = [
  createData('Item 1', 2, 100, 'Approved', 'REQ123'),
  createData('Item 2', 5, 250, 'Pending', 'REQ124'),
  // Add more rows as needed
];

export default function RequestTable() {
  return (
    <StyledTableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Request ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.requestId}>
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.requestId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}