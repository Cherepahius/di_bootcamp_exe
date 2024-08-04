import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import ShopScreen from './ShopScreen';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
