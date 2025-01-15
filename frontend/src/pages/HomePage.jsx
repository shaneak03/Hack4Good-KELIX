import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const HomePage = () => {
  const events = [
    { title: 'Event 1', details: 'Details about Event 1.', image: 'https://via.placeholder.com/300?text=Event+1' },
    { title: 'Event 2', details: 'Details about Event 2.', image: 'https://via.placeholder.com/300?text=Event+2' },
    { title: 'Event 3', details: 'Details about Event 3.', image: 'https://via.placeholder.com/300?text=Event+3' },
  ];

  const announcements = [
    { title: 'Announcement 1', details: 'Details about Announcement 1.' },
    { title: 'Announcement 2', details: 'Details about Announcement 2.' },
    { title: 'Announcement 3', details: 'Details about Announcement 3.' },
  ];

  const categories = [
    { link: '/category1', logo: 'https://via.placeholder.com/40?text=C1' },
    { link: '/category2', logo: 'https://via.placeholder.com/40?text=C2' },
    { link: '/category3', logo: 'https://via.placeholder.com/40?text=C3' },
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the HomePage
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Events
        </Typography>
        <Carousel>
          {events.map((event, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.details}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
          Announcements
        </Typography>
        <Carousel>
          {announcements.map((announcement, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" component="h3">
                  {announcement.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {announcement.details}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          {categories.map((category, index) => (
            <Link key={index} to={category.link}>
              <img src={category.logo} alt={`Category ${index + 1}`} style={{ height: '40px', marginRight: '15px' }} />
            </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
