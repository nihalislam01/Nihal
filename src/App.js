import React from 'react';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import Intro from './components/Intro';
import About from './components/About';
import Credit from './components/Credit';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Project />
      <Credit />
    </Box>
  );
}

export default App;
