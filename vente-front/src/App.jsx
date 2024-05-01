import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FournisseurPage from './fournisseur/Fournisseur.jsx';
import DashboardPage from './fournisseur/Dashboard.jsx'; 
import DetailPage from './fournisseur/Detail.jsx';
import ProfilFrPage from './fournisseur/ProfilFr.jsx';
import AidePage from './fournisseur/Aide.jsx';
import LoginFrPage from './fournisseur/LoginPage.jsx';
import SignUpFrPage from './fournisseur/SignUp.jsx';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fournisseur" element={<FournisseurPage />} />
        <Route path="/dashboard-fournisseur" element={<DashboardPage />} />
        <Route path="/login-fournisseur" element={<LoginFrPage />} />
        <Route path="/signup-fournisseur" element={<SignUpFrPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/profil" element={<ProfilFrPage />} />
        <Route path="/aide" element={<AidePage />} />
      </Routes>
  );
}

function HomePage() {
  return (
    <div className="acc">
      <LoginFrPage />
    </div>
  );
}

export default App;
