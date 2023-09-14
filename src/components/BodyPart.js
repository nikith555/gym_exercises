import React from 'react';
import {Stack, Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';


const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack 
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card' 
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : 
     { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}  onClick={() => {
      setBodyPart(item);
      //window.scrollTo({top:1180, left:100, behavior:'smooth '})
     }}>
        <img src={Icon} alt="dumbbell" style={{width:'40px', heigth:'40px'}} className='body-part-icon'/>
        <Typography fontSize='24px' fontWeight='bold' color="#3A1212" textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart