// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import MainScreen from './components/MainScreen';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CustomerPage from './pages/CustomerPage';
import ProfilePage from './pages/ProfilePage';
import OpenShiftScreen from './components/OpenShiftScreen';
import CloseShiftScreen from './components/CloseShiftScreen';
import Location from "./components/getLocation"
import { OpenShiftProvider } from './components/OpenShiftContext';
import Barcode from './components/barcode'
import { ThemeSettingsProvider } from './components/ThemeSettingContext';

const AppRoutes = () => {
  return (
    <ThemeSettingsProvider>
    <OpenShiftProvider>

      <Router basename="/getpos-react">
      {/* <Router > */}
          
        <Routes >
        <Route path="/" element={<LoginPage />} />
            <Route path="/Barcode" element={<Barcode />} />
            <Route path="/location" element={<Location />} />
            <Route path="/category" element={<MainScreen />} />
            <Route path="/openshift" element={<OpenShiftScreen />} />
            <Route path="/closeshift" element={<CloseShiftScreen />} />
            <Route path="/main" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </OpenShiftProvider>
    </ThemeSettingsProvider>
  );
};

export default AppRoutes;
