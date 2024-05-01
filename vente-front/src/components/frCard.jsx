import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SuppForm from './SuppForm';
import { Link } from 'react-router-dom'; 

const FrCard = ({ image, titrePro, qtePro }) => {
  const [open, setOpen] = useState(false); // State for modal visibility

  const handleClickOpen = () => {
    setOpen(true); // Open the modal on button click
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <Grid item xs={3} minWidth={200}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Link to="/detail" sx={{ textDecoration: 'none' }}>
            <CardMedia
              component="img"
              image={image} // Set the image dynamically
              alt={titrePro}
              sx={{ width: '30%', height: '200px', margin: 'auto', marginTop: '5px' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className='titrePro' sx={{ fontSize: '15px', textDecoration: 'none' }}>
                {titrePro} {/* Set the title dynamically */}
              </Typography>
              <Typography gutterBottom variant="p" component="div" className='qtePro' sx={{ fontSize: '12px' }}>
                Stock: {qtePro} {/* Set the quantity dynamically */}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'flex-end', textAlign: 'right', marginTop: '-10px' }}>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            startIcon={<DeleteIcon />}
            size="small"
            sx={{
              background: 'linear-gradient(90deg, #FA9372 0%, rgba(210, 37, 37, 0.869) 100%)',
              borderRadius: 2,
              border: 0,
              color: 'white',
              height: 30,
            }}
          >
            Retirer
          </Button>
        </CardActions>
      </Card>
      <SuppForm open={open} onClose={handleClose} />
    </Grid>
  );
};

export default FrCard;