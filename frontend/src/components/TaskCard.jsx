import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const TaskCard = ({ image, title, points }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Points: {points}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Show More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
