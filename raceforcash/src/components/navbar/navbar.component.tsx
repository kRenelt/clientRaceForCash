import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const NavbarComponent: React.FC<RouteComponentProps> = (props) => {

    const userName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : 'Guest';
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const logOutButton = () => {
        localStorage.clear();
        props.history.push('/login');
      }

    return(
        <div className='navbar-main'>
            <AppBar position="static">
            <Toolbar>
            <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(e.currentTarget)} 
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={() =>setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => props.history.push('/stable')}>Stable</MenuItem>
                    <MenuItem onClick={() => props.history.push('/home')}>Races</MenuItem>
                  </Menu>
            Navbar
            <div className="logOut"> 
               <Button color="inherit"  onClick={() => logOutButton()} >Log Out</Button>
               <Button color="inherit"  onClick={() => props.history.push('registration') }>Registration</Button>
             </div>
             </Toolbar>
          </AppBar>
        </div>
    );
}

export default withRouter(NavbarComponent);