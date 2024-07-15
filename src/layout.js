import React from 'react';
import { AppBar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Box, Toolbar } from '@mui/material';
//import { makeStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const localtheme = createTheme({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

const Layout = ({ children }) => {

  return (
    <Box sx={{ display: 'inline' }}>
      <CssBaseline />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <AppBar position="fixed" sx={{ zIndex: localtheme.appBar.zIndex}}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            My Application
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: localtheme.drawerPaper,
        }}
      >
        <Box>
            <List>
                {['Home', 'About', 'Contact'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box>
      </Drawer>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />

        <main>
            {children}
        </main>
    </Box>
  );
};

export default Layout;
