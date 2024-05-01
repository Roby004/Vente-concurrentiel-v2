import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import InputBase from '@mui/material/InputBase';
//Icones
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const pages = ['Produits', 'Dashboard'];
const settings = ['Profil', 'Aide','Déconnexion'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: '10%',
  borderRadius: '50px',
  alignItems:'center',
  border: '2px solid rgba(255,184,27,1)',
  '&:hover': {
    backgroundColor: 'rgba(236, 244, 244, 0.481)',
  },
  marginLeft: 0,
  width: '300px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'visible',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50px',
  background: 'linear-gradient(90deg, rgba(255,109,109,0.8688725490196079) 20%, rgba(255,184,27,1) 100%)',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'grey',
  width: '500px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [fournisseur, setFournisseur] = React.useState(null); // State to hold fournisseur details
  const [companyName, setCompanyName] = React.useState('');


  const fetchCompanyName = async () => {
    const fournisseurId = localStorage.getItem('fournisseurId');
    if (fournisseurId) {
      try {
        const response = await axios.get(`http://localhost:8092/auth/detailFr/${fournisseurId}`);
        setCompanyName(response.data.company); 
      } catch (error) {
        console.error('Error fetching company name:', error);
      }
    }
  };
  React.useEffect(() => {

    fetchCompanyName(); 
  }, []); 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
   try{
    await axios.post('http://localhost:8092/auth/logout');
    console.log("logout reussie");
    window.location.href='/';
   }
   catch(error){
      console.error('logout echec',error);
   }
    
  };

  return (
    <AppBar position="fixed" sx={{backgroundColor:'white'}}>
      <Toolbar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'orange',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="orange"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' }, width:{md:'30%',marginRight:'10px'} }}>
            {/* Link to fournisseur page onClick={handleCloseNavMenu}*/}
            <Button
              
              sx={{ my: 2, color: '#f3c0cc', display: 'block'}}
            >
              <Link to="/fournisseur" sx={{my: 2, color: 'orange', display: 'block'}}>Produits</Link> 
           </Button>
            
            {/* Link to dashboard page */}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#f3c0cc', display: 'block', textDecorationStyle:'none'}}
            >
              <Link to="/dashboard-fournisseur" sx={{textDecoration:'none', color:'orange'}}>Dashboard</Link> 
            </Button>
          </Box>
          <Search sx={{display:"flex", flexDirection:"row-reverse"}}>
           
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             <SearchIconWrapper sx={{backgroundColor:'green'}}>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>

          
          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={companyName}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={companyName} src="/static/images/avatar/2.jpg" />
                </IconButton>
                 {/* Fournisseur company name */} 
              
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="user-menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                                {/* Profil */}
                  <MenuItem component={Link} to="/profil" onClick={handleCloseUserMenu}>
                    <PersonIcon sx={{ marginRight: 1 }} />
                    <Typography textAlign="center">Profil</Typography>
                  </MenuItem>

                  {/* Help */}
                  <MenuItem component={Link} to="/aide" onClick={handleCloseUserMenu}>
                    <HelpIcon sx={{ marginRight: 1 }} />
                    <Typography textAlign="center">Aide</Typography>
                  </MenuItem>

                  {/* Logout */}
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ marginRight: 1 }} />
                    <Typography textAlign="center">Déconnexion</Typography>
                  </MenuItem>
              </Menu>
            </Box>
        </Toolbar>
      </Container>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
