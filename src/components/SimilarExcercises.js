import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScroller';
//import Loader from './Loader';


const SimilarExcercises = ({ targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: {lg : '100px', xs:'0'}}}>
          <Typography variant='h3' mb={5}>Exercises that target the same muscle group</Typography>
          <Stack direction='row' sx={{p:'2', position:'relative'}}>
                {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises} />  }
          </Stack> 
          <Typography variant='h3' mb={5}>Exercises that target the same euipment</Typography>
          <Stack direction='row' sx={{p:'2', position:'relative'}}>
                {equipmentExercises.length && <HorizontalScrollbar data={equipmentExercises} />  }
          </Stack>
    </Box>
  )
}

export default SimilarExcercises