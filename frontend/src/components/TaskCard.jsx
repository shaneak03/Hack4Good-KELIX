import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const TaskCard = ({ id, image, title, points }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleShowMoreClick = () => {
    navigate(`/task-detail/${id}`, { state: { id, image, title, points } });
  };

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
          <Button variant="contained" color="primary" onClick={handleShowMoreClick}>
            Show More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
