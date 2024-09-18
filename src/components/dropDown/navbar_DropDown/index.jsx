import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListIcon from '@mui/icons-material/List';
import "./nav_dropDown.css";
import { Link } from 'react-router-dom';


export default function NavbarDropDownComponent() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className='texts_wrapper'>
            <Link to={"/motor"} style={{textDecoration:"none", color:"black"}}><p className='text_style'>Motor</p></Link>
            <Link to={"/caravan"} style={{textDecoration:"none", color:"black"}}><p className='text_style'>Caravan</p></Link>
            <Link to={"/tuning"} style={{textDecoration:"none", color:"black"}}><p className='text_style'>Tuning</p></Link>
            <Link to={"/usedcar"} style={{textDecoration:"none", color:"black"}}><p className='text_style'>Used Car</p></Link>
            <Link to={"/camping place"} style={{textDecoration:"none", color:"black"}}><p className='text_style'>Camping Place</p></Link>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
             <ListIcon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
