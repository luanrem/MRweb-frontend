import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';

// icons:
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import DeleteIcon from '@material-ui/icons/Delete';

import { Container } from './styles';

function NavbarMenus() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <Container>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" component="span">
        <Notifications />
      </IconButton>
      <IconButton>
        <Person />
      </IconButton>
      <IconButton>
        <Dashboard />
      </IconButton>
      <IconButton>
        <Search />
      </IconButton>
      <button type="button" onClick={handleClick}>Teste</button>

      <Popper open={open} anchorEl={anchorEl}>
        <div className="teste">The content of the Popper.</div>
      </Popper>


    </Container>
  );
}

export default NavbarMenus;
