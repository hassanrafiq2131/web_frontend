import {AppBar, Toolbar, styled} from '@mui/material';

import {NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
background: #a599ea
`;

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`

const NavBar = () =>{
    return(
        <Header data-testid ='navbarid' position='static'>
            <Toolbar>
                {/* <Tabs to='/'>Payroll Management</Tabs> */}
                <Tabs to= 'add'> Create Payrol</Tabs>
                <Tabs to='all'> All Payrols</Tabs>

            </Toolbar>
        </Header>
    )
}

export default NavBar;