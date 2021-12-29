import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LeftDrawer from './left_drawer';

class TopAppBar extends React.Component {
  render() {
    const { title } = this.props;
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              {/* Left Drawer Icon and Menu */}
              <LeftDrawer />
              {/* Page Title */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {title}
              </Typography>
              {/* Right-aligned Button */}
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
    );
  }
};

export default TopAppBar;
