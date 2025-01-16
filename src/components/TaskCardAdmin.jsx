import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const TaskCardAdmin = ({ id, image, title, points, onEditClick }) => {
  const navigate = useNavigate(); 

  const handleEditClick = () => {
    navigate("/task-edit", { state: { id, title, description: '', points, image } }); 
  };

  const handleDeleteClick = () => {
    // Add delete functionality here
    console.log("Delete task with id: ${id}");
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" color="primary" onClick={onEditClick || handleEditClick}>
              Edit
            </Button>
            <Button variant="contained" sx={{ backgroundColor: '#ED0000' }} onClick={handleDeleteClick}>
              Delete
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCardAdmin;
