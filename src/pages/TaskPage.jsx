import React, { useState } from 'react';
import { Grid, Box, TextField, Typography, Button } from '@mui/material';
import TaskCard from '../components/TaskCard'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate


// Sample task data
const tasks = [
  {
    id: 1,
    title: 'Memorise a Subject Topic',
    points: 50,
    description: "Memorise this subject topic",
    image: 'https://www.ninds.nih.gov/sites/default/files/styles/half_width_small/public/2022-04/KYB_Brain_Basics_Brain040522.png?itok=geqsoubE',
  },
  {
    id: 2,
    title: 'Write a Reflection',
    points: 80,
    description: 'Write a reflection for the learning journey we went on to the Garden by the Bay',
    image: 'https://img.freepik.com/premium-vector/light-bulb-icon-energy-thinking-symbol-creative-idea-inspiration-concept-vector-illustration_97458-1278.jpg',
  },
  {
    id: 3,
    title: 'Survey for Cookhouse',
    points: 50,
    description: 'Please lend us your time to fill this survey for the cookhouse',
    image: 'https://img.freepik.com/premium-vector/kids-drawing-cartoon-vector-illustration-notebook-ballpoint-pen-icon-isolated_760559-868.jpg',
  },
  {
    id: 4,
    title: 'Mural Design Competition',
    points: 100,
    description: 'Design a mural for the mural wall at the front gate',
    image: 'https://nus.edu.sg/osa/images/default-source/default-album/dsc_7539.jpg?sfvrsn=3d2adc09_0',
  },
];

const sampleTask = {
  id: 5,
  title: 'Sample Task',
  description: 'This is a sample task description.',
  points: 100,
  image: 'https://img.freepik.com/free-photo/man-making-graffiti-with-aerosol-can-wall_23-2147827504.jpg?t=st=1737087438~exp=1737091038~hmac=6cc367b61cb4603cf06872936f21becc9272e87a8a93f8e99ccac1ab3401f7e1&w=900',
};

const TaskPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleShowMoreClick = () => {
    navigate('/task-detail');
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
              <TaskCard id={task.id} image={task.image} title={task.title} points={task.points} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TaskPage;