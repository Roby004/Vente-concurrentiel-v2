import * as React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography } from '@mui/material';
export default function ModForm({ open, onClose }) {
  const [design, setDesign] = useState('');
  const [prix, setPrix] = useState('');
  const [descr, setDescr] = useState('');
  const [qte, setQte] = useState('');
  const [imgProd, setImgProd] = useState(null); 
  const [cat, setCat] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  
    const categories = ['Categorie 1', 'Categorie 2', 'Categorie 3']; 
  
    const handleImgChange = (event) => {
      setImgProd(event.target.files[0]); 
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const currentDate = new Date().toISOString();
      
      try {
        const formData = new FormData(); 
      formData.append('design', design);
      formData.append('prix', prix);
      formData.append('categorie', cat);
      formData.append('descr', descr);
      formData.append('qte', qte);
      formData.append('imgProd', imgProd); // Append file to FormData
      formData.append('date', currentDate); 
        
        // PUT requete pour modifier le produit
        const response = await axios.put('http://localhost:8080/produitsPut', formData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Set Content-Type header to multipart/form-data for file upload
          }
        });
        
        // Handle successful response
        console.log('Produit modifie:', response.data);
        onClose();
      } catch (error) {
        // Handle error
        console.error('erreur lors du modification du produit:', error);
      }
    };
    return (
      <React.Fragment>
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Modifier le produit</DialogTitle>
          <DialogContent sx={{ display: 'flex', gap: '16px' }}>
        {/* Image Preview */}
        <div style={{ width: '50%', textAlign: 'center' }}>
          {imgProd && (
            <img
              src={URL.createObjectURL(imgProd)}
              alt="Product Preview"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          )}
        </div>
        {/* Form Fields */}
        <div style={{ width: '50%' }}>
            <DialogContentText>
              Vous pouvez modifier ici les informations de votre produit
            </DialogContentText>
            <input
          accept="image/*"
          id="imgProd"
          type="file"
          onChange={handleImgChange}
          style={{ display: 'none' }}
        />
            <label htmlFor="imgProd">
            Ajouter une image <br />
            <Button variant="outlined" component="span" sx={{marginTop:"5px", color:"orange", borderColor:"orange"}}>
              Upload
            </Button>
            <Typography>
            {imgProd && <span>{imgProd.name}</span>}
            </Typography>
          </label>
            <TextField
              autoFocus
              margin="dense"
              id="design"
              label="Nom du produit"
              type="text"
              fullWidth
              variant="standard"
              value={design}
              onChange={(e) => setDesign(event.target.value)}
            />
            {/*<FormControl fullWidth margin="dense">
              <InputLabel id="cat-label">Catégorie</InputLabel>
              <Select
                labelId="cat-label"
                id="cat"
                value={cat}
                label="Catégorie"
                onChange={handleCatChange}
              >
               {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
               </FormControl>*/}
                <TextField
              margin="dense"
              id="cat"
                value={cat}
                label="Catégorie"
                onChange={(e) => setCat(e.target.value)}
              fullWidth
              variant="standard"
             
            />
            <TextField
              margin="dense"
              id="prix"
              label="Prix"
              type="number"
              fullWidth
              variant="standard"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
            />
            
            <TextField
              margin="dense"
              id="qte"
              label="Quantité en stock"
              type="number"
              fullWidth
              variant="standard"
              value={qte}
              onChange={(e) => setQte(e.target.value)}
            />
            
         
          <TextField
              margin="dense"
              id="descr"
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="standard"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{color:"grey"}}>Annuler</Button>
          <Button type="submit" variant="contained" onClick={handleSubmit} sx={{backgroundColor:'#ffad64'}}>
            Valider
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
{/*const AddForm = ({ open, onClose }) => {
    return (
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Ajouter Nouveau produit</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="design"
              label="Nom du produit"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name=""
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }

export default AddForm;*/}
{/*const AddForm = () =>{
    return(
        <>
        <Container>
            <h3>Ajouter nouveau produit</h3>
            <FormGroup>
                <FormControl>
                    <InputLabel>Nom du produit</InputLabel>
                    <Input/>
                </FormControl>
            </FormGroup>
        </Container>
        </>
    )

}
export default AddForm;*/}