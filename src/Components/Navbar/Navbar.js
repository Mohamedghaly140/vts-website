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
						<Nav.Link
							as={NavLink}
							to="/"
							exact
							className="text-uppercase"
						>
							home
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/about"
							className="text-uppercase"
						>
							about
						</Nav.Link>
						<NavDropdown
							title="IOT"
							id="basic-nav-dropdown"
							className="text-uppercase"
						>
							<NavDropdown.Item as={NavLink} to="/iot">
								Action 1
							</NavDropdown.Item>

							<NavDropdown.Item as={NavLink} to="/erp">
								Action 2
							</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/crm">
								Action 3
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item as={NavLink} to="/it-consultancy">
								Action 4
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="SERVICES"
							id="basic-nav-dropdown"
							className="text-uppercase"
						>
							<NavDropdown.Item as={NavLink} to="/erp">
								ERP
							</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/crm">
								CRM
							</NavDropdown.Item>
							{/* <NavDropdown.Item
								as={NavLink}
								to="/web-development"
							>
								Web Developemnt
							</NavDropdown.Item> */}
							<NavDropdown.Divider />
							<NavDropdown.Item as={NavLink} to="/it-consultancy">
								IT Consultancy
							</NavDropdown.Item>
							<NavDropdown.Item
								as={NavLink}
								to="/business-digital-transformation"
							>
								Business Digital <br /> Transformation
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							as={NavLink}
							to="/contact"
							className="text-uppercase"
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigatinBar;
