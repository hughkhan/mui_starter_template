import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const drawerWidth = 140;

function Layout({ children }) {
  return (
    <div style={{ display: 'inline' }}>
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> {/* This is to make the drawer appear below the app bar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Toolbar /> {/* This is to make the content appear below the app bar */}
        {children}
      </Box>
    </div>
  );
}

export default Layout;
