// DashboardPage.jsx
import React from 'react';
import ResponsiveAppBar from '../components/navbar';
import { Container,Box,Button} from '@mui/material';
import './dash.css';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import CardStatistic from '../components/CardStatistic';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import { MoneySharp } from '@mui/icons-material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useTheme } from '@mui/material/styles';
// tableau
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Material Dashboard 2 React components
//import MDBox from "../components/MDBox/index.js";

const data = [
  { label: 'Produit A', value: 400 },
  { label: 'Produit B', value: 300 },
  { label: 'Produit C', value: 300 },
  { label: 'Produit D', value: 200 },
];

//Coleur des charts
const palette = ['#ffc107', '#ff5722', '#de5273', '#febb3d'];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'transparent',
    color:'#d05420',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(produit, commande, client) {
  return { produit, commande, client };
}

const rows = [
  createData('Frozen yoghurt', 159, 'Rabe'),
  createData('Ice cream sandwich', 237, 'Rasoa'),
  createData('Eclair', 262, 'Raly'),
  createData('Cupcake', 305, 'Koto'),
  createData('Gingerbread', 356,'Toto'),
];
// Obtenir les 7 derniers jours
const getWeekInterval = () => {
  const currentDate = new Date();
  const debDate = new Date(currentDate);
  debDate.setDate(currentDate.getDate() - 6); // Commence 7 jour plus tot
  const finDate = new Date(currentDate);
   // termine aujourd'hui
  return { debDate, finDate };
};

//Obtenir ce dernier mois
const getMonthInterval = () => {
  const currentDate = new Date();
  const debDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0); 
  const finDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1); 
  return { debDate, finDate };
};

//Obtenir cette annee
const getYearInterval = () => {
  const currentDate = new Date();
  const debDate = new Date(currentDate);
  debDate.setFullYear(currentDate.getFullYear() - 1);

  
  const finDate = new Date(currentDate); 
  return { debDate, finDate };
};

const barButtonClick = (periode) => {
  let intervalle;
  switch (periode) {
    case 'semaine':
      intervalle = getWeekInterval();
      break;
    case 'mois':
      intervalle = getMonthInterval();
      break;
    case 'an':
      intervalle = getYearInterval();
      break;
    default:
      intervalle = getMonthInterval();
      break;
  }
  console.log(`debut ${periode}:`, intervalle.debDate);
  console.log(`fin ${periode}:`, intervalle.finDate);
};
const pieButtonClick = (periode) => {
  let intervalle;
  switch (periode) {
    case 'semaine':
      intervalle = getWeekInterval();
      break;
    case 'mois':
      intervalle = getMonthInterval();
      break;
    case 'an':
      intervalle = getYearInterval();
      break;
    default:
      intervalle = getMonthInterval();
      break;
  }
  console.log(`debut ${periode}:`, intervalle.debDate);
  console.log(`fin ${periode}:`, intervalle.finDate);
};
const Dashboard = () => {
  
  const xAxisStyle = {
    labelStyle: {
      color: 'white', // Set x-axis label color to white
    },
    stroke: 'white', // Set x-axis line color to white
  };
  return (
    <>
    < ResponsiveAppBar/>
    
      <div className="englobeD">
        <Stack sx={{width:'28%'}}>
          <h4>Commande en cours</h4>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Produit</StyledTableCell>
                  <StyledTableCell align="right">Commande</StyledTableCell>
                  <StyledTableCell align="right">Nom du Client</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => ( // Add key prop to each TableRow
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.produit}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.commande}</StyledTableCell>
                    <StyledTableCell align="right">{row.client}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
       
        <div className="dashdroit">
        <h3>Dashboard</h3>
        <Container sx={{marginTop:'20px'}}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',marginLeft:'-70px' }}> 
              <CardStatistic icon={AnalyticsIcon} // Use MUI BookingSharp icon
                title="Vos Clients"
                value={4000}
                textSub="Ces derniers 30 jours"
                boxColor="#d2486af0" />
                <CardStatistic icon={AnalyticsIcon} // Use MUI BookingSharp icon
                title="Commande"
                value={4000}
                textSub="Ces derniers 30 jours"
                boxColor="#F44336" />
              <CardStatistic icon={MoneySharp} // Use MUI MoneySharp icon
                title="Revenue"
                value="10,000"
                textSub="Ces derniers 30 jours"
                 boxColor="#fbc105" />
              {/* Add more CardStatistic components for other statistics */}
            </Box>
          </Container>
        <Container sx={{marginTop:'95px'}}>
        <Grid container spacing={3}>
          <Paper elevation={2} sx={{minWidth:'300px',width:'400px',alignItems:'center',position:'absolute',padding:'10px'}}>
          <div className='chartL'>
          <LineChart 
      xAxis={[{ 
        data: [1, 2, 3, 5, 8, 10] ,
        ...xAxisStyle,
      }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
     
      ]}
      width={380}
      height={230}
    /></div>
      <p>Suivi des ventes</p>
      <p>Vous pouvez suivre ici les operations des ventes soit annuellement,mensuellement ou hebdomadaire</p>
    <Stack direction="row">
      <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{           
        borderRadius: 2,
        height: 30,
        margin:'5px',
        padding: '5px',
        
            }}
            onClick={() => barButtonClick('semaine')}  
          >
           Semaine
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{
             
        borderRadius: 2,
        height: 30,
        margin:'5px',
        padding: '5px',       
            }}
            onClick={() => barButtonClick('mois')}
          >
           Mois
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{
            
        borderRadius: 2,
        height: 30,
        padding: '5px',
        margin:'5px',
        
            }}
            onClick={() => barButtonClick('an')} 
          >
           Annee
          </Button>
          </Stack>
          </Paper>
          <Paper elevation={2} sx={{minWidth:'300px',width:'400px',padding:'10px',marginLeft:'480px'}}>
          <div className='chartP'>
          <PieChart
          colors ={palette}
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
            
          },
        ]}
        
        width={380}
        height={230}
        legend={{ hidden: false }}
      /></div>
      <p>Suivi des achats</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi iste laborum debitis, .</p>
      <Stack direction="row">
      <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{           
        borderRadius: 2,
        height: 30,
        margin:'5px',
        padding: '5px',   
        
            }}
            onClick={() => pieButtonClick('semaine')}   
          >
           Semaine
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{
             
        borderRadius: 2,
        height: 30,
        margin:'5px',
        padding: '5px',
            }}
            onClick={() => pieButtonClick('mois')}   
          >
          Mois
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{
            
        borderRadius: 2,
        height: 30,
        padding: '5px',
        margin:'5px',
            }}
            onClick={() => pieButtonClick('an')}   
          >
          Annee
          </Button>
          </Stack>
          
          </Paper>
          
          </Grid>

        </Container>
        </div>
      
      
      </div>
    

    </>
  );
}

export default Dashboard;
