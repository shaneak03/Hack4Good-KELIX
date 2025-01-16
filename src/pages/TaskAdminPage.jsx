import React, { useState } from 'react';
import { Grid, Box, TextField, Typography, Button } from '@mui/material';
import TaskCardAdmin from '../components/TaskCardAdmin'; 
import { useNavigate } from 'react-router-dom'; 

// Sample task data
const tasks = [
  { 
    id: 1, 
    title: 'Task 1', 
    points: 50, 
    image: 'https://via.placeholder.com/200', 
  }, 
  { 
    id: 2, 
    title: 'Task 2', 
    points: 30, 
    image: 'https://via.placeholder.com/200', 
  }, 
  { 
    id: 3, 
    title: 'Task 3', 
    points: 70, 
    image: 'https://via.placeholder.com/200', 
  }, 
  { 
    id: 4, 
    title: 'Task 4', 
    points: 90, 
    image: 'https://via.placeholder.com/200', 
  },
];

const sampleTask = {
  id: 5,
  title: 'Sample Task',
  description: 'This is a sample task description.',
  points: 100,
  image: 'https://via.placeholder.com/200',
};

const TaskAdminPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClick = (task) => {
    navigate('/task-edit', { state: task });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h3" gutterBottom align="center">
          Our Tasks
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <TextField
            label="Search Tasks"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: '60%' }}
          />
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {filteredTasks.map((task) => (
            <Grid item xs={12} sm={6} md={4} key={task.id}>
              <TaskCardAdmin 
                id={task.id} 
                image={task.image} 
                title={task.title} 
                points={task.points} 
                onEditClick={() => handleEditClick(task)} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TaskAdminPage;
