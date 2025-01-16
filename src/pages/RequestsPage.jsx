import React from 'react';
import { Box, Typography, Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const miniMartRequests = [
    { requester: 'Jing Rong', item: 'Pencils', quantity: 10, date: '2022-10-10', approved: false },
    { requester: 'KELIX', item: 'Pizza', quantity: 6, date: '2025-01-14', approved: true },
    { requester: 'Shane', item: 'Chair', quantity: 1, date: '2022-01-14', approved: false },
    { requester: 'Jing Rong', item: 'Pencils', quantity: 10, date: '2022-10-10', approved: false },
    { requester: 'KELIX', item: 'Pizza', quantity: 6, date: '2025-01-14', approved: true },
    { requester: 'Shane', item: 'Chair', quantity: 1, date: '2022-01-14', approved: false },
    { requester: 'Jing Rong', item: 'Pencils', quantity: 10, date: '2022-10-10', approved: false },
    { requester: 'KELIX', item: 'Pizza', quantity: 6, date: '2025-01-14', approved: true },
    { requester: 'Shane', item: 'Chair', quantity: 1, date: '2022-01-14', approved: false },
    
];

const voucherRequests = [
    { requester: 'KE7', title: 'charity', points: '50', date: '2025-01-14', approved: true },
    { requester: 'Pioneer House', title: 'eventA', points: '100', date: '2025-01-14', approved: false },
    { requester: 'something', title: 'something', points: '50', date: '2025-01-14', approved: true },
    { requester: 'KE7', title: 'charity', points: '50', date: '2025-01-14', approved: true },
    { requester: 'Pioneer House', title: 'eventA', points: '100', date: '2025-01-14', approved: false },
    { requester: 'something', title: 'something', points: '50', date: '2025-01-14', approved: true },
    { requester: 'KE7', title: 'charity', points: '50', date: '2025-01-14', approved: true },
    { requester: 'Pioneer House', title: 'eventA', points: '100', date: '2025-01-14', approved: false },
    { requester: 'something', title: 'something', points: '50', date: '2025-01-14', approved: true },
];

const RequestsPage = () => {
    return (
        <>
            <Box sx={{ paddingTop: '20px' }}>
                <Typography variant='h5' gutterBottom>MiniMart Requests</Typography>
                <Box p={2} sx={{height: 'calc(35vh)'}}>
                    <TableContainer component={Paper} sx={{maxHeight: 'calc(35vh)'}}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Requester</TableCell>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {miniMartRequests.map((request, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{request.requester}</TableCell>
                                        <TableCell>{request.item}</TableCell>
                                        <TableCell>{request.quantity}</TableCell>
                                        <TableCell>{request.date}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color={request.approved ? "success" : "primary"}>
                                                {request.approved ? "Approved" : "Approve"}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Typography variant='h5' gutterBottom>Voucher Requests</Typography>
                <Box p={2} sx={{height: 'calc(35vh)'}}>
<TableContainer component={Paper} sx={{maxHeight: 'calc(35vh)'}}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Requester</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Points</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {voucherRequests.map((request, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{request.requester}</TableCell>
                                        <TableCell>{request.title}</TableCell>
                                        <TableCell>{request.points}</TableCell>
                                        <TableCell>{request.date}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color={request.approved ? "success" : "primary"}>
                                                {request.approved ? "Approved" : "Approve"}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    );
};

export default RequestsPage;