import React, { useState } from 'react';
import axios from 'axios';
import FrCard from '../components/frCard.jsx';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle'; // 
import '../App.css';
import ResponsiveAppBar from '../components/navbar';
import AddForm from '../components/AddForm.jsx';
const FrContent = () => {
  {/*const theme = createTheme({
    palette: {
      primary: '#ae4459',
      secondary: '#f39f5a',
    },
  });*/}
  const [page, setPage] = React.useState(1);
  const [minPrix, setMinPrix] = useState('');
  const [maxPrix, setMaxPrix] = useState('');
  const [debDate, setDebDate] = useState('');
  const [finDate, setFinDate] = useState('');
  const fournisseurId = localStorage.getItem('fournisseurId');
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [open, setOpen] = useState(false); // State for modal visibility

  const handleClickOpen = () => {
    setOpen(true); // Open the modal on button click
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  const filtre_idProDesc = async () =>{
    
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produitsIdDesc/${fournisseurId}`);
         
      } catch (error) {
        console.error('Erreur pour le filtre du produit plus recent:', error);
      }
    }

  }
  const filtre_designProAsc = async () =>{
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produitsDesignAsc/${fournisseurId}`);
        
      } catch (error) {
        console.error('Erreur pour filtre nom du produit asc:', error);
      }
    }
    
  }
  const filtre_designProDesc = async () =>{
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produitsDesignDesc/${fournisseurId}`);
        
      } catch (error) {
        console.error('Erreur pour filtre nom du produit desc:', error);
      }
    }
    
  }
  const filtre_prixPro = async () =>{
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produitsFiltre2Prix/${minPrix}/${maxPrix}/${fournisseurId}`);
        
      } catch (error) {
        console.error('Erreur pour filtre produit par prix:', error);
      }
    }
    
  }
  const filtre_datePro = async () =>{
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produitsFiltre2Dates/${debDate}/${finDate}/${fournisseurId}`);
        
      } catch (error) {
        console.error('Erreur pour filtre produit par prix:', error);
      }
    }
    
  }

  // AFFICHER PRODUIT DU FOURNISSEUR
  const get_frPro = async () =>{
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8080/produits/${fournisseurId}`);
        
      } catch (error) {
        console.error('Erreur pour filtre produit par prix:', error);
      }
    }
    
  }
  return (
    
    <div className="englobe">
   
    <div className="cotegauche">
    <h3 className="tfiltre">Filtrer la liste </h3>
    <div className='filt' onClick={filtre_idProDesc}>
    <Typography variant="p" component="div">
      Plus recent
    </Typography>
  </div>
  <div className='filt' onClick={filtre_designProAsc}>
    <Typography variant="p" component="div">
      Ordre croissant (A-Z)
    </Typography>
  </div>
  <div className='filt' onClick={filtre_designProDesc}>
    <Typography variant="p" component="div">
      Ordre decroissant (Z-A)
    </Typography>
  </div>
  <div className='filtVal' onClick={filtre_prixPro}>
    <p>Selon les prix</p>
    <div className="delprix">
    <TextField
            label="min"
            type="number"
           
            margin="normal"
            variant="outlined"
            value={minPrix}
            onChange={(e) => setMinPrix(e.target.value)}
            
            sx={{margin:"10px"}}
          />
          <TextField
            label="max"
            type="number"
            
            margin="normal"
            variant="outlined"
            value={maxPrix}
            onChange={(e) => setMaxPrix(e.target.value)}
            sx={{margin:"10px",height:"20px"}}
          />
      
    </div>
  </div>
  <div className='filtVal' onClick={filtre_datePro}>
    <p>Selon les dates d'ajout</p>
    <div className="deldate">
    {/*<TextField
              autoFocus
              margin="dense"
              id="debdat"
              label="debut"
              type="date"
              fullWidth
              variant="standard"
              
  />*/}
      <input type="date" className="debdate" width="120px" onChange={(e) => setDebDate(e.target.value)}/><label htmlFor="">debut</label><br />
      <input type="date" className="findate" width='200px'onChange={(e) => setFinDate(e.target.value)}/><label htmlFor="">fin</label>

    </div>
  </div>
  </div>
    <div className="cotedroite">
    
    <Container>
    
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
      >
              <h4 className='frProd_titre'>Produits mise en marche: 50</h4>
              <Button variant="contained" startIcon={<AddCircleIcon />} onClick={handleClickOpen} sx={{marginLeft:"100px",backgroundColor:'rgba(255,184,27,0.85)'}}>
            Ajouter
          </Button>
          </Stack>
    < Grid container spacing={3} sx={{marginTop:'25px'}}>
    <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
        <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
         <FrCard
        image="/images/pngwingcom1.png"
        titrePro="Robe de soiree"
        qtePro={100}
      />
        </Grid>
       
        <Box sx={{padding:'10px', marginTop:'50px',marginLeft:'20%',width:'50%', justifyContent:'center', alignItems:'center'}}>
        <Stack spacing={2} direction='row'>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} sx={{color:'darkslategrey'}} />
    </Stack>
        </Box>
        
        </Container>
        <AddForm open={open} onClose={handleClose} />
        </div>
       
 </div>
  );
}

export default FrContent;