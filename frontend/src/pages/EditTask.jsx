import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button } from '@mui/material';

const EditTask = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { id, title, description, points, image } = location.state || {}; // Ensure state is handled correctly

  const [taskTitle, setTaskTitle] = useState(title || '');
  const [taskDescription, setTaskDescription] = useState(description || '');
  const [taskPoints, setTaskPoints] = useState(points || '');
  const [taskImage, setTaskImage] = useState(image || '');

  const handleSave = () => {
    // Implement save functionality here
    console.log('Task saved:', { id, taskTitle, taskDescription, taskPoints, taskImage });
    navigate('/taskadmin'); // Navigate back to TaskAdminPage
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Edit Task
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        label="Description"
        variant="outlined"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        label="Points"
        variant="outlined"
        value={taskPoints}
        onChange={(e) => setTaskPoints(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <TextField
        label="Image URL"
        variant="outlined"
        value={taskImage}
        onChange={(e) => setTaskImage(e.target.value)}
        fullWidth
        sx={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default EditTask;
