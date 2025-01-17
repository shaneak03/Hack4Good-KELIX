import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const miniMartRequests = [
    { requester: 'Jing Rong', item: 'Pencils', quantity: 10, date: '2022-10-10', approved: false },
    { requester: 'KELIX', item: 'Pizza', quantity: 6, date: '2025-01-14', approved: true },
    { requester: 'Shane', item: 'Chair', quantity: 1, date: '2022-01-14', approved: false },
    // ...existing data...
];

const voucherRequests = [
    { requester: 'KE7', title: 'charity', points: '50', date: '2025-01-14', approved: true },
    { requester: 'Pioneer House', title: 'eventA', points: '100', date: '2025-01-14', approved: false },
    { requester: 'something', title: 'something', points: '50', date: '2025-01-14', approved: true },
    // ...existing data...
];

const inventorySummary = [
    { item: 'Pencils', quantity: 100 },
    { item: 'Pizza', quantity: 50 },
    { item: 'Chairs', quantity: 20 },
    // ...existing data...
];

const ReportsPage = () => {
    const today = new Date().toISOString().split('T')[0];
    const [reportType, setReportType] = useState('miniMart');
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);

    const filterByDate = (requests) => {
        return requests.filter(request => request.date >= startDate && request.date <= endDate);
    };

    useEffect(() => {
        // Automatically generate the report when any of the dependencies change
    }, [reportType, startDate, endDate]);

    return (
        <Box p={2} display="flex" flexDirection="column" height="100vh">
            <Typography variant='h4' gutterBottom>Reports</Typography>
            <Box p={2} flex="0 1 13vh" display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
                <Box flex="3 1 0" p={2} sx={{ width: { xs: '100%', sm: '48%' } }}>
                    <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        label="Start Date"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box flex="3 1 0" p={2} sx={{ width: { xs: '100%', sm: '48%' } }}>
                    <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        label="End Date"
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box flex="3 1 0" p={2} sx={{ width: { xs: '100%', sm: '48%' } }}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel>Report Type</InputLabel>
                        <Select
                            label="Report Type"
                            value={reportType}
                            onChange={(e) => setReportType(e.target.value)}
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="miniMart">MiniMart Requests</MenuItem>
                            <MenuItem value="voucher">Voucher Requests</MenuItem>
                            <MenuItem value="inventory">Inventory Summary</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box p={2} flex="1 1 auto" display="flex">
                {reportType === 'miniMart' && (
                    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
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
                                {filterByDate(miniMartRequests).map((request, index) => (
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
                )}
                {reportType === 'voucher' && (
                    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
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
                                {filterByDate(voucherRequests).map((request, index) => (
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
                )}
                {reportType === 'inventory' && (
                    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {inventorySummary.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.item}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Box>
    );
};

export default ReportsPage;