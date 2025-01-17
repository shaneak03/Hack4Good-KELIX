import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material'; 
import Carousel from 'react-material-ui-carousel';

const HomePage = () => {
  const events = [
    { title: 'Muhammadiyah Welfare Home Futsal Tournament', details: 'Join our fun-filled Futsal Tournament and stand a chance to win some attractive prizes!!!.', image: 'https://mwh.muhammadiyah.org.sg/wp-content/uploads/2021/06/WhatsApp-Image-2021-06-25-at-4.12.37-PM-e1624614364771.jpeg' },
    { title: 'Visit to Helix House', details: 'Come see how students in NUS live in the newest on campus accommodation in school!', image: 'https://content.presspage.com/uploads/2580/540c30ce-6827-4cfc-8263-59dadbf5105a/1920_lkc2.jpg?10000' },
    { title: 'Dinner at King Edward VII Hall', details: 'Experience the life of staying in a NUS Hall and enjoying a scrumptious dinner.', image: 'https://nus.edu.sg/osa/images/default-source/kevii-hall/open-house/ke7.jpg?sfvrsn=6992cf38_2' },
  ];

  const announcements = [
    { title: 'Xbox bidding starting soon!', details: 'Starts at 9am Feb 1' },
    { title: 'Candy now on sale!', details: 'Grab before its gone.' },
    { title: 'Chinese New Year', details: 'Happy Chinese New Year, have a good break!' },
  ];


  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Events
        </Typography>
        <Carousel>
          {events.map((event, index) => (
            <Card key={index}>
              <CardMedia
                component="img"
                height="400" // Increase height
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
      </Box>
    </Container>
  );
};

export default HomePage;
