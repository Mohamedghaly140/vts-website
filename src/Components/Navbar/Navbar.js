import React from 'react';
import {
	Container,
	Navbar,
	Nav,
	NavDropdown,
	Dropdown,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';

const NavigatinBar = props => {
	// const [showDrop, setShowDrop] = useState(false);

	return (
		<Navbar
			variant='dark'
			expand='lg'
			fixed='top'
			style={{ backgroundColor: props.bgcolor }}
			className='navbar__home'
		>
			<Container>
				<Navbar.Brand as={NavLink} to='/'>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link
							as={NavLink}
							to='/'
							exact
							className='text-uppercase'
						>
							home
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/about'
							className='text-uppercase'
						>
							about
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to='/iot'
							className='text-uppercase'
						>
							iot
						</Nav.Link>
						<NavDropdown
							title='SERVICES'
							id='basic-nav-dropdown'
							className='text-uppercase'
						>
							<Dropdown>
								<Dropdown.Toggle variant='' id='dropdown-basic'>
									Business Solution
								</Dropdown.Toggle>

								<Dropdown.Menu className='BusinessMenu'>
									<Dropdown.Item as={NavLink} to='/erp'>
										Enterprise resource planning (ERP)
									</Dropdown.Item>
									<Dropdown.Item as={NavLink} to='/crm'>
										Customer relationship management (CRM)
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							{/* <DropdownButton
								id='dropdown-item-button'
								title='Business Solution'
								variant=''
								onMouseOver={() => setShowDrop(true)}
								rootCloseEvent='mousedown'
							>
								<Dropdown.Menu show={showDrop} alignRight>
									<Dropdown.Item as={NavLink} to='/erp'>
										Enterprise resource planning (ERP)
									</Dropdown.Item>
									<Dropdown.Item as={NavLink} to='/crm'>
										Customer relationship management (CRM)
									</Dropdown.Item>
								</Dropdown.Menu>
							</DropdownButton> */}
							{/* <NavDropdown.Item as={NavLink} to='/erp'>
								ERP
							</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to='/crm'>
								CRM
							</NavDropdown.Item> */}
							{/* <NavDropdown.Item
								as={NavLink}
								to="/web-development"
							>
								Web Developemnt
							</NavDropdown.Item> */}
							<NavDropdown.Divider />
							<NavDropdown.Item as={NavLink} to='/it-consultancy'>
								IT Consultancy
							</NavDropdown.Item>
							<NavDropdown.Item
								as={NavLink}
								to='/business-digital-transformation'
							>
								Business Digital <br /> Transformation
							</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link
							as={NavLink}
							to='/contact'
							className='text-uppercase'
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
