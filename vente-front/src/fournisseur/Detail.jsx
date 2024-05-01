import * as React from 'react';
import {useState} from 'react';
import FrCardVert from '../components/frCardVert.jsx';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SuppForm from '../components/SuppForm.jsx';
import ModifForm from '../components/ModifForm.jsx';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../components/navbar';
import AddForm from '../components/AddForm.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
{/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */}

const labelStar = {
  0.5: 'tres mauvais',
  1: 'mauvais',
  1.5: 'mediocre',
  2: 'insatisfaisant',
  2.5: 'passable',
  3: 'Ok',
  3.5: 'bien',
  4: 'tres bien',
  4.5: 'Excellent',
  5: 'Exceptionnel',
};
const Detail = () =>{
  const [page, setPage] = React.useState(1);
  const [avis, setAvis] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
    const [openDel, setOpenDel] = useState(false);
    const [openMod, setOpenMod] = useState(false); // State for modal visibility

  const handleDelete = () => {
    setOpenDel(true); // Open the delete
  };
  const handleModif = () => {
    setOpenMod(true); // Open the modif
  };
  const handleModifClose = () => {
    setOpenMod(false); 
   // Close modif
  };
  const handleClose = () => {
    setOpenDel(false); 
   // Close delete
  };
  const getAvis = async () => {
   // const produitId = localStorage.getItem('idPro');
    if (produitId) {
      try {
        const response = await axios.get(`http://localhost:8080/avis/${idPro}`);
        setAvis(response.data); 
      } catch (error) {
        console.error('Erreur sur recup avis:', error);
      }
    }
  };
  React.useEffect(() => {

    getAvis(); 
  }, []); 
  const value = 4;
    return (
        <>
        < ResponsiveAppBar/>

        <Stack direction='row' sx={{marginTop:'70px'}}>
            <Box
            sx={{ width: '25%',margin: 'auto',marginTop:'70px', padding:'10px' }}
            > 
              <img src="/images/pngwing.com.png" alt="green iguana" width="350px"/>
              <Paper elevation={1} sx={{padding:'15px',marginTop:'50px'}}>
              <Typography variant="h4" component="div" sx={{fontSize:'24px'}}>Avis des clients</Typography>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{labelStar[value]}</Box>
              </Box>
              </Paper>
              </Box>
            <Stack spacing={2} sx={{marginLeft:'10px',marginRight:'60px',marginTop:"20px", padding:'60px',maxWidth:'700px',backgroundColor:'white'}}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{justifyContent: 'space-between'}}>
            <Typography gutterBottom variant="h4" component="div" >
                Robe de soiree
            </Typography>
            <Box sx={{justifyContent: 'flex-end', textAlign: 'right', marginTop:'-10px'}}>
                <Button variant="contained" onClick={handleDelete} sx={{background: 'linear-gradient(90deg, #FA9372 0%, rgba(210, 37, 37, 0.869) 100%)',margin:'10px', borderRadius: 1,border: 0,color: 'white',height: 40,}}>
                <DeleteIcon />
                </Button>
                <Button variant="contained" onClick={handleModif} sx={{background: 'linear-gradient(90deg, #613159 0%, #1d1a35 100%)',borderRadius: 1,border: 0,color: 'white',height: 40,}}> {/*backgroundColor:'#1D1A39',*/}
                <BorderColorIcon />
                </Button>
            </Box>
            </Stack>
            <Typography gutterBottom variant="subtitle2" component="div" sx={{fontSize:'17px'}}>
            <strong>Stock:</strong> 100
            </Typography>
            <Typography variant="h5" component="div" sx={{fontSize:'17px'}}>
            <strong>Categorie:</strong> Robe
      </Typography>
      <Typography variant="h5" component="div" sx={{fontSize:'17px'}}>
       <strong>Prix:</strong> 100000 ar
      </Typography>
            <Typography variant="h5" component="div" sx={{fontSize:'17px'}}>
            <strong>Description:</strong>
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <List sx={{ width: '100%', maxWidth: 700,height:'500px',overflowY:'auto', bgcolor: 'background.paper', padding:'10px' }}>
      <Typography gutterBottom variant="subtitle2" component="div" sx={{fontSize:'15px'}}>
                Commentaire recu sur ce produit
            </Typography>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
             
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jennifer4521"
          secondary={
            <React.Fragment>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jennifer4521"
          secondary={
            <React.Fragment>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jennifer4521"
          secondary={
            <React.Fragment>
              {" — Wish I could come, but I'm out of town this lorem ipinj fwrnjks abdke caldjf…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sandra Adams"
          secondary={
            <React.Fragment>
              
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Stack>
        </Stack>
        
        <SuppForm open={openDel} onClose={handleClose} />
        <ModifForm open={openMod} onClose={handleModifClose} />
        </>
    )
}
export default Detail;
 {/* <div className="englobe">
   
<div className="cotegauche">
<h3 className="tfiltre">Filtrer la liste </h3>
<div className='filt'>
<Typography variant="p" component="div">
  Plus recent
</Typography>
</div>
<div className='filt'>
<Typography variant="p" component="div">
  Ordre croissant (A-Z)
</Typography>
</div>
<div className='filt'>
<Typography variant="p" component="div">
  Ordre decroissant (Z-A)
</Typography>
</div>
<div className='filt'>
<p>Selon les prix</p>
<div className="delprix">
  <input type="number" className="minprix" width='80px'/><label htmlFor="">min</label>
  <input type="number" className="maxprix" width='80px'/><label htmlFor="">max</label>

</div>
</div>
<div className='filt'>
<p>Selon les dates d'ajout</p>
<div className="deldate">
  <input type="date" className="debdate" width='80px'/><label htmlFor="">debut</label><br />
  <input type="date" className="findate" width='80px'/><label htmlFor="">fin</label>

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
          <Typography variant="h5" component="div">
  Produits mise en marche
</Typography>
          <Button variant="contained" startIcon={<AddCircleIcon />} onClick={handleClickOpen} sx={{marginLeft:"100px",backgroundColor:'#fdaf19'}}>
        Ajouter
      </Button>
      </Stack>
      <Stack spacing={2} sx={{marginTop:'25px',width:'100%'}}>
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    <FrCardVert />
    
    </Stack>
    <Box sx={{padding:'10px', marginTop:'50px',width:'100%', justifyContent:'center', alignItems:'center'}}>
    <Stack spacing={2} direction='row'>
  <Typography>Page: {page}</Typography>
  <Pagination count={10} page={page} onChange={handleChange} color='secondary' />
</Stack>
    </Box>
    </Container>
    <AddForm open={open} onClose={handleClose} />
    </div>
   
</div>*/}