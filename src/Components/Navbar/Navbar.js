import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Logo from "../UI/Logo/Logo";

const NavigatinBar = props => {
	return (
		<Navbar
			variant="dark"
			expand="lg"
			fixed="top"
			style={{ backgroundColor: props.bgcolor }}
		>
			<Container>
				<Navbar.Brand as={NavLink} to="/">
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={NavLink} to="/" exact className="text-uppercase">
							HOME
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about" className="text-uppercase">
							ABOUT
						</Nav.Link>
						<Nav.Link as={NavLink} to="/about" className="text-uppercase">
							VISIon & MISION
						</Nav.Link>
						<NavDropdown
							title="SERVICES"
							id="basic-nav-dropdown"
							className="text-uppercase"
						>
							<NavDropdown.Item href="#action/3.1">IOT</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Web Developemnt
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">ERP</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">CRM</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								IT Consultancy
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								Bussins Digital Transformation
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link as={NavLink} to="/contact" className="text-uppercase">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigatinBar;
