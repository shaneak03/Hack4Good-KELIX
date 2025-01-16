import { Box, Typography, Button } from '@mui/material';
import React from 'react';

const dummyData = [
    { id: 1, duration: '1 week', interestRate: '2%', color: 'url(#id0)' },
    { id: 2, duration: '1 month', interestRate: '4%', color: 'url(#id1)' },
    { id: 3, duration: '3 months', interestRate: '7%', color: 'url(#id2)' }
];

const BondsPage = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
            <Typography variant="h3" gutterBottom align="center">
                Bonds
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', gap: '20px' }}>
                {dummyData.map((bond) => (
                    <Box key={bond.id} sx={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
                        <Box
                            component="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width="calc(15vh)"
                            height="calc(15vh)"
                            viewBox="0 0 1707 1707"
                            sx={{ fill: bond.color }}
                        >
                            <defs>
                                <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="175.732" y1="853.327" x2="1530.93" y2="853.327">
                                    <stop offset="0" style={{ stopOpacity: 1, stopColor: '#336666' }} />
                                    <stop offset="1" style={{ stopOpacity: 1, stopColor: '#003333' }} />
                                </linearGradient>
                                <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="175.732" y1="853.327" x2="1530.93" y2="853.327">
                                    <stop offset="0" style={{ stopOpacity: 1, stopColor: '#663366' }} />
                                    <stop offset="1" style={{ stopOpacity: 1, stopColor: '#330033' }} />
                                </linearGradient>
                                <linearGradient id="id2" gradientUnits="userSpaceOnUse" x1="175.732" y1="853.327" x2="1530.93" y2="853.327">
                                    <stop offset="0" style={{ stopOpacity: 1, stopColor: '#666633' }} />
                                    <stop offset="1" style={{ stopOpacity: 1, stopColor: '#333300' }} />
                                </linearGradient>
                            </defs>
                            <g id="Layer_x0020_1">
                                <path d="M793 1211l-451 0c-12,0 -22,-10 -22,-23 0,-12 10,-22 22,-22l451 0c12,0 23,10 23,22 0,13 -11,23 -23,23zm162 103l-652 0c-70,0 -127,-57 -127,-127l0 -1060c0,-70 57,-127 127,-127l807 0c64,0 116,52 116,116l0 657c170,11 305,154 305,327 0,137 -85,255 -204,304l0 280c0,9 -5,17 -13,20 -3,2 -7,3 -10,3 -5,0 -10,-2 -14,-5l-87 -69 -87 69c-7,5 -16,6 -24,2 -8,-3 -13,-11 -13,-20l0 -280c-48,-20 -90,-51 -124,-90zm225 -541l0 -657c0,-39 -31,-71 -70,-71l-807 0c-45,0 -82,37 -82,82l0 1060c0,45 37,82 82,82l619 0c-30,-50 -47,-107 -47,-169 0,-173 135,-316 305,-327zm23 655c-4,0 -7,0 -11,0 -23,-1 -45,-4 -67,-9l0 218 64 -51c9,-6 20,-6 29,0l63 51 0 -218c-22,5 -44,8 -67,9 -4,0 -7,0 -11,0zm0 -611c-156,0 -283,127 -283,283 0,150 118,273 265,282 12,0 24,0 36,0 147,-9 265,-132 265,-282 0,-156 -127,-283 -283,-283zm-23 412c-32,-10 -55,-40 -55,-75 0,-12 10,-23 22,-23 13,0 23,11 23,23 0,18 15,33 32,33l1 0 1 0c17,0 32,-15 32,-33 0,-18 -15,-33 -33,-33 -43,0 -78,-35 -78,-78 0,-35 23,-65 55,-75l0 -24c0,-12 10,-23 23,-23 12,0 23,11 23,23l0 24c32,10 55,40 55,75 0,13 -10,23 -22,23 -13,0 -23,-10 -23,-23 0,-18 -15,-33 -33,-33l0 0 0 0c-18,0 -33,15 -33,33 0,18 15,33 33,33 43,0 78,35 78,78 0,35 -23,65 -55,75l0 26c0,13 -11,23 -23,23 -13,0 -23,-10 -23,-23l0 -26zm23 111c-133,0 -240,-108 -240,-240 0,-133 107,-241 240,-241 132,0 240,108 240,241 0,132 -108,240 -240,240zm0 -435c-108,0 -195,87 -195,195 0,107 87,195 195,195 107,0 195,-88 195,-195 0,-108 -88,-195 -195,-195zm-119 -519l-65 0 0 234 40 0c13,0 23,10 23,23l0 85c0,13 -10,23 -23,23l-717 0c-12,0 -22,-10 -22,-23l0 -85c0,-13 10,-23 22,-23l40 0 0 -234 -64 0c-11,0 -19,-7 -22,-17 -3,-10 1,-20 10,-25l383 -237c7,-5 16,-5 24,0l383 237c8,5 12,15 10,25 -3,10 -12,17 -22,17zm-205 0l-357 0 0 234 357 0 0 -234zm-482 -46l8 0 94 0 403 0 94 0 8 0 -303 -187 -304 187zm-32 366l671 0 0 -40 -40 0 -94 0 -403 0 -94 0 -40 0 0 40zm63 -86l49 0 0 -234 -49 0 0 234zm497 0l49 0 0 -234 -49 0 0 234zm-132 244l-451 0c-12,0 -22,-10 -22,-23 0,-12 10,-22 22,-22l451 0c12,0 23,10 23,22 0,13 -11,23 -23,23zm0 116l-451 0c-12,0 -22,-10 -22,-23 0,-13 10,-23 22,-23l451 0c12,0 23,10 23,23 0,13 -11,23 -23,23zm0 115l-451 0c-12,0 -22,-10 -22,-22 0,-13 10,-23 22,-23l451 0c12,0 23,10 23,23 0,12 -11,22 -23,22z"></path>
                            </g>
                        </Box>
                        <Typography variant="h6" gutterBottom>
                            Duration: {bond.duration}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Interest Rate: {bond.interestRate} per week
                        </Typography>
                        <Button variant="contained" color="primary">
                            Purchase
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BondsPage;