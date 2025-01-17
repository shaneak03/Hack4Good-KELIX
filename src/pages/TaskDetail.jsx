import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const TaskDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { image, title, points } = location.state;

  return (
    <Box sx={{ padding: '20px' }}>
      <Card sx={{ maxWidth: 600, margin: 'auto' }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography p={1} variant="body1" color="text.secondary">
            Points: {points}
          </Typography>
          <Typography p={1} variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
            Task ID: {id}

          </Typography>
          <Button p={2} variant="contained" color="primary" onClick={() => alert("Sign up confirmed!")}>Sign up</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TaskDetail;