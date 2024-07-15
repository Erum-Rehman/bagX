import React, {useEffect, useState} from 'react';
import './style.scss';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import Icons from '../../icons';
import { HiOutlineUsers } from "react-icons/hi";
import { useLocation, Link } from "react-router-dom";
import Home from '../../pages/Home/Home';
import AffiliateProgram from '../../pages/AffiliateProgram';
import Contact from '../../pages/Contact';
// import Products from '../../pages/Products';

const drawerWidth = 180;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft({ handleMenuClose, open }) {
  const theme = useTheme();
  const location = useLocation();
  // const navigate = useNavigate();

  const sideMenu = [
    { name: 'SUMMER SALE', path: '/summerSale'},
    { name: 'ALL BAGS', path: '/bags' },
    { name: 'CUSTOMER REVIEWS', path: '/customerReviews' },
    { name: 'AFFILIATE PROGRAMME', path: '/affiliateProgramme' },
    { name: 'WHOLE SALE', path: '/wholeSale' },
    { name: 'CONTACT US', path: '/contact' },

  ]
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    }

  }, [window.screen.width])

  const updateDimensions = () => {
    setWidth(window.screen.width)
  };
  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: 365,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 365,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{ marginTop: '30px' }}>
          <IconButton onClick={handleMenuClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
          <List>
          {sideMenu.map((item, index) => (
            <ListItem button key={index} className="nav-item">
             <Link to={item.path || '#'}> <ListItemText  primary={item.name} /></Link>
            </ListItem>
          ))}

        </List>
          {/* {width <= 746 ? */}
        <Divider />
      </Drawer>
    </Box>
  );
}