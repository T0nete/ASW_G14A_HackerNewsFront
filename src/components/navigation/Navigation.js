import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';

const Navigation = () => (
  <div className="container">
    <Navbar fluid fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <i className="fa fa-hacker-news fa-lg" aria-hidden="true"></i> Hacker News Reader
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/contribucios">
            <NavItem eventKey={1}>Top</NavItem>
          </LinkContainer>
          <LinkContainer to="/news">
            <NavItem eventKey={2}>New</NavItem>
          </LinkContainer>
          <LinkContainer to="/asks">
            <NavItem eventKey={3}>Ask</NavItem>
          </LinkContainer>
          <LinkContainer to="/users/1">
            <NavItem eventKey={4}>Profile</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
