import React from 'react'
import { Home } from './Home'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <Home>
    <div className='home-container'>
  <div className='cont stu-container'>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.gettyimages.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=gi&k=20&c=ZQP3cLAbP-M7JDStPkwPCSGUS0i1d7A6AvI-1VB7Ri4="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Student
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It contains all the information about the student
        
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate('/student')} size="small" color="primary">
        Click Here
        </Button>
      </CardActions>
    </Card>
  </div>
  <div className='cont tea-container'>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.istockphoto.com/id/1298877290/vector/diverse-multiracial-teacher-characters.jpg?s=612x612&w=0&k=20&c=WzlJj5DPwSW5AyE6iZQ-du1UONdpZGRrqJggWm3uC4o="
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Teacher's
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It contains all the information about the Teacher's
               </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate('/user')} size="small" color="primary">
        Click Here
        </Button>
      </CardActions>
    </Card>
  </div>
    </div>
    </Home>
  )
}
